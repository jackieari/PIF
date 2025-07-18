const express = require('express');
const router = express.Router();
const prisma = require('./prisma');

// POST /api/user/check-wallet
router.post('/check-wallet', async (req, res) => {
  const { walletAddress } = req.body;
  if (!walletAddress) return res.status(400).json({ error: 'walletAddress is required' });

  try {
    let user = await prisma.user.findUnique({ where: { walletAddress } });
    if (!user) {
      user = await prisma.user.create({
        data: { walletAddress },
      });
      return res.status(201).json({ message: 'User created', user, needsMoreInfo: true });
    } else {
      const needsMoreInfo = !user.username || !user.firstName || !user.lastName || !user.email;
      return res.status(200).json({ message: 'User found', user, needsMoreInfo });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/user/update-info
router.post('/update-info', async (req, res) => {
  const { walletAddress, username, firstName, lastName, email } = req.body;
  if (!walletAddress || !username || !firstName || !lastName || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const user = await prisma.user.update({
      where: { walletAddress },
      data: { username, firstName, lastName, email },
    });
    res.json({ message: 'User info updated', user });
  } catch (err) {
    console.error(err);
    if (err.code === 'P2002') {
      return res.status(409).json({ error: 'Username or email already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

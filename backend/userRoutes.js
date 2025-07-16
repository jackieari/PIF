const express = require('express');
const router = express.Router();
const User = require('./User');  // path to the User model

// POST /api/user/check-wallet
// Checks if wallet exists, otherwise creates a new user with just wallet and timestamp
router.post('/check-wallet', async (req, res) => {
  const { walletAddress } = req.body;

  if (!walletAddress) {
    return res.status(400).json({ error: 'walletAddress is required' });
  }

  try {
    let user = await User.findOne({ walletAddress });

    if (!user) {
      // Create new user with just walletAddress and timestamp
      user = new User({ walletAddress });
      await user.save();
      return res.status(201).json({ message: 'User created', user, needsMoreInfo: true });
    } else {
      // User exists, check if more info is needed
      const needsMoreInfo = !user.username || !user.firstName || !user.lastName || !user.email;
      return res.status(200).json({ message: 'User found', user, needsMoreInfo });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/user/update-info
// Updates user info (called after user fills in username, name, email)
router.post('/update-info', async (req, res) => {
  const { walletAddress, username, firstName, lastName, email } = req.body;

  if (!walletAddress || !username || !firstName || !lastName || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Update the user info
    const user = await User.findOneAndUpdate(
      { walletAddress },
      { username, firstName, lastName, email },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User info updated', user });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) { // duplicate key error
      return res.status(409).json({ error: 'Username or email already exists' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

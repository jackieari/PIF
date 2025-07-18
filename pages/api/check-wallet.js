import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { walletAddress } = req.body;

    if (!walletAddress) {
      return res.status(400).json({ error: 'Wallet address is required' });
    }

    // Check if user exists with this wallet address
    const existingUser = await prisma.user.findUnique({
      where: { walletAddress: walletAddress.toLowerCase() },
    });

    if (existingUser) {
      return res.status(200).json({ exists: true, user: existingUser });
    } else {
      return res.status(200).json({ exists: false, walletAddress: walletAddress.toLowerCase() });
    }
  } catch (error) {
    console.error('Error checking wallet:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

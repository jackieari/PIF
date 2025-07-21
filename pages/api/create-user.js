import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { walletAddress, username, firstName, lastName, email } = req.body;

    // Validate required fields
    if (!walletAddress || !username || !firstName || !lastName || !email) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if username or email already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: username },
          { email: email }
        ]
      }
    });

    if (existingUser) {
      return res.status(409).json({ 
        error: existingUser.username === username ? 'Username already taken' : 'Email already in use' 
      });
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        walletAddress: walletAddress.toLowerCase(),
        username,
        firstName,
        lastName,
        email,
      },
    });

    return res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
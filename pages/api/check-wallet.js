// pages/api/check-wallet.js
import { prisma } from '../../lib/prisma'     // or wherever your Prisma client is

export default async function handler(req, res) {
  // Accept only POST ─ return 405 for everything else
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { walletAddress } = req.body
    if (!walletAddress) {
      return res.status(400).json({ error: 'walletAddress is required' })
    }

    // Look up the user (adjust the field name to match your schema)
    const user = await prisma.user.findUnique({
      where: { walletAddress },
      select: { id: true },
    })

    return res.status(200).json({ exists: !!user })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Server error' })
  }
}

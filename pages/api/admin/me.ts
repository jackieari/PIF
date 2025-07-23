import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { verifyAdminToken } from '@/lib/auth'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const token = req.headers.authorization?.split(' ')[1]
    const decoded = verifyAdminToken(token || '')

    if (!decoded || typeof decoded !== 'object' || !('adminId' in decoded)) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const admin = await prisma.admin.findUnique({
      where: { id: decoded.adminId },
      select: { id: true, email: true, createdAt: true }
    })

    if (!admin) return res.status(404).json({ error: 'Admin not found' })

    return res.status(200).json({ admin })
  } catch (error) {
    console.error('ME route error:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

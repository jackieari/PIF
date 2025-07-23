import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email, password } = req.body

  if (!email || !password) return res.status(400).json({ error: 'Missing fields' })

  try {
    const admin = await prisma.admin.findUnique({ where: { email } })

    if (!admin) return res.status(401).json({ error: 'Invalid email or password' })

    const match = await bcrypt.compare(password, admin.password)

    if (!match) return res.status(401).json({ error: 'Invalid email or password' })

    const token = jwt.sign({ adminId: admin.id }, JWT_SECRET, { expiresIn: '7d' })

    return res.status(200).json({ success: true, token })
  } catch (err) {
    return res.status(500).json({ error: 'Server error' })
  }
}

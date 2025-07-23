import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email, password } = req.body

  if (!email || !password) return res.status(400).json({ error: 'Missing fields' })

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const admin = await prisma.admin.create({
      data: { email, password: hashedPassword }
    })

    return res.status(201).json({ success: true, admin: { id: admin.id, email: admin.email } })
  } catch (err) {
    return res.status(500).json({ error: 'Email already exists or server error' })
  }
}

// lib/auth.ts
import jwt, { JwtPayload } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret'

export function verifyAdminToken(token: string): JwtPayload & { adminId: number } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    if (typeof decoded === 'object' && 'adminId' in decoded) {
      return decoded as JwtPayload & { adminId: number }
    }

    return null
  } catch {
    return null
  }
}

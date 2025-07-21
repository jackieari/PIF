// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

/**
 * In development we create one PrismaClient and put it on globalThis
 * so that hot‑reloading doesn’t spawn a new connection on every save.
 */
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    // Optional: view all queries in the terminal
    // log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}
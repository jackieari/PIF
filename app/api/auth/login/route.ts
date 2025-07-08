import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password } = body

    if (!email || !password) {
      return new Response(JSON.stringify({ message: "Missing credentials" }), { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user || !user.password) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 })
    }

    return new Response(
      JSON.stringify({ message: "Login successful", user: { id: user.id, email: user.email } }),
      { status: 200 }
    )
  } catch (error) {
    console.error("Login error:", error)
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 })
  }
}

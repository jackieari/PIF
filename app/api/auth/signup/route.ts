import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, password, userType } = body

    if (!name || !email || !password || !userType) {
      return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 })
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return new Response(JSON.stringify({ message: "Email already in use" }), { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        userType,
      },
    })

    return new Response(
      JSON.stringify({ message: "User created", user: { id: user.id, email: user.email } }),
      { status: 201 }
    )
  } catch (error) {
    console.error("Signup error:", error)
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 })
  }
}

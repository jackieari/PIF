import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email, password, name, userType } = await req.json()

  // Simulate a successful signup
  if (email && password && name && userType) {
    return NextResponse.json({ message: "Signup successful", user: { email, name, userType } }, { status: 200 })
  } else {
    return NextResponse.json({ message: "Signup failed: Missing credentials" }, { status: 400 })
  }
}

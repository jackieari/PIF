import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      name,
      category,
      shortDescription,
      fullDescription,
      fundingGoal,
      currentFunding,
      support,
      votes,
      deadline,
      location,
    } = body

    if (
      !name || !category || !shortDescription || !fullDescription ||
      fundingGoal === undefined || !support || !votes ||
      !deadline || !location
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const campaign = await prisma.campaign.create({
      data: {
        name,
        category,
        shortDescription,
        fullDescription,
        fundingGoal: Number(fundingGoal),
        currentFunding: currentFunding ? Number(currentFunding) : 0,
        support,
        votes,
        deadline: new Date(deadline),
        location,
      },
    })

    return NextResponse.json({ success: true, campaign }, { status: 201 })
  } catch (error) {
    console.error("Error creating campaign:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}


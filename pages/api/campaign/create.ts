import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
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
    } = req.body;

    if (
      !name || !category || !shortDescription || !fullDescription ||
      fundingGoal === undefined || !support || votes === undefined ||
      !deadline || !location
    ) {
      return res.status(400).json({ error: "Missing required fields" });
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
        votes: String(votes),
        deadline: new Date(deadline),
        location,
      },
    });

    return res.status(201).json({ success: true, campaign });
  } catch (error) {
    console.error("Error creating campaign:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
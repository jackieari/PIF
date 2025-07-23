import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { verifyAdminToken } from "@/lib/auth"; // 🔐 Import token helper

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // 🔐 Check and decode token
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = verifyAdminToken(token || "");

    if (!decoded || typeof decoded !== "object" || !("adminId" in decoded)) {
      return res.status(401).json({ error: "Unauthorized: Invalid or missing token" });
    }

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
      adminId
    } = req.body;

    if (
      !name || !category || !shortDescription || !fullDescription ||
      fundingGoal === undefined || !support || votes === undefined ||
      !deadline || !location || !adminId
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
        // Optional: store which admin created it
        adminId: decoded.adminId,
      },
    });

    return res.status(201).json({ success: true, campaign });
  } catch (error) {
    console.error("Error creating campaign:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

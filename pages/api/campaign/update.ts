import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { verifyAdminToken } from "@/lib/auth";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = verifyAdminToken(token || "");

    if (!decoded || typeof decoded !== "object" || !("adminId" in decoded)) {
      return res.status(401).json({ error: "Unauthorized: Invalid or missing token" });
    }

    const { id } = req.query;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Campaign ID is required" });
    }

    const updates = req.body;

    // Optionally sanitize input (if needed)
    const updatedCampaign = await prisma.campaign.update({
      where: { id: Number(id) },
      data: {
        ...(updates.name && { name: updates.name }),
        ...(updates.category && { category: updates.category }),
        ...(updates.shortDescription && { shortDescription: updates.shortDescription }),
        ...(updates.fullDescription && { fullDescription: updates.fullDescription }),
        ...(updates.fundingGoal !== undefined && { fundingGoal: Number(updates.fundingGoal) }),
        ...(updates.currentFunding !== undefined && { currentFunding: Number(updates.currentFunding) }),
        ...(updates.support && { support: updates.support }),
        ...(updates.votes !== undefined && { votes: String(updates.votes) }),
        ...(updates.deadline && { deadline: new Date(updates.deadline) }),
        ...(updates.location && { location: updates.location }),
      },
    });

    return res.status(200).json({ success: true, updatedCampaign });
  } catch (error) {
    console.error("Error updating campaign:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

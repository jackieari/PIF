import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { verifyAdminToken } from "@/lib/auth"; // 🔐

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // 🔐 Token check
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = verifyAdminToken(token || "");

    if (!decoded || typeof decoded !== "object" || !("adminId" in decoded)) {
      return res.status(401).json({ error: "Unauthorized: Invalid or missing token" });
    }

    // 🧾 Get campaign ID from query
    const { id } = req.query;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: "Campaign ID is required" });
    }

    // 🗑️ Delete campaign
    const deleted = await prisma.campaign.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ success: true, deleted });
  } catch (error) {
    console.error("Error deleting campaign:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
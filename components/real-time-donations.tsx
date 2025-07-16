"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart } from "lucide-react"

// ---------- helpers ----------
const makeId = () => crypto.randomUUID()   // or Date.now().toString()

// ---------- initial / sample data ----------
const initialDonations = [
  { id: makeId(), avatar: "/images/real-person-1.png", name: "Sarah L.",   amount: "50 USDC",  campaign: "WaterBridge Foundation" },
  { id: makeId(), avatar: "/images/real-person-2.png", name: "Mike P.",    amount: "25 USDC",  campaign: "TechForAll Initiative" },
  { id: makeId(), avatar: "/images/real-person-3.png", name: "Jennifer A.",amount: "100 USDC", campaign: "GreenPower Collective" },
  { id: makeId(), avatar: "/images/real-person-4.png", name: "David C.",   amount: "75 USDC",  campaign: "MindCare Foundation" },
  { id: makeId(), avatar: "/images/real-person-5.png", name: "Emily R.",   amount: "30 USDC",  campaign: "WaterBridge Foundation" },
]

const additionalDonations = [
  { avatar: "/images/real-person-6.png", name: "Chris B.",    amount: "200 USDC", campaign: "TechForAll Initiative" },
  { avatar: "/images/real-person-7.png", name: "Jessica M.",  amount: "10 USDC",  campaign: "GreenPower Collective" },
]

// ---------- component ----------
export default function RealTimeDonations() {
  const [donations, setDonations] = useState(initialDonations)
  const MAX_VISIBLE = 5

  useEffect(() => {
    const id = setInterval(() => {
      const sample = additionalDonations[Math.floor(Math.random() * additionalDonations.length)]
      const newDonation = { id: makeId(), ...sample }

      setDonations(prev => {
        const next = [newDonation, ...prev]
        // keep list length constant
        return next.length > MAX_VISIBLE ? next.slice(0, MAX_VISIBLE) : next
      })
    }, 3000)

    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Live Donation Feed
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See the impact our community is making in real‑time.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-2 overflow-hidden">
            <AnimatePresence initial={false}>
              {donations.map(donation => (
                <motion.div
                  key={donation.id}
                  layout            // lets Framer figure out positional shift
                  layoutId={donation.id}
                  initial={{ opacity: 0, y: -30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0,  scale: 1 }}
                  exit={{    opacity: 0, y: 30, height: 0, marginTop: 0, marginBottom: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50"
                >
                  <img
                    src={donation.avatar || "/placeholder.svg"}
                    alt={donation.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-grow">
                    <p className="font-semibold text-gray-800">
                      {donation.name} donated{" "}
                      <span className="text-emerald-600 font-bold">
                        {donation.amount}
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">
                      to {donation.campaign}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-red-500">
                    <Heart className="w-5 h-5" />
                    <span className="font-medium text-sm">Thanks!</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

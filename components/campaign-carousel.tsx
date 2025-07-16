"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Vote, ChevronLeft, ChevronRight } from "lucide-react"
import Link from 'next/link'

const campaigns = [
  {
    id: "waterbridge",
    name: "WaterBridge Foundation",
    category: "Clean Water",
    description: "Building sustainable water infrastructure in underserved rural areas across developing regions.",
    image: "/placeholder.svg?height=200&width=400&text=Clean+Water+Infrastructure",
    alt: "Clean water infrastructure project",
    support: "34.2%",
    votes: "1,247",
  },
  {
    name: "TechForAll Initiative",
    category: "Education",
    description: "Providing tablets and internet connectivity to students in remote learning environments.",
    image: "/placeholder.svg?height=200&width=400&text=Digital+Education+Access",
    alt: "Students using tablets for digital education",
    support: "25.3%",
    votes: "923",
  },
  {
    name: "GreenPower Collective",
    category: "Environment",
    description: "Installing solar-powered microgrids in off-grid communities to provide clean, reliable electricity.",
    image: "/placeholder.svg?height=200&width=400&text=Solar+Energy+Microgrids",
    alt: "Solar panel installation in rural community",
    support: "22.1%",
    votes: "806",
  },
  {
    name: "MindCare Foundation",
    category: "Health",
    description: "Creating community-based mental health resources and training programs for underserved populations.",
    image: "/placeholder.svg?height=200&width=400&text=Mental+Health+Support",
    alt: "Community mental health support session",
    support: "18.4%",
    votes: "671",
  },
  {
    name: "Animal Shelter Support",
    category: "Animals",
    description: "Providing food, shelter, and medical care for abandoned and stray animals.",
    image: "/placeholder.svg?height=200&width=400&text=Animal+Shelter",
    alt: "Happy dogs at an animal shelter",
    support: "15.8%",
    votes: "578",
  },
]

const categories = ["All", "Clean Water", "Education", "Environment", "Health", "Animals"]

export default function CampaignCarousel() {
  const [activeCategory, setActiveCategory] = useState("All")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    const el = scrollContainerRef.current
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0)
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
    }
  }

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current
    if (el) {
      const scrollAmount = el.clientWidth * 0.8
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const el = scrollContainerRef.current
    if (el) {
      el.addEventListener("scroll", checkScrollability)
      checkScrollability()
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkScrollability)
      }
    }
  }, [])

  const filteredCampaigns =
    activeCategory === "All" ? campaigns : campaigns.filter((c) => c.category === activeCategory)

  return (
    <div className="mt-16">
      {/* ---------- filter pills ---------- */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                rounded-full whitespace-nowrap font-medium transition-colors
                ${activeCategory === category
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"}
              `}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="relative">
        <div ref={scrollContainerRef} className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
          {filteredCampaigns.map((campaign, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90%] sm:w-[45%] md:w-[30%] bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Link href={`/campaign/${campaign.id}`} className="block">
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                      {campaign.name}
                    </h3>
                    <p className="text-sm text-gray-500">{campaign.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 h-16">{campaign.description}</p>
              </Link>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Current Support</span>
                  <span className="text-sm font-bold text-emerald-600">{campaign.support}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: campaign.support }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{campaign.votes} votes</p>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <Vote className="w-4 h-4 mr-2" />
                Vote for {campaign.name.split(" ")[0]}
              </Button>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="rounded-full bg-white shadow-md absolute top-1/2 -translate-y-1/2 -left-5 z-10"
          >
            
            <ChevronLeft
              className={`h-4 w-4
                ${canScrollLeft ? "text-gray-700" : "text-gray-300"}`}   // visible vs. disabled
            />

            
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="rounded-full bg-white shadow-md absolute top-1/2 -translate-y-1/2 -right-5 z-10"
          >
            <ChevronRight
              className={`h-4 w-4
                ${canScrollRight ? "text-gray-700" : "text-gray-300"}`}   // visible vs. disabled
            />
          </Button>
        </div>
      </div>
    </div>
  )
}

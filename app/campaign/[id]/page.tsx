"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  ArrowLeft,
  Vote,
  Clock,
  Target,
  Users,
  ExternalLink,
  FileText,
  Heart,
  Share2,
  BookOpen,
  Globe,
  Twitter,
  Instagram,
  CheckCircle,
  AlertCircle,
  Info,
  MapPin,
  Calendar,
  TrendingUp,
  Award,
  Shield,
} from "lucide-react"
import { useRouter, useParams } from "next/navigation"

// Extended campaign data with detailed information
const campaignData = {
  waterbridge: {
    id: "waterbridge",
    name: "WaterBridge Foundation",
    category: "Clean Water",
    shortDescription: "Building sustainable water infrastructure in underserved rural areas across developing regions.",
    fullDescription: `The WaterBridge Foundation is dedicated to providing clean, accessible water to communities that need it most. Our comprehensive approach includes drilling wells, installing filtration systems, and training local communities in maintenance and water management.

Our current project focuses on 12 villages in rural Kenya, where over 8,000 people currently walk more than 3 miles daily to access clean water. Through this initiative, we will:

• Install 6 solar-powered water pumps with filtration systems
• Build 12 community water storage tanks
• Train 48 local technicians in system maintenance
• Establish water management committees in each village
• Provide hygiene education to 2,000+ families

This project will reduce waterborne illness by 85% and free up 4+ hours daily for women and children, allowing them to focus on education and economic opportunities.`,
    image: "/placeholder.svg?height=400&width=800&text=Clean+Water+Infrastructure",
    video: "/placeholder.svg?height=400&width=800&text=Video+Thumbnail",
    hasVideo: false,
    fundingGoal: 150000,
    currentFunding: 51300,
    support: "34.2%",
    votes: "1,247",
    deadline: "2024-02-15",
    location: "Rural Kenya",
    organization: {
      name: "WaterBridge Foundation",
      mission:
        "To provide sustainable water solutions and empower communities through education and local capacity building.",
      founded: "2018",
      website: "https://waterbridge.org",
      social: {
        twitter: "@waterbridge",
        instagram: "@waterbridgefoundation",
      },
      logo: "/placeholder.svg?height=80&width=80&text=WB",
    },
    impact: {
      beneficiaries: "8,000+ people",
      villages: "12 communities",
      previousProjects: "23 completed projects",
      testimonials: [
        {
          name: "Maria Kimani",
          role: "Village Leader, Kibera",
          quote:
            "Since WaterBridge installed our well, our children can attend school regularly instead of walking hours for water.",
          avatar: "/images/real-person-1.png",
        },
        {
          name: "Dr. James Ochieng",
          role: "Local Health Officer",
          quote: "Waterborne diseases in our region dropped by 78% after WaterBridge's intervention.",
          avatar: "/images/real-person-2.png",
        },
      ],
      photos: [
        "/placeholder.svg?height=200&width=300&text=Before+Photo",
        "/placeholder.svg?height=200&width=300&text=Construction",
        "/placeholder.svg?height=200&width=300&text=Community+Training",
        "/placeholder.svg?height=200&width=300&text=Clean+Water+Access",
      ],
    },
    credibility: [
      {
        type: "Charity Navigator",
        rating: "4/4 Stars",
        link: "#",
        icon: <CheckCircle className="w-4 h-4 text-green-600" />,
      },
      {
        type: "GuideStar Seal",
        rating: "Gold Seal",
        link: "#",
        icon: <Award className="w-4 h-4 text-yellow-600" />,
      },
      {
        type: "Annual Report 2023",
        rating: "PDF",
        link: "#",
        icon: <FileText className="w-4 h-4 text-blue-600" />,
      },
    ],
    votingInfo: {
      isOpen: true,
      minTokensRequired: 10,
      userTokens: 250, // Mock user token balance
      votingEnds: "2024-01-20T23:59:59Z",
    },
  },
}

export default function CampaignPage() {
  const router = useRouter()
  const params = useParams()
  const [isVoting, setIsVoting] = useState(false)
  const [hasVoted, setHasVoted] = useState(false)
  const [showVotingModal, setShowVotingModal] = useState(false)

  const campaignId = params.id as string
  const campaign = campaignData[campaignId as keyof typeof campaignData]

  useEffect(() => {
    if (!campaign) {
      router.push("/")
    }
  }, [campaign, router])

  if (!campaign) {
    return <div>Campaign not found</div>
  }

  const progressPercentage = (campaign.currentFunding / campaign.fundingGoal) * 100
  const daysRemaining = Math.ceil(
    (new Date(campaign.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
  )

  const handleVote = async () => {
    setIsVoting(true)
    // Mock voting process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setHasVoted(true)
    setIsVoting(false)
    setShowVotingModal(false)
  }

  const canVote = campaign.votingInfo.userTokens >= campaign.votingInfo.minTokensRequired && !hasVoted

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40">
      {/* Enhanced Header with Gradient */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => router.back()}
                className="p-2 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="font-bold text-xl text-gray-900">PIF Token</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/50 border-gray-200 hover:bg-white/80 backdrop-blur-sm"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/50 border-gray-200 hover:bg-white/80 backdrop-blur-sm"
              >
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enhanced Campaign Header */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-emerald-200 px-4 py-2 text-sm font-medium"
                >
                  {campaign.category}
                </Badge>
                <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{daysRemaining} days remaining</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{campaign.location}</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent mb-6 leading-tight">
                {campaign.name}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">{campaign.shortDescription}</p>

              {/* Quick Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
                  <div className="text-2xl font-bold text-emerald-600">{campaign.votes}</div>
                  <div className="text-sm text-gray-600">Votes</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">
                    ${(campaign.currentFunding / 1000).toFixed(0)}K
                  </div>
                  <div className="text-sm text-gray-600">Raised</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <div className="text-2xl font-bold text-purple-600">{campaign.support}</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                  <div className="text-2xl font-bold text-orange-600">#{1}</div>
                  <div className="text-sm text-gray-600">Ranking</div>
                </div>
              </div>
            </div>

            {/* Enhanced Media Section */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">
              <img
                src={campaign.image || "/placeholder.svg"}
                alt={campaign.name}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="font-medium">{campaign.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 border-b border-emerald-100/50">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  About This Campaign
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="prose prose-gray max-w-none">
                  {campaign.fullDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Impact Section */}
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-b border-blue-100/50">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  Expected Impact & Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                      {campaign.impact.beneficiaries}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">People Served</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      {campaign.impact.villages}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Communities</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 shadow-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      {campaign.impact.previousProjects}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Past Projects</div>
                  </div>
                </div>

                {/* Enhanced Impact Photos */}
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-6">Project Gallery</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {campaign.impact.photos.map((photo, index) => (
                      <div key={index} className="relative group cursor-pointer">
                        <img
                          src={photo || "/placeholder.svg"}
                          alt={`Impact photo ${index + 1}`}
                          className="w-full aspect-square object-cover rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-white/50"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-2xl transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Organization Info */}
            <Card className="bg-white/70 backdrop-blur-sm border-white/50 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-50/80 to-pink-50/80 border-b border-purple-100/50">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  Organization & Credibility
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="flex items-start gap-6 mb-8">
                  <Avatar className="w-20 h-20 ring-4 ring-purple-100 shadow-lg">
                    <AvatarImage src={campaign.organization.logo || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 font-bold text-xl">
                      {campaign.organization.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{campaign.organization.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{campaign.organization.mission}</p>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Founded {campaign.organization.founded}</span>
                      </div>
                      <a
                        href={campaign.organization.website}
                        className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Website</span>
                      </a>
                      <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                        <Twitter className="w-4 h-4" />
                        <span>{campaign.organization.social.twitter}</span>
                      </a>
                      <a href="#" className="flex items-center gap-2 hover:text-pink-600 transition-colors">
                        <Instagram className="w-4 h-4" />
                        <span>{campaign.organization.social.instagram}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Enhanced Credibility Links */}
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-6">Verification & Trust Signals</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {campaign.credibility.map((cred, index) => (
                      <a
                        key={index}
                        href={cred.link}
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-white/80 to-gray-50/80 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          {cred.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{cred.type}</div>
                          <div className="text-sm text-gray-500">{cred.rating}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Combined Funding Progress & Voting Section */}
            <Card className="bg-white/80 backdrop-blur-sm border-white/50 shadow-xl rounded-3xl overflow-hidden sticky top-24">
              <CardHeader className="bg-gradient-to-r from-emerald-50/80 to-teal-50/80 border-b border-emerald-100/50">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  Campaign Progress & Voting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {/* Funding Progress */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-gray-700">Current Support</span>
                    <span className="text-lg font-bold text-emerald-600">{campaign.support}</span>
                  </div>
                  <div className="w-full bg-gradient-to-r from-gray-200 to-gray-300 rounded-full h-4 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 h-4 rounded-full transition-all duration-1000 shadow-sm relative overflow-hidden"
                      style={{ width: `${progressPercentage}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                    <span className="font-medium">${campaign.currentFunding.toLocaleString()} raised</span>
                    <span className="font-medium">${campaign.fundingGoal.toLocaleString()} goal</span>
                  </div>
                </div>

                {/* Campaign Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <div className="text-xl font-bold text-emerald-600">{campaign.votes}</div>
                    <div className="text-xs text-gray-600">Total Votes</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="text-xl font-bold text-blue-600">{daysRemaining}</div>
                    <div className="text-xs text-gray-600">Days Left</div>
                  </div>
                </div>

                {/* Voting Section */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Vote className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Cast Your Vote</h4>
                  </div>

                  {/* Enhanced Eligibility Status */}
                  <div
                    className={`flex items-center gap-3 p-4 rounded-2xl border mb-4 ${
                      canVote
                        ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200"
                        : "bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-700 border-yellow-200"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center">
                      {canVote ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    </div>
                    <div className="text-sm font-medium">
                      {canVote ? (
                        <span>You're eligible to vote!</span>
                      ) : campaign.votingInfo.userTokens < campaign.votingInfo.minTokensRequired ? (
                        <span>You need {campaign.votingInfo.minTokensRequired} PIF tokens to vote</span>
                      ) : (
                        <span>You've already voted for this campaign</span>
                      )}
                    </div>
                  </div>

                  {/* Token Balance */}
                  <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-2xl mb-4">
                    <span className="text-sm text-gray-600 font-medium">Your PIF Balance</span>
                    <span className="font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-lg">
                      {campaign.votingInfo.userTokens} PIF
                    </span>
                  </div>

                  {/* Enhanced Vote Button */}
                  <Dialog open={showVotingModal} onOpenChange={setShowVotingModal}>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl mb-4"
                        disabled={!canVote || hasVoted}
                      >
                        {hasVoted ? (
                          <>
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Vote Submitted
                          </>
                        ) : (
                          <>
                            <Vote className="w-5 h-5 mr-2" />
                            Vote for {campaign.name.split(" ")[0]}
                          </>
                        )}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white/95 backdrop-blur-md border-white/30 rounded-3xl">
                      <DialogHeader>
                        <DialogTitle className="text-xl">Confirm Your Vote</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <p className="text-gray-600">
                          You're about to vote for <strong>{campaign.name}</strong> in the {campaign.category} category.
                        </p>
                        <div className="bg-gradient-to-r from-gray-50/80 to-white/80 p-6 rounded-2xl border border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-3">Voting Details:</h4>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              Your vote will be recorded on the blockchain
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              You can only vote once per campaign
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              Voting closes in {daysRemaining} days
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              This action cannot be undone
                            </li>
                          </ul>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            className="flex-1 bg-white/50 backdrop-blur-sm border-gray-200 rounded-xl"
                            onClick={() => setShowVotingModal(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl"
                            onClick={handleVote}
                            disabled={isVoting}
                          >
                            {isVoting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Voting...
                              </>
                            ) : (
                              "Confirm Vote"
                            )}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {/* Enhanced How Voting Works */}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full text-gray-500 hover:bg-gray-50 rounded-xl">
                          <Info className="w-4 h-4 mr-2" />
                          How does voting work?
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs bg-white/95 backdrop-blur-md border-white/30 rounded-2xl p-4">
                        <div className="space-y-3 text-sm">
                          <p className="font-semibold text-gray-900">Voting Process:</p>
                          <div className="space-y-2">
                            <p className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              Hold minimum 10 PIF tokens to vote
                            </p>
                            <p className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              Each wallet can vote once per campaign
                            </p>
                            <p className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              Votes are weighted by token holdings
                            </p>
                            <p className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              Top campaigns receive funding
                            </p>
                            <p className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                              Results announced after voting closes
                            </p>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {/* Additional Stats */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Category Rank</span>
                    <span className="font-bold text-emerald-600">#1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

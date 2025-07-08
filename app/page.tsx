"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  TrendingUp,
  Users,
  DollarSign,
  Trophy,
  ArrowRight,
  Zap,
  Medal,
  Award,
  Sparkles,
  Target,
  Rocket,
} from "lucide-react"
import Link from "next/link"

// Mock data for featured campaigns
const featuredCampaigns = [
  {
    id: "1",
    title: "SaaS Product Launch",
    description: "Help us launch our new productivity app to college students. Create engaging social content.",
    brand: "TechCorp",
    category: "Tech",
    payout: 500,
    participants: 23,
    daysLeft: 5,
    maxParticipants: 50,
    color: "from-blue-500 to-cyan-500",
    icon: "💻",
  },
  {
    id: "2",
    title: "Sustainable Fashion Brand",
    description: "Promote eco-friendly clothing to Gen Z. Focus on Instagram and TikTok content creation.",
    brand: "EcoWear",
    category: "Fashion",
    payout: 750,
    participants: 45,
    daysLeft: 12,
    maxParticipants: 100,
    color: "from-green-500 to-emerald-500",
    icon: "👗",
  },
  {
    id: "3",
    title: "Healthy Snack Campaign",
    description: "Create buzz around our new protein bars. Target fitness enthusiasts and health-conscious students.",
    brand: "NutriSnack",
    category: "Food",
    payout: 300,
    participants: 67,
    daysLeft: 8,
    maxParticipants: 80,
    color: "from-orange-500 to-red-500",
    icon: "🍎",
  },
]

// Mock leaderboard data
const topCreators = [
  {
    id: "1",
    name: "Sarah Chen",
    totalEarned: 3250,
    campaignsCompleted: 15,
    rank: 1,
    badge: "Gold Creator",
    avatar: "S",
    streak: 12,
    level: 25,
  },
  {
    id: "2",
    name: "Marcus Johnson",
    totalEarned: 2890,
    campaignsCompleted: 12,
    rank: 2,
    badge: "Silver Creator",
    avatar: "M",
    streak: 8,
    level: 22,
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    totalEarned: 2650,
    campaignsCompleted: 11,
    rank: 3,
    badge: "Bronze Creator",
    avatar: "E",
    streak: 6,
    level: 20,
  },
  {
    id: "4",
    name: "Alex Kim",
    totalEarned: 2100,
    campaignsCompleted: 9,
    rank: 4,
    badge: "Rising Star",
    avatar: "A",
    streak: 4,
    level: 18,
  },
  {
    id: "5",
    name: "Jordan Taylor",
    totalEarned: 1850,
    campaignsCompleted: 8,
    rank: 5,
    badge: "Rising Star",
    avatar: "J",
    streak: 3,
    level: 16,
  },
]

// Motion Orbs Component
const MotionOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/30 to-red-400/30 rounded-full blur-lg animate-float-medium"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-xl animate-float-fast"></div>
      <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-2xl animate-float-medium"></div>

      {/* Small sparkle orbs */}
      <div className="absolute top-32 left-1/3 w-4 h-4 bg-blue-400/60 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-64 right-1/4 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse-fast"></div>
      <div className="absolute bottom-32 left-1/2 w-5 h-5 bg-green-400/60 rounded-full animate-pulse-medium"></div>
      <div className="absolute bottom-64 right-1/2 w-2 h-2 bg-pink-400/60 rounded-full animate-pulse-slow"></div>
    </div>
  )
}

// Animated Counter Component
const AnimatedCounter = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < value) {
        setCount(count + Math.ceil((value - count) / 10))
      }
    }, 50)
    return () => clearTimeout(timer)
  }, [count, value])

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Game-like Progress Bar
const GameProgressBar = ({ value, max, color = "blue" }: { value: number; max: number; color?: string }) => {
  const percentage = (value / max) * 100

  return (
    <div className="relative">
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-full transition-all duration-1000 ease-out relative`}
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-6 w-6 text-yellow-500 animate-pulse" />
    case 2:
      return <Medal className="h-6 w-6 text-gray-400 animate-pulse" />
    case 3:
      return <Award className="h-6 w-6 text-amber-600 animate-pulse" />
    default:
      return <span className="text-lg font-bold text-gray-400">#{rank}</span>
  }
}

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "Gold Creator":
      return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white animate-shimmer"
    case "Silver Creator":
      return "bg-gradient-to-r from-gray-300 to-gray-500 text-white animate-shimmer"
    case "Bronze Creator":
      return "bg-gradient-to-r from-amber-400 to-amber-600 text-white animate-shimmer"
    case "Rising Star":
      return "bg-gradient-to-r from-purple-400 to-purple-600 text-white animate-shimmer"
    default:
      return "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
  }
}

export default function HomePage() {
  const [hoveredCampaign, setHoveredCampaign] = useState<string | null>(null)
  const [hoveredCreator, setHoveredCreator] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <MotionOrbs />

      {/* Header */}
      <header className="border-b border-gray-700 bg-transparent backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <Zap className="h-8 w-8 text-blue-400 group-hover:animate-spin transition-transform" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Viral
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth">
              <Button variant="ghost" className="hover:scale-105 transition-transform text-gray-300 hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="hover:scale-105 transition-transform bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <Badge
            className="mb-4 animate-bounce bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
            variant="secondary"
          >
            🚀 The Future of Marketing Education
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            GitHub for Marketing Students
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join brand-funded challenges, create viral campaigns, earn real money, and build your marketing portfolio.
            The platform where creativity meets opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Earning Today
                <ArrowRight className="ml-2 h-5 w-5" />
                <Sparkles className="ml-1 h-4 w-4 animate-pulse" />
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent hover:scale-110 transition-all duration-300 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                View Full Leaderboard
                <Trophy className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-16 px-4 bg-gray-800/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <AnimatedCounter value={50} prefix="$" suffix="K+" />
              </div>
              <div className="text-gray-300">Paid to Students</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                <AnimatedCounter value={500} suffix="+" />
              </div>
              <div className="text-gray-300">Active Campaigns</div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-pink-400 mb-2">
                <AnimatedCounter value={2000} suffix="+" />
              </div>
              <div className="text-gray-300">Student Creators</div>
              <div className="w-12 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-green-400 mb-2">
                <AnimatedCounter value={100} suffix="+" />
              </div>
              <div className="text-gray-300">Partner Brands</div>
              <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Top Creators Leaderboard */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              🏆 Top Creators This Month
            </h2>
            <p className="text-xl text-gray-300">See who's leading the pack and earning the most</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-500/30 bg-gray-800/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2 text-white">
                  <Trophy className="h-8 w-8 text-yellow-500" />
                  Creator Leaderboard
                  <Trophy className="h-8 w-8 text-yellow-500" />
                </CardTitle>
                <CardDescription className="text-center text-gray-300">
                  Top performing marketing students on our platform
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {topCreators.map((creator, index) => (
                    <div
                      key={creator.id}
                      className={`flex items-center justify-between p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                        index < 3
                          ? "bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border-2 border-yellow-500/30 hover:border-yellow-400 hover:scale-105"
                          : "bg-gradient-to-r from-gray-700/50 to-blue-700/50 hover:bg-gradient-to-r hover:from-blue-700/50 hover:to-purple-700/50 hover:scale-105"
                      } ${hoveredCreator === creator.id ? "shadow-xl transform scale-105" : "shadow-md"}`}
                      onMouseEnter={() => setHoveredCreator(creator.id)}
                      onMouseLeave={() => setHoveredCreator(null)}
                    >
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center justify-center w-12 h-12 relative">
                          {getRankIcon(creator.rank)}
                          {index < 3 && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                              <Sparkles className="w-3 h-3 text-yellow-800" />
                            </div>
                          )}
                        </div>
                        <Avatar className="h-16 w-16 border-4 border-gray-600 shadow-lg">
                          <AvatarFallback
                            className={`text-xl font-bold ${
                              index < 3
                                ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-white"
                                : "bg-blue-600 text-white"
                            }`}
                          >
                            {creator.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-xl text-white">{creator.name}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className={getBadgeColor(creator.badge)} variant="outline">
                              {creator.badge}
                            </Badge>
                            <Badge variant="outline" className="bg-blue-600 text-white border-blue-500">
                              Level {creator.level}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-300">
                            <span className="flex items-center gap-1">
                              <Target className="w-4 h-4" />
                              {creator.streak} day streak
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-400 flex items-center gap-1">
                            $<AnimatedCounter value={creator.totalEarned} />
                          </div>
                          <div className="text-xs text-gray-400">Total Earned</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-semibold flex items-center gap-1 text-white">
                            <AnimatedCounter value={creator.campaignsCompleted} />
                            <Rocket className="w-4 h-4 text-blue-400" />
                          </div>
                          <div className="text-xs text-gray-400">Campaigns</div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:scale-110 transition-transform bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:from-blue-600 hover:to-purple-600"
                          asChild
                        >
                          <Link href={`/profile/${creator.id}`}>View Profile</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link href="/leaderboard">
                    <Button
                      variant="outline"
                      className="hover:scale-110 transition-all duration-300 bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 hover:from-yellow-500 hover:to-orange-500"
                    >
                      View Full Leaderboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive How It Works */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-800/50 to-blue-900/50 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-2xl group bg-gradient-to-b from-gray-800/50 to-blue-900/50 backdrop-blur-sm">
              <CardHeader>
                <div className="relative">
                  <Users className="h-16 w-16 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-white">Join Campaigns</CardTitle>
                <CardDescription className="text-base text-gray-300">
                  Browse brand-funded challenges and join the ones that match your interests and skills.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-2xl group bg-gradient-to-b from-gray-800/50 to-purple-900/50 backdrop-blur-sm">
              <CardHeader>
                <div className="relative">
                  <TrendingUp className="h-16 w-16 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-white">Create & Share</CardTitle>
                <CardDescription className="text-base text-gray-300">
                  Get your unique referral link and create viral content to drive engagement and conversions.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 border-green-500/30 hover:border-green-400 transition-all duration-300 hover:scale-110 hover:shadow-2xl group bg-gradient-to-b from-gray-800/50 to-green-900/50 backdrop-blur-sm">
              <CardHeader>
                <div className="relative">
                  <DollarSign className="h-16 w-16 text-green-400 mx-auto mb-4 group-hover:animate-bounce" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-white">Earn Money</CardTitle>
                <CardDescription className="text-base text-gray-300">
                  Get paid based on performance metrics like clicks, views, and conversions. Build your portfolio.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Featured Campaigns */}
      <section className="py-20 px-4 bg-gray-800/30 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              🔥 Featured Campaigns
            </h2>
            <p className="text-xl text-gray-300">Hot campaigns with high payouts and great brands</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCampaigns.map((campaign) => (
              <Card
                key={campaign.id}
                className={`hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer bg-gray-800/50 backdrop-blur-sm ${
                  hoveredCampaign === campaign.id
                    ? "scale-110 border-blue-400 shadow-2xl"
                    : "border-gray-600 hover:border-blue-500 hover:scale-105"
                }`}
                onMouseEnter={() => setHoveredCampaign(campaign.id)}
                onMouseLeave={() => setHoveredCampaign(null)}
              >
                <CardHeader className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${campaign.color} opacity-20`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{campaign.icon}</span>
                        <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          {campaign.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-3xl font-bold text-green-400">${campaign.payout}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 text-white">{campaign.title}</CardTitle>
                    <CardDescription className="text-base text-gray-300">{campaign.description}</CardDescription>
                    <div className="text-sm text-gray-400 mt-2 flex items-center gap-1">
                      <span className="font-medium">Brand:</span> {campaign.brand}
                      <Badge variant="outline" className="ml-2 border-green-500 text-green-400">
                        Verified ✓
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400 flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Progress
                      </span>
                      <span className="font-medium text-white">
                        {campaign.participants}/{campaign.maxParticipants} joined
                      </span>
                    </div>
                    <GameProgressBar value={campaign.participants} max={campaign.maxParticipants} color="blue" />
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center gap-1">⏰ {campaign.daysLeft} days left</span>
                      <span className="flex items-center gap-1">
                        🎯 {campaign.maxParticipants - campaign.participants} spots remaining
                      </span>
                    </div>
                    <Button
                      className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <Link href="/auth">
                        Join Campaign
                        <Rocket className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/campaigns">
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-110 transition-all duration-300 bg-gradient-to-r from-orange-400 to-red-400 text-white border-0 hover:from-orange-500 hover:to-red-500"
              >
                View All Campaigns
                <ArrowRight className="ml-2 h-5 w-5" />
                <Target className="ml-1 h-4 w-4 animate-spin" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-pulse">Ready to Start Your Marketing Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students already earning money and building their marketing careers.
          </p>
          <Link href="/auth">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 hover:scale-110 transition-all duration-300 bg-white text-blue-600 hover:bg-gray-100"
            >
              Sign Up Free Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white relative z-10 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 group">
                <Zap className="h-6 w-6 group-hover:animate-spin text-blue-400" />
                <span className="text-xl font-bold">Viral</span>
              </div>
              <p className="text-gray-400">The platform where marketing students turn creativity into cash.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Students</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/campaigns" className="hover:text-white transition-colors">
                    Browse Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard" className="hover:text-white transition-colors">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-white transition-colors">
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Brands</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/brand-dashboard" className="hover:text-white transition-colors">
                    Create Campaign
                  </Link>
                </li>
                <li>
                  <Link href="/analytics" className="hover:text-white transition-colors">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/creators" className="hover:text-white transition-colors">
                    Find Creators
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Viral Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

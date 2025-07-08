"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Search, Filter, Users, Calendar, DollarSign, SlidersHorizontal, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Add the MotionOrbs component at the top after imports
const MotionOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-lg animate-float-medium"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-float-fast"></div>
      <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-float-medium"></div>

      {/* Small sparkle orbs */}
      <div className="absolute top-32 left-1/3 w-4 h-4 bg-blue-400/40 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-64 right-1/4 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse-fast"></div>
      <div className="absolute bottom-32 left-1/2 w-5 h-5 bg-green-400/40 rounded-full animate-pulse-medium"></div>
      <div className="absolute bottom-64 right-1/2 w-2 h-2 bg-pink-400/40 rounded-full animate-pulse-slow"></div>
    </div>
  )
}

// Mock campaigns data
const allCampaigns = [
  {
    id: "1",
    title: "SaaS Product Launch",
    description:
      "Help us launch our new productivity app to college students. Create engaging social content and drive sign-ups.",
    brand: "TechCorp",
    payout: 500,
    deadline: "2024-01-15",
    category: "Tech",
    participants: 23,
    maxParticipants: 50,
    status: "active",
    requirements: ["Social Media Experience", "Content Creation", "Student Audience"],
    tags: ["SaaS", "Productivity", "Mobile App"],
    difficulty: "Medium",
    duration: "2 weeks",
  },
  {
    id: "2",
    title: "Sustainable Fashion Brand",
    description:
      "Promote eco-friendly clothing to Gen Z. Focus on Instagram and TikTok content creation with sustainability messaging.",
    brand: "EcoWear",
    payout: 750,
    deadline: "2024-01-20",
    category: "Fashion",
    participants: 45,
    maxParticipants: 100,
    status: "active",
    requirements: ["Fashion Interest", "Instagram/TikTok", "Sustainability Focus"],
    tags: ["Sustainable", "Fashion", "Gen Z"],
    difficulty: "Easy",
    duration: "3 weeks",
  },
  {
    id: "3",
    title: "Healthy Snack Campaign",
    description: "Create buzz around our new protein bars. Target fitness enthusiasts and health-conscious students.",
    brand: "NutriSnack",
    payout: 300,
    deadline: "2024-01-10",
    category: "Food",
    participants: 67,
    maxParticipants: 80,
    status: "active",
    requirements: ["Fitness Interest", "Health Content", "Product Reviews"],
    tags: ["Health", "Fitness", "Nutrition"],
    difficulty: "Easy",
    duration: "1 week",
  },
  {
    id: "4",
    title: "Gaming Peripheral Launch",
    description: "Showcase our new gaming headset to the gaming community. Create unboxing and review content.",
    brand: "GameGear",
    payout: 400,
    deadline: "2024-01-25",
    category: "Gaming",
    participants: 12,
    maxParticipants: 30,
    status: "active",
    requirements: ["Gaming Content", "Product Reviews", "YouTube/Twitch"],
    tags: ["Gaming", "Hardware", "Reviews"],
    difficulty: "Hard",
    duration: "2 weeks",
  },
  {
    id: "5",
    title: "Study Abroad Program",
    description:
      "Promote our study abroad opportunities to university students. Share the benefits of international education.",
    brand: "EduGlobal",
    payout: 600,
    deadline: "2024-02-01",
    category: "Education",
    participants: 8,
    maxParticipants: 25,
    status: "active",
    requirements: ["Education Focus", "International Experience", "Student Audience"],
    tags: ["Education", "Travel", "University"],
    difficulty: "Medium",
    duration: "4 weeks",
  },
  {
    id: "6",
    title: "Fintech App Beta",
    description:
      "Help us test and promote our new budgeting app for students. Create tutorials and share your experience.",
    brand: "MoneyWise",
    payout: 350,
    deadline: "2024-01-18",
    category: "Finance",
    participants: 19,
    maxParticipants: 40,
    status: "active",
    requirements: ["Finance Interest", "App Testing", "Tutorial Creation"],
    tags: ["Fintech", "Budgeting", "Students"],
    difficulty: "Medium",
    duration: "2 weeks",
  },
]

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState(allCampaigns)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [payoutFilter, setPayoutFilter] = useState("all")
  const [sortBy, setSortBy] = useState("payout")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { toast } = useToast()

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterCampaigns(term, categoryFilter, difficultyFilter, payoutFilter, sortBy)
  }

  const handleCategoryFilter = (category: string) => {
    setCategoryFilter(category)
    filterCampaigns(searchTerm, category, difficultyFilter, payoutFilter, sortBy)
  }

  const handleDifficultyFilter = (difficulty: string) => {
    setDifficultyFilter(difficulty)
    filterCampaigns(searchTerm, categoryFilter, difficulty, payoutFilter, sortBy)
  }

  const handlePayoutFilter = (payout: string) => {
    setPayoutFilter(payout)
    filterCampaigns(searchTerm, categoryFilter, difficultyFilter, payout, sortBy)
  }

  const handleSort = (sort: string) => {
    setSortBy(sort)
    filterCampaigns(searchTerm, categoryFilter, difficultyFilter, payoutFilter, sort)
  }

  const filterCampaigns = (search: string, category: string, difficulty: string, payout: string, sort: string) => {
    const filtered = allCampaigns.filter((campaign) => {
      const matchesSearch =
        campaign.title.toLowerCase().includes(search.toLowerCase()) ||
        campaign.description.toLowerCase().includes(search.toLowerCase()) ||
        campaign.brand.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === "all" || campaign.category.toLowerCase() === category.toLowerCase()
      const matchesDifficulty = difficulty === "all" || campaign.difficulty.toLowerCase() === difficulty.toLowerCase()

      let matchesPayout = true
      if (payout === "low") matchesPayout = campaign.payout < 400
      else if (payout === "medium") matchesPayout = campaign.payout >= 400 && campaign.payout < 600
      else if (payout === "high") matchesPayout = campaign.payout >= 600

      return matchesSearch && matchesCategory && matchesDifficulty && matchesPayout
    })

    // Sort campaigns
    filtered.sort((a, b) => {
      switch (sort) {
        case "payout":
          return b.payout - a.payout
        case "deadline":
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        case "participants":
          return b.participants - a.participants
        case "newest":
          return b.id.localeCompare(a.id)
        default:
          return 0
      }
    })

    setCampaigns(filtered)
  }

  const joinCampaign = (campaignId: string) => {
    toast({
      title: "Campaign joined!",
      description: "You've successfully joined the campaign. Check your dashboard for your referral link.",
    })
  }

  const clearFilters = () => {
    setSearchTerm("")
    setCategoryFilter("all")
    setDifficultyFilter("all")
    setPayoutFilter("all")
    setSortBy("payout")
    setCampaigns(allCampaigns)
  }

  const categories = ["all", "tech", "fashion", "food", "gaming", "education", "finance"]
  const difficulties = ["all", "easy", "medium", "hard"]
  const payoutRanges = ["all", "low", "medium", "high"]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-500/20 text-green-400 border-green-500"
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500"
      case "hard":
        return "bg-red-500/20 text-red-400 border-red-500"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <MotionOrbs />
      <Header />

      <div className="flex relative z-10">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-80 bg-transparent transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static lg:inset-0 pt-24 lg:pt-8`}
        >
          <div className="p-4 h-full">
            <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                    <SlidersHorizontal className="h-5 w-5" />
                    Filters & Search
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden text-gray-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 overflow-y-auto h-full pb-20">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Search Campaigns</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search campaigns, brands..."
                      value={searchTerm}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="pl-10 bg-gray-700/50 border-gray-600 text-gray-300 placeholder-gray-400"
                    />
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                {/* Category Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300">Category</label>
                  <Select value={categoryFilter} onValueChange={handleCategoryFilter}>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-300">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Difficulty Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300">Difficulty</label>
                  <Select value={difficultyFilter} onValueChange={handleDifficultyFilter}>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-300">
                      <SelectValue placeholder="All Difficulties" />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.map((difficulty) => (
                        <SelectItem key={difficulty} value={difficulty}>
                          {difficulty === "all"
                            ? "All Difficulties"
                            : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Payout Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300">Payout Range</label>
                  <Select value={payoutFilter} onValueChange={handlePayoutFilter}>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-300">
                      <SelectValue placeholder="All Payouts" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Payouts</SelectItem>
                      <SelectItem value="low">Low ($0 - $399)</SelectItem>
                      <SelectItem value="medium">Medium ($400 - $599)</SelectItem>
                      <SelectItem value="high">High ($600+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator className="bg-gray-700" />

                {/* Sort */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-300">Sort By</label>
                  <Select value={sortBy} onValueChange={handleSort}>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-300">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="payout">Highest Payout</SelectItem>
                      <SelectItem value="deadline">Deadline</SelectItem>
                      <SelectItem value="participants">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator className="bg-gray-700" />

                {/* Clear Filters */}
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                >
                  Clear All Filters
                </Button>

                {/* Quick Stats */}
                <div className="space-y-3 pt-4">
                  <h3 className="text-sm font-medium text-gray-300">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-700/30 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-blue-400">{campaigns.length}</div>
                      <div className="text-xs text-gray-400">Available</div>
                    </div>
                    <div className="bg-gray-700/30 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-green-400">
                        ${campaigns.reduce((sum, c) => sum + c.payout, 0)}
                      </div>
                      <div className="text-xs text-gray-400">Total Payout</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0 pt-4 lg:pt-0">
          <div className="container mx-auto px-4 py-8">
            {/* Header with Mobile Filter Toggle */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Browse Campaigns 🚀</h1>
                <p className="text-gray-300">Find the perfect marketing campaigns to join and start earning</p>
              </div>
              <Button
                onClick={() => setSidebarOpen(true)}
                variant="outline"
                className="lg:hidden border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Campaign Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-300">Active Campaigns</p>
                      <p className="text-2xl font-bold text-white">{campaigns.length}</p>
                    </div>
                    <div className="h-12 w-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-300">Total Payout Available</p>
                      <p className="text-2xl font-bold text-white">
                        ${campaigns.reduce((sum, c) => sum + c.payout, 0)}
                      </p>
                    </div>
                    <div className="h-12 w-12 bg-green-600/20 rounded-full flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-300">Open Spots</p>
                      <p className="text-2xl font-bold text-white">
                        {campaigns.reduce((sum, c) => sum + (c.maxParticipants - c.participants), 0)}
                      </p>
                    </div>
                    <div className="h-12 w-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Campaigns Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {campaigns.map((campaign) => (
                <Card
                  key={campaign.id}
                  className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-500">
                            {campaign.category}
                          </Badge>
                          <Badge variant="outline" className="text-green-400 border-green-500 bg-green-500/10">
                            ${campaign.payout}
                          </Badge>
                          <Badge variant="outline" className={getDifficultyColor(campaign.difficulty)}>
                            {campaign.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-purple-400 border-purple-500 bg-purple-500/10">
                            {campaign.participants}/{campaign.maxParticipants} joined
                          </Badge>
                          <Badge variant="outline" className="text-orange-400 border-orange-500 bg-orange-500/10">
                            {campaign.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg mb-1 text-white">{campaign.title}</CardTitle>
                        <CardDescription className="text-sm mb-2 text-gray-300">{campaign.description}</CardDescription>
                        <div className="text-sm text-gray-400 mb-2">
                          <span className="font-medium">Brand:</span> {campaign.brand}
                        </div>
                      </div>
                      <Button
                        onClick={() => joinCampaign(campaign.id)}
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Join Campaign
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Requirements */}
                    <div>
                      <h4 className="font-medium text-sm text-gray-300 mb-1">Requirements:</h4>
                      <div className="flex flex-wrap gap-1">
                        {campaign.requirements.map((req) => (
                          <Badge key={req} variant="outline" className="text-xs text-gray-400 border-gray-600">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <h4 className="font-medium text-sm text-gray-300 mb-1">Tags:</h4>
                      <div className="flex flex-wrap gap-1">
                        {campaign.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-gray-700/50 text-gray-300">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Campaign Info */}
                    <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-600">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{campaign.participants} participants</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">
                          {campaign.maxParticipants - campaign.participants} spots left
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {campaigns.length === 0 && (
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No campaigns found</h3>
                  <p className="text-gray-400 mb-4">Try adjusting your search or filter criteria</p>
                  <Button
                    onClick={clearFilters}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}

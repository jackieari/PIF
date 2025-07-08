"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/components/auth-provider"
import { DollarSign, TrendingUp, Users, Trophy, ExternalLink, Copy, MousePointer } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Header } from "@/components/header"

// Mock data - in real app, this would come from your database
const mockCampaigns = [
  {
    id: "1",
    title: "SaaS Product Launch",
    description: "Help us launch our new productivity app to college students.",
    payout: 500,
    deadline: "2024-01-15",
    category: "Tech",
    participants: 23,
    status: "active",
    joined: true,
    referralLink: "https://viral.app/r/saas-launch-user123",
    stats: { views: 1250, clicks: 89, conversions: 12 },
  },
  {
    id: "2",
    title: "Sustainable Fashion Brand",
    description: "Promote eco-friendly clothing to Gen Z.",
    payout: 750,
    deadline: "2024-01-20",
    category: "Fashion",
    participants: 45,
    status: "active",
    joined: false,
    referralLink: null,
    stats: null,
  },
  {
    id: "3",
    title: "Healthy Snack Campaign",
    description: "Create buzz around our new protein bars.",
    payout: 300,
    deadline: "2024-01-10",
    category: "Food",
    participants: 67,
    status: "completed",
    joined: true,
    referralLink: "https://viral.app/r/protein-bars-user123",
    stats: { views: 890, clicks: 45, conversions: 8 },
  },
]

const mockStats = {
  totalEarned: 1250,
  campaignsCompleted: 8,
  totalClicks: 2340,
  totalViews: 15600,
  rank: 12,
}

// Motion Orbs Component
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

export function StudentDashboard() {
  const { user, logout } = useAuth()
  const { toast } = useToast()
  const [activeCampaigns] = useState(mockCampaigns.filter((c) => c.joined && c.status === "active"))
  const [availableCampaigns] = useState(mockCampaigns.filter((c) => !c.joined && c.status === "active"))

  const copyReferralLink = (link: string) => {
    navigator.clipboard.writeText(link)
    toast({
      title: "Link copied!",
      description: "Your referral link has been copied to clipboard.",
    })
  }

  const joinCampaign = (campaignId: string) => {
    toast({
      title: "Campaign joined!",
      description: "You've successfully joined the campaign. Your referral link will be generated shortly.",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <MotionOrbs />
      <Header />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user?.name}! 👋</h1>
          <p className="text-gray-300">Here's your marketing performance overview</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Earned</CardTitle>
              <DollarSign className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">${mockStats.totalEarned}</div>
              <p className="text-xs text-gray-400">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Campaigns Completed</CardTitle>
              <Trophy className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{mockStats.campaignsCompleted}</div>
              <p className="text-xs text-gray-400">+2 this month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Clicks</CardTitle>
              <MousePointer className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{mockStats.totalClicks.toLocaleString()}</div>
              <p className="text-xs text-gray-400">+8% from last week</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Leaderboard Rank</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">#{mockStats.rank}</div>
              <p className="text-xs text-gray-400">↑3 positions</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <TabsTrigger
              value="active"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300"
            >
              Active Campaigns ({activeCampaigns.length})
            </TabsTrigger>
            <TabsTrigger
              value="available"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300"
            >
              Available Campaigns ({availableCampaigns.length})
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-300"
            >
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {activeCampaigns.length === 0 ? (
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No Active Campaigns</h3>
                  <p className="text-gray-400 mb-4">Join some campaigns to start earning!</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Browse Available Campaigns
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {activeCampaigns.map((campaign) => (
                  <Card
                    key={campaign.id}
                    className="bg-gray-800/50 backdrop-blur-sm border-l-4 border-l-blue-500 border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-500">
                              {campaign.category}
                            </Badge>
                            <Badge variant="outline" className="text-green-400 border-green-500 bg-green-500/10">
                              ${campaign.payout}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl text-white">{campaign.title}</CardTitle>
                          <CardDescription className="mt-2 text-gray-300">{campaign.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Performance Stats */}
                      {campaign.stats && (
                        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400">{campaign.stats.views}</div>
                            <div className="text-sm text-gray-400">Views</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">{campaign.stats.clicks}</div>
                            <div className="text-sm text-gray-400">Clicks</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">{campaign.stats.conversions}</div>
                            <div className="text-sm text-gray-400">Conversions</div>
                          </div>
                        </div>
                      )}

                      {/* Referral Link */}
                      {campaign.referralLink && (
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Your Referral Link:</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={campaign.referralLink}
                              readOnly
                              className="flex-1 px-3 py-2 border border-gray-600 rounded-md bg-gray-700/50 text-sm text-gray-300 backdrop-blur-sm"
                            />
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => copyReferralLink(campaign.referralLink!)}
                              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              asChild
                              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                            >
                              <a href={campaign.referralLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{campaign.participants} participants</span>
                        <span>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="available" className="space-y-6">
            <div className="grid gap-6">
              {availableCampaigns.map((campaign) => (
                <Card
                  key={campaign.id}
                  className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 hover:scale-105 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-500">
                            {campaign.category}
                          </Badge>
                          <Badge variant="outline" className="text-green-400 border-green-500 bg-green-500/10">
                            ${campaign.payout}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-white">{campaign.title}</CardTitle>
                        <CardDescription className="mt-2 text-gray-300">{campaign.description}</CardDescription>
                      </div>
                      <Button
                        onClick={() => joinCampaign(campaign.id)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Join Campaign
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{campaign.participants} participants</span>
                      <span>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardContent className="text-center py-12">
                <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Completed Campaigns</h3>
                <p className="text-gray-400">Your completed campaigns will appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

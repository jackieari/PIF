"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { DollarSign, TrendingUp, Users, Trophy, Calendar, ExternalLink, Mail, MapPin, Briefcase } from "lucide-react"

// Mock profile data - in real app, this would be fetched based on the ID
const profileData = {
  id: "1",
  name: "Sarah Chen",
  email: "sarah@university.edu",
  bio: "Marketing student passionate about digital campaigns and social media strategy. Love creating content that drives engagement and builds communities.",
  location: "San Francisco, CA",
  university: "UC Berkeley",
  major: "Marketing & Communications",
  joinDate: "2023-08-15",
  totalEarned: 3250,
  campaignsCompleted: 15,
  totalClicks: 8420,
  totalViews: 45600,
  rank: 1,
  badge: "Gold Creator",
  skills: ["Social Media Marketing", "Content Creation", "Influencer Marketing", "Analytics", "Copywriting"],
  completedCampaigns: [
    {
      id: "1",
      title: "SaaS Product Launch",
      brand: "TechCorp",
      category: "Tech",
      earned: 500,
      completedDate: "2024-01-10",
      performance: { views: 2100, clicks: 156, conversions: 23 },
    },
    {
      id: "2",
      title: "Sustainable Fashion Brand",
      brand: "EcoWear",
      category: "Fashion",
      earned: 750,
      completedDate: "2024-01-05",
      performance: { views: 3200, clicks: 234, conversions: 34 },
    },
    {
      id: "3",
      title: "Fitness App Promotion",
      brand: "FitLife",
      category: "Fitness",
      earned: 400,
      completedDate: "2023-12-28",
      performance: { views: 1800, clicks: 123, conversions: 18 },
    },
  ],
}

export default function ProfilePage({ params }: { params: { id: string } }) {
  const profile = profileData // In real app, fetch based on params.id

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Motion Orbs Component */}
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
      <Header />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Profile Header */}
        <Card className="mb-8 bg-gray-800/50 backdrop-blur-sm border-gray-700">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="bg-blue-100 text-blue-600 text-2xl">{profile.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
                    <div className="flex items-center gap-2 text-gray-300 mt-1">
                      <Mail className="h-4 w-4" />
                      <span>{profile.email}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">#{profile.rank} Creator</Badge>
                    <Badge variant="outline">{profile.badge}</Badge>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{profile.bio}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{profile.university}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {new Date(profile.joinDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Creator
                </Button>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Share Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${profile.totalEarned}</div>
              <p className="text-xs text-muted-foreground">Across all campaigns</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Campaigns Completed</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{profile.campaignsCompleted}</div>
              <p className="text-xs text-muted-foreground">Successfully finished</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{profile.totalViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Content impressions</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leaderboard Rank</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#{profile.rank}</div>
              <p className="text-xs text-muted-foreground">Out of all creators</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="campaigns" className="space-y-6">
          <TabsList>
            <TabsTrigger value="campaigns">Completed Campaigns</TabsTrigger>
            <TabsTrigger value="skills">Skills & Expertise</TabsTrigger>
            <TabsTrigger value="performance">Performance Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="grid gap-6">
              {profile.completedCampaigns.map((campaign) => (
                <Card key={campaign.id} className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{campaign.category}</Badge>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            +${campaign.earned}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-white">{campaign.title}</CardTitle>
                        <CardDescription className="text-gray-300">
                          Campaign for {campaign.brand} • Completed{" "}
                          {new Date(campaign.completedDate).toLocaleDateString()}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{campaign.performance.views}</div>
                        <div className="text-sm text-gray-600">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{campaign.performance.clicks}</div>
                        <div className="text-sm text-gray-600">Clicks</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{campaign.performance.conversions}</div>
                        <div className="text-sm text-gray-600">Conversions</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Skills & Expertise</CardTitle>
                <CardDescription className="text-gray-300">
                  Areas of specialization and marketing skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="font-semibold text-white">{profile.university}</div>
                  <div className="text-gray-300">{profile.major}</div>
                  <div className="text-sm text-gray-500">Expected Graduation: 2025</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Engagement Rate</CardTitle>
                  <CardDescription className="text-gray-300">Click-through rate across all campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">18.5%</div>
                  <Progress value={85} className="mb-2" />
                  <p className="text-sm text-gray-600">Above average (12.3%)</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Conversion Rate</CardTitle>
                  <CardDescription className="text-gray-300">Percentage of clicks that convert</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">14.2%</div>
                  <Progress value={78} className="mb-2" />
                  <p className="text-sm text-gray-600">Excellent performance</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Campaign Success Rate</CardTitle>
                  <CardDescription className="text-gray-300">
                    Percentage of campaigns completed successfully
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">93.8%</div>
                  <Progress value={94} className="mb-2" />
                  <p className="text-sm text-gray-600">15 of 16 campaigns completed</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Average Earnings</CardTitle>
                  <CardDescription className="text-gray-300">Per campaign completion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">$217</div>
                  <Progress value={72} className="mb-2" />
                  <p className="text-sm text-gray-600">Growing month over month</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Book This Creator CTA */}
        <Card className="mt-8 bg-gray-800/50 backdrop-blur-sm border-gray-700">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Want to work with {profile.name.split(" ")[0]}?</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              This creator has proven results and expertise in marketing campaigns. Get in touch to discuss your next
              project.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button size="lg" variant="outline">
                <Briefcase className="h-4 w-4 mr-2" />
                Hire for Campaign
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

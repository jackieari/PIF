"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, TrendingUp } from "lucide-react"
import { Header } from "@/components/header"
import Link from "next/link"

// Mock leaderboard data
const leaderboardData = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah@university.edu",
    totalEarned: 3250,
    campaignsCompleted: 15,
    totalClicks: 8420,
    totalViews: 45600,
    rank: 1,
    badge: "Gold Creator",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    email: "marcus@college.edu",
    totalEarned: 2890,
    campaignsCompleted: 12,
    totalClicks: 7230,
    totalViews: 38900,
    rank: 2,
    badge: "Silver Creator",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    email: "emma@university.edu",
    totalEarned: 2650,
    campaignsCompleted: 11,
    totalClicks: 6890,
    totalViews: 35200,
    rank: 3,
    badge: "Bronze Creator",
  },
  {
    id: "4",
    name: "Alex Kim",
    email: "alex@college.edu",
    totalEarned: 2100,
    campaignsCompleted: 9,
    totalClicks: 5420,
    totalViews: 28700,
    rank: 4,
    badge: "Rising Star",
  },
  {
    id: "5",
    name: "Jordan Taylor",
    email: "jordan@university.edu",
    totalEarned: 1850,
    campaignsCompleted: 8,
    totalClicks: 4890,
    totalViews: 24300,
    rank: 5,
    badge: "Rising Star",
  },
  {
    id: "6",
    name: "Maya Patel",
    email: "maya@college.edu",
    totalEarned: 1620,
    campaignsCompleted: 7,
    totalClicks: 4200,
    totalViews: 21800,
    rank: 6,
    badge: "Newcomer",
  },
  {
    id: "7",
    name: "David Wilson",
    email: "david@university.edu",
    totalEarned: 1450,
    campaignsCompleted: 6,
    totalClicks: 3780,
    totalViews: 19500,
    rank: 7,
    badge: "Newcomer",
  },
  {
    id: "8",
    name: "Lisa Zhang",
    email: "lisa@college.edu",
    totalEarned: 1290,
    campaignsCompleted: 5,
    totalClicks: 3420,
    totalViews: 17200,
    rank: 8,
    badge: "Newcomer",
  },
]

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-6 w-6 text-yellow-500" />
    case 2:
      return <Medal className="h-6 w-6 text-gray-400" />
    case 3:
      return <Award className="h-6 w-6 text-amber-600" />
    default:
      return <span className="text-lg font-bold text-gray-600">#{rank}</span>
  }
}

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case "Gold Creator":
      return "bg-yellow-100 text-yellow-800 border-yellow-300"
    case "Silver Creator":
      return "bg-gray-100 text-gray-800 border-gray-300"
    case "Bronze Creator":
      return "bg-amber-100 text-amber-800 border-amber-300"
    case "Rising Star":
      return "bg-purple-100 text-purple-800 border-purple-300"
    default:
      return "bg-blue-100 text-blue-800 border-blue-300"
  }
}

export default function LeaderboardPage() {
  const topThree = leaderboardData.slice(0, 3)
  const others = leaderboardData.slice(3)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🏆 Creator Leaderboard</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how you stack up against other marketing creators. Earn more, climb higher!
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Top Performers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* 2nd Place */}
            <div className="order-1 md:order-1">
              <Card className="text-center border-2 border-gray-300 bg-gradient-to-b from-gray-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <Medal className="h-12 w-12 text-gray-400" />
                  </div>
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarFallback className="bg-gray-100 text-gray-600 text-lg">
                      {topThree[1]?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{topThree[1]?.name}</CardTitle>
                  <Badge className={getBadgeColor(topThree[1]?.badge)} variant="outline">
                    {topThree[1]?.badge}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">${topThree[1]?.totalEarned}</div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>{topThree[1]?.campaignsCompleted} campaigns</div>
                    <div>{topThree[1]?.totalViews.toLocaleString()} views</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 1st Place */}
            <div className="order-2 md:order-2">
              <Card className="text-center border-2 border-yellow-300 bg-gradient-to-b from-yellow-50 to-white transform md:scale-110">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <Trophy className="h-16 w-16 text-yellow-500" />
                  </div>
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarFallback className="bg-yellow-100 text-yellow-600 text-xl">
                      {topThree[0]?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl">{topThree[0]?.name}</CardTitle>
                  <Badge className={getBadgeColor(topThree[0]?.badge)} variant="outline">
                    {topThree[0]?.badge}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-green-600 mb-2">${topThree[0]?.totalEarned}</div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>{topThree[0]?.campaignsCompleted} campaigns</div>
                    <div>{topThree[0]?.totalViews.toLocaleString()} views</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 3rd Place */}
            <div className="order-3 md:order-3">
              <Card className="text-center border-2 border-amber-300 bg-gradient-to-b from-amber-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <Award className="h-12 w-12 text-amber-600" />
                  </div>
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarFallback className="bg-amber-100 text-amber-600 text-lg">
                      {topThree[2]?.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{topThree[2]?.name}</CardTitle>
                  <Badge className={getBadgeColor(topThree[2]?.badge)} variant="outline">
                    {topThree[2]?.badge}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">${topThree[2]?.totalEarned}</div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>{topThree[2]?.campaignsCompleted} campaigns</div>
                    <div>{topThree[2]?.totalViews.toLocaleString()} views</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Rest of Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Full Rankings</CardTitle>
            <CardDescription>Complete leaderboard showing all active creators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {others.map((creator) => (
                <div
                  key={creator.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12">{getRankIcon(creator.rank)}</div>
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-100 text-blue-600">{creator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-lg">{creator.name}</div>
                      <div className="text-sm text-gray-600">{creator.email}</div>
                      <Badge className={getBadgeColor(creator.badge)} variant="outline" size="sm">
                        {creator.badge}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">${creator.totalEarned}</div>
                      <div className="text-xs text-gray-600">Earned</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{creator.campaignsCompleted}</div>
                      <div className="text-xs text-gray-600">Campaigns</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{creator.totalClicks.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Clicks</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{creator.totalViews.toLocaleString()}</div>
                      <div className="text-xs text-gray-600">Views</div>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/profile/${creator.id}`}>View Profile</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="py-12">
              <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Climb the Rankings?</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Join active campaigns, create engaging content, and start earning your way to the top!
              </p>
              <Button size="lg" asChild>
                <Link href="/campaigns">Browse Campaigns</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

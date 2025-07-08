"use client"

import { useAuth } from "@/components/auth-provider"
import { StudentDashboard } from "@/components/student-dashboard"
import { BrandDashboard } from "@/components/brand-dashboard"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/campaigns")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return user.user_type === "student" ? <StudentDashboard /> : <BrandDashboard />
}

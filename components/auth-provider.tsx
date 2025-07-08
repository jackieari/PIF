"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type User = {
  id: string
  email: string
  name: string
  user_type: "student" | "brand"
  avatar_url?: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string, userType: "student" | "brand") => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("viral_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Mock login - in real app, this would call your auth API
    const mockUser: User = {
      id: "1",
      email,
      name: email.split("@")[0],
      user_type: email.includes("brand") ? "brand" : "student",
    }
    setUser(mockUser)
    localStorage.setItem("viral_user", JSON.stringify(mockUser))
  }

  const signup = async (email: string, password: string, name: string, userType: "student" | "brand") => {
    // Mock signup - in real app, this would call your auth API
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      user_type: userType,
    }
    setUser(mockUser)
    localStorage.setItem("viral_user", JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("viral_user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

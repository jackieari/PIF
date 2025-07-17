"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, ArrowRight, Shield, Users, Heart } from "lucide-react"
import { useRouter } from "next/navigation"

// Mock wallet connection - in real app this would use RainbowKit/wagmi
const mockWalletConnect = async () => {
  // Simulate wallet connection delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Mock wallet addresses for demo
  const mockAddresses = [
    "0x742d35Cc6634C0532925a3b8D4C9db96590b5c8e",
    "0x8ba1f109551bD432803012645Hac136c22C501e",
    "0x1234567890123456789012345678901234567890",
  ]

  return mockAddresses[Math.floor(Math.random() * mockAddresses.length)]
}

// Mock function to check if user exists
const checkUserExists = async (address: string) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // For demo, randomly decide if user exists
  return Math.random() > 0.7 // 30% chance user already exists
}

export default function AuthPage() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleConnectWallet = async () => {
    try {
      setIsConnecting(true)
      setError("")

      // Step 1: Connect wallet
      const walletAddress = await mockWalletConnect()

      // Step 2: Check if user exists
      const userExists = await checkUserExists(walletAddress)

      if (userExists) {
        // User exists, redirect to dashboard
        router.push("/dashboard")
      } else {
        // New user, redirect to onboarding with wallet address
        router.push(`/onboarding?address=${walletAddress}`)
      }
    } catch (err) {
      setError("Failed to connect wallet. Please try again.")
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center justify-center p-6">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10rem] left-[-25rem] w-[56.25rem] h-[56.25rem] bg-emerald-200/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-25rem] w-[50rem] h-[50rem] bg-emerald-200/15 rounded-full filter blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-2xl text-gray-900">PIF Token</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Connect your wallet to join the community</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {/* Connect Wallet Button */}
          <Button
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-medium mb-6 relative overflow-hidden"
          >
            {isConnecting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Connecting...
              </>
            ) : (
              <>
                <Wallet className="w-5 h-5 mr-3" />
                Connect Wallet
                <ArrowRight className="w-5 h-5 ml-3" />
              </>
            )}
          </Button>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Supported Wallets */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 mb-4">Supported wallets</p>
            <div className="flex justify-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/placeholder.svg?height=24&width=24&text=MM" alt="MetaMask" className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/placeholder.svg?height=24&width=24&text=WC" alt="WalletConnect" className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/placeholder.svg?height=24&width=24&text=CB" alt="Coinbase" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-600">Secure wallet-based authentication</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-600">Join 8,943+ token holders</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-600">Vote on charitable campaigns</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            By connecting, you agree to our{" "}
            <a href="#" className="text-emerald-600 hover:text-emerald-700">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-emerald-600 hover:text-emerald-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

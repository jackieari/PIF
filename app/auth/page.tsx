'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Shield, Users, Heart } from 'lucide-react'
import { useAccount } from 'wagmi'
import { usePrivy } from '@privy-io/react-auth'

export default function AuthPage() {
  const [isChecking, setIsChecking] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const { address, isConnected } = useAccount()
  const { ready, authenticated, login, logout } = usePrivy()

  const handleCheckWallet = async () => {
    if (!isConnected || !address) {
      setError('Please connect your wallet first.')
      return
    }

    try {
      setIsChecking(true)
      setError('')

      const response = await fetch('/api/check-wallet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ walletAddress: address }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to check wallet')

      if (data.exists) {
        router.push('/dashboard')
      } else {
        router.push(`/onboarding?address=${address}`)
      }
    } catch (err: any) {
      setError(err.message || 'Wallet check failed.')
    } finally {
      setIsChecking(false)
    }
  }

  useEffect(() => {
    if (isConnected && address) {
      handleCheckWallet()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, address])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center justify-center p-6">
      {/* Background */}
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Connect your wallet to join the community
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="mb-6 text-center">
            {!ready ? (
              <div className="text-gray-500">Loading...</div>
            ) : authenticated ? (
              <Button variant="outline" onClick={logout}>
                Disconnect Wallet
              </Button>
            ) : (
              <Button variant="emerald" onClick={login}>
                Connect Wallet
              </Button>
            )}
          </div>

          {isChecking && (
            <div className="text-center text-sm text-gray-500 mb-4">
              Checking wallet status...
            </div>
          )}

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
              <span className="text-sm text-gray-600">
                Secure wallet-based authentication
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-600">
                Join 8,943+ token holders
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-600">
                Vote on charitable campaigns
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            By connecting, you agree to our{' '}
            <a href="#" className="text-emerald-600 hover:text-emerald-700">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-emerald-600 hover:text-emerald-700">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

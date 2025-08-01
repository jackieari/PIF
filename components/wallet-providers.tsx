'use client'

import { PrivyProvider } from '@privy-io/react-auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from '@privy-io/wagmi'
import { wagmiConfig } from '../lib/walletConfig'

const queryClient = new QueryClient()

export default function WalletProviders({ children }) {
  const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID

  if (!privyAppId) {
    console.error("Missing Privy App ID")
    return null
  }

  return (
    <PrivyProvider appId={privyAppId}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  )
}

'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from '@privy-io/wagmi';
import { wagmiConfig } from '../lib/walletConfig';

const queryClient = new QueryClient();

export default function WalletProviders({ children }: { children: React.ReactNode }) {
  const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (!privyAppId) {
    console.error("Missing Privy App ID (check NEXT_PUBLIC_PRIVY_APP_ID in your .env file)");
    return null;
  }

  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        embeddedWallets: {
          ethereum: {
            // Ensures EVERY user gets an embedded wallet on login
            createOnLogin: "all-users", // "users-without-wallets" if you want this only for social/email logins
          },
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}

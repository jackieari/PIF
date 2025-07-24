// wallet-providers.tsx
import { PrivyProvider } from '@privy-io/react-auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from '@privy-io/wagmi';
import { wagmiConfig } from '../lib/walletConfig';

const queryClient = new QueryClient();

export default function WalletProviders({ children }) {
  return (
    <PrivyProvider appId="YOUR_PRIVY_APP_ID">
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}

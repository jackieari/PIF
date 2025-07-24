import { http } from 'viem';
import { createConfig } from '@privy-io/wagmi'; 
import { mainnet, polygon, optimism, arbitrum } from 'viem/chains';

const chains = [mainnet, polygon, optimism, arbitrum];

export const wagmiConfig = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
});

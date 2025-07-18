import { http } from 'viem'
import { createConfig } from 'wagmi'
import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { coinbaseWallet } from 'wagmi/connectors'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'

const chains = [mainnet, polygon, optimism, arbitrum]

const { connectors } = getDefaultWallets({
  appName: 'PIF',
  projectId: '2ec555e9a319909a9eec34fd08c34a7b',
  chains,
})

// Add Coinbase Wallet with smart wallet support
const coinbaseConnector = coinbaseWallet({
  appName: 'PIF',
  preference: 'smartWalletOnly', // Use 'all' to support both smart wallets and EOA
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    ...connectors,
    coinbaseConnector, // Add the smart wallet connector
  ],
  chains,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
})
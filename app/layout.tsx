import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import WalletProviders from '@/components/wallet-providers'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Viral - Marketing Platform for Students",
  description: "Join brand campaigns, earn money, build your marketing portfolio",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProviders>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </WalletProviders>
      </body>
    </html>
  )
}
import { Button } from "@/components/ui/button"
import { Wallet, Play } from "lucide-react"
import CampaignCarousel from "@//components/campaign-carousel"
import FaqSection from "@//components/faq-section"
import CommunityStats from "@//components/community-stats"
import RealTimeDonations from "@//components/real-time-donations"
import WhyPifExists from "@//components/why-pif-exists"

export default function LandingPage() {
  return (
    <div className="bg-[#F9FAFB] relative overflow-hidden min-h-screen">
      {/* Background Gradients */}
      <div className="absolute top-[-10rem] left-[-25rem] w-[56.25rem] h-[56.25rem] bg-emerald-200/40 rounded-full filter blur-3xl opacity-50" />
      <div className="absolute top-[60rem] right-[-30rem] w-[50rem] h-[50rem] bg-emerald-200/30 rounded-full filter blur-3xl opacity-60" />
      <div className="absolute bottom-[5rem] left-[-20rem] w-[50rem] h-[50rem] bg-emerald-200/20 rounded-full filter blur-3xl opacity-70" />

      {/* Header */}
      <header className="bg-transparent relative z-10">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#campaigns" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Campaigns
            </a>
            <a href="#governance" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Governance
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </a>
            <a href="#community" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Community
            </a>
          </nav>
        
  {/* to fix the issue */}
   <div className="flex flex-col space-y-2">
  <Button
    variant="ghost"
    className="text-gray-700 hover:text-gray-900 hover:bg-white/20 font-medium transition-colors"
    asChild
  >
    <a href="/auth"> Log in →</a>
  </Button>
  <Button
  variant="ghost"
  className="text-gray-700 hover:text-gray-900 hover:bg-white/20 font-medium transition-colors"
  asChild
>
  <a href="/admin" className="flex items-center gap-1">
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
    Admin Access
  </a>
</Button>

</div>

        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          {/* Notification Banner */}
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-2">
              PIF Token voting starts next week.{" "}
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn more →
              </a>
            </p>
          </div>

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Community-
              <br />
              Powered Crypto
              <br />
              Donations
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              PIF Token holders vote biweekly on causes that matter.
              <br />
              Fund campaigns with USDC. Track real impact. Build a better
              <br />
              world together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-medium" asChild>
                <a href="/auth">
                  <Wallet className="w-5 h-5 mr-2" />
                  Connect Wallet
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium bg-transparent"
              >
                Browse Campaigns →
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">$2.4M USDC</div>
                <div className="text-gray-600">Total Donated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
                <div className="text-gray-600">Active Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">8,943</div>
                <div className="text-gray-600">Token Holders</div>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <section className="py-24 sm:py-32">
            <div className="bg-[#F7F5F2] rounded-2xl p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="lg:pr-8">
                  <h2 className="text-base font-semibold leading-7 text-emerald-600">Real-World Impact</h2>
                  <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Building Hope, One Home at a Time
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Watch how your contributions transform lives and strengthen communities. Every donation builds more
                    than just shelter—it creates foundations for brighter futures.
                  </p>
                  <div className="mt-8">
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                      View Impact Report →
                    </Button>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-900/10">
                  <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                    <img
                      src="/placeholder.svg?height=600&width=1000"
                      alt="Building Hope: Rural Housing Initiative"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <button className="absolute inset-0 flex items-center justify-center group">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </button>
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="font-medium">Building Hope: Rural Housing Initiative</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Active Voting Round Section */}
          <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-base font-semibold leading-7 text-emerald-600">Community Governance</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Active Voting Round</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Your vote matters. Use your PIF tokens to support the causes you believe in.
                </p>
              </div>

              <div className="mt-12 bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-600">Voting round ends in:</p>
                  <p className="text-2xl font-bold text-gray-900">3 days, 14 hours</p>
                </div>
                <div className="w-full md:w-px h-px md:h-12 bg-gray-200"></div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-600">Your available voting power:</p>
                  <p className="text-2xl font-bold text-emerald-600">250 PIF</p>
                </div>
                <div className="w-full md:w-auto">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                    <a href="/auth">Connect Wallet to Participate</a>
                  </Button>
                </div>
              </div>

              <CampaignCarousel />
            </div>
          </section>
        </div>

        <CommunityStats />
        <RealTimeDonations />
        <WhyPifExists />

        {/* CTA Section */}
        <section className="bg-emerald-950">
          <div className="container mx-auto px-6 py-24 sm:py-32 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join thousands of token holders making a difference.
              <br />
              Ready to make an impact?
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-base font-medium">
                Become a Partner
              </Button>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <FaqSection />
      </main>

      {/* Footer and PIF background container */}
      <div className="bg-white relative">
        <footer className="border-t border-gray-200 py-16 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <span className="font-bold text-xl text-gray-900">PIF Token</span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Empowering communities through decentralized philanthropy. PIF Token enables transparent, democratic
                  funding for causes that matter most.
                </p>
                <p className="text-gray-500 text-sm">© copyright PIF Token 2024. All rights reserved.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-6">Platform</h4>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Browse Campaigns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Voting History
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Impact Reports
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Token Economics
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-6">Community</h4>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Leaderboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-6">Partners</h4>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Become a Partner
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Submit Proposal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Admin Portal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/* Gradient PIF Letters Section */}
        <div className="text-center pt-4 pb-16 pointer-events-none">
          <div className="text-[20rem] font-black text-gray-200 select-none whitespace-nowrap">PIF</div>
        </div>
      </div>
    </div>
  )
}
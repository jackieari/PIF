"use client"

import { Shield, Users, Coins, Heart } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function WhyPifExists() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#F7F5F2] py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-emerald-600">PIF</span> Exists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming trading into a force for good through transparent, automated giving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Chart and Mission */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Every trade using PIF tokens automatically supports causes that make a difference. 
                We believe making money and doing good shouldn't be separate goals.
              </p>
            </div>

            {/* Fee Distribution Chart */}
            <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-8">Fee Distribution</h4>

              {/* Donut Chart */}
              <div className="relative w-64 h-64 mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  {/* Background circle */}
                  <circle cx="80" cy="80" r="50" fill="none" stroke="#f3f4f6" strokeWidth="16" />

                  {/* 50% Verified Charities - Dark Emerald */}
                  <circle
                    cx="80"
                    cy="80"
                    r="50"
                    fill="none"
                    stroke="#047857"
                    strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 50 * 0.5} ${2 * Math.PI * 50}`}
                    strokeDashoffset="0"
                    className={`transition-all duration-2000 ease-out ${isVisible ? "opacity-100" : "opacity-0"}`}
                    style={{
                      strokeDashoffset: isVisible ? "0" : `${2 * Math.PI * 50}`,
                    }}
                  />

                  {/* 40% Token Creators - Blue */}
                  <circle
                    cx="80"
                    cy="80"
                    r="50"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 50 * 0.4} ${2 * Math.PI * 50}`}
                    className={`transition-all duration-2000 ease-out delay-500 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      strokeDashoffset: isVisible
                        ? `-${2 * Math.PI * 50 * 0.5}`
                        : `-${2 * Math.PI * 50 * 0.5} + ${2 * Math.PI * 50 * 0.4}`,
                    }}
                  />

                  {/* 10% Influencers - Emerald */}
                  <circle
                    cx="80"
                    cy="80"
                    r="50"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 50 * 0.1} ${2 * Math.PI * 50}`}
                    className={`transition-all duration-2000 ease-out delay-1000 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      strokeDashoffset: isVisible
                        ? `-${2 * Math.PI * 50 * 0.9}`
                        : `-${2 * Math.PI * 50 * 0.9} + ${2 * Math.PI * 50 * 0.1}`,
                    }}
                  />
                </svg>

                {/* Center text with animation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className={`text-3xl font-bold text-emerald-600 transition-all duration-1000 delay-1500 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                  >
                    100%
                  </div>
                  <div
                    className={`text-gray-600 text-sm transition-all duration-1000 delay-1700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  >
                    Impact
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2 w-full">
                <div
                  className={`flex items-center gap-3 transition-all duration-500 delay-2000 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                >
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-gray-600 text-sm font-medium">15% Attention</span>
                </div>
                <div
                  className={`flex items-center gap-3 transition-all duration-500 delay-2200 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                >
                  <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                  <span className="text-gray-600 text-sm font-medium">30% Partners</span>
                </div>
                <div
                  className={`flex items-center gap-3 transition-all duration-500 delay-2400 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                >
                  <div className="w-3 h-3 bg-emerald-700 rounded"></div>
                  <span className="text-gray-600 text-sm font-medium">50%  Community & Charity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - How It Works Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h3>

            {/* Token Creators Card */}
            <div
              className={`bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-600 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Coins className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Community & Charity Impact</h4>
                  <p className="text-gray-600">
                    50% of all fees go directly to vetted charities or community efforts, selected through transparent and inclusive processes.
                    
                  </p>
                </div>
              </div>
            </div>

            {/* Community Builders Card */}
            <div
              className={`bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-600 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Partner Support</h4>
                  <p className="text-gray-600">
                    30% is directed to partner organizations helping grow the PIF ecosystem and deliver impact on the ground.
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Charities Card */}
            <div
              className={`bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-600 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Attention</h4>
                  <p className="text-gray-600">
                    15% of all fees go to Attention, the company behind PIF, 
                    to support ongoing development, operations, and scaling of the platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Transparent Impact Card */}
            <div
              className={`bg-emerald-50 rounded-xl p-6 border border-emerald-200 shadow-sm transition-all duration-600 delay-900 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2"> Emergency Fund</h4>
                  <p className="text-gray-600">
                   5% is set aside in a dedicated emergency fund to quickly respond to urgent community needs, natural disasters, or critical platform funding situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

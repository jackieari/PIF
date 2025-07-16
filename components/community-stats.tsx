import type React from "react"
import { Heart } from "lucide-react"

const FloatingImage = ({
  src,
  alt,
  className,
  style,
}: {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}) => (
  <img
    src={src || "/placeholder.svg"}
    alt={alt}
    className={`absolute rounded-full object-cover shadow-lg ${className}`}
    style={style}
  />
)

const FloatingIcon = ({
  icon: Icon,
  className,
  style,
}: { icon: React.ElementType; className?: string; style?: React.CSSProperties }) => (
  <div
    className={`absolute bg-white rounded-full shadow-lg p-3 flex items-center justify-center ${className}`}
    style={style}
  >
    <Icon className="w-6 h-6 text-gray-700" />
  </div>
)

export default function CommunityStats() {
  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            25% { transform: translate(10px, -20px) rotate(-2deg); }
            50% { transform: translate(-10px, 0px) rotate(2deg); }
            75% { transform: translate(10px, -10px) rotate(-2deg); }
            100% { transform: translate(0px, 0px) rotate(0deg); }
          }
        `}
      </style>
      <section className="bg-[#F7F5F2] py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="relative h-80 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center max-w-xl relative z-10">
              Join a growing community of thousands making a real-world impact together.
            </h2>

            {/* Floating elements */}
            <FloatingImage
              src="/images/real-person-1.png"
              alt="Community member"
              className="w-16 h-16"
              style={{
                top: "5%",
                left: "10%",
                animation: "float 10s ease-in-out infinite 0s",
              }}
            />
            <FloatingImage
              src="/images/real-person-5.png"
              alt="Community member"
              className="w-12 h-12"
              style={{
                top: "15%",
                right: "5%",
                animation: "float 12s ease-in-out infinite -2s",
              }}
            />
            <FloatingImage
              src="/images/real-person-2.png"
              alt="Community member"
              className="w-14 h-14 filter blur-sm"
              style={{
                top: "55%",
                left: "0%",
                animation: "float 14s ease-in-out infinite -4s",
              }}
            />
            <FloatingIcon
              icon={Heart}
              className="bg-red-100 text-red-500"
              style={{
                top: "65%",
                right: "15%",
                animation: "float 11s ease-in-out infinite -6s",
              }}
            />
            <FloatingImage
              src="/images/real-person-3.png"
              alt="Community member"
              className="w-16 h-16"
              style={{
                bottom: "10%",
                left: "25%",
                animation: "float 15s ease-in-out infinite -8s",
              }}
            />
            <FloatingImage
              src="/images/real-person-6.png"
              alt="Community member"
              className="w-12 h-12"
              style={{
                bottom: "5%",
                right: "30%",
                animation: "float 13s ease-in-out infinite -10s",
              }}
            />
            <FloatingImage
              src="/images/real-person-4.png"
              alt="Community member"
              className="w-14 h-14 filter blur-sm"
              style={{
                top: "0%",
                right: "25%",
                animation: "float 14s ease-in-out infinite -12s",
              }}
            />
            <FloatingImage
              src="/images/real-person-7.png"
              alt="Community member"
              className="w-16 h-16"
              style={{
                bottom: "0%",
                left: "55%",
                animation: "float 12s ease-in-out infinite -14s",
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}

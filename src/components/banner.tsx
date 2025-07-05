"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const seasons = [
  {
    id: "summer",
    title: "Summer",
    subtitle: "Essentials",
    description: "Beat the heat with our curated summer collection",
    bgGradient: "from-amber-400/60 via-orange-400/45 to-yellow-500/50",
    glassOverlay: "bg-gradient-to-br from-amber-100/40 via-orange-50/25 to-yellow-100/30",
    wheelColor: "text-amber-600",
    buttonColor: "bg-amber-600 hover:bg-amber-700",
    centerImage: "/placeholder.svg?height=160&width=160",
    wheelImages: [
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
    ],
    floatingImages: [
      { src: "/placeholder.svg?height=80&width=80", x: 15, y: 10 },
      { src: "/placeholder.svg?height=70&width=70", x: 65, y: 25 },
      { src: "/placeholder.svg?height=90&width=90", x: 25, y: 45 },
      { src: "/placeholder.svg?height=75&width=75", x: 75, y: 60 },
      { src: "/placeholder.svg?height=85&width=85", x: 45, y: 75 },
      { src: "/placeholder.svg?height=65&width=65", x: 85, y: 15 },
      { src: "/placeholder.svg?height=80&width=80", x: 10, y: 80 },
    ],
  },
  {
    id: "winter",
    title: "Winter",
    subtitle: "Warmth",
    description: "Stay cozy with our premium winter collection",
    bgGradient: "from-blue-500/55 via-slate-400/40 to-cyan-500/45",
    glassOverlay: "bg-gradient-to-br from-blue-100/35 via-slate-50/20 to-cyan-100/25",
    wheelColor: "text-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    centerImage: "/placeholder.svg?height=160&width=160",
    wheelImages: [
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
    ],
    floatingImages: [
      { src: "/placeholder.svg?height=75&width=75", x: 20, y: 15 },
      { src: "/placeholder.svg?height=85&width=85", x: 70, y: 30 },
      { src: "/placeholder.svg?height=65&width=65", x: 30, y: 50 },
      { src: "/placeholder.svg?height=90&width=90", x: 80, y: 65 },
      { src: "/placeholder.svg?height=70&width=70", x: 50, y: 80 },
      { src: "/placeholder.svg?height=80&width=80", x: 90, y: 20 },
      { src: "/placeholder.svg?height=75&width=75", x: 15, y: 75 },
    ],
  },
  {
    id: "autumn",
    title: "Autumn",
    subtitle: "Layers",
    description: "Embrace the season with rich textures and warm tones",
    bgGradient: "from-orange-500/60 via-red-400/45 to-amber-500/50",
    glassOverlay: "bg-gradient-to-br from-orange-100/40 via-red-50/25 to-amber-100/30",
    wheelColor: "text-orange-600",
    buttonColor: "bg-orange-600 hover:bg-orange-700",
    centerImage: "/placeholder.svg?height=160&width=160",
    wheelImages: [
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
    ],
    floatingImages: [
      { src: "/placeholder.svg?height=85&width=85", x: 25, y: 20 },
      { src: "/placeholder.svg?height=70&width=70", x: 75, y: 35 },
      { src: "/placeholder.svg?height=80&width=80", x: 35, y: 55 },
      { src: "/placeholder.svg?height=65&width=65", x: 85, y: 70 },
      { src: "/placeholder.svg?height=90&width=90", x: 55, y: 85 },
      { src: "/placeholder.svg?height=75&width=75", x: 95, y: 25 },
      { src: "/placeholder.svg?height=80&width=80", x: 20, y: 85 },
    ],
  },
  {
    id: "spring",
    title: "Spring",
    subtitle: "Renewal",
    description: "Fresh starts with light, airy, and vibrant styles",
    bgGradient: "from-green-500/55 via-emerald-400/40 to-teal-500/45",
    glassOverlay: "bg-gradient-to-br from-green-100/35 via-emerald-50/20 to-teal-100/25",
    wheelColor: "text-green-600",
    buttonColor: "bg-green-600 hover:bg-green-700",
    centerImage: "/placeholder.svg?height=160&width=160",
    wheelImages: [
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
      "/placeholder.svg?height=80&width=80",
    ],
    floatingImages: [
      { src: "/placeholder.svg?height=70&width=70", x: 30, y: 25 },
      { src: "/placeholder.svg?height=85&width=85", x: 80, y: 40 },
      { src: "/placeholder.svg?height=75&width=75", x: 40, y: 60 },
      { src: "/placeholder.svg?height=90&width=90", x: 90, y: 75 },
      { src: "/placeholder.svg?height=65&width=65", x: 60, y: 90 },
      { src: "/placeholder.svg?height=80&width=80", x: 100, y: 30 },
      { src: "/placeholder.svg?height=75&width=75", x: 25, y: 90 },
    ],
  },
]

export default function Banner() {
  const [currentSeason, setCurrentSeason] = useState(0)
  const [wheelRotation, setWheelRotation] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)

      // Rotate wheel
      setWheelRotation((prev) => prev + 60) // 60 degrees per rotation

      setTimeout(() => {
        setCurrentSeason((prev) => (prev + 1) % seasons.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentSeasonData = seasons[currentSeason]

  return (
    <section className="relative py-20 px-4 overflow-hidden h-[600px]">
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-slate-100" />

      {/* Rich Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${currentSeasonData.bgGradient} transition-all duration-1000`}
      />

      {/* Enhanced Glass Morphism Overlay */}
      <div
        className={`absolute inset-0 ${currentSeasonData.glassOverlay} backdrop-blur-sm transition-all duration-1000`}
      />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #000 1px, transparent 1px), radial-gradient(circle at 75% 75%, #000 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Full Height Solar System Wheel - Left Side */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px]">
        <div className="relative w-full h-full">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-2 border-white/30 rounded-full backdrop-blur-sm"></div>

          {/* Middle Ring */}
          <div className="absolute inset-16 border border-white/25 rounded-full backdrop-blur-sm"></div>

          {/* Inner Ring */}
          <div className="absolute inset-32 border border-white/20 rounded-full backdrop-blur-sm"></div>

          {/* Large Center Circle with Main Image */}
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full ${currentSeasonData.wheelColor} bg-current/20 border-4 border-current/40 backdrop-blur-md transition-all duration-700 overflow-hidden shadow-2xl`}
          >
            {/* Main Center Image */}
            <img
              src={currentSeasonData.centerImage || "/placeholder.svg"}
              alt={`${currentSeasonData.title} main`}
              className={`w-full h-full object-cover transition-all duration-700 ${isTransitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
            />

            {/* Center overlay */}
            <div className={`absolute inset-0 bg-current/30 transition-all duration-700`}></div>
          </div>

          {/* Rotating Images on Wheel */}
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{ transform: `rotate(${wheelRotation}deg)` }}
          >
            {currentSeasonData.wheelImages.map((image, index) => {
              const angle = index * 60 * (Math.PI / 180) // 60 degrees apart
              const radius = 220 // Distance from center (increased for larger wheel)
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div
                  key={index}
                  className="absolute w-16 h-16 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border-2 border-white/60 overflow-hidden"
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`,
                    transform: `rotate(${-wheelRotation}deg)`, // Counter-rotate to keep images upright
                  }}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${currentSeasonData.title} product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            })}
          </div>

          {/* Enhanced Wheel glow effect */}
          <div
            className={`absolute inset-0 rounded-full ${currentSeasonData.wheelColor} opacity-30 blur-3xl transition-all duration-700`}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center h-full">
          {/* Left Spacer for Wheel */}
          <div className="hidden lg:block"></div>

          {/* Center - Main Text Content with Enhanced Visibility */}
          <div className="text-center">
            <div
              className={`space-y-5 transition-all duration-700 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
            >
              {/* Text Background for Better Visibility */}
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-3">
                  <h2
                    className="text-4xl md:text-5xl font-light tracking-tight text-white leading-none"
                    style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)" }}
                  >
                    {currentSeasonData.title}
                  </h2>
                  <h3
                    className="text-2xl md:text-3xl font-medium text-white transition-colors duration-700"
                    style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7), 0 0 15px rgba(0,0,0,0.4)" }}
                  >
                    {currentSeasonData.subtitle}
                  </h3>
                </div>

                <p
                  className="text-lg text-white/95 max-w-lg mx-auto leading-relaxed mt-4"
                  style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
                >
                  {currentSeasonData.description}
                </p>

                <Link href={`/products?collection=${currentSeasonData.id}`} className="inline-block mt-6">
                  <Button
                    size="lg"
                    className={`px-6 py-3 text-white group transition-all duration-300 ${currentSeasonData.buttonColor} shadow-xl backdrop-blur-sm border border-white/30 hover:scale-105`}
                  >
                    Shop {currentSeasonData.title}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                {/* Season Indicators */}
                <div className="flex justify-center space-x-3 pt-4">
                  {seasons.map((season, index) => (
                    <button
                      key={season.id}
                      onClick={() => {
                        setIsTransitioning(true)
                        setWheelRotation((prev) => prev + 60)
                        setTimeout(() => {
                          setCurrentSeason(index)
                          setIsTransitioning(false)
                        }, 500)
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
                        index === currentSeason
                          ? "bg-white scale-125 shadow-lg"
                          : "bg-white/60 hover:bg-white/80 shadow-md"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Randomly Placed Smaller Floating Bubbles */}
          <div className="relative h-full">
            {currentSeasonData.floatingImages.map((image, index) => (
              <div
                key={`${currentSeason}-${index}`}
                className={`absolute rounded-full bg-white/80 backdrop-blur-md shadow-xl border border-white/40 overflow-hidden transition-all duration-700 ${isTransitioning ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
                style={{
                  width: `${image.src.includes("65") ? "65px" : image.src.includes("70") ? "70px" : image.src.includes("75") ? "75px" : image.src.includes("80") ? "80px" : image.src.includes("85") ? "85px" : "90px"}`,
                  height: `${image.src.includes("65") ? "65px" : image.src.includes("70") ? "70px" : image.src.includes("75") ? "75px" : image.src.includes("80") ? "80px" : image.src.includes("85") ? "85px" : "90px"}`,
                  left: `${image.x}%`,
                  top: `${image.y}%`,
                  animationDelay: `${index * 0.3}s`,
                  animation: `float 8s ease-in-out infinite ${index * 0.4}s`,
                  transform: `translate(-50%, -50%)`,
                }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={`${currentSeasonData.title} floating product ${index + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Enhanced bubble shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent"></div>
                <div className="absolute top-2 left-2 w-3 h-3 bg-white/60 rounded-full blur-sm"></div>
              </div>
            ))}

            {/* Additional glassy floating elements */}
            <div className="absolute top-4 right-4 w-4 h-4 bg-white/50 rounded-full animate-pulse backdrop-blur-sm"></div>
            <div
              className="absolute bottom-8 left-8 w-3 h-3 bg-white/40 rounded-full animate-pulse backdrop-blur-sm"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/3 left-4 w-5 h-5 bg-white/30 rounded-full animate-pulse backdrop-blur-sm"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
          25% { transform: translate(-50%, -50%) translateY(-8px) rotate(1deg); }
          50% { transform: translate(-50%, -50%) translateY(-4px) rotate(-1deg); }
          75% { transform: translate(-50%, -50%) translateY(-12px) rotate(0.5deg); }
        }
      `}</style>
    </section>
  )
}

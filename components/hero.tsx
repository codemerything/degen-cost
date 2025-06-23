"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const currencies = [
  { symbol: "$", name: "USD", color: "text-green-400" },
  { symbol: "€", name: "EUR", color: "text-blue-400" },
  { symbol: "£", name: "GBP", color: "text-purple-400" },
  { symbol: "¥", name: "JPY", color: "text-yellow-400" },
  { symbol: "₹", name: "INR", color: "text-orange-400" },
  { symbol: "₿", name: "BTC", color: "text-orange-500" },
  { symbol: "Ξ", name: "ETH", color: "text-indigo-400" },
  { symbol: "₳", name: "ADA", color: "text-cyan-400" },
]

interface FloatingCurrencyProps {
  currency: (typeof currencies)[0]
  position: { top: string; left: string }
  delay: number
  index: number
}

function FloatingCurrency({ currency, position, delay, index }: FloatingCurrencyProps) {
  const [isConverted, setIsConverted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIsConverted(true)
        setTimeout(() => setIsConverted(false), 2000)
      },
      8000 + delay * 1000,
    )

    return () => clearInterval(interval)
  }, [delay])

  const handleClick = () => {
    setIsConverted(!isConverted)
  }

  return (
    <div
      className={`absolute cursor-pointer transition-all duration-500 ${isHovered ? "scale-150 z-20" : "scale-100"}`}
      style={{
        top: position.top,
        left: position.left,
        animationDelay: `${delay}s`,
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700 transform ${
          isConverted
            ? "bg-gradient-to-r from-blue-500/30 to-purple-600/30 rotate-180 scale-110"
            : "bg-slate-800/20 backdrop-blur-sm border border-slate-600/30"
        } animate-float hover:shadow-lg hover:shadow-blue-500/25`}
        style={{ animationDelay: `${delay}s` }}
      >
        {/* Currency Symbol */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            isConverted ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          }`}
        >
          <span className={`text-lg font-bold ${currency.color}`}>{currency.symbol}</span>
        </div>

        {/* SOL Symbol */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            isConverted ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
          }`}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dex-7S41T5PweXrSyRQmkpAGxSU8H37gBZ.png"
            alt="SOL"
            width={20}
            height={20}
            className="brightness-0 invert"
          />
        </div>

        {/* Conversion Animation Ring */}
        <div
          className={`absolute inset-0 rounded-full border-2 transition-all duration-700 ${
            isConverted
              ? "border-blue-400 animate-spin opacity-100 scale-110"
              : "border-transparent opacity-0 scale-100"
          }`}
        />

        {/* Pulse Effect */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isConverted ? "bg-blue-400/20 animate-ping" : "bg-transparent"
          }`}
        />
      </div>

      {/* Conversion Label */}
      <div
        className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
          isConverted || isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs text-white whitespace-nowrap">
          {isConverted ? `${currency.name} → SOL` : currency.name}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [triggerAllConversions, setTriggerAllConversions] = useState(false)

  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleGlobalConversion = () => {
    setTriggerAllConversions(true)
    setTimeout(() => setTriggerAllConversions(false), 3000)
  }

  const currencyPositions = [
    { top: "15%", left: "10%" },
    { top: "25%", left: "85%" },
    { top: "45%", left: "5%" },
    { top: "35%", left: "90%" },
    { top: "65%", left: "15%" },
    { top: "75%", left: "80%" },
    { top: "55%", left: "8%" },
    { top: "20%", left: "75%" },
  ]

  return (
    <section className="relative py-32 min-h-screen flex items-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 100px 100px, 50px 50px, 50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Medium Circle */}
        <div
          className="absolute -top-20 -left-32 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Floating Currency Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {currencies.map((currency, index) => (
          <FloatingCurrency
            key={currency.name}
            currency={currency}
            position={currencyPositions[index]}
            delay={index * 0.5}
            index={index}
          />
        ))}
      </div>

      {/* Abstract Wave Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <path
            d="M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z"
            fill="url(#waveGradient1)"
            className="animate-wave"
          />
          <path
            d="M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z"
            fill="url(#waveGradient2)"
            className="animate-wave-reverse"
          />
        </svg>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Hexagonal Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%233B82F6' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-xl opacity-40 scale-110 animate-pulse"></div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-2xl opacity-20 scale-150 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dex-7S41T5PweXrSyRQmkpAGxSU8H37gBZ.png"
                alt="Degen Cost Logo"
                width={120}
                height={120}
                className="relative z-10 animate-float cursor-pointer"
                onClick={handleGlobalConversion}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent leading-tight drop-shadow-2xl">
            See the True Cost of Everything in Solana
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Convert prices to Solana as you browse the web. Degen Cost automatically displays fiat prices in SOL or
            sats, helping you think in a Solana standard.
          </p>

          {/* Interactive Demo Text */}
          <p className="text-sm text-slate-400 mb-8 italic">
            💡 Click the floating currencies or the logo above to see conversion animations
          </p>

          <Button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 rounded-xl text-xl font-semibold border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            onClick={scrollToDownload}
          >
            Install Extension
          </Button>
        </div>
      </div>
    </section>
  )
}

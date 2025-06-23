"use client"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SeeItInAction from "@/components/see-it-in-action"
import Features from "@/components/features"
import Download from "@/components/download"
import About from "@/components/about"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <SeeItInAction />
      <Features />
      <Download />
      <About />
      <FAQ />
      <Footer />
    </div>
  )
}

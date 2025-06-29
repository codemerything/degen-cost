"use client"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState } from "react"

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${scrolled
        ? "bg-transparent backdrop-blur-md shadow-lg shadow-blue-500/10 border border-slate-200/50 dark:border-slate-700/50"
        : "bg-transparent backdrop-blur-sm border border-white/20 dark:border-slate-700/20"
        } rounded-full px-4 md:px-8 py-2 md:py-3 w-[95vw] md:w-[60vw]`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dex-7S41T5PweXrSyRQmkpAGxSU8H37gBZ.png"
            alt="Degen Cost Logo"
            width={28}
            height={28}
            className="mr-3"
          />
          <span className="font-semibold text-lg text-slate-900 dark:text-white ">Degen Cost</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
            onClick={() => scrollToSection("features")}
          >
            Features
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
            onClick={() => scrollToSection("download")}
          >
            Download
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </Button>
          <Button variant="ghost" size="sm" className="text-sm p-2" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </Button>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-white dark:bg-slate-900 rounded-xl shadow-lg py-4 px-6 absolute left-0 right-0 top-full z-50 border border-slate-200 dark:border-slate-700">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50 mb-2"
            onClick={() => scrollToSection("features")}
          >
            Features
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50 mb-2"
            onClick={() => scrollToSection("download")}
          >
            Download
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50 mb-2"
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start text-sm p-2" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </Button>
        </div>
      )}
    </header>
  )
}

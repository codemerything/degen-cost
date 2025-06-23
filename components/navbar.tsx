"use client"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const { theme, setTheme } = useTheme()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${scrolled
        ? "bg-transparent backdrop-blur-md shadow-lg shadow-blue-500/10 border border-slate-200/50 dark:border-slate-700/50"
        : "bg-transparent backdrop-blur-sm border border-white/20 dark:border-slate-700/20"
        } rounded-full px-8 py-3 w-[60vw]`}
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
        <nav className="flex items-center gap-6">
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
      </div>
    </header>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Globe, ShieldCheck, Settings } from "lucide-react"
import Image from "next/image"

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Key Features</h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          See the true cost of everything in Solana
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-500/10 rounded-lg p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dex-7S41T5PweXrSyRQmkpAGxSU8H37gBZ.png"
                  alt="Solana Logo"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-lg font-bold mb-2">Think in Solana</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Automatically converts prices to SOL across the web, helping you understand value in crypto terms
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-500/10 rounded-lg p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="text-blue-400" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Works Everywhere</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Seamlessly integrates with major platforms like Amazon, Zillow, and financial sites for universal SOL pricing
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-500/10 rounded-lg p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-blue-400" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Zero Trust Required</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No wallet connection needed - just install and see prices in SOL without sharing any personal data
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-500/10 rounded-lg p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Settings className="text-blue-400" size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Smart Solana Display</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Intelligent price formatting with customizable display options and real-time SOL price updates
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Download() {
  const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/degen-cost/kmpmnllmhildaflkcfdjenkiiggddcco"

  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Download the Extension</h2>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto">
          Degen Cost is available for Chrome browsers. Firefox coming soon! Install it today to start seeing prices in
          Solana!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Chrome */}
          <Card className="bg-white/50 dark:bg-slate-800/30 border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/50 backdrop-blur-sm transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src="/chrome.svg"
                  alt="Chrome Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">Chrome Extension</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Version 0.0.1</p>
              <Link href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">Add to Chrome</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Brave */}
          <Card className="bg-white/50 dark:bg-slate-800/30 border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/50 backdrop-blur-sm transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src="/brave.svg"
                  alt="Brave Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">Brave Browser Extension</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Version 0.0.1</p>
              <Link href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">Add to Brave</Button>
              </Link>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}

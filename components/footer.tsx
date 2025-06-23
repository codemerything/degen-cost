import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { useState } from "react"
import { Copy, Check, X } from "lucide-react"

export default function Footer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const addresses = {
    solana: "crzPpYx6aApuQe6KWhzrTTFwPYBxDUtizLoF49GNzbU",
    ethereum: "0x9C90CC1777Cc0846701e42e7a9FAB19f3d04fC85"
  }

  const copyToClipboard = async (address: string, type: string) => {
    await navigator.clipboard.writeText(address)
    setCopiedAddress(type)
    setTimeout(() => setCopiedAddress(null), 2000)
  }

  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dex-7S41T5PweXrSyRQmkpAGxSU8H37gBZ.png"
              alt="Degen Cost Logo"
              width={24}
              height={24}
            />
            <span className="text-base font-medium italic">Degen Cost</span>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-6 md:mb-0">
            <a
              href="https://twitter.com/zimaab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              Twitter
            </a>
            <a
              href="https://github.com/zimaab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-purple-500 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
            <a
              href="https://warpcast.com/zimaab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-pink-500 dark:text-slate-400 dark:hover:text-pink-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              Farcaster
            </a>
          </div>

          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white border-0"
            onClick={() => setIsDialogOpen(true)}
          >
            Support Creator
          </Button>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-xl font-bold">Support the Creator</DialogTitle>
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">

                </DialogClose>
              </DialogHeader>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-1.5 block">Solana (SOL)</label>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 text-sm font-mono">
                        {addresses.solana}
                      </code>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => copyToClipboard(addresses.solana, 'solana')}
                        className="h-9 w-9 shrink-0"
                      >
                        {copiedAddress === 'solana' ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-1.5 block">Ethereum (ETH)</label>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 text-sm font-mono">
                        {addresses.ethereum}
                      </code>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => copyToClipboard(addresses.ethereum, 'ethereum')}
                        className="h-9 w-9 shrink-0"
                      >
                        {copiedAddress === 'ethereum' ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-center text-slate-500 dark:text-slate-400">
                  Thank you for supporting the development of Degen Cost! ❤️
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Degen Cost. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

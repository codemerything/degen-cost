import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Degen Cost - See the True Cost in Solana",
  description: "Convert prices to Solana as you browse the web. A reality check for degens.",
  openGraph: {
    title: "Degen Cost - See the True Cost in Solana",
    description: "Convert prices to Solana as you browse the web. A reality check for degens.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dex-7S41T5PweXrSyRQmkpAGxSU8H37gBZ.png",
        width: 1200,
        height: 630,
        alt: "Degen Cost Social Preview",
      },
    ],
  },
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dex-7S41T5PweXrSyRQmkpAGxSU8H37gBZ.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

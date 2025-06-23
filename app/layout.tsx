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
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Degen Cost Social Preview",
      },
    ],
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

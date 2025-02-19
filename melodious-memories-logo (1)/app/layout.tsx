import type React from "react"
import { GeistSans } from "geist/font/sans"
import { Playfair_Display, Great_Vibes } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"] })
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: "Melodious Memories - Turn Your Love Story Into a Song",
  description: "Create personalized songs and Valentine's hampers for your special moments",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppFloat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

export { playfair, greatVibes }



import './globals.css'
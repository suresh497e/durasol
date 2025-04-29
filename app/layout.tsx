import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"
import EnhancedWhatsAppButton from "@/components/enhanced-whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Durasol Energi | Innovative Energy Solutions",
  description:
    "Durasol Energi provides innovative and sustainable energy solutions including solar power systems, UPS, batteries and more for residential, commercial and industrial applications.",
  keywords: "Durasol, Energi, solar power, UPS, batteries, sustainable energy, renewable energy",
  authors: [{ name: "Durasol Energi" }],
  openGraph: {
    title: "Durasol Energi | Innovative Energy Solutions",
    description: "Innovative and sustainable energy solutions for a brighter future",
    url: "https://durasolenergy.com",
    siteName: "Durasol Energi",
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem >
          {children}
          <EnhancedWhatsAppButton phoneNumber="+91 8826022335" />
        </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
//import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Durasol Distributor Portal",
  description: "Portal for Durasol distributors to manage their profile and activities",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
         </AuthProvider>
   //   </body>
   // </html> 
  )
}

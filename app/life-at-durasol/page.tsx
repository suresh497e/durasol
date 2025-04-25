"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import LifeAtDurasol from "@/components/life-at-durasol"
import Footer from "@/components/footer"

export default function LifeAtDurasolPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <LifeAtDurasol />
      <Footer />
    </main>
  )
}

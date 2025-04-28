"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import AboutUs from "@/components/about-us"
import  Roadmap  from "@/components/roadmap"
import ContactCTA from "@/components/contact-cta"
import Footer from "@/components/footer"

export default function AboutUsPage() {
  // Add useEffect to scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutUs />
      <Roadmap />
      <ContactCTA />
      <Footer />
    </main>
  )
}

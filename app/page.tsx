import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import IntelenergiFamily from "@/components/intelenergi-family"
import SimplifiedGlobalPresence from "@/components/simplified-global-presence"
import VideoSection from "@/components/video-section"
import WhyChoose from "@/components/why-choose"
import Products from "@/components/products"
import Innovation from "@/components/innovation"
import Roadmap from "@/components/roadmap"
import CompactAmbassadorCarousel from "@/components/compact-ambassador-carousel"
import VideoTestimonials from "@/components/video-testimonials"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/enhanced-whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <IntelenergiFamily />
      <SimplifiedGlobalPresence />
      <WhyChoose />
      <VideoSection />
      <Products />
      <Innovation />
      <Roadmap />
      <CompactAmbassadorCarousel />
      <VideoTestimonials />
      <Footer />
      <WhatsAppButton phoneNumber="+91 95559 65202" />
    </main>
  )
}

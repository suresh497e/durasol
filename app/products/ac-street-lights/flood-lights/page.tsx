import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Flood Lights | AC Street Lights | Durasol Energi",
  description:
    "Durasol's high-performance Flood Lights (100W, 150W) provide powerful illumination for area lighting and architectural applications with energy efficiency and durability.",
}

export default function FloodLightsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#089c9c]">
              Home
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <Link href="/products" className="text-gray-500 hover:text-[#089c9c]">
              Products
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <Link href="/products/ac-street-lights" className="text-gray-500 hover:text-[#089c9c]">
              AC Street Lights
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Flood Lights</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Flood Lights – 100W, 150W | Durasol Energi – High Lumen Outdoor Lighting"
        description="Durasol Energi’s Flood Lights (100W & 150W) provide bright, energy-efficient illumination for outdoor spaces. These weather-resistant lights are perfect for security lighting, gardens, and commercial landscapes, offering long-lasting performance and high-lumen output for maximum visibility."
        subtitle="High-Performance Flood Lights (100W, 150W)"
        image={<Image src="/products/flood_light.jpeg?height=400&width=400" alt="Flood Lights" fill className="object-contain" />}
       /* features={[
          "High-efficiency LED chips with 150+ lm/W efficacy",
          "Die-cast aluminum housing with powder coating for durability",
          "IP65 rated for protection against dust and water jets",
          "Adjustable mounting bracket for precise aiming",
          "Wide beam angle options for area lighting applications",
          "Surge protection up to 10kV for electrical safety",
          "Operating temperature range: -30°C to +50°C",
          "50,000+ hours lifetime with minimal lumen depreciation",
        ]} */
        specifications={[
          {
            category: "Electrical",
            items: [
              { name: "Power Options", value: "100W, 150W" },
              { name: "Input Voltage", value: "AC 100-277V, 50/60Hz" },
              { name: "Power Factor", value: ">0.95" },
              { name: "THD", value: "<15%" },
            ],
          },
          {
            category: "Optical",
            items: [
              { name: "Luminous Efficacy", value: ">150 lm/W" },
              { name: "Color Temperature", value: "3000K/4000K/5000K/5700K" },
              { name: "Color Rendering Index", value: ">80 Ra" },
              { name: "Beam Angle", value: "60°/90°/120° options" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Housing Material", value: "Die-cast aluminum" },
              { name: "Lens Material", value: "Tempered glass" },
              { name: "IP Rating", value: "IP65" },
              { name: "Mounting", value: "Adjustable bracket" },
            ],
          },
          {
            category: "General",
            items: [
              { name: "Operating Temperature", value: "-30°C to +50°C" },
              { name: "Lifetime", value: ">50,000 hours (L70)" },
              { name: "Warranty", value: "5 years standard" },
              { name: "Certifications", value: "CE, RoHS, CB" },
            ],
          },
        ]}
        downloads={[
         
          { name: "Technical Brochure", url: "/products/pdf/flood_lightspdf.pdf" },
        ]}
        relatedProducts={[
          {
            name: "LED Street Lights",
            description: "High-performance LED street lights for urban and roadway illumination.",
            url: "/products/ac-street-lights/led-street-lights",
          },
          {
            name: "Solar Panels",
            description: "High-efficiency solar panels for renewable energy solutions.",
            url: "/products/solar-range/solar-panel",
          },
          {
            name: "Pure Sine Wave UPS",
            description: "Ensure uninterrupted power supply for critical lighting systems.",
            url: "/products/home-ups/pure-sine-wave-ups",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

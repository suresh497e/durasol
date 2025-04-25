import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "LED Street Lights | AC Street Lights | Durasol Energi",
  description:
    "Durasol's high-performance LED street lights (50W, 100W) provide energy-efficient illumination for urban and roadway applications with long service life and superior light quality.",
}

export default function LEDStreetLightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
            <span className="text-[#089c9c]">LED Street Lights</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="High-Performance LED Street Lights – 50W, 100W | Durasol Energi"
        description= "Durasol Energi’s LED Street Lights (50W & 100W) offer energy-efficient, high-lumen lighting with a weatherproof design. Ideal for streets, highways, and commercial areas, they ensure long-lasting illumination and road safety."
        subtitle="High-Performance LED Street Lights (50W, 100W)"
        image={
          <Image src="/products/street_light.jpg?height=400&width=400" alt="LED Street Lights" fill className="object-contain" />
        }
       /* features={[
          "High-efficiency LED chips with 160+ lm/W efficacy",
          "Die-cast aluminum housing with powder coating for durability",
          "IP66 rated for protection against dust and water jets",
          "Wide beam angle options for different street lighting requirements",
          "Tool-less maintenance design for easy servicing",
          "Surge protection up to 10kV for electrical safety",
          "Operating temperature range: -40°C to +55°C",
          "50,000+ hours lifetime with minimal lumen depreciation",
        ]} */
        specifications={[
          {
            category: "Electrical",
            items: [
              { name: "Power Options", value: "50W, 100W" },
              { name: "Input Voltage", value: "AC 100-277V, 50/60Hz" },
              { name: "Power Factor", value: ">0.95" },
              { name: "THD", value: "<15%" },
            ],
          },
          {
            category: "Optical",
            items: [
              { name: "Luminous Efficacy", value: ">160 lm/W" },
              { name: "Color Temperature", value: "3000K/4000K/5000K/5700K" },
              { name: "Color Rendering Index", value: ">70 Ra" },
              { name: "Beam Angle", value: "Type II/III/IV/V distribution" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Housing Material", value: "Die-cast aluminum" },
              { name: "Lens Material", value: "Tempered glass / PC" },
              { name: "IP Rating", value: "IP66" },
              { name: "Mounting", value: "Adjustable pole mount (Ø48-60mm)" },
            ],
          },
          {
            category: "General",
            items: [
              { name: "Operating Temperature", value: "-40°C to +55°C" },
              { name: "Lifetime", value: ">50,000 hours (L70)" },
              { name: "Warranty", value: "5 years standard" },
              { name: "Certifications", value: "CE, RoHS, CB" },
            ],
          },
        ]}
        // downloads={[
         
        //   { name: "Technical Brochure", url: "#" },
         
        // ]}
        relatedProducts={[
          {
            name: "Flood Lights",
            description: "Powerful flood lights for area lighting and architectural applications.",
            url: "/products/ac-street-lights/flood-lights",
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
    </div>
  )
}

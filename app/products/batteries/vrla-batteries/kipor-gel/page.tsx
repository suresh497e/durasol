import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Kipor VRLA Gel Battery | Batteries | Durasol Energi",
  description:
    "Kipor VRLA Gel batteries offer maintenance-free operation with superior deep cycle performance for demanding applications.",
}

export default function KiporGelBatteryPage() {
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
            <Link href="/products/batteries" className="text-gray-500 hover:text-[#089c9c]">
              Batteries
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <Link href="/products/batteries/vrla-batteries" className="text-gray-500 hover:text-[#089c9c]">
              VRLA Batteries
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Kipor VRLA Gel Battery</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Kipor VRLA Gel Battery Sealed, Maintenance-Free & Long Life"
        description="The Kipor VRLA Gel Battery is a sealed, maintenance-free energy solution that utilizes advanced gel electrolyte technology for long-lasting performance and extreme temperature resistance. Unlike traditional VRLA lead-acid batteries, the sulfuric acid electrolyte is mixed with silica material, forming an immobilized gel, preventing electrolyte evaporation and spillage.

With a corrosion-resistant Lead-Calcium-Tin-Silver alloy grid and a special microporous synthetic separator, this battery delivers enhanced durability and reliability. Its deep-cycle capability makes it an ideal choice for solar energy storage, backup power, and industrial applications."
        subtitle="Sealed, Maintenance-Free & Long Life"
        image={
          <Image
            src="/products/kipor_vrla.png"
            alt="Kipor VRLA Gel Battery"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Gel electrolyte technology for superior deep cycle performance",
          "Maintenance-free operation - no water addition required",
          "Sealed construction with pressure regulated safety valves",
          "Extremely low self-discharge rate for extended shelf life",
          "Excellent performance in high-temperature environments",
          "Superior deep discharge recovery capabilities",
          "Enhanced cycle life compared to standard AGM batteries",
          "Spill-proof and leak-proof design for safe installation in any orientation",
        ]} */
        specifications={[
          {
            category: "General",
            items: [
              { name: "Battery Type", value: "Valve Regulated Lead Acid (VRLA) with Gel Technology" },
              { name: "Design Life", value: "7-12 years (standard) / 10-15 years (long life)" },
              { name: "Self Discharge", value: "< 1.5% per month at 25°C" },
              { name: "Operating Temperature", value: "-20°C to 55°C" },
            ],
          },
          {
            category: "Electrical",
            items: [
              { name: "Nominal Voltage", value: "12V" },
              { name: "Capacity Range", value: "20Ah to 250Ah" },
              { name: "Float Charging Voltage", value: "13.5V to 13.8V at 25°C" },
              { name: "Cycle Use Voltage", value: "14.2V to 14.5V at 25°C" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Case Material", value: "ABS (UL94 V-0 flame retardant)" },
              { name: "Terminal Type", value: "F1/F2/T1/T2 (model dependent)" },
              { name: "Dimensions", value: "Various (model dependent)" },
              { name: "Weight", value: "Various (model dependent)" },
            ],
          },
          {
            category: "Performance",
            items: [
              { name: "Cycle Life", value: "Up to 1500 cycles at 30% DOD" },
              { name: "Max Discharge Current", value: "5C (model dependent)" },
              { name: "Internal Resistance", value: "Very low (model dependent)" },
              { name: "Charge Acceptance", value: "Excellent" },
            ],
          },
          {
            category: "Safety & Compliance",
            items: [
              { name: "Safety Valve", value: "One-way pressure relief valve" },
              { name: "Electrolyte", value: "Thixotropic gel" },
              { name: "Certification", value: "CE, UL, ISO 9001, ISO 14001" },
              { name: "Transportation", value: "Non-hazardous for air, sea and road transport" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "#" },
          
        ]}
        relatedProducts={[
          {
            name: "Durasol AGM VRLA Battery",
            description: "Advanced AGM technology for superior performance and reliability.",
            url: "/products/batteries/vrla-batteries/durasol-agm",
          },
          {
            name: "Tall Tubular Batteries",
            description: "Long-lasting tubular batteries designed for deep cycle applications.",
            url: "/products/batteries/tall-tubular-batteries",
          },
          {
            name: "Pure Sine Wave UPS",
            description: "Premium UPS systems compatible with VRLA batteries for critical applications.",
            url: "/products/home-ups/pure-sine-wave-ups",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

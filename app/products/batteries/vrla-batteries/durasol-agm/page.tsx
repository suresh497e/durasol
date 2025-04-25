import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Durasol AGM VRLA Battery | Batteries | Durasol Energi",
  description:
    "Durasol AGM VRLA batteries offer maintenance-free operation with high reliability for UPS, telecom, and emergency power applications.",
}

export default function DurasolAGMBatteryPage() {
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
            <span className="text-[#089c9c]">Durasol AGM VRLA Battery</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Durasol AGM VRLA Battery Sealed, Maintenance-Free & Long Life"
        description="Durasol AGM VRLA Battery is a sealed, maintenance-free power solution with a long lifespan, leak-proof construction, and deep-cycle recovery. Ideal for UPS, telecom, and emergency backup applications."
        subtitle="Sealed, Maintenance-Free & Long Life"
        image={<Image src="/products/vrla.png" alt="Durasol AGM VRLA Battery" fill className="object-contain" />}
      /*  features={[
          "Absorbent Glass Mat (AGM) technology for superior performance",
          "Maintenance-free operation - no water addition required",
          "Sealed construction with pressure regulated safety valves",
          "Low self-discharge rate for extended shelf life",
          "Wide operating temperature range",
          "Excellent deep discharge recovery",
          "High energy density and compact design",
          "Spill-proof and leak-proof design for safe installation in any orientation",
        ]} */
        specifications={[
          {
            category: "General",
            items: [
              { name: "Battery Type", value: "Valve Regulated Lead Acid (VRLA) with AGM Technology" },
              { name: "Design Life", value: "3-5 years (standard) / 7-10 years (long life)" },
              { name: "Self Discharge", value: "< 2% per month at 25°C" },
              { name: "Operating Temperature", value: "-20°C to 50°C" },
            ],
          },
          {
            category: "Electrical",
            items: [
              { name: "Nominal Voltage", value: "12V" },
              { name: "Capacity Range", value: "7Ah to 200Ah" },
              { name: "Float Charging Voltage", value: "13.6V to 13.8V at 25°C" },
              { name: "Cycle Use Voltage", value: "14.4V to 14.8V at 25°C" },
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
              { name: "Cycle Life", value: "Up to 1000 cycles at 30% DOD" },
              { name: "Max Discharge Current", value: "10C (model dependent)" },
              { name: "Internal Resistance", value: "Very low (model dependent)" },
              { name: "Charge Acceptance", value: "Excellent" },
            ],
          },
          {
            category: "Safety & Compliance",
            items: [
              { name: "Safety Valve", value: "One-way pressure relief valve" },
              { name: "Electrolyte", value: "Absorbed in AGM separator" },
              { name: "Certification", value: "CE, UL, ISO 9001, ISO 14001" },
              { name: "Transportation", value: "Non-hazardous for air, sea and road transport" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/agmvrlapdf.pdf" },
         
        ]}
        relatedProducts={[
          {
            name: "Kipor VRLA Gel Battery",
            description: "Premium gel electrolyte technology for enhanced deep cycle performance.",
            url: "/products/batteries/vrla-batteries/kipor-gel",
          },
          {
            name: "Tall Tubular Batteries",
            description: "Long-lasting tubular batteries designed for deep cycle applications.",
            url: "/products/batteries/tall-tubular-batteries",
          },
          {
            name: "Digital Smart UPS",
            description: "Advanced UPS systems compatible with VRLA batteries for reliable backup power.",
            url: "/products/home-ups/digital-smart-ups",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Domestic & Residential Pumps | Grid Pumps | Durasol Energi",
  description:
    "Durasol's domestic and residential water pumps provide reliable water supply solutions for homes and residential complexes with energy efficiency and quiet operation.",
}

export default function DomesticResidentialPumpsPage() {
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
            <Link href="/products/grid-pumps" className="text-gray-500 hover:text-[#089c9c]">
              Grid Pumps
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Domestic & Residential Pumps</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Domestic & Residential Pumps"
        description= "ETG Surface Pumps are the most efficient and reliable solution for conditions where the suction head is limited to 7 meters. Surface pumps are of Mono Block construction with the impeller mounted directly to the motor shaft."
        subtitle="Efficient Water Pumps for Household and Residential Applications"
        image={
          <Image
            src="/products/domestic_pump.jpg?height=400&width=400"
            alt="Domestic & Residential Pumps"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Energy-efficient motors for reduced power consumption",
          "Low noise operation for residential environments",
          "Compact design for easy installation in limited spaces",
          "Self-priming capability for convenient operation",
          "Thermal overload protection for motor safety",
          "Dry run protection to prevent pump damage",
          "Corrosion-resistant materials for extended service life",
          "Multiple models available for different flow and pressure requirements",
        ]} */
        specifications={[
          {
            category: "Performance",
            items: [
              { name: "Power Range", value: "0.37kW to 2.2kW" },
              { name: "Maximum Flow Rate", value: "Up to 150 L/min" },
              { name: "Maximum Head", value: "Up to 48m" },
              { name: "Self-Priming Height", value: "Up to 8m" },
            ],
          },
          {
            category: "Electrical",
            items: [
              { name: "Power Supply", value: "220-240V AC, 50Hz" },
              { name: "Insulation Class", value: "F" },
              { name: "Protection Class", value: "IP44/IP55" },
              { name: "Motor Type", value: "Single-phase induction motor" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Pump Body Material", value: "Cast iron / Stainless steel" },
              { name: "Impeller Material", value: "Brass / Stainless steel" },
              { name: "Shaft Material", value: "Stainless steel" },
              { name: "Mechanical Seal", value: "Ceramic-graphite / Silicon carbide" },
            ],
          },
          {
            category: "Operation",
            items: [
              { name: "Maximum Water Temperature", value: "40°C" },
              { name: "Maximum Ambient Temperature", value: "50°C" },
              { name: "Noise Level", value: "< 65 dB(A)" },
              { name: "Warranty", value: "2 years standard" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "#" },
         
        ]}
        relatedProducts={[
          {
            name: "Agriculture & Irrigation Pumps",
            description: "Heavy-duty pumps designed for agricultural and irrigation applications.",
            url: "/products/grid-pumps/agriculture-irrigation",
          },
          {
            name: "Solar Pumps",
            description: "High-efficiency pumps designed for solar-powered water pumping applications.",
            url: "/products/solar-water-pumps/pumps",
          },
          {
            name: "Pure Sine Wave UPS",
            description: "Ensure uninterrupted water supply with backup power for your pumps.",
            url: "/products/home-ups/pure-sine-wave-ups",
          },
        ]}
      />
      <Footer />
    </div>
  )
}

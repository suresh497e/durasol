import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Rack Mounted Battery (CT-5) | Lithium | Durasol Energi",
  description:
    "Durasol's CT-5 rack mounted LiFEPO4 batteries provide flexible, scalable energy storage solutions for residential and commercial applications.",
}

export default function RackMountedCT5Page() {
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
            <Link href="/products/lithium-lifepo4" className="text-gray-500 hover:text-[#089c9c]">
              Lithium (LiFEPO4)
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Rack Mounted Battery (CT-5)</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Low Voltage Rack Mounted Battery (CT-5)"
        description="The Low Voltage Rack Mounted Battery (CT-5) by Durasol Energi is a high-tech solution offering compact design and advanced energy management for various applications. Durasol Energi Technof Series CT-5 Lithium battery is a High-tech product independently developed by Intelenergi. The battery is small in size and light in weight, and it supports 19-inch rack installation, It has a long service life and supports fast charging. It adopts advanced intelligent BMS with alarm and protection functions such as overcharge, over discharge, over current, temperature, etc., and historical data storage, charging current limiting. The product has prominent advantages in the field of household and telecom applications."
        subtitle="Compact Rack Mounted LiFEPO4 Battery for Flexible Installation"
        image={
          <Image
            src="/products/rack_mounted.jpg"
            alt="Rack Mounted Battery CT-5"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Standard 19-inch rack mount design (3U height)",
          "5kWh capacity per module, stackable up to 60kWh",
          "Parallel connection capability for system expansion",
          "Hot-swappable design for easy maintenance",
          "Front panel LCD display for status monitoring",
          "Integrated BMS with cell-level monitoring and protection",
          "CAN bus communication for seamless integration with inverters",
          "Compact form factor ideal for telecom and server room applications",
        ]} */
        specifications={[
          {
            category: "General",
            items: [
              { name: "Battery Chemistry", value: "Lithium Iron Phosphate (LiFEPO4)" },
              { name: "Nominal Capacity", value: "5kWh per module" },
              { name: "Usable Capacity", value: "4.75kWh per module" },
              { name: "Cycle Life", value: ">6000 cycles at 80% DoD, 25°C" },
              { name: "Scalability", value: "Up to 12 modules in parallel (60kWh total)" },
            ],
          },
          {
            category: "Electrical",
            items: [
              { name: "Nominal Voltage", value: "51.2V" },
              { name: "Operating Voltage Range", value: "44.8V - 57.6V" },
              { name: "Max Continuous Charge/Discharge Current", value: "50A per module" },
              { name: "Peak Discharge Current (3s)", value: "100A per module" },
              { name: "Round Trip Efficiency", value: ">95%" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Dimensions (H×W×D)", value: '133mm (3U) × 442mm (19") × 420mm' },
              { name: "Weight", value: "40kg per module" },
              { name: "Mounting", value: "19-inch rack mount (rails included)" },
              { name: "IP Rating", value: "IP20 (indoor installation)" },
            ],
          },
          {
            category: "Communication & Features",
            items: [
              { name: "Communication Interface", value: "CAN, RS485, Dry Contact" },
              { name: "Display", value: "Front panel LCD with status indicators" },
              { name: "Monitoring", value: "Remote monitoring via inverter or optional gateway" },
              { name: "Warranty", value: "10 years or 6000 cycles, whichever comes first" },
            ],
          },
          {
            category: "Safety & Compliance",
            items: [
              { name: "Safety Certifications", value: "UL1973, IEC62619, UN38.3" },
              { name: "EMC Compliance", value: "FCC Part 15B, EN61000" },
              { name: "Transportation", value: "UN38.3 certified for safe shipping" },
              { name: "Operating Temperature", value: "0°C to 45°C (charging), -10°C to 55°C (discharging)" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/rackmountedpdf.pdf" },
          
        ]}
        relatedProducts={[
          {
            name: "Wall Mounted Battery (CE Series)",
            description: "Low voltage wall mounted LiFEPO4 batteries for residential energy storage.",
            url: "/products/lithium-lifepo4/wall-mounted-ce",
          },
          {
            name: "Wall Mounted Battery (MOON Series)",
            description: "Sleek, modern design wall mounted batteries with advanced BMS technology.",
            url: "/products/lithium-lifepo4/wall-mounted-moon",
          },
          {
            name: "Industrial & Commercial Battery Storage",
            description: "Scalable battery solutions for industrial and commercial applications.",
            url: "/products/lithium-lifepo4/industrial-commercial",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

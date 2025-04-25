import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Monoblock Battery (12.8V) | Lithium | Durasol Energi",
  description:
    "Durasol's 12.8V LiFEPO4 monoblock batteries offer a direct replacement for lead-acid batteries with superior cycle life, performance, and maintenance-free operation.",
}

export default function MonoblockBatteryPage() {
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
            <span className="text-[#089c9c]">Monoblock Battery (12.8V)</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Monoblock Battery (12.8V)"
        description="Durasol Energi Technof Series 12.8V monoblock battery is a high-tech product with multiple application scenarios which is developed by Intelenergi. Available in 100Ah, 150Ah, 200Ah."
        subtitle="Drop-in Replacement LiFEPO4 Battery for Lead-Acid Applications"
        image={
          <Image
            src="/products/monoblock_battery.jpg"
            alt="Monoblock LiFEPO4 Battery"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Direct replacement for 12V lead-acid batteries",
          "Available in multiple capacities: 100Ah, 150Ah, 200Ah, and 300Ah",
          "Standard BCI group sizes compatible with existing installations",
          "Integrated BMS with cell balancing and protection",
          "100% depth of discharge capability without damage",
          "4x longer cycle life compared to premium lead-acid batteries",
          "80% weight reduction compared to equivalent lead-acid batteries",
          "Maintenance-free operation with no watering or equalization required",
        ]} */
        specifications={[
          {
            category: "General",
            items: [
              { name: "Battery Chemistry", value: "Lithium Iron Phosphate (LiFEPO4)" },
              { name: "Nominal Voltage", value: "12.8V" },
              {
                name: "Capacity Options",
                value: "100Ah (1.28kWh), 150Ah (1.92kWh), 200Ah (2.56kWh), 300Ah (3.84kWh)",
              },
              { name: "Cycle Life", value: ">4000 cycles at 80% DoD, >6000 cycles at 50% DoD" },
              { name: "Self-Discharge Rate", value: "<3% per month" },
            ],
          },
          {
            category: "Electrical Performance",
            items: [
              { name: "Maximum Continuous Discharge Current", value: "1C (100A for 100Ah model)" },
              { name: "Maximum Continuous Charge Current", value: "0.5C (50A for 100Ah model)" },
              { name: "Peak Discharge Current (10 sec)", value: "2C (200A for 100Ah model)" },
              { name: "Charge Voltage", value: "14.6V (recommended), 14.2-14.8V (acceptable range)" },
              { name: "Low Voltage Disconnect", value: "10.0V" },
            ],
          },
          {
            category: "Physical Specifications",
            items: [
              {
                name: "Dimensions",
                value: "100Ah: 330×173×212mm, 150Ah: 330×173×240mm, 200Ah: 522×240×218mm, 300Ah: 522×268×220mm",
              },
              { name: "Weight", value: "100Ah: 12kg, 150Ah: 18kg, 200Ah: 24kg, 300Ah: 35kg" },
              { name: "Terminal Type", value: "M8 stainless steel bolts" },
              { name: "Case Material", value: "ABS (UL94 V-0 flame retardant)" },
              { name: "IP Rating", value: "IP65" },
            ],
          },
          {
            category: "BMS Protection",
            items: [
              { name: "Overcharge Protection", value: "Cell voltage >3.75V" },
              { name: "Over-discharge Protection", value: "Cell voltage <2.5V" },
              { name: "Over-current Protection", value: "Adjustable based on model" },
              { name: "Short Circuit Protection", value: "Electronic circuit breaker with auto-reset" },
              { name: "Temperature Protection", value: "Charging: 0°C to 45°C, Discharging: -20°C to 60°C" },
            ],
          },
          {
            category: "Applications & Compatibility",
            items: [
              { name: "Compatible Systems", value: "RV, marine, solar off-grid, golf carts, floor machines" },
              {
                name: "Charger Compatibility",
                value: "Most lead-acid chargers with LiFEPO4 profile or adjustable settings",
              },
              { name: "Series Connection", value: "Up to 4 batteries in series (51.2V)" },
              { name: "Parallel Connection", value: "Up to 8 batteries in parallel (same model)" },
              { name: "Warranty", value: "5 years or 2000 cycles, whichever comes first" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/monoblockpdf.pdf" },
          
        ]}
        relatedProducts={[
          {
            name: "Wall Mounted Battery (CE Series)",
            description: "Low voltage wall mounted LiFEPO4 batteries for residential energy storage.",
            url: "/products/lithium-lifepo4/wall-mounted-ce",
          },
          {
            name: "Energy Storage Power Bank",
            description: "Portable energy storage solution with high capacity and multiple outputs.",
            url: "/products/lithium-lifepo4/power-bank",
          },
          {
            name: "Tall Tubular Batteries",
            description: "Premium lead-acid batteries for backup power applications.",
            url: "/products/batteries/tall-tubular-batteries",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

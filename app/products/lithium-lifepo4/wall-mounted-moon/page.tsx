import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Wall Mounted Battery (MOON 5&10) | Lithium | Durasol Energi",
  description:
    "Durasol's MOON series wall mounted LiFEPO4 batteries offer sleek design and advanced energy storage for modern homes with smart monitoring capabilities.",
}

export default function WallMountedMoonPage() {
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
            <span className="text-[#089c9c]">Wall Mounted Battery (MOON Series)</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Low Voltage Wall Mounted Battery (MOON 5&10)"
        description="The Low Voltage Wall Mounted Battery (MOON5-W & MOON10-W) by Durasol Energi is a high-tech energy storage solution designed for various  scenarios which is developed by Intelenergi. The battery has small size, light weight with long cycle life and supports rapid charging. It adopts advanced intelligent power supply with protection functions of over charge, over discharge, over current and temperature and has outstanding advantages in the application field of household energy storage."
        subtitle="Sleek, Modern Design Wall Mounted Batteries (MOON 5 & MOON 10)"
        image={
          <Image
            src="/products/wall_mounted_moon.jpg"
            alt="Wall Mounted Battery MOON Series"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Premium aesthetic design with curved edges and LED status indicator",
          "Available in 5kWh (MOON 5) and 10kWh (MOON 10) capacities",
          "Ultra-thin profile (only 100mm depth) for seamless wall integration",
          "Smart touchscreen interface with energy flow visualization",
          "Advanced BMS with AI-powered battery health prediction",
          "Wi-Fi and Bluetooth connectivity for smart home integration",
          "Compatible with major solar inverters and home automation systems",
          "Premium white finish with customizable front panel options",
        ]} */
        specifications={[
          {
            category: "General",
            items: [
              { name: "Battery Chemistry", value: "Lithium Iron Phosphate (LiFEPO4)" },
              { name: "Nominal Capacity", value: "5kWh (MOON 5) / 10kWh (MOON 10)" },
              { name: "Usable Capacity", value: "4.75kWh (MOON 5) / 9.5kWh (MOON 10)" },
              { name: "Cycle Life", value: ">6000 cycles at 80% DoD, 25°C" },
            ],
          },
          {
            category: "Electrical",
            items: [
              { name: "Nominal Voltage", value: "51.2V" },
              { name: "Operating Voltage Range", value: "44.8V - 57.6V" },
              { name: "Max Continuous Charge/Discharge Current", value: "50A (MOON 5) / 100A (MOON 10)" },
              { name: "Peak Discharge Current (3s)", value: "100A (MOON 5) / 150A (MOON 10)" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Dimensions (H×W×D)", value: "900×600×100mm (MOON 5) / 900×600×150mm (MOON 10)" },
              { name: "Weight", value: "50kg (MOON 5) / 90kg (MOON 10)" },
              { name: "Mounting", value: "Wall mounted (premium bracket included)" },
              { name: "IP Rating", value: "IP54 (indoor installation)" },
            ],
          },
          {
            category: "Communication & Features",
            items: [
              { name: "Communication Interface", value: "CAN, RS485, Wi-Fi, Bluetooth" },
              { name: "Display", value: 'Integrated 7" touchscreen with energy flow visualization' },
              { name: "Monitoring", value: "Mobile app, web portal, and smart home integration" },
              { name: "Warranty", value: "10 years or 6000 cycles, whichever comes first" },
            ],
          },
          {
            category: "Smart Features",
            items: [
              { name: "Energy Management", value: "AI-powered optimization for energy usage" },
              { name: "Time-of-Use Support", value: "Programmable charging/discharging based on electricity rates" },
              { name: "Backup Power", value: "Automatic switchover during grid outages" },
              { name: "Software Updates", value: "Over-the-air updates for continuous improvement" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/wallmountedmoonpdf.pdf" },
         
        ]}
        relatedProducts={[
          {
            name: "Wall Mounted Battery (CE Series)",
            description: "Low voltage wall mounted LiFEPO4 batteries for residential energy storage.",
            url: "/products/lithium-lifepo4/wall-mounted-ce",
          },
          {
            name: "Rack Mounted Battery (CT-5)",
            description: "Compact rack mounted LiFEPO4 batteries for flexible installation options.",
            url: "/products/lithium-lifepo4/rack-mounted-ct5",
          },
          {
            name: "Energy Storage Power Bank",
            description: "Portable energy storage solution with high capacity and multiple outputs.",
            url: "/products/lithium-lifepo4/power-bank",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

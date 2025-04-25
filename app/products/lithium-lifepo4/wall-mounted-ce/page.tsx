import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Wall Mounted Battery (CE5, CE10, CE15) | Lithium | Durasol Energi",
  description:
    "Durasol's wall mounted LiFEPO4 batteries (CE5, CE10, CE15) offer compact, efficient energy storage for residential applications with advanced BMS technology.",
}

export default function WallMountedCEPage() {
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
            <Link href="/products/lithium-lifepo4" className="text-gray-500 hover:text-[#089c9c]">
              Lithium (LiFEPO4)
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Wall Mounted Battery (CE Series)</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Low Voltage Wall Mounted Battery (CE5&10)"
        description="The Low Voltage Wall Mounted Battery (CE5&10) by Durasol Energi is a high-tech energy storage solution designed for various applications which is developed by Intelenergi. The battery has small size, light weight with long cycle life and supports rapid charging. It adopts advanced intelligent power supply with protection functions of over charge, over discharge, over current and temperature and has outstanding advantages in the application field of household energy storage."
        subtitle="Low Voltage Wall Mounted LiFEPO4 Batteries (CE5, CE10, CE15)"
        image={
          <Image
            src="/products/wall_mounted.jpg"
            alt="Wall Mounted Battery CE Series"
            fill
            className="object-contain"
          />
        }
      /*  features={[
          "Sleek wall-mounted design for space-efficient installation",
          "Available in 5kWh (CE5), 10kWh (CE10), and 15kWh (CE15) capacities",
          "Advanced BMS with cell-level monitoring and protection",
          "High cycle life: 6000+ cycles at 80% DoD",
          "Modular design allows for system expansion",
          "Integrated touchscreen display for system monitoring",
          "Wi-Fi connectivity for remote monitoring and control",
          "Compatible with most solar inverters and hybrid systems",
        ]} */
        specifications={[
          {
            category: "General",
            items: [
              { name: "Battery Chemistry", value: "Lithium Iron Phosphate (LiFEPO4)" },
              { name: "Nominal Capacity", value: "5kWh (CE5) / 10kWh (CE10) / 15kWh (CE15)" },
              { name: "Usable Capacity", value: "4.75kWh (CE5) / 9.5kWh (CE10) / 14.25kWh (CE15)" },
              { name: "Cycle Life", value: ">6000 cycles at 80% DoD, 25°C" },
            ],
          },
          {
            category: "Electrical",
            items: [
              { name: "Nominal Voltage", value: "51.2V" },
              { name: "Operating Voltage Range", value: "44.8V - 57.6V" },
              { name: "Max Continuous Charge/Discharge Current", value: "50A (CE5) / 100A (CE10, CE15)" },
              { name: "Peak Discharge Current (3s)", value: "100A (CE5) / 150A (CE10, CE15)" },
            ],
          },
          {
            category: "Physical",
            items: [
              {
                name: "Dimensions (H×W×D)",
                value: "650×500×150mm (CE5) / 650×500×200mm (CE10) / 650×500×250mm (CE15)",
              },
              { name: "Weight", value: "45kg (CE5) / 85kg (CE10) / 125kg (CE15)" },
              { name: "Mounting", value: "Wall mounted (bracket included)" },
              { name: "IP Rating", value: "IP54 (indoor installation)" },
            ],
          },
          {
            category: "Communication & Features",
            items: [
              { name: "Communication Interface", value: "CAN, RS485, Wi-Fi" },
              { name: "Display", value: 'Integrated 4.3" touchscreen' },
              { name: "Monitoring", value: "Mobile app and web portal" },
              { name: "Warranty", value: "10 years or 6000 cycles, whichever comes first" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/wallmountedce5pdf.pdf" },
         
        ]}
        relatedProducts={[
          {
            name: "Wall Mounted Battery (MOON Series)",
            description: "Sleek, modern design wall mounted batteries with advanced BMS technology.",
            url: "/products/lithium-lifepo4/wall-mounted-moon",
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
    </div>
  )
}

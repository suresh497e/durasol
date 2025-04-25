import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Industrial & Commercial Battery Storage | Lithium | Durasol Energi",
  description:
    "Durasol's industrial and commercial LiFEPO4 battery storage solutions provide scalable, high-capacity energy storage for businesses and industrial applications.",
}

export default function IndustrialCommercialPage() {
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
            <span className="text-[#089c9c]">Industrial & Commercial Battery Storage</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Industrial & Commercial Battery Storage | Lithium Energy Storage & Peak Load Shifting"
        description="The Durasol Energi Technof Series 50kW/100kWH & 100kW/200kWH lithium battery storage system offers high-capacity, industrial-grade energy storage with advanced EMS management, seamless backup power, and peak load shifting capabilities."
        subtitle="Scalable LiFEPO4 Battery Solutions for Business Applications"
        image={
          <Image
            src="/products/industrial_storage.jpg"
            alt="Industrial Battery Storage"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Modular design scalable from 50kWh to 2MWh+",
          "High-power capability for demanding industrial applications",
          "Containerized solutions available for rapid deployment",
          "Advanced Battery Management System (BMS) with remote monitoring",
          "Integrated fire suppression and thermal management",
          "Parallel and series configuration options for voltage/capacity scaling",
          "Grid-tied or off-grid operation capability",
          "Designed for 15+ year operational lifespan",
        ]} */
        specifications={[
          {
            category: "System Overview",
            items: [
              { name: "Battery Chemistry", value: "Lithium Iron Phosphate (LiFEPO4)" },
              { name: "System Capacity", value: "Modular from 50kWh to 2MWh+" },
              { name: "Scalability", value: "Expandable in 50kWh increments" },
              { name: "Cycle Life", value: ">6000 cycles at 80% DoD, 25°C" },
              { name: "Round Trip Efficiency", value: ">95%" },
            ],
          },
          {
            category: "Electrical Specifications",
            items: [
              { name: "System Voltage", value: "Configurable: 400V, 800V, or 1000V DC" },
              { name: "Continuous Power", value: "Up to 1C rate (full discharge in 1 hour)" },
              { name: "Peak Power", value: "Up to 2C rate for 30 seconds" },
              { name: "Response Time", value: "<100ms for grid services" },
              { name: "Grid Connection", value: "Compatible with major industrial inverters" },
            ],
          },
          {
            category: "Physical & Environmental",
            items: [
              { name: "Installation Options", value: "Indoor rack system or outdoor containerized solution" },
              { name: "Container Sizes", value: "20ft (up to 500kWh), 40ft (up to 2MWh)" },
              { name: "Operating Temperature", value: "-10°C to 50°C (with active thermal management)" },
              { name: "Humidity", value: "5% to 95%, non-condensing" },
              { name: "Altitude", value: "Up to 2000m without derating" },
            ],
          },
          {
            category: "Monitoring & Control",
            items: [
              { name: "Battery Management", value: "Hierarchical BMS with module, rack, and system level control" },
              { name: "Communication Protocols", value: "Modbus TCP/IP, DNP3, IEC 61850" },
              { name: "SCADA Integration", value: "Full integration capability with existing SCADA systems" },
              { name: "Remote Monitoring", value: "Cloud-based monitoring with predictive analytics" },
              { name: "Control Interface", value: "Local HMI touchscreen and remote web interface" },
            ],
          },
          {
            category: "Safety & Compliance",
            items: [
              { name: "Safety Certifications", value: "UL9540A, IEC62619, UN38.3" },
              { name: "Grid Compliance", value: "IEEE 1547, UL1741, IEC 62116" },
              { name: "Fire Protection", value: "Integrated detection and suppression system" },
              { name: "Environmental Rating", value: "IP54 (containerized solution)" },
              { name: "Warranty", value: "10-year standard, extendable to 15 years" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/industrialpdf.pdf" },
          
        ]}
        relatedProducts={[
          {
            name: "Energy Storage & Peak Load Shifting",
            description: "Advanced energy storage systems for grid stabilization and peak load management.",
            url: "/products/lithium-lifepo4/energy-storage",
          },
          {
            name: "Rack Mounted Battery (CT-5)",
            description: "Compact rack mounted LiFEPO4 batteries for flexible installation options.",
            url: "/products/lithium-lifepo4/rack-mounted-ct5",
          },
          {
            name: "Solar Online UPS",
            description: "Uninterruptible power supply systems with solar integration capabilities.",
            url: "/products/solar-online-ups",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Energy Storage & Peak Load Shifting | Lithium | Durasol Energi",
  description:
    "Durasol's advanced energy storage systems provide grid stabilization, peak load management, and cost optimization for commercial and utility applications.",
}

export default function EnergyStoragePage() {
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
            <span className="text-[#089c9c]">Energy Storage & Peak Load Shifting</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Energy Storage Power Bank (CS-5000-X-P)"
        description="The Durasol Energi Technof Series CS5000-X-P is a cutting-edge stack-based energy storage power supply developed by Intelenergi, featuring integrated battery modules, an off-grid inverter, and an EMS unit integrated inside. The system has 4 levels of protection strategy and supports usage of 4 battery modules in parallel with stack-based installation and can connects with PV, grid, and load to work. The charge mode can be chosen according to the application scenarios and the installation and O&M have been simplified. It is suitable for the scenarios of household emergency power backup (power shortage, power failure, typhoons, earthquakes and other natural disasters), peak and valley price arbitrage, and self generating and self-use, and has outstanding advantage in the application files of household energy storage."
        subtitle="Advanced Grid-Scale Energy Management Solutions"
        image={
          <Image
            src="/products/energy_storage_power.jpg"
            alt="Energy Storage System"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Complete energy storage solution with power conversion system",
          "Capacity options from 100kWh to 10MWh+",
          "Advanced energy management system for peak shaving and load shifting",
          "Grid services capability: frequency regulation, voltage support, and spinning reserve",
          "Seamless integration with renewable energy sources",
          "Microgrid capability with black start functionality",
          "Intelligent energy arbitrage for maximum ROI",
          "Turnkey installation with comprehensive service packages",
        ]} */
        specifications={[
          {
            category: "System Overview",
            items: [
              { name: "Solution Type", value: "Integrated energy storage system with PCS" },
              { name: "Battery Chemistry", value: "Lithium Iron Phosphate (LiFEPO4)" },
              { name: "System Capacity", value: "Modular from 100kWh to 10MWh+" },
              { name: "Power Rating", value: "100kW to 5MW per unit" },
              { name: "Power/Energy Ratio", value: "Configurable from 0.25C to 2C" },
            ],
          },
          {
            category: "Grid Services",
            items: [
              { name: "Peak Shaving", value: "Automated demand charge management" },
              { name: "Load Shifting", value: "Time-of-use optimization" },
              { name: "Frequency Regulation", value: "Primary and secondary response" },
              { name: "Voltage Support", value: "Dynamic VAR compensation" },
              { name: "Renewable Integration", value: "Ramp rate control and capacity firming" },
            ],
          },
          {
            category: "Power Conversion System",
            items: [
              { name: "Inverter Type", value: "Bidirectional, grid-forming capable" },
              { name: "AC Voltage", value: "380-480V three-phase (configurable)" },
              { name: "Efficiency", value: ">98% peak, >97% CEC weighted" },
              { name: "Grid Support", value: "IEEE 1547-2018, UL1741-SA compliant" },
              { name: "Islanding Capability", value: "Seamless transition to island mode with black start" },
            ],
          },
          {
            category: "Energy Management System",
            items: [
              { name: "Control Platform", value: "AI-powered energy optimization" },
              { name: "Forecasting", value: "Load, generation, and price prediction" },
              { name: "Scheduling", value: "Day-ahead and real-time optimization" },
              { name: "Monitoring", value: "24/7 remote monitoring and diagnostics" },
              { name: "Reporting", value: "Comprehensive performance and financial analytics" },
            ],
          },
          {
            category: "Installation & Service",
            items: [
              { name: "Deployment Options", value: "Containerized or custom-built" },
              { name: "Commissioning", value: "Turnkey installation and grid interconnection" },
              { name: "Maintenance", value: "Preventive maintenance and service plans available" },
              { name: "Warranty", value: "10-year system warranty with performance guarantee" },
              { name: "End-of-Life", value: "Complete recycling and disposal service" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/storagepowerpdf.pdf" },
         
        ]}
        relatedProducts={[
          {
            name: "Industrial & Commercial Battery Storage",
            description: "Scalable battery solutions for industrial and commercial applications.",
            url: "/products/lithium-lifepo4/industrial-commercial",
          },
          {
            name: "Solar Online UPS",
            description: "Uninterruptible power supply systems with solar integration capabilities.",
            url: "/products/solar-online-ups",
          },
          {
            name: "MPPT PCU",
            description: "Maximum Power Point Tracking Power Conditioning Units for solar applications.",
            url: "/products/solar-range/mppt-pcu",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

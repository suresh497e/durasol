import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Solar Pump Inverter | Solar Water Pumps | Durasol Energi",
  description:
    "Durasol's Solar Pump Inverters provide efficient power conversion and intelligent control for solar water pumping systems in agricultural and community applications.",
}

export default function SolarPumpInverterPage() {
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
            <Link href="/products/solar-water-pumps" className="text-gray-500 hover:text-[#089c9c]">
              Solar Water Pumps
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Solar Pump Inverter</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Solar Pump Inverter"
        description="The Durasol Solar Pump Inverter is designed to maximize energy efficiency in solar water pumping systems. Equipped with advanced MPPT (Maximum Power Point Tracking) control technology, it dynamically adjusts voltage and power to optimize solar energy utilization. This inverter ensures seamless operation of water pumps by quickly adjusting water outflow based on sunlight intensity changes. With automatic hibernation and wake-up functions, the inverter reduces energy waste, ensuring pumps run only when needed. Its dual supply capability, featuring a solar-grid changeover switch, offers uninterrupted operation, even in low sunlight conditions. Designed with intelligent safety features, including overvoltage, over-temperature, dry-run, and low-voltage protection, this high-efficiency inverter delivers a stable and reliable water supply for agriculture, irrigation, and industrial applications."
        subtitle="Advanced Inverters for Solar Water Pumping Systems"
        image={
          <Image
            src="/products/pump_inverter.jpg"
            alt="Solar Pump Inverter"
            fill
            className="object-contain"
          />
        }
        specifications={[
          {
            category: "Input",
            items: [
              { name: "Solar Input Voltage Range", value: "Model dependent (200-800V DC)" },
              { name: "MPPT Efficiency", value: ">99%" },
              { name: "AC Input (Optional)", value: "3-phase, 380-440V AC" },
              { name: "Maximum Input Power", value: "Model dependent (1.1kW to 75kW)" },
            ],
          },
          {
            category: "Output",
            items: [
              { name: "Output Power Range", value: "0.75kW to 55kW (model dependent)" },
              { name: "Output Voltage", value: "3-phase, 0-380V AC" },
              { name: "Output Frequency", value: "0-50/60Hz" },
              { name: "Motor Type Compatibility", value: "AC asynchronous, PMSM, BLDC" },
            ],
          },
          {
            category: "Protection",
            items: [
              { name: "Protection Features", value: "Overvoltage, undervoltage, overcurrent, overload, short circuit" },
              { name: "Pump Protection", value: "Dry run, water level, flow detection" },
              { name: "IP Rating", value: "IP65" },
              { name: "Operating Temperature", value: "-10°C to 60°C" },
            ],
          },
          {
            category: "Communication & Features",
            items: [
              { name: "Display", value: "LCD with system parameters" },
              { name: "Communication", value: "RS485, Modbus RTU" },
              { name: "Remote Monitoring", value: "Optional Wi-Fi/GPRS module" },
              { name: "Warranty", value: "2 years standard (extendable)" },
            ],
          },
        ]}
        downloads={[{ name: "Technical Brochure", url: "/products/pdf/solarpumpinverter.pdf" }]}
        relatedProducts={[
          {
            name: "Solar Controller",
            description: "Intelligent controllers for optimized solar water pumping system performance.",
            url: "/products/solar-water-pumps/controller",
          },
          {
            name: "Solar Pumps",
            description: "High-efficiency pumps designed for solar-powered water pumping applications.",
            url: "/products/solar-water-pumps/pumps",
          },
          {
            name: "Solar Panels",
            description: "High-efficiency solar panels for powering solar water pumping systems.",
            url: "/products/solar-range/solar-panel",
          },
        ]}
      />
      <Footer />
    </div>
  )
}

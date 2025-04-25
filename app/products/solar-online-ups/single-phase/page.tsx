import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Single Phase Online UPS | Solar Online UPS | Durasol Energi",
  description:
    "Durasol's Single Phase Solar Online UPS systems provide reliable power protection with solar integration for residential and small business applications.",
}

export default function SinglePhaseOnlineUPSPage() {
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
            <Link href="/products/solar-online-ups" className="text-gray-500 hover:text-[#089c9c]">
              Solar Online UPS
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Single Phase Online UPS</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Solar Online UPS (Single-Phase) – Reliable & Efficient Backup Power | Durasol Energi"
        description= "Solar Online UPS (Single-Phase) by Durasol Energi’s ensures uninterrupted power backup with true double-conversion technology, MPPT solar charging, and high efficiency. Built for residential and commercial use, it provides reliable protection against power fluctuations while maximizing solar energy utilization."
        subtitle="1-10kVA Solar Compatible Online UPS Systems"
        image={
          <Image
            src="/products/single_phase.jpg"
            alt="Single Phase Solar Online UPS"
            fill
            className="object-contain"
          />
        }
        /*features={[
          "True double-conversion online UPS with solar input capability",
          "Pure sine wave output with zero transfer time",
          "Wide input voltage range (110V-300V AC)",
          "Solar priority mode for maximum solar energy utilization",
          "LCD display with comprehensive system information",
          "Multiple communication interfaces (USB, RS-232, SNMP optional)",
          "ECO mode for improved efficiency",
          "Compatible with generators for versatile power backup",
        ]} */
        specifications={[
          {
            category: "Input",
            items: [
              { name: "Nominal Voltage", value: "220/230/240V AC" },
              { name: "Voltage Range", value: "110-300V AC (load dependent)" },
              { name: "Frequency", value: "50Hz/60Hz (auto-sensing)" },
              { name: "Solar Input", value: "MPPT solar charger, voltage range model dependent" },
            ],
          },
          {
            category: "Output",
            items: [
              { name: "Capacity", value: "1kVA/2kVA/3kVA/5kVA/10kVA (model dependent)" },
              { name: "Voltage", value: "220/230/240V AC ±1%" },
              { name: "Waveform", value: "Pure Sine Wave" },
              { name: "Transfer Time", value: "Zero" },
            ],
          },
          {
            category: "Battery",
            items: [
              { name: "DC Voltage", value: "24V/48V/96V (model dependent)" },
              { name: "Charging Current", value: "Up to 60A (model dependent)" },
              { name: "Charging Method", value: "3-stage with temperature compensation" },
              { name: "External Battery", value: "Supported" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Dimensions (D×W×H)", value: "Model dependent" },
              { name: "Weight", value: "Model dependent" },
              { name: "Operating Temperature", value: "0°C to 40°C" },
              { name: "Humidity", value: "0-95% RH (non-condensing)" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/singlephasepdf.pdf" },
          
        ]}
        relatedProducts={[
          {
            name: "Three Phase Online UPS",
            description: "Heavy-duty three phase solar online UPS for commercial and industrial applications.",
            url: "/products/solar-online-ups/three-phase",
          },
          {
            name: "Pure Sine Wave UPS",
            description: "Line-interactive UPS with pure sine wave output for sensitive electronics.",
            url: "/products/home-ups/pure-sine-wave-ups",
          },
          {
            name: "VRLA Batteries",
            description: "Maintenance-free batteries ideal for UPS applications.",
            url: "/products/batteries/vrla-batteries",
          },
        ]}
      />
      <Footer />
    </div>
  )
}

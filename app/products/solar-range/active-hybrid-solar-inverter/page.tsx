import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "MPPT PCU 2500-3000/24V | Durasol Energi",
  description:
    "Durasol MPPT PCU 2500-3000/24V offers high-efficiency solar energy conversion with maximum power point tracking for optimal performance in all conditions.",
}

export default function MpptPcu2500Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Breadcrumb */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#089c9c]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-[#089c9c]">
              Products
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products/solar-range" className="hover:text-[#089c9c]">
              Solar Range
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products/solar-range/mppt-pcu" className="hover:text-[#089c9c]">
              MPPT PCU
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#089c9c]">MPPT PCU 2500-3000/24V</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <ProductDetail
        title="High Frequency Based Active Hybrid Solar Inverter"
        description="This active hybrid solar inverter supports battery and non-battery operation, making it suitable for various energy storage setups. With its intelligent power management system, it seamlessly distributes power from solar panels, batteries, and grid supply, reducing electricity costs and ensuring uninterrupted power supply.

With advanced safety protections, Wi-Fi connectivity, and high surge handling capacity, the Durasol HF MPPT Solar Inverter is engineered for durability, high efficiency, and long-term performance."
        subtitle="High-Efficiency Solar Charge Controller & Inverter"
        image={
          <Image
            src="/products/high_frequency_hybrid.jpg"
            alt="MPPT PCU 2500-3000/24V"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Maximum Power Point Tracking for optimal solar energy harvesting",
          "High conversion efficiency up to 98%",
          "Wide MPPT voltage range for flexible solar array configuration",
          "Intelligent battery management system for extended battery life",
          "LCD display with comprehensive system information",
          "Multiple protection features: overload, short circuit, over temperature",
          "Pure sine wave output for sensitive electronics",
          "Configurable charging parameters for different battery types",
          "Silent operation with intelligent cooling system",
          "Compact design with wall-mounting capability",
        ]} */
        specifications={[
          {
            category: "Input",
            items: [
              { name: "Nominal Battery Voltage", value: "24V DC" },
              { name: "MPPT Voltage Range", value: "30-150V DC" },
              { name: "Maximum PV Array Power", value: "3000W" },
              { name: "Maximum PV Array Open Circuit Voltage", value: "150V DC" },
            ],
          },
          {
            category: "Output",
            items: [
              { name: "Nominal Output Voltage", value: "230V AC ±2%" },
              { name: "Output Frequency", value: "50Hz ±0.1Hz" },
              { name: "Continuous Power", value: "2500-3000VA" },
              { name: "Surge Power", value: "6000VA for 5 seconds" },
              { name: "Output Waveform", value: "Pure Sine Wave" },
              { name: "THD", value: "< 3% (Linear Load)" },
            ],
          },
          {
            category: "Efficiency",
            items: [
              { name: "Maximum Efficiency", value: "98%" },
              { name: "MPPT Efficiency", value: "> 99%" },
              { name: "Inverter Efficiency", value: "> 93%" },
            ],
          },
          {
            category: "Protection",
            items: [
              { name: "Solar Input", value: "Reverse polarity, over voltage" },
              { name: "Battery", value: "Over charge, deep discharge, reverse polarity" },
              { name: "Output", value: "Overload, short circuit, over temperature" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Dimensions (W×H×D)", value: "380×480×150 mm" },
              { name: "Weight", value: "18 kg" },
              { name: "Operating Temperature", value: "-10°C to 50°C" },
              { name: "Humidity", value: "0-95% non-condensing" },
            ],
          },
        ]}
        downloads={[
          { name: " Technical Brochure", url: "/products/pdf/highfrequencypdf.pdf" },
          
        ]}
        relatedProducts={[
          {
            name: "Durasol MPPT Solar Hybrid PCU",
            description: "High efficiency & smart power management solar hybrid PCU with advanced features.",
            url: "/products/solar-range/mppt-pcu/mppt-hybrid-pcu",
          },
          {
            name: "Durasol MPPT Solar Hybrid PCU Enhanced",
            description: "Enhanced version with additional features for demanding applications.",
            url: "/products/solar-range/mppt-pcu/mppt-hybrid-pcu-enhanced",
          },
          {
            name: "Hybrid MPPT Inverter",
            description: "Advanced hybrid inverter with MPPT technology for optimal performance.",
            url: "/products/solar-range/hybrid-mppt-inverter",
          },
        ]}
      />
      <Footer />
    </div>
  )
}

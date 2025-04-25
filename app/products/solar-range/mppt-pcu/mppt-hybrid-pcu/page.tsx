import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Durasol MPPT Solar Hybrid PCU | Durasol Energi",
  description:
    "Durasol MPPT Solar Hybrid PCU offers high efficiency and smart power management for optimal solar energy utilization in residential and commercial applications.",
}

export default function MpptHybridPcuPage() {
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
            <span className="text-[#089c9c]">Durasol MPPT Solar Hybrid PCU</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <ProductDetail
        title="Durasol MPPT Solar Hybrid PCU – High Efficiency & Smart Power Management"
        description="The Durasol MPPT Solar Hybrid PCU is an advanced solar power conditioning unit designed for efficient solar energy utilization and seamless power backup. With 99% MPPT tracking accuracy, it maximizes solar power conversion, ensuring optimal performance for residential and commercial applications.

Equipped with an intelligent sharing system, it efficiently manages solar and grid charging, reducing dependency on conventional power sources. The heavy-duty built-in solar charge controller ensures stable and clean energy output, making it ideal for running sensitive appliances.

Designed with Interleaved MPPT technology, it provides 30% higher efficiency than conventional PWM PCUs, delivering greater energy savings while maintaining system reliability and minimal maintenance requirements."
        subtitle="High Efficiency & Smart Power Management"
        image={
          <Image
            src="/products/mppt_solar_hybrid.jpg"
            alt="Durasol MPPT Solar Hybrid PCU"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Advanced MPPT algorithm for maximum solar energy harvesting",
          "Smart power management system for optimal energy utilization",
          "Hybrid operation with seamless switching between solar, battery, and grid",
          "Intelligent battery management for extended battery life",
          "LCD display with comprehensive system monitoring",
          "Multiple protection features for system safety",
          "Pure sine wave output for all types of loads",
          "Configurable priority modes: Solar > Battery > Grid",
          "Remote monitoring and control capability",
          "Compact and elegant design for residential installations",
        ]} */
        specifications={[
          {
            category: "Input",
            items: [
              { name: "Nominal Battery Voltage", value: "24V/48V DC" },
              { name: "MPPT Voltage Range", value: "60-150V DC" },
              { name: "Maximum PV Array Power", value: "4000W" },
              { name: "AC Input Voltage Range", value: "140-280V AC" },
            ],
          },
          {
            category: "Output",
            items: [
              { name: "Nominal Output Voltage", value: "230V AC ±2%" },
              { name: "Output Frequency", value: "50Hz ±0.1Hz" },
              { name: "Continuous Power", value: "3500VA" },
              { name: "Surge Power", value: "7000VA for 5 seconds" },
              { name: "Output Waveform", value: "Pure Sine Wave" },
              { name: "THD", value: "< 3% (Linear Load)" },
            ],
          },
          {
            category: "Efficiency",
            items: [
              { name: "Maximum Efficiency", value: "98%" },
              { name: "MPPT Efficiency", value: "> 99%" },
              { name: "Inverter Efficiency", value: "> 94%" },
            ],
          },
          {
            category: "Protection",
            items: [
              { name: "Solar Input", value: "Reverse polarity, over voltage" },
              { name: "Battery", value: "Over charge, deep discharge, reverse polarity" },
              { name: "Output", value: "Overload, short circuit, over temperature" },
              { name: "System", value: "Anti-islanding protection" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Dimensions (W×H×D)", value: "420×520×180 mm" },
              { name: "Weight", value: "22 kg" },
              { name: "Operating Temperature", value: "-10°C to 50°C" },
              { name: "Humidity", value: "0-95% non-condensing" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/mpptsolarhybridpcu.pdf" },
          
        ]}
        relatedProducts={[
          {
            name: "MPPT PCU 2500-3000/24V",
            description: "High-efficiency solar charge controller & inverter with MPPT technology.",
            url: "/products/solar-range/mppt-pcu/mppt-2500-3000",
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

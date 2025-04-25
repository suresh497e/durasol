import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ProductDetail from "@/components/product-detail";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Durasol MPPT Solar Hybrid PCU Enhanced | Durasol Energi",
  description:
    "The enhanced version of Durasol MPPT Solar Hybrid PCU with additional features for demanding applications and higher capacity requirements.",
};

export default function MpptHybridPcuEnhancedPage() {
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
            <Link
              href="/products/solar-range/mppt-pcu"
              className="hover:text-[#089c9c]"
            >
              MPPT PCU
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#089c9c]">
              Durasol MPPT Solar Hybrid PCU Enhanced
            </span>
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
            src="/products/mppt_solar_hybrid2.jpg"
            alt="Durasol MPPT Solar Hybrid PCU Enhanced"
            fill
            className="object-contain"
          />
        }
        /*  features={[
          "Dual MPPT tracking for optimized energy harvesting from multiple solar arrays",
          "Enhanced smart power management system with AI-based load prediction",
          "Expanded hybrid operation with priority customization",
          "Advanced battery management system supporting multiple battery chemistries",
          "Color touchscreen display with comprehensive system monitoring",
          "Enhanced protection features with self-diagnostic capabilities",
          "Pure sine wave output with <2% THD for sensitive equipment",
          "Programmable operation modes for different application scenarios",
          "Wi-Fi and Ethernet connectivity for remote monitoring and control",
          "Elegant wall-mountable design with premium finish",
        ]} */
        specifications={[
          {
            category: "Input",
            items: [
              { name: "Nominal Battery Voltage", value: "48V DC" },
              { name: "MPPT Voltage Range", value: "80-450V DC" },
              { name: "Maximum PV Array Power", value: "6000W" },
              { name: "AC Input Voltage Range", value: "140-280V AC" },
              { name: "Number of MPPT Trackers", value: "2" },
            ],
          },
          {
            category: "Output",
            items: [
              { name: "Nominal Output Voltage", value: "230V AC ±1%" },
              { name: "Output Frequency", value: "50Hz ±0.05Hz" },
              { name: "Continuous Power", value: "5000VA" },
              { name: "Surge Power", value: "10000VA for 10 seconds" },
              { name: "Output Waveform", value: "Pure Sine Wave" },
              { name: "THD", value: "< 2% (Linear Load)" },
            ],
          },
          {
            category: "Efficiency",
            items: [
              { name: "Maximum Efficiency", value: "98.5%" },
              { name: "MPPT Efficiency", value: "> 99.5%" },
              { name: "Inverter Efficiency", value: "> 95%" },
            ],
          },
          {
            category: "Protection",
            items: [
              {
                name: "Solar Input",
                value: "Reverse polarity, over voltage, surge protection",
              },
              {
                name: "Battery",
                value:
                  "Over charge, deep discharge, reverse polarity, temperature compensation",
              },
              {
                name: "Output",
                value:
                  "Overload, short circuit, over temperature, surge protection",
              },
              {
                name: "System",
                value: "Anti-islanding protection, ground fault protection",
              },
            ],
          },
          {
            category: "Communication",
            items: [
              { name: "Display", value: "7-inch color touchscreen" },
              { name: "Connectivity", value: "Wi-Fi, Ethernet, RS485, USB" },
              { name: "Remote Monitoring", value: "Mobile app, web portal" },
              { name: "Protocols", value: "Modbus, SNMP" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Dimensions (W×H×D)", value: "480×650×200 mm" },
              { name: "Weight", value: "28 kg" },
              { name: "Operating Temperature", value: "-20°C to 60°C" },
              { name: "Humidity", value: "0-95% non-condensing" },
              { name: "Protection Class", value: "IP65 (indoor)" },
            ],
          },
        ]}
        downloads={[
          {
            name: "Technical Brochure",
            url: "/brochures/mppt-hybrid-pcu-enhanced-brochure.pdf",
          },
        ]}
        relatedProducts={[
          {
            name: "MPPT PCU 2500-3000/24V",
            description:
              "High-efficiency solar charge controller & inverter with MPPT technology.",
            url: "/products/solar-range/mppt-pcu/mppt-2500-3000",
          },
          {
            name: "Durasol MPPT Solar Hybrid PCU",
            description:
              "Standard version with high efficiency and smart power management.",
            url: "/products/solar-range/mppt-pcu/mppt-hybrid-pcu",
          },
          {
            name: "Hybrid MPPT Inverter",
            description:
              "Advanced hybrid inverter with MPPT technology for optimal performance.",
            url: "/products/solar-range/hybrid-mppt-inverter",
          },
        ]}
      />
      <Footer />
    </div>
  );
}

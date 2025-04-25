import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "PWM PCU DSH Series | Solar Range | Durasol Energi",
  description:
    "Durasol's PWM PCU DSH Series (DSH2500, DSH3000, DSH2570, DSH3070) offers efficient 24V solar energy solutions with advanced features for optimal performance.",
}

export default function DSHSeriesPage() {
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
            <Link href="/products/solar-range" className="text-gray-500 hover:text-[#089c9c]">
              Solar Range
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <Link href="/products/solar-range/pwm-pcu" className="text-gray-500 hover:text-[#089c9c]">
              PWM PCU
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">DSH Series</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="PWM PCU – DSH2500, DSH3000, DSH2570, DSH3070 – 24V"
        description="The Durasol PWM PCU series (DSH2500, DSH3000, DSH2570, DSH3070 – 24V) is a state-of-the-art solar power conditioning unit designed for efficient energy conversion and seamless power backup. This smart PCU comes with a built-in heavy-duty solar charge controller, enabling intelligent power sharing between the grid and solar energy. With a pure sine wave output, it ensures stable and reliable performance for sensitive appliances.

The Durasol PWM PCU series is equipped with advanced battery management technology, offering compatibility with Tubular, LA, VRLA, and Li-ion batteries. Its instant changeover mechanism and high surge handling capacity make it ideal for IT loads, households, and commercial establishments."
        subtitle="DSH2500, DSH3000, DSH2570, DSH3070 – 24V"
        image={
          <Image src="/products/dsh2500.jpg" alt="PWM PCU DSH Series" fill className="object-contain" />
        }
      /*  features={[
          "24V system for higher power applications",
          "Multiple models with varying capacities (2500VA to 3070VA)",
          "PWM charging technology for optimal battery performance",
          "LCD display for real-time system monitoring",
          "Pure sine wave output for sensitive electronics",
          "Comprehensive protection features",
          "Solar priority mode for maximum solar utilization",
          "Compatible with various battery types",
        ]} */
        specifications={[
          {
            category: "Models",
            items: [
              { name: "DSH2500", value: "2500VA/24V" },
              { name: "DSH3000", value: "3000VA/24V" },
              { name: "DSH2570", value: "2500VA/24V with 70A charger" },
              { name: "DSH3070", value: "3000VA/24V with 70A charger" },
            ],
          },
          {
            category: "Input",
            items: [
              { name: "Solar Input Voltage Range", value: "28-56V DC" },
              { name: "Maximum Solar Current", value: "50A (standard) / 70A (70 series)" },
              { name: "AC Input Voltage Range", value: "140-270V AC" },
              { name: "AC Input Frequency", value: "50Hz ± 5Hz" },
            ],
          },
          {
            category: "Output",
            items: [
              { name: "Output Voltage", value: "230V ± 2%" },
              { name: "Output Frequency", value: "50Hz ± 0.5%" },
              { name: "Output Waveform", value: "Pure Sine Wave" },
              { name: "THD", value: "< 3% (Linear Load)" },
            ],
          },
          {
            category: "Battery",
            items: [
              { name: "Battery Voltage", value: "24V DC" },
              { name: "Battery Type", value: "Tubular, Flat Plate, VRLA" },
              { name: "Charging Current", value: "50A (standard) / 70A (70 series)" },
              { name: "Charging Method", value: "3-Stage PWM" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Dimensions (W×D×H)", value: "420 × 310 × 180 mm" },
              { name: "Weight", value: "18.5 kg" },
              { name: "Operating Temperature", value: "0°C to 45°C" },
              { name: "Humidity", value: "0-95% RH (Non-condensing)" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/dsh2500pdf.pdf" },
        
        ]}
        relatedProducts={[
          {
            name: "Durasol Solar PCU PWM",
            description: "Advanced Solar Charge Controller & Inverter",
            url: "/products/solar-range/pwm-pcu/advanced-controller",
          },
          {
            name: "Durasol Solar PCU PWM Enhanced",
            description: "Advanced Solar Charge Controller & Inverter with Extended Features",
            url: "/products/solar-range/pwm-pcu/enhanced-controller",
          },
          {
            name: "MPPT PCU 2500-3000/24V",
            description: "Maximum Power Point Tracking PCU for optimized solar energy harvesting",
            url: "/products/solar-range/mppt-pcu/mppt-2500-3000",
          },
        ]}
      />
      <Footer />
    </div>
  )
}

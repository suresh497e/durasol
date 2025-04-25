import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Durasol Solar PCU PWM Enhanced | Solar Range | Durasol Energi",
  description:
    "Advanced Solar Charge Controller & Inverter with Extended Features for superior solar energy management and battery charging.",
}

export default function EnhancedControllerPage() {
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
            <Link href="/products/solar-range" className="text-gray-500 hover:text-[#089c9c]">
              Solar Range
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <Link href="/products/solar-range/pwm-pcu" className="text-gray-500 hover:text-[#089c9c]">
              PWM PCU
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Enhanced Controller</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Durasol Solar PCU PWM – Advanced Solar Charge Controller & Inverter0"
        description="The Durasol Solar PCU PWM is an integrated solar power management system that seamlessly combines an inverter with a solar charge controller to optimize your solar energy utilization. It’s designed to intelligently switch between solar power and grid power, prioritizing solar energy to maximize efficiency and minimize costs.

Featuring ATBM technology, it is compatible with various battery types including Tubular, LA, VRLA, and Li-ion, ensuring broad application flexibility. The unit boasts a pure sine wave output, making it ideal for sensitive electronic equipment and IT loads, offering instant changeover to maintain uninterrupted power supply."
        subtitle="Advanced Solar Charge Controller & Inverter with Extended Features"
        image={
          <Image
            src="/products/solar_pcu_pwm1.jpg"
            alt="Durasol Solar PCU PWM Enhanced"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Advanced PWM charging with multi-stage battery management",
          "Extended feature set including programmable parameters",
          "Higher charging current capacity (up to 60A)",
          "Expanded LCD display with system analytics",
          "Wi-Fi connectivity option for remote monitoring",
          "Dual AC input capability for grid/generator backup",
          "Pure sine wave output with high surge capacity",
          "Comprehensive protection features for system safety",
          "Programmable operating modes for different applications",
        ]} */
        specifications={[
          {
            category: "Models",
            items: [
              { name: "DSE2200", value: "2200VA/24V" },
              { name: "DSE3000", value: "3000VA/24V" },
              { name: "DSE3500", value: "3500VA/48V" },
              { name: "DSE5000", value: "5000VA/48V" },
            ],
          },
          {
            category: "Input",
            items: [
              { name: "Solar Input Voltage Range", value: "24V: 30-60V DC / 48V: 60-120V DC" },
              { name: "Maximum Solar Current", value: "60A" },
              { name: "AC Input Voltage Range", value: "140-270V AC" },
              { name: "AC Input Frequency", value: "50Hz ± 5Hz" },
              { name: "Dual AC Input", value: "Grid and Generator inputs with automatic switching" },
            ],
          },
          {
            category: "Output",
            items: [
              { name: "Output Voltage", value: "230V ± 1%" },
              { name: "Output Frequency", value: "50Hz ± 0.1%" },
              { name: "Output Waveform", value: "Pure Sine Wave" },
              { name: "THD", value: "< 2% (Linear Load)" },
              { name: "Efficiency", value: "Up to 98%" },
              { name: "Surge Capacity", value: "300% for 5 seconds" },
            ],
          },
          {
            category: "Battery",
            items: [
              { name: "Battery Voltage", value: "24V/48V DC (model dependent)" },
              { name: "Battery Type", value: "Tubular, Flat Plate, VRLA, Li-ion (programmable)" },
              { name: "Charging Current", value: "Up to 60A (model dependent)" },
              { name: "Charging Method", value: "Multi-stage adaptive PWM" },
              { name: "Battery Temperature Compensation", value: "Optional sensor available" },
            ],
          },
          {
            category: "Communication & Monitoring",
            items: [
              { name: "Display", value: "Advanced LCD with system analytics" },
              { name: "Communication Ports", value: "RS232, USB" },
              { name: "Optional Connectivity", value: "Wi-Fi, GPRS for remote monitoring" },
              { name: "Mobile App", value: "Available for iOS and Android" },
              { name: "Data Logging", value: "Built-in with 1 year storage capacity" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Dimensions (W×D×H)", value: "420 × 310 × 180 mm" },
              { name: "Weight", value: "16.5 kg" },
              { name: "Operating Temperature", value: "-10°C to 50°C" },
              { name: "Humidity", value: "0-95% RH (Non-condensing)" },
              { name: "Protection Degree", value: "IP21" },
              { name: "Cooling", value: "Intelligent fan cooling" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/inverter0pdf.pdf" },
          
        ]}
        relatedProducts={[
          {
            name: "Durasol Solar PCU PWM",
            description: "Advanced Solar Charge Controller & Inverter",
            url: "/products/solar-range/pwm-pcu/advanced-controller",
          },
          {
            name: "PWM PCU DSH Series",
            description: "DSH2500, DSH3000, DSH2570, DSH3070 – 24V",
            url: "/products/solar-range/pwm-pcu/dsh-series",
          },
          {
            name: "MPPT Hybrid PCU Enhanced",
            description: "Advanced MPPT technology with extended features",
            url: "/products/solar-range/mppt-pcu/mppt-hybrid-pcu-enhanced",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

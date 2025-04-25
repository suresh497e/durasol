import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Durasol Solar PCU PWM | Solar Range | Durasol Energi",
  description:
    "Advanced Solar Charge Controller & Inverter with PWM technology for efficient solar energy conversion and battery charging.",
}

export default function AdvancedControllerPage() {
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
            <span className="text-[#089c9c]">Advanced Controller</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Durasol Solar PCU PWM – Advanced Solar Charge Controller & Inverter"
        subtitle="Advanced Solar Charge Controller & Inverter"
        image={
          <Image
            src="/products/solar_pcu_pwm.jpg"
            alt="Durasol Solar PCU PWM"
            fill
            className="object-contain"
          />
        }
      /*  features={[
          "Efficient PWM charging technology for optimal battery performance",
          "Pure sine wave output for sensitive electronics",
          "LCD display for real-time system monitoring",
          "Multiple protection features (overload, short circuit, battery protection)",
          "Solar priority mode for maximum solar utilization",
          "Compatible with various battery types (Tubular, Flat Plate, VRLA)",
          "Wide input voltage range for stable operation",
          "High conversion efficiency up to 98%",
        ]} */
        description={`The Durasol Solar PCU PWM is an integrated solar power management system that seamlessly combines an inverter with a solar charge controller to optimize your solar energy utilization. It’s designed to intelligently switch between solar power and grid power, prioritizing solar energy to maximize efficiency and minimize costs.

Featuring ATBM technology, it is compatible with various battery types including Tubular, LA, VRLA, and Li-ion, ensuring broad application flexibility. The unit boasts a pure sine wave output, making it ideal for sensitive electronic equipment and IT loads, offering instant changeover to maintain uninterrupted power supply.`}
        specifications={[
          {
            category: "Models",
            items: [
              { name: "DS1100", value: "1100VA/12V" },
              { name: "DS1600", value: "1600VA/24V" },
              { name: "DS2200", value: "2200VA/24V" },
            ],
          },
          {
            category: "Input",
            items: [
              { name: "Solar Input Voltage Range", value: "12V: 15-25V DC / 24V: 30-50V DC" },
              { name: "Maximum Solar Current", value: "30A" },
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
              { name: "Efficiency", value: "Up to 98%" },
            ],
          },
          {
            category: "Battery",
            items: [
              { name: "Battery Voltage", value: "12V/24V DC (model dependent)" },
              { name: "Battery Type", value: "Tubular, Flat Plate, VRLA" },
              { name: "Charging Current", value: "30A" },
              { name: "Charging Method", value: "3-Stage PWM" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Dimensions (W×D×H)", value: "380 × 280 × 140 mm" },
              { name: "Weight", value: "12.5 kg" },
              { name: "Operating Temperature", value: "0°C to 45°C" },
              { name: "Humidity", value: "0-95% RH (Non-condensing)" },
              { name: "Protection Degree", value: "IP20" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/solarcharhecontrollerpdf.pdf" },
         
        ]}
        relatedProducts={[
          {
            name: "Durasol Solar PCU PWM Enhanced",
            description: "Advanced Solar Charge Controller & Inverter with Extended Features",
            url: "/products/solar-range/pwm-pcu/enhanced-controller",
          },
          {
            name: "PWM PCU DSH Series",
            description: "DSH2500, DSH3000, DSH2570, DSH3070 – 24V",
            url: "/products/solar-range/pwm-pcu/dsh-series",
          },
          {
            name: "MPPT PCU 2500-3000/24V",
            description: "Maximum Power Point Tracking PCU for optimized solar energy harvesting",
            url: "/products/solar-range/mppt-pcu/mppt-2500-3000",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Solar Controller | Solar Water Pumps | Durasol Energi",
  description:
    "Durasol's Solar Controllers provide intelligent management and optimization for solar water pumping systems with advanced monitoring and protection features.",
}

export default function ControllerPage() {
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
            <Link href="/products/solar-water-pumps" className="text-gray-500 hover:text-[#089c9c]">
              Solar Water Pumps
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Solar Controller</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="SOLAR Pump Controller"
        description="Durasol Solar Pump Controller ensures efficient solar energy utilization with advanced MPPT technology, power quality enhancement, and intelligent protection for seamless water pump operation. Electric power quality is the degree to which the voltage, frequency, and waveform of a power supply system conform to established specifications. Good quality power is defined as a steady supply voltage that stays within the prescribed range, frequency close to the rated value, and smooth voltage curve waveform. The complexity of the power distribution system to move electricity from the point of production to the point of consumption combined with variations in weather, generation, demand, and other factors results in the quality of supply be compromised resulting in Over/Under Voltage, Voltage Imbalance, Voltage Dips/Surge, Flicker, Harmonic Distortion, etc. Poor power quality has a negative effect on the motor. it may malfunction, fail prematurely or not operate at all. ETG Controller comes to the rescue in such poor quality power conditions. The electricity entering the controller is digitally processed and the quality of power is improved and fed to the motor. Where there is loss of one phase or single phasing, the controller digitally converts the output to a three-phase supply and ensures continuity of operations, preventing downtime and repeated motor repair costs."
        subtitle="Intelligent Control System for Solar Water Pumping"
        image={
          <Image src="/products/pump_controller.png" alt="Solar Controller" fill className="object-contain" />
        }
       /* features={[
          "Intelligent MPPT algorithm for maximum solar energy utilization",
          "Comprehensive system monitoring and data logging",
          "Multiple protection features for pump and system safety",
          "Water level sensing and dry run protection",
          "Automatic operation based on water level or timer settings",
          "Optional remote monitoring via mobile app or web interface",
          "Weather-resistant enclosure for outdoor installation",
          "Compatible with various pump types and solar configurations",
        ]} */
        specifications={[
          {
            category: "General Specifications",
            items: [
              { name: "Controller Type", value: "MPPT (Maximum Power Point Tracking)" },
              { name: "System Voltage", value: "12V/24V/36V/48V auto recognition" },
              { name: "Maximum PV Input", value: "150V DC open circuit" },
              { name: "Maximum Current Rating", value: "20A/30A/40A/60A (model dependent)" },
            ],
          },
          
          {
            category: "Monitoring & Control",
            items: [
              { name: "Control Modes", value: "Manual, automatic, timer-based" },
              { name: "Sensor Inputs", value: "Water level, pressure, flow (model dependent)" },
              { name: "Data Logging", value: "Daily, monthly performance data" },
              { name: "Communication", value: "RS485, Bluetooth (optional), Wi-Fi (optional)" },
            ],
          },
          {
            category: "Physical & Environmental",
            items: [
              { name: "Enclosure", value: "IP65 rated, weather-resistant" },
              { name: "Operating Temperature", value: "-10°C to 60°C" },
              { name: "Humidity Range", value: "0-95%, non-condensing" },
              { name: "Dimensions", value: "Model dependent" },
            ],
          },
          {
            category: "Installation & Warranty",
            items: [
              { name: "Mounting", value: "Wall mount, pole mount options" },
              { name: "Wiring Terminals", value: "MC4 connectors for PV, screw terminals for load" },
              { name: "Warranty", value: "2 years standard (extendable)" },
              { name: "Certifications", value: "CE, RoHS, ISO 9001" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/solarcontrollerpdf.pdf" },
        ]}
        relatedProducts={[
          {
            name: "Solar Pump Inverter",
            description: "Advanced inverters specifically designed for solar water pumping applications.",
            url: "/products/solar-water-pumps/pump-inverter",
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
    </main>
  )
}

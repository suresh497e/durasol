import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Solar Submersible Pump | Solar Water Pumps | Durasol Energi",
  description:
    "Durasol's Solar Submersible Pumps provide efficient and reliable deep well water pumping solutions powered by solar energy for agricultural, residential, and commercial applications.",
}

export default function SubmersiblePumpPage() {
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
            <Link href="/products/solar-water-pumps/pumps" className="text-gray-500 hover:text-[#089c9c]">
              Solar Pumps
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Solar Submersible Pump</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="SOLAR SUBMERSIBLE PUMP"
        description= "Solar Submersible Pump System provides reliable water delivery by converting sunlight into electricity with advanced photovoltaic technology, ensuring a sustainable and eco-friendly solution. Solar photovoltaic systems are energy conversion systems, which convert solar energy into electrical energy. The solar photovoltaic system operates based on the photovoltaic effect in a silicon junction diode designed to facilitate the collection of usable magnitudes of electricity. The numbers of cells are strung up in series to generate power at usable voltages. The solar panel contains solar cells which produce electricity when exposed to sunlight. A solar panel water pumping system essentially consists of a solar photovoltaic panel which powers a water pump through the pump controller."
        subtitle="High-Efficiency Deep Well Pumps for Solar-Powered Water Systems"
        image={
          <Image
            src="/products/submersible_pump.png"
            alt="Solar Submersible Pump"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Designed specifically for deep well and borehole applications",
          "High efficiency DC brushless motors for maximum energy utilization",
          "Stainless steel construction for corrosion resistance and durability",
          "Capable of pumping from depths up to 200 meters",
          "Low maintenance requirements ideal for remote installations",
          "Wide operating voltage range for consistent performance",
          "Multiple capacity options to suit various applications",
          "Compatible with Durasol solar controllers and pump inverters",
        ]} */
        specifications={[
          {
            category: "Performance Specifications",
            items: [
              { name: "Power Range", value: "0.5HP to 5HP" },
              { name: "Maximum Head", value: "Up to 200 meters (model dependent)" },
              { name: "Maximum Flow Rate", value: "Up to 18,000 liters/hour (model dependent)" },
              { name: "Minimum Well Diameter", value: "4 inches (100mm)" },
            ],
          },
          {
            category: "Motor Specifications",
            items: [
              { name: "Motor Type", value: "DC brushless, high efficiency" },
              { name: "Motor Efficiency", value: ">90%" },
              { name: "Speed Range", value: "1000-3600 RPM (variable)" },
              { name: "Cooling", value: "Water cooled" },
            ],
          },
          {
            category: "Materials & Construction",
            items: [
              { name: "Pump Body", value: "Stainless steel 304/316" },
              { name: "Impeller", value: "Stainless steel/Noryl" },
              { name: "Shaft", value: "Stainless steel" },
              { name: "Seals", value: "Mechanical, ceramic/carbon/NBR" },
            ],
          },
          {
            category: "Electrical Specifications",
            items: [
              { name: "Operating Voltage", value: "24V-96V DC (model dependent)" },
              { name: "Protection Class", value: "IP68" },
              { name: "Cable Length", value: "10 meters standard (extendable)" },
              { name: "Built-in Protections", value: "Overload, dry run, over/under voltage" },
            ],
          },
          {
            category: "Installation & Warranty",
            items: [
              { name: "Connection Size", value: '1"-2" BSP/NPT (model dependent)' },
              { name: "Operating Temperature", value: "0°C to 40°C" },
              { name: "Warranty", value: "2 years standard" },
              { name: "Certifications", value: "CE, ISO 9001" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "#" },
          
        ]}
        relatedProducts={[
          {
            name: "Solar Surface Pump",
            description: "Versatile surface-mounted pumps for irrigation and water transfer applications.",
            url: "/products/solar-water-pumps/pumps/surface",
          },
          {
            name: "Solar Pump Inverter",
            description: "Advanced inverters specifically designed for solar water pumping applications.",
            url: "/products/solar-water-pumps/pump-inverter",
          },
          {
            name: "Solar Controller",
            description: "Intelligent controllers for optimized solar water pumping system performance.",
            url: "/products/solar-water-pumps/controller",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

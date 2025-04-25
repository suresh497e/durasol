import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Solar Surface Pump | Solar Water Pumps | Durasol Energi",
  description:
    "Durasol's Solar Surface Pumps provide efficient and reliable water pumping solutions powered by solar energy for irrigation, water transfer, and pressure boosting applications.",
}

export default function SurfacePumpPage() {
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
            <span className="text-[#089c9c]">Solar Surface Pump</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Solar Surface Pump"
        description = "Solar Surface Pump System is a high-efficiency, eco-friendly solution that harnesses solar energy to power water pumps, ensuring continuous water supply without reliance on the grid. The system consists of solar photovoltaic (PV) panels, a pump controller, and a water pump, working together to optimize energy utilization and water output.With Maximum Power Point Tracking (MPPT) technology, the solar pump controller dynamically adjusts output current based on sunlight intensity, ensuring maximum efficiency in water pumping. The system is ideal for agriculture, irrigation, livestock watering, and remote water supply applications, reducing energy costs and environmental impact."
        subtitle="Versatile Surface-Mounted Pumps for Solar-Powered Water Systems"
        image={
          <Image src="/products/surface_pump.jpg" alt="Solar Surface Pump" fill className="object-contain" />
        }
       /* features={[
          "Self-priming capability for easy installation and operation",
          "High flow rates ideal for irrigation and water transfer applications",
          "Corrosion-resistant materials for long service life",
          "Integrated dry run protection to prevent damage",
          "Low maintenance requirements ideal for remote installations",
          "Wide operating voltage range for consistent performance",
          "Multiple capacity options to suit various applications",
          "Compatible with Durasol solar controllers and pump inverters",
        ]} */
        specifications={[
          {
            category: "Performance Specifications",
            items: [
              { name: "Power Range", value: "0.5HP to 3HP" },
              { name: "Maximum Head", value: "Up to 40 meters (model dependent)" },
              { name: "Maximum Flow Rate", value: "Up to 15,000 liters/hour (model dependent)" },
              { name: "Self-Priming Height", value: "Up to 8 meters" },
            ],
          },
          {
            category: "Motor Specifications",
            items: [
              { name: "Motor Type", value: "DC brushless, high efficiency" },
              { name: "Motor Efficiency", value: ">90%" },
              { name: "Speed Range", value: "1000-3600 RPM (variable)" },
              { name: "Cooling", value: "Air cooled" },
            ],
          },
          {
            category: "Materials & Construction",
            items: [
              { name: "Pump Body", value: "Cast iron/stainless steel" },
              { name: "Impeller", value: "Brass/stainless steel" },
              { name: "Shaft", value: "Stainless steel" },
              { name: "Seals", value: "Mechanical, ceramic/carbon/NBR" },
            ],
          },
          {
            category: "Electrical Specifications",
            items: [
              { name: "Operating Voltage", value: "24V-96V DC (model dependent)" },
              { name: "Protection Class", value: "IP55" },
              { name: "Built-in Protections", value: "Overload, dry run, over/under voltage" },
              { name: "Control Interface", value: "Optional external control" },
            ],
          },
          {
            category: "Installation & Warranty",
            items: [
              { name: "Connection Size", value: '1"-2" BSP/NPT (model dependent)' },
              { name: "Operating Temperature", value: "0°C to 50°C" },
              { name: "Warranty", value: "2 years standard" },
              { name: "Certifications", value: "CE, ISO 9001" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/surfacepdf.pdf" },
          
        ]}
        relatedProducts={[
          {
            name: "Solar Submersible Pump",
            description: "High-efficiency submersible pumps for deep well and borehole applications.",
            url: "/products/solar-water-pumps/pumps/submersible",
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

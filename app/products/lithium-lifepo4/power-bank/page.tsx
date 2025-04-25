import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductDetail from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Energy Storage Power Bank (CS-5000-X-P) | Lithium | Durasol Energi",
  description:
    "Durasol's portable energy storage power bank provides reliable backup power with multiple outputs for home, outdoor, and emergency use.",
}

export default function PowerBankPage() {
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
            <Link href="/products/lithium-lifepo4" className="text-gray-500 hover:text-[#089c9c]">
              Lithium (LiFEPO4)
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Energy Storage Power Bank</span>
          </div>
        </div>
      </div>

      <ProductDetail
        title="Energy Storage Power Bank"
        description="The Durasol Energi Technof Series CS5000-X-P is a cutting-edge stack-based energy storage power supply developed by Intelenergi, featuring integrated battery modules, an off-grid inverter, and an EMS unit integrated inside. The system has 4 levels of protection strategy and supports usage of 4 battery modules in parallel with stack-based installation and can connects with PV, grid, and load to work. The charge mode can be chosen according to the application scenarios and the installation and O&M have been simplified. It is suitable for the scenarios of household emergency power backup (power shortage, power failure, typhoons, earthquakes and other natural disasters), peak and valley price arbitrage, and self generating and self-use, and has outstanding advantage in the application files of household energy storage."
        subtitle="Portable Energy Storage Solution (CS-5000-X-P)"
        image={
          <Image
            src="/products/energy_storage_power.jpg"
            alt="Energy Storage Power Bank"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "5kWh LiFEPO4 battery capacity in a portable design",
          "Multiple output options: AC (pure sine wave), DC, USB-A, USB-C",
          "Solar charging capability (MPPT controller built-in)",
          "LCD display with real-time power monitoring",
          "Rugged, weather-resistant enclosure (IP65 rated)",
          "Integrated handles and wheels for easy transportation",
          "Fast charging capability (0-80% in 2 hours with AC input)",
          "Silent operation with passive cooling system",
        ]} */
        specifications={[
          {
            category: "General",
            items: [
              { name: "Battery Chemistry", value: "Lithium Iron Phosphate (LiFEPO4)" },
              { name: "Nominal Capacity", value: "5kWh (100Ah @ 51.2V)" },
              { name: "Usable Capacity", value: "4.75kWh" },
              { name: "Cycle Life", value: ">3000 cycles at 80% DoD, 25°C" },
            ],
          },
          {
            category: "Electrical Output",
            items: [
              { name: "AC Output", value: "2000W continuous, 4000W peak (pure sine wave)" },
              { name: "AC Outlets", value: "4x standard outlets (region specific)" },
              { name: "DC Output", value: "12V/10A, 24V/10A, 48V/10A" },
              { name: "USB Ports", value: "4x USB-A (5V/2.4A), 2x USB-C PD (100W max)" },
              { name: "Wireless Charging", value: "15W Qi wireless charging pad on top surface" },
            ],
          },
          {
            category: "Charging Input",
            items: [
              { name: "AC Charging", value: "1800W max, 2-3 hours for full charge" },
              { name: "Solar Input", value: "MPPT 12-60V, 15A max (900W)" },
              { name: "Car Charging", value: "12V/24V input, 10A max" },
              { name: "Charging Time (AC)", value: "0-80% in 2 hours, 100% in 3 hours" },
            ],
          },
          {
            category: "Physical",
            items: [
              { name: "Dimensions (H×W×D)", value: "420×320×280mm" },
              { name: "Weight", value: "45kg" },
              { name: "Operating Temperature", value: "-10°C to 45°C" },
              { name: "IP Rating", value: "IP65 (dust and water resistant)" },
            ],
          },
          {
            category: "Features & Interface",
            items: [
              { name: "Display", value: "5-inch color LCD touchscreen" },
              { name: "Connectivity", value: "Bluetooth, Wi-Fi for app control" },
              { name: "Mobile App", value: "iOS and Android compatible" },
              { name: "Warranty", value: "3 years" },
            ],
          },
        ]}
        downloads={[
          { name: "Technical Brochure", url: "/products/pdf/storagepowerpdf.pdf" },
          
        ]}
        relatedProducts={[
          {
            name: "Wall Mounted Battery (CE Series)",
            description: "Low voltage wall mounted LiFEPO4 batteries for residential energy storage.",
            url: "/products/lithium-lifepo4/wall-mounted-ce",
          },
          {
            name: "Monoblock Battery (12.8V)",
            description: "Drop-in replacement for lead-acid batteries with superior cycle life and performance.",
            url: "/products/lithium-lifepo4/monoblock-battery",
          },
          {
            name: "Energy Storage & Peak Load Shifting",
            description: "Advanced energy storage systems for grid stabilization and peak load management.",
            url: "/products/lithium-lifepo4/energy-storage",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Solar Pumps | Solar Water Pumps | Durasol Energi",
  description:
    "Durasol's Solar Pumps provide efficient and reliable water pumping solutions powered by solar energy for agricultural, residential, and commercial applications.",
}

export default function SolarPumpsPage() {
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
            <Link href="/products/solar-water-pumps" className="text-gray-500 hover:text-[#089c9c]">
              Solar Water Pumps
            </Link>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            <span className="text-[#089c9c]">Solar Pumps</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#089c9c] to-[#076e6e] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl">Solar Pumps</h1>
            <p className="mt-4 text-xl text-white opacity-90">High-Efficiency Pumps for Solar-Powered Water Systems</p>
          </div>
        </div>
      </div>

      {/* Products Listing */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Solar Submersible Pump */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
            <div className="relative h-64 w-full">
              <Image
                src="/products/submersible_pump.png"
                alt="Solar Submersible Pump"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">Solar Submersible Pump</h3>
              <p className="mt-2 text-gray-600">
                High-efficiency submersible pumps designed specifically for solar-powered deep well and borehole
                applications.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-[#089c9c]">✓</span>
                  <span>Depths up to 200 meters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#089c9c]">✓</span>
                  <span>Stainless steel construction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#089c9c]">✓</span>
                  <span>DC brushless motor technology</span>
                </li>
              </ul>
              <Link
                href="/products/solar-water-pumps/pumps/submersible"
                className="mt-6 inline-block rounded-md bg-[#089c9c] px-6 py-3 text-white transition-colors hover:bg-[#076e6e]"
              >
                View Details
              </Link>
            </div>
          </div>

          {/* Solar Surface Pump */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
            <div className="relative h-64 w-full">
              <Image
                src="/products/surface_pump.jpg"
                alt="Solar Surface Pump"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">Solar Surface Pump</h3>
              <p className="mt-2 text-gray-600">
                Versatile surface-mounted pumps for irrigation, water transfer, and pressure boosting applications.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-[#089c9c]">✓</span>
                  <span>Self-priming capability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#089c9c]">✓</span>
                  <span>High flow rates up to 15,000 L/hour</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#089c9c]">✓</span>
                  <span>Integrated dry run protection</span>
                </li>
              </ul>
              <Link
                href="/products/solar-water-pumps/pumps/surface"
                className="mt-6 inline-block rounded-md bg-[#089c9c] px-6 py-3 text-white transition-colors hover:bg-[#076e6e]"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold text-gray-800">Why Choose Durasol Solar Pumps</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Energy Efficient</h3>
              <p className="mt-2 text-gray-600">
                Our pumps are designed to maximize water output while minimizing energy consumption, providing optimal
                performance even in low-light conditions.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Durable Construction</h3>
              <p className="mt-2 text-gray-600">
                Built with high-quality corrosion-resistant materials to ensure long service life in harsh environments
                and continuous operation.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Complete System Compatibility</h3>
              <p className="mt-2 text-gray-600">
                Seamlessly integrates with Durasol controllers, inverters, and solar panels for a complete, reliable
                water pumping solution.
              </p>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold text-gray-800">Applications</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-4 text-center shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Agriculture</h3>
              <p className="mt-2 text-sm text-gray-600">Irrigation and livestock watering</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Residential</h3>
              <p className="mt-2 text-sm text-gray-600">Domestic water supply and garden irrigation</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Commercial</h3>
              <p className="mt-2 text-sm text-gray-600">Water supply for businesses and institutions</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">Remote Areas</h3>
              <p className="mt-2 text-sm text-gray-600">Off-grid water solutions for remote locations</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-lg bg-gradient-to-r from-[#089c9c] to-[#076e6e] p-8 text-center text-white">
          <h2 className="text-3xl font-bold">Need Help Choosing the Right Pump?</h2>
          <p className="mt-4 text-lg">
            Our experts can help you select the perfect solar pump solution for your specific requirements.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-md bg-white px-6 py-3 font-medium text-[#089c9c] transition-colors hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

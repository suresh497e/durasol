"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
// Import from our exports utility instead of using wildcard imports
import { Navbar, Footer, ContactCTA } from "@/lib/exports"

export default function PWMPCUClientPage() {
  // Component implementation remains the same
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
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
              <span className="text-[#089c9c]">PWM PCU</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#089c9c] to-[#00c0c0] py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-center md:text-left">
                <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">PWM PCU</h1>
                <p className="text-lg text-white">
                  Pulse Width Modulation Power Conditioning Units for efficient solar energy conversion
                </p>
              </div>
              <div className="relative h-64 w-64">
                <Image src="/placeholder.svg?height=256&width=256" alt="PWM PCU" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Overview */}
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">PWM PCU Overview</h2>
            <p className="mb-4 text-gray-600">
              Durasol's PWM PCU (Pulse Width Modulation Power Conditioning Unit) range offers efficient solar energy
              conversion with advanced features for optimal performance. Our PWM technology ensures efficient battery
              charging while providing stable power output for your appliances.
            </p>
            <p className="text-gray-600">
              With multiple protection features, wide input voltage range, and compatibility with various battery types,
              Durasol PWM PCUs are the perfect solution for residential and small commercial solar installations.
            </p>
          </div>

          {/* Product Listings */}
          <h2 className="mb-6 text-2xl font-bold text-gray-800">PWM PCU Products</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Product 1 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-72 w-full">
                <Image
                  src="/products/solar_pcu_pwm.jpg"
                  alt="Durasol Solar PCU PWM"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Durasol Solar PCU PWM – Advanced Solar Charge Controller & Inverter</h3>
                <p className="mb-4 text-sm text-gray-600">Durasol Solar PCU PWM – Advanced Solar Charge Controller & Inverter</p>
                <Link
                  href="/products/solar-range/pwm-pcu/advanced-controller"
                  className="inline-block rounded-md bg-[#089c9c] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#067a7a]"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-72 w-full">
                <Image
                  src="/products/solar_pcu_pwm1.jpg"
                  alt="Durasol Solar PCU PWM Enhanced"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">Durasol Solar PCU PWM – Advanced Solar Charge Controller & Inverter0</h3>
                <p className="mb-4 text-sm text-gray-600">
                  Advanced Solar Charge Controller & Inverter with Extended Features
                </p>
                <Link
                  href="/products/solar-range/pwm-pcu/enhanced-controller"
                  className="inline-block rounded-md bg-[#089c9c] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#067a7a]"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
              <div className="relative h-72 w-full">
                <Image
                  src="/products/dsh2500.jpg"
                  alt="PWM PCU DSH Series"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">PWM PCU – DSH2500, DSH3000, DSH2570, DSH3070 – 24V</h3>
                <p className="mb-4 text-sm text-gray-600">DSH2500, DSH3000, DSH2570, DSH3070 – 24V</p>
                <Link
                  href="/products/solar-range/pwm-pcu/dsh-series"
                  className="inline-block rounded-md bg-[#089c9c] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#067a7a]"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">Key Features of Durasol PWM PCU</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-lg font-semibold text-[#089c9c]">Efficient PWM Charging</h3>
                <p className="text-gray-600">
                  Optimized battery charging with PWM technology for extended battery life and performance.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-lg font-semibold text-[#089c9c]">Wide Input Voltage Range</h3>
                <p className="text-gray-600">
                  Stable operation across varying solar and grid input conditions for reliable performance.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-lg font-semibold text-[#089c9c]">Multiple Battery Compatibility</h3>
                <p className="text-gray-600">
                  Works with Tubular, Flat Plate, and VRLA batteries for flexible installation options.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-lg font-semibold text-[#089c9c]">LCD Display</h3>
                <p className="text-gray-600">
                  Real-time monitoring of system parameters for easy operation and troubleshooting.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-lg font-semibold text-[#089c9c]">Comprehensive Protection</h3>
                <p className="text-gray-600">
                  Built-in protection against overload, short circuit, and battery voltage fluctuations.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-lg font-semibold text-[#089c9c]">Pure Sine Wave Output</h3>
                <p className="text-gray-600">Clean power output suitable for sensitive electronics and appliances.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">Applications</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-4 rounded-full bg-[#e6f7f7] p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#089c9c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">Residential</h3>
              <p className="text-sm text-gray-600">
                Ideal for homes seeking reliable backup power with solar integration.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-4 rounded-full bg-[#e6f7f7] p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#089c9c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">Small Offices</h3>
              <p className="text-sm text-gray-600">
                Perfect for small businesses requiring uninterrupted power supply.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-4 rounded-full bg-[#e6f7f7] p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#089c9c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">Shops & Retail</h3>
              <p className="text-sm text-gray-600">Reliable power backup for retail establishments and small shops.</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-4 rounded-full bg-[#e6f7f7] p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#089c9c]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">Security Systems</h3>
              <p className="text-sm text-gray-600">
                Ensures continuous operation of security and surveillance systems.
              </p>
            </div>
          </div>
        </div>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

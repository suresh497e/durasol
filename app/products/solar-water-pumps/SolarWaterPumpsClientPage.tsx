"use client"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SolarWaterPumpsClientPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary-700 to-primary py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Solar Water Pumps</h1>
            <p className="text-lg max-w-3xl">
              Efficient and sustainable solar-powered water pumping solutions for agriculture, residential, and
              commercial applications.
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Solar Water Pump Solutions</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pumps */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-4 h-48 flex items-center justify-center bg-gray-100">
                  <Image
                    src="/images/solar-water-pumps.png"
                    alt="Solar Water Pumps"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Solar Pumps</h3>
                  <p className="text-gray-600 mb-4">
                    High-efficiency solar pumps designed for various water pumping applications.
                  </p>
                  <Link href="/products/solar-water-pumps/pumps" className="text-primary font-medium hover:underline">
                    View Details
                  </Link>
                </div>
              </div>

              {/* Controller */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-4 h-48 flex items-center justify-center bg-gray-100">
                  <Image
                    src="/images/solar-water-pumps.png"
                    alt="Solar Pump Controller"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Solar Controller</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced controllers for optimal performance of solar water pumping systems.
                  </p>
                  <Link
                    href="/products/solar-water-pumps/controller"
                    className="text-primary font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Pump Inverter */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-4 h-48 flex items-center justify-center bg-gray-100">
                  <Image
                    src="/images/solar-water-pumps.png"
                    alt="Solar Pump Inverter"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Pump Inverter</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized inverters designed for solar water pumping applications.
                  </p>
                  <Link
                    href="/products/solar-water-pumps/pump-inverter"
                    className="text-primary font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Benefits of Solar Water Pumps</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
                <p>Zero emissions and clean energy source, reducing carbon footprint and environmental impact.</p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
                <p>Significant reduction in electricity bills with free solar energy and minimal maintenance costs.</p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Reliable Operation</h3>
                <p>Consistent performance even in remote areas without access to the electrical grid.</p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Low Maintenance</h3>
                <p>Fewer moving parts and robust design ensure long service life with minimal upkeep.</p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Government Incentives</h3>
                <p>Eligible for various subsidies and tax benefits, making installation more affordable.</p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Versatile Applications</h3>
                <p>Suitable for irrigation, livestock watering, residential use, and community water supply.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

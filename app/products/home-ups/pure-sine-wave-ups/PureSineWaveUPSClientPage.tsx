"use client"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PureSineWaveUPSClientPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary-700 to-primary py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Pure Sine Wave UPS</h1>
            <p className="text-lg max-w-3xl">
              Our Pure Sine Wave UPS systems provide clean, reliable power for sensitive electronics and critical
              applications.
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Pure Sine Wave UPS Models</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* DSW850 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-4 h-48 flex items-center justify-center bg-gray-100">
                  <Image
                    src="/products/dsw850.jpg"
                    alt="DSW850 Pure Sine Wave UPS"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">DSW850</h3>
                  <p className="text-gray-600 mb-4">
                    850VA Pure Sine Wave UPS with advanced features for home and office use.
                  </p>
                  <Link
                    href="/products/home-ups/pure-sine-wave-ups/dsw850"
                    className="text-primary font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* DSW950 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-4 h-48 flex items-center justify-center bg-gray-100">
                  <Image
                    src="/products/dsw1250.jpg"
                    alt="DSW950 Pure Sine Wave UPS"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Durasol Pure Sine Wave UPS DSW1250, DSW1450 – 12V | Reliable & Efficient Power Backup</h3>
                  <p className="text-gray-600 mb-4">
                     Pure Sine Wave UPS with enhanced battery backup for reliable power.
                  </p>
                  <Link
                    href="/products/home-ups/pure-sine-wave-ups/dsw950"
                    className="text-primary font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* DSW1150 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-4 h-48 flex items-center justify-center bg-gray-100">
                  <Image
                    src="/products/dsw1700.jpg"
                    alt="DSW1150 Pure Sine Wave UPS"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Durasol Pure Sine Wave UPS DSW1700, DSW2100 – 24V | High-Efficiency Power Backup</h3>
                  <p className="text-gray-600 mb-4">
                     Pure Sine Wave UPS for medium power requirements with surge protection.
                  </p>
                  <Link
                    href="/products/home-ups/pure-sine-wave-ups/dsw1150"
                    className="text-primary font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* DSW1450 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-4 h-48 flex items-center justify-center bg-gray-100">
                  <Image
                    src="/products/dsw2500.jpg"
                    alt="DSW1450 Pure Sine Wave UPS"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Pure Sine Wave UPS DSW2500, DSW3000 – 24V</h3>
                  <p className="text-gray-600 mb-4">
                     Pure Sine Wave UPS with LCD display and intelligent battery management.
                  </p>
                  <Link
                    href="/products/home-ups/pure-sine-wave-ups/dsw1450"
                    className="text-primary font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* DSW1700 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-4 h-48 flex items-center justify-center bg-gray-100">
                  <Image
                    src="/products/dsw3.5kv.jpg"
                    alt="DSW1700 Pure Sine Wave UPS"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Durasol Pure Sine Wave UPS DSW3.5KVA – 48V | Reliable Power Backup</h3>
                  <p className="text-gray-600 mb-4">
                     Pure Sine Wave UPS for high-power applications with extended runtime.
                  </p>
                  <Link
                    href="/products/home-ups/pure-sine-wave-ups/dsw1700"
                    className="text-primary font-medium hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* DSW 3-5kVA */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-4 h-48 flex items-center justify-center bg-gray-100">
                  <Image
                    src="/products/dsw5kv.jpg"
                    alt="DSW 3-5kVA Pure Sine Wave UPS"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Durasol Pure Sine Wave UPS DSW5KVA – 48V | High-Performance Backup Power</h3>
                  <p className="text-gray-600 mb-4">
                    High-capacity 3-5kVA Pure Sine Wave UPS for commercial and industrial applications.
                  </p>
                  <Link
                    href="/products/home-ups/pure-sine-wave-ups/dsw-3-5kva"
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
            <h2 className="text-2xl font-bold mb-6">Why Choose Our Pure Sine Wave UPS?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Clean Power Output</h3>
                <p>
                  Our Pure Sine Wave technology delivers clean, stable power that's safe for sensitive electronics and
                  medical equipment.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Advanced Battery Management</h3>
                <p>
                  Intelligent charging and battery monitoring systems extend battery life and ensure reliable
                  performance.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Comprehensive Protection</h3>
                <p>
                  Built-in safeguards against overload, short circuit, over-voltage, and over-temperature conditions.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">LCD Display</h3>
                <p>
                  User-friendly interface provides real-time information on battery status, load levels, and operating
                  conditions.
                </p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Fast Transfer Time</h3>
                <p>Millisecond transfer time ensures uninterrupted power to critical equipment during outages.</p>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Energy Efficient</h3>
                <p>
                  High efficiency design reduces power consumption and operating costs while minimizing heat generation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

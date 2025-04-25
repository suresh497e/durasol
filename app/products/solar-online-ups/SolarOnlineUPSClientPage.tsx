"use client"

import Link from "next/link"
import Image from "next/image"
// Import from our exports utility instead of using wildcard imports
import { Navbar, Footer } from "@/lib/exports"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function SolarOnlineUPSClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const products = [
    {
      name: "Single Phase Online UPS",
      description: "Solar compatible online UPS systems for residential and small business applications.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/solar-online-ups/single-phase",
    },
    {
      name: "Three Phase Online UPS",
      description: "Heavy-duty three phase solar online UPS for commercial and industrial applications.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/solar-online-ups/three-phase",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
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
              <span className="text-[#089c9c]">Solar Online UPS</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#089c9c] to-[#076e6e] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Solar Online UPS</h1>
                <p className="text-white/90 text-lg mb-8">
                  Durasol's Solar Online UPS systems provide uninterrupted power supply with solar integration
                  capabilities. Our double-conversion technology ensures clean, stable power for critical loads while
                  maximizing solar energy utilization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === "overview" ? "bg-white text-[#089c9c]" : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                    onClick={() => setActiveTab("overview")}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === "products" ? "bg-white text-[#089c9c]" : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                    onClick={() => setActiveTab("products")}
                  >
                    Products
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Solar Online UPS"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {activeTab === "overview" ? (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Uninterrupted Power with Solar Integration
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Solar Online UPS?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-[#089c9c] rounded-full p-1 mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Double Conversion Technology</span>
                          <p className="text-gray-600 mt-1">
                            True online double conversion provides complete isolation from grid disturbances.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#089c9c] rounded-full p-1 mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Solar Priority Mode</span>
                          <p className="text-gray-600 mt-1">
                            Prioritizes solar energy utilization, reducing grid dependency and electricity costs.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#089c9c] rounded-full p-1 mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Wide Input Voltage Range</span>
                          <p className="text-gray-600 mt-1">
                            Operates in areas with unstable grid conditions without switching to battery mode.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-[#089c9c] rounded-full p-1 mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Advanced Monitoring</span>
                          <p className="text-gray-600 mt-1">
                            Comprehensive monitoring and control options with LCD display and remote management.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Solar Online UPS System"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-8 mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Applications</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="bg-[#089c9c]/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
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
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Critical Infrastructure</h4>
                      <p className="text-gray-600">
                        Protect critical systems in healthcare, finance, and data centers with reliable power.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="bg-[#089c9c]/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
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
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Commercial Buildings</h4>
                      <p className="text-gray-600">
                        Ensure business continuity with clean power for offices, retail, and commercial facilities.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="bg-[#089c9c]/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
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
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Solar Integration</h4>
                      <p className="text-gray-600">
                        Maximize solar energy utilization while ensuring uninterrupted power supply.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Protect Your Critical Systems</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                    Durasol's Solar Online UPS systems provide the highest level of power protection while integrating
                    seamlessly with solar energy systems. Contact our experts to find the right solution for your
                    critical power needs.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-[#089c9c] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#078787] transition-colors"
                  >
                    Contact Us for Expert Advice
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Solar Online UPS Range</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {products.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
                    >
                      <Link href={product.link} className="block">
                        <div className="relative h-48 bg-gray-100">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-[#089c9c] font-medium">View Details</span>
                            <ChevronRight className="h-5 w-5 text-[#089c9c]" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

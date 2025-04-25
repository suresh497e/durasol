"use client"

import Link from "next/link"
import Image from "next/image"
// Import from our exports utility instead of using wildcard imports
import { Navbar, Footer, ContactCTA } from "@/lib/exports"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function ACStreetLightsClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const products = [
    {
      name: "LED Street Lights (50W, 100W)",
      description: "High-performance LED street lights for urban and roadway illumination.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/ac-street-lights/led-street-lights",
    },
    {
      name: "Flood Lights (100W, 150W)",
      description: "Powerful flood lights for area lighting and architectural applications.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/ac-street-lights/flood-lights",
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
              <span className="text-[#089c9c]">AC Street Lights</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#089c9c] to-[#076e6e] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AC Street Lights</h1>
                <p className="text-white/90 text-lg mb-8">
                  Durasol's AC LED street lights and flood lights provide energy-efficient, high-performance
                  illumination for urban, commercial, and industrial outdoor lighting applications. Our lighting
                  solutions combine cutting-edge LED technology with robust design for reliability and longevity.
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
                  alt="AC Street Lights"
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
                  Energy-Efficient Outdoor Lighting Solutions
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Durasol LED Lighting</h3>
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
                          <span className="font-medium text-gray-900">Energy Efficiency</span>
                          <p className="text-gray-600 mt-1">
                            Up to 80% energy savings compared to traditional lighting technologies.
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
                          <span className="font-medium text-gray-900">Long Service Life</span>
                          <p className="text-gray-600 mt-1">
                            50,000+ hours of operation, significantly reducing maintenance costs.
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
                          <span className="font-medium text-gray-900">Superior Light Quality</span>
                          <p className="text-gray-600 mt-1">
                            High CRI and uniform light distribution for improved visibility and safety.
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
                          <span className="font-medium text-gray-900">Robust Construction</span>
                          <p className="text-gray-600 mt-1">
                            IP65/IP66 rated with die-cast aluminum housing for durability in all weather conditions.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="LED Street Light Installation"
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
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Urban Lighting</h4>
                      <p className="text-gray-600">
                        Street lighting for roads, highways, residential areas, and urban spaces.
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
                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Commercial & Industrial</h4>
                      <p className="text-gray-600">
                        Illumination for parking lots, warehouses, factories, and commercial facilities.
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
                            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Architectural & Landscape</h4>
                      <p className="text-gray-600">
                        Accent lighting for buildings, monuments, parks, and landscape features.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Illuminate Your Space Efficiently</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                    Durasol's LED lighting solutions provide the perfect combination of energy efficiency, performance,
                    and durability for your outdoor lighting needs. Contact our lighting experts to find the right
                    solution for your specific application.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-[#089c9c] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#078787] transition-colors"
                  >
                    Contact Us for Lighting Solutions
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our LED Lighting Range</h2>
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
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
// Import from our exports utility instead of using wildcard imports
import { Navbar, Footer } from "@/lib/exports"

export default function LithiumClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const products = [
    {
      name: "Wall Mounted Battery (CE5, CE10, CE15)",
      description: "Low voltage wall mounted LiFEPO4 batteries for residential energy storage.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/lithium-lifepo4/wall-mounted-ce",
    },
    {
      name: "Wall Mounted Battery (MOON 5&10)",
      description: "Sleek, modern design wall mounted batteries with advanced BMS technology.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/lithium-lifepo4/wall-mounted-moon",
    },
    {
      name: "Rack Mounted Battery (CT-5)",
      description: "Compact rack mounted LiFEPO4 batteries for flexible installation options.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/lithium-lifepo4/rack-mounted-ct5",
    },
    {
      name: "Energy Storage Power Bank (CS-5000-X-P)",
      description: "Portable energy storage solution with high capacity and multiple outputs.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/lithium-lifepo4/power-bank",
    },
    {
      name: "Industrial & Commercial Battery Storage",
      description: "Scalable battery solutions for industrial and commercial applications.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/lithium-lifepo4/industrial-commercial",
    },
    {
      name: "Energy Storage & Peak Load Shifting",
      description: "Advanced energy storage systems for grid stabilization and peak load management.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/lithium-lifepo4/energy-storage",
    },
    {
      name: "Monoblock Battery (12.8V)",
      description: "Drop-in replacement for lead-acid batteries with superior cycle life and performance.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/lithium-lifepo4/monoblock-battery",
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
              <span className="text-[#089c9c]">Lithium (LiFEPO4)</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#089c9c] to-[#076e6e] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Lithium (LiFEPO4) Batteries</h1>
                <p className="text-white/90 text-lg mb-8">
                  Durasol's advanced Lithium Iron Phosphate (LiFEPO4) battery solutions offer superior performance,
                  longevity, and safety for residential, commercial, and industrial energy storage applications.
                  Experience the next generation of energy storage technology.
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
                  alt="Lithium Battery"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Next-Generation Energy Storage</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Advantages of LiFEPO4 Technology</h3>
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
                          <span className="font-medium text-gray-900">Extended Cycle Life</span>
                          <p className="text-gray-600 mt-1">
                            Up to 6000+ cycles at 80% DoD, significantly outlasting traditional lead-acid batteries.
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
                          <span className="font-medium text-gray-900">Enhanced Safety</span>
                          <p className="text-gray-600 mt-1">
                            LiFEPO4 chemistry offers superior thermal and chemical stability, minimizing risk of thermal
                            runaway.
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
                          <span className="font-medium text-gray-900">Higher Energy Density</span>
                          <p className="text-gray-600 mt-1">
                            More energy storage in less space, with up to 4x the energy density of lead-acid batteries.
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
                          <span className="font-medium text-gray-900">Intelligent BMS</span>
                          <p className="text-gray-600 mt-1">
                            Advanced Battery Management System for optimal performance, balancing, and protection.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="LiFEPO4 Technology"
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
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Residential Storage</h4>
                      <p className="text-gray-600">
                        Store solar energy for evening use, backup power during outages, and energy independence.
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
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Commercial Applications</h4>
                      <p className="text-gray-600">
                        Peak shaving, demand charge reduction, and backup power for critical business operations.
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
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Off-Grid Solutions</h4>
                      <p className="text-gray-600">
                        Reliable energy storage for remote locations, telecommunications, and off-grid living.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Energy Storage</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                    Durasol's LiFEPO4 battery solutions offer a superior alternative to traditional lead-acid batteries
                    with longer life, better performance, and enhanced safety. Contact our experts to find the right
                    solution for your energy storage needs.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Lithium Battery Range</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

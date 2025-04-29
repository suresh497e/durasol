"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
// Import from our exports utility instead of using wildcard imports
import { Navbar, Footer } from "@/lib/exports"

export default function VRLABatteriesClientPage() {
  const [activeTab, setActiveTab] = useState("products")

  const products = [
    {
      name: "Durasol AGM VRLA Battery",
      subtitle: "Sealed, Maintenance-Free & Long Life",
      description:
        "Advanced Absorbent Glass Mat technology for superior performance and reliability in UPS, telecom, and emergency power applications.",
      image: "/products/vrla.png",
      link: "/products/batteries/vrla-batteries/durasol-agm",
    },
    {
      name: "Kipor VRLA Gel Battery",
      subtitle: "Sealed, Maintenance-Free & Long Life",
      description:
        "Premium gel electrolyte technology for enhanced deep cycle performance and extended service life in demanding applications.",
      image: "/products/kipor_vrla.png",
      link: "/products/batteries/vrla-batteries/kipor-gel",
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
              <Link href="/products/batteries" className="text-gray-500 hover:text-[#089c9c]">
                Batteries
              </Link>
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              <span className="text-[#089c9c]">VRLA Batteries</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#089c9c] to-[#076e6e] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">VRLA Batteries</h1>
                <p className="text-white/90 text-lg mb-8">
                  Valve Regulated Lead Acid (VRLA) batteries offer maintenance-free operation with high reliability for
                  UPS, telecom, and emergency power applications. Our range includes both AGM and Gel technologies to
                  meet diverse requirements.
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
                  src="/images/vrla-battery.png"
                  alt="Durasol VRLA Batteries"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">VRLA Battery Technology</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose VRLA Batteries?</h3>
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
                          <span className="font-medium text-gray-900">Maintenance-Free Operation</span>
                          <p className="text-gray-600 mt-1">
                            No water addition required, reducing maintenance costs and ensuring hassle-free operation.
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
                          <span className="font-medium text-gray-900">Spill-Proof Design</span>
                          <p className="text-gray-600 mt-1">
                            Sealed construction allows installation in any orientation without risk of acid leakage.
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
                          <span className="font-medium text-gray-900">Low Self-Discharge</span>
                          <p className="text-gray-600 mt-1">
                            Extended shelf life with minimal capacity loss during storage periods.
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
                          <span className="font-medium text-gray-900">Wide Temperature Range</span>
                          <p className="text-gray-600 mt-1">
                            Reliable performance across diverse environmental conditions.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="VRLA Battery Technology"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-8 mb-16">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">VRLA Technologies</h3>
                  <div className="grid md:grid-cols-2 gap-6">
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
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">AGM Technology</h4>
                      <p className="text-gray-600">
                        Absorbent Glass Mat technology suspends the electrolyte in a fiberglass mat separator, providing
                        excellent vibration resistance and high discharge rates.
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
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Gel Technology</h4>
                      <p className="text-gray-600">
                        Gel electrolyte technology uses silica to form a gel-like substance, offering superior deep
                        cycle performance and longer service life in high-temperature environments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                    VRLA batteries are ideal for a wide range of applications requiring reliable backup power and
                    maintenance-free operation.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-medium text-gray-900">UPS Systems</h4>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-medium text-gray-900">Telecom Equipment</h4>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-medium text-gray-900">Emergency Lighting</h4>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-medium text-gray-900">Security Systems</h4>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-medium text-gray-900">Medical Equipment</h4>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-medium text-gray-900">Solar Energy Storage</h4>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-medium text-gray-900">Electric Vehicles</h4>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-medium text-gray-900">Marine Applications</h4>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our VRLA Battery Range</h2>
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
                        <div className="relative h-72 bg-gray-100">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover p-4"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                          <p className="text-[#089c9c] font-medium mb-3">{product.subtitle}</p>
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

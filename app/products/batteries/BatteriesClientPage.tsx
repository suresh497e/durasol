"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
// Import from our exports utility instead of using wildcard imports
import { Navbar, Footer, ContactCTA } from "@/lib/exports"

export default function BatteriesClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const products = [
    {
      name: "Tall Tubular Batteries",
      description: "Long-lasting tubular batteries designed for deep cycle applications with extended service life.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/batteries/tall-tubular-batteries",
    },
    {
      name: "Automotive Batteries",
      description: "High-performance automotive batteries for reliable starting power in all conditions.",
      image: "/placeholder.svg?height=300&width=300",
      link: "/products/batteries/automotive-batteries",
    },
    {
      name: "VRLA Batteries",
      description: "Maintenance-free Valve Regulated Lead Acid batteries for various backup power applications.",
      image: "/images/vrla-battery.png",
      link: "/products/batteries/vrla-batteries",
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
              <span className="text-[#089c9c]">Batteries</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#089c9c] to-[#076e6e] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Batteries</h1>
                <p className="text-white/90 text-lg mb-8">
                  Durasol offers a comprehensive range of high-quality batteries designed for reliability, longevity,
                  and optimal performance across various applications. From deep cycle tubular batteries to
                  maintenance-free VRLA solutions, we have the right power storage solution for your needs.
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
                  alt="Durasol Batteries"
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Reliable Power Storage Solutions</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Durasol Batteries?</h3>
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
                          <span className="font-medium text-gray-900">Extended Service Life</span>
                          <p className="text-gray-600 mt-1">
                            Our batteries are engineered for longevity, providing reliable power over an extended
                            lifespan.
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
                          <span className="font-medium text-gray-900">Superior Performance</span>
                          <p className="text-gray-600 mt-1">
                            Consistent power delivery with high discharge rates and excellent recovery capabilities.
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
                          <span className="font-medium text-gray-900">Low Maintenance</span>
                          <p className="text-gray-600 mt-1">
                            Designed for minimal maintenance requirements, saving time and reducing operational costs.
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
                          <span className="font-medium text-gray-900">Comprehensive Warranty</span>
                          <p className="text-gray-600 mt-1">
                            Backed by Durasol's industry-leading warranty and dedicated customer support.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Battery Manufacturing"
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Power Backup</h4>
                      <p className="text-gray-600">
                        Reliable backup power for homes and businesses during grid outages.
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
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Solar Energy Storage</h4>
                      <p className="text-gray-600">
                        Store solar energy for use during non-sunlight hours, maximizing renewable energy utilization.
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
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Industrial Applications</h4>
                      <p className="text-gray-600">
                        Power critical industrial equipment and systems with reliable battery solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <ContactCTA />
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Battery Range</h2>
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

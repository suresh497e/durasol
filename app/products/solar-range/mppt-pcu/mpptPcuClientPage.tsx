"use client"

import Link from "next/link"
import Image from "next/image"
// Import from our exports utility instead of using wildcard imports
import { Navbar, Footer } from "@/lib/exports"
import WhatsAppButton from "@/components/whatsapp-button"
import { motion } from "framer-motion"

export default function MPPTPcuClientPage() {
  const products = [
    {
      id: "mppt-2500-3000",
      name: "MPPT PCU 2500-3000/24V",
      description:
        "MPPT or Maximum Power Point Tracking is the algorithm that included in charge controllers used for extracting maximum available power from PV module under certain conditions.",
      image: "/images/digital-smart-ups-black.jpeg",
      link: "/products/solar-range/mppt-pcu/mppt-2500-3000",
    },
    {
      id: "durasol-mppt-solar-hybrid-pcu-highpoer",
      name: "Durasol MPPT Solar Hybrid PCU – High Efficiency & Smart Power Management",
      description: `The Durasol MPPT Solar Hybrid PCU is an advanced solar power conditioning unit designed for efficient solar energy utilization and seamless power backup. With 99% MPPT tracking accuracy, it maximizes solar power conversion, ensuring optimal performance for residential and commercial applications.

Equipped with an intelligent sharing system, it efficiently manages solar and grid charging, reducing dependency on conventional power sources. The heavy-duty built-in solar charge controller ensures stable and clean energy output, making it ideal for running sensitive appliances.

Designed with Interleaved MPPT technology, it provides 30% higher efficiency than conventional PWM PCUs, delivering greater energy savings while maintaining system reliability and minimal maintenance requirements.`,
      image: "/images/digital-smart-ups-black-alt.jpeg",
      link: "/products/solar-range/mppt-pcu/mppt-hybrid-pcu",
    },
    {
      id: "durasol-mppt-solar-hybrid-pcu",
      name: "Durasol MPPT Solar Hybrid PCU – High Efficiency & Smart Power Management",
      description: `The Durasol MPPT Solar Hybrid PCU is an advanced solar power conditioning unit designed for efficient solar energy utilization and seamless power backup. With 99% MPPT tracking accuracy, it maximizes solar power conversion, ensuring optimal performance for residential and commercial applications.

Equipped with an intelligent sharing system, it efficiently manages solar and grid charging, reducing dependency on conventional power sources. The heavy-duty built-in solar charge controller ensures stable and clean energy output, making it ideal for running sensitive appliances.

Designed with Interleaved MPPT technology, it provides 30% higher efficiency than conventional PWM PCUs, delivering greater energy savings while maintaining system reliability and minimal maintenance requirements.`,
      image: "/images/hiq700-1250.jpeg",
      link: "/products/solar-range/mppt-pcu/mppt-hybrid-pcu-enhanced",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#089c9c] to-[#067a7a] py-16 md:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/network-bg.png" alt="Network Background" fill className="object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">MPPT PCU</h1>
              <p className="text-xl md:text-2xl opacity-90">
                Advanced solar power conditioning units with Maximum Power Point Tracking technology
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-white py-4 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex text-sm text-gray-500">
              <Link href="/" className="hover:text-[#089c9c]">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-[#089c9c]">
                Products
              </Link>
              <span className="mx-2">/</span>
              <Link href="/products/solar-range" className="hover:text-[#089c9c]">
                Solar Range
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">MPPT PCU</span>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our MPPT PCU Range</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
                >
                  <Link href={product.link} className="block">
                    <div className="relative h-64">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain p-6 transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 right-4 bg-[#089c9c] text-white text-xs font-bold px-2 py-1 rounded">
                        Durasol
                      </div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <Link
                        href={product.link}
                        className="text-[#089c9c] font-medium hover:text-[#067a7a] transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        href="/brochures/mppt-pcu-brochure.pdf"
                        className="text-gray-600 text-sm hover:text-[#089c9c] transition-colors"
                        download
                      >
                        Brochure
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose MPPT PCU</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#089c9c]/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#089c9c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Maximum Power Extraction</h3>
                <p className="text-gray-600">
                  MPPT technology extracts maximum available power from solar panels under all conditions, increasing
                  energy harvest by up to 30%.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#089c9c]/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#089c9c]"
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">Intelligent Power Management</h3>
                <p className="text-gray-600">
                  Smart sharing system efficiently manages solar and grid charging, reducing dependency on conventional
                  power sources.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#089c9c]/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#089c9c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Multiple Battery Compatibility</h3>
                <p className="text-gray-600">
                  Compatible with various battery types including tubular, flat plate, SMF, and lithium batteries.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#089c9c]/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#089c9c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">High Efficiency Conversion</h3>
                <p className="text-gray-600">
                  Interleaved MPPT technology provides up to 99% tracking accuracy and 30% higher efficiency than
                  conventional PWM PCUs.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#089c9c]/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#089c9c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Versatile Applications</h3>
                <p className="text-gray-600">
                  Suitable for residential, commercial, and light industrial applications with reliable performance.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#089c9c]/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#089c9c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Monitoring</h3>
                <p className="text-gray-600">
                  Comprehensive display and monitoring system for real-time tracking of solar generation, battery
                  status, and system performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Harness Solar Power?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our experts can help you select the perfect MPPT PCU for your specific solar energy needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#089c9c] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#067a7a] transition-colors"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+91 95559 65202" />
    </div>
  )
}

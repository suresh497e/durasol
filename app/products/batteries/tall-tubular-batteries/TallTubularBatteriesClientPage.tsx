"use client"

import Link from "next/link"
import Image from "next/image"
// Import from our exports utility instead of using wildcard imports
import { Navbar, Footer } from "@/lib/exports"
import WhatsAppButton from "@/components/whatsapp-button"
import { motion } from "framer-motion"

export default function TallTubularBatteriesClientPage() {
  const products = [
    {
      id: "durasol-tubular",
      name: "Durasol Tubular Batteries",
      description: "Long Life & High Performance Power for reliable backup in demanding conditions",
      image: "/products/durosal_tubular.jpg",
      link: "/products/batteries/tall-tubular-batteries/durasol-tubular",
    },
    {
      id: "kipor-150ah",
      name: "Kipor Tall Tubular Battery 150Ah/12V",
      description: "Long Life & High Performance with 150Ah capacity for extended backup time",
      image: "/products/kipor_tubular.png",
      link: "/products/batteries/tall-tubular-batteries/kipor-150ah",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#089c9c] to-[#067a7a] py-16 md:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/network-bg.png" alt="Network Background" fill className="object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tall Tubular Batteries</h1>
              <p className="text-xl md:text-2xl opacity-90">
                Reliable and long-lasting power storage solutions for your home and business
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
              <Link href="/products/batteries" className="hover:text-[#089c9c]">
                Batteries
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Tall Tubular Batteries</span>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Tall Tubular Battery Range</h2>

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
                    <div className="relative h-72">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover p-6 transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* <div className="absolute top-4 right-4 bg-[#089c9c] text-white text-xs font-bold px-2 py-1 rounded">
                        Durasol
                      </div> */}
                    </div>
                  </Link>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <Link
                        href={product.link}
                        className="text-[#089c9c] font-medium hover:text-[#067a7a] transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        href="/brochures/tubular-batteries.pdf"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Tall Tubular Batteries</h2>

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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Extended Cycle Life</h3>
                <p className="text-gray-600">
                  Designed for 1500+ deep discharge cycles, providing years of reliable service in demanding
                  applications.
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">Deep Discharge Recovery</h3>
                <p className="text-gray-600">
                  Superior recovery from deep discharge conditions, maintaining performance even after extended power
                  outages.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">High Energy Density</h3>
                <p className="text-gray-600">
                  Advanced tubular plate design delivers higher energy density, providing more power in a compact
                  footprint.
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Low Maintenance</h3>
                <p className="text-gray-600">
                  Reduced water loss and minimal maintenance requirements, saving time and operational costs over the
                  battery's lifespan.
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">Temperature Tolerance</h3>
                <p className="text-gray-600">
                  Designed to perform reliably in a wide range of temperatures, making them suitable for diverse
                  environmental conditions.
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Effective</h3>
                <p className="text-gray-600">
                  Lower total cost of ownership due to longer service life, reduced maintenance, and consistent
                  performance throughout the battery's lifespan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help Choosing the Right Battery?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our experts can help you select the perfect Tubular Battery for your specific power storage needs.
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

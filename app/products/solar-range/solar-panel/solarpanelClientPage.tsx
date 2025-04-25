"use client"

import Link from "next/link"
import Image from "next/image"
// Import from our exports utility instead of using wildcard imports
import { Navbar, Footer } from "@/lib/exports"
import WhatsAppButton from "@/components/whatsapp-button"
import { motion } from "framer-motion"

export default function SolarPanelClientPage() {
  const products = [
    {
      id: "poly",
      name: "Poly Crystalline Solar Modules",
      description: "High Efficiency & Durable Performance solar panels for cost-effective solar installations.",
      image: "/products/poly_solar.png",
      link: "/products/solar-range/solar-panel/poly-crystalline",
    },
    {
      id: "mono",
      name: "Mono Crystalline Modules",
      description: "Premium high-efficiency solar panels for maximum power generation in limited space.",
      image: "/products/mono_solar.png",
      link: "/products/solar-range/solar-panel/mono-crystalline",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Solar Panels</h1>
              <p className="text-xl md:text-2xl opacity-90">
                Harness the power of the sun with our high-efficiency solar panels
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
              <span className="text-gray-900 font-medium">Solar Panels</span>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Solar Panel Range</h2>

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
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <Link
                        href={product.link}
                        className="text-[#089c9c] font-medium hover:text-[#067a7a] transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+91 95559 65202" />
    </div>
  )
}

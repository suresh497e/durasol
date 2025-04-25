"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Battery, Sun, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

interface ProductVertical {
  icon: React.ElementType
  title: string
  description: string
  image: string
  link: string
  darkBg: boolean
  customPadding?: string
}

const productVerticals: ProductVertical[] = [
  {
    icon: Battery,
    title: "Lithium",
    description:
      "High-performance lithium battery solutions offering superior energy density, longer lifespan, and faster charging capabilities. Ideal for various applications requiring reliable and efficient power storage.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-uqg1CsRvpKSNfkLFqxKvyOWpMUbweB.png",
    link: "/products/lithium",
    darkBg: false,
    customPadding: "p-8 md:p-12 lg:p-16", // Added more padding for this specific image
  },
  {
    icon: Sun,
    title: "Solar",
    description:
      "Cutting-edge solar energy solutions including high-efficiency panels, mounting systems, and accessories. Harness the power of the sun with our state-of-the-art solar technology.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-iwjK6m3bTVplbOl1w5CnLmT2goCQRG.png",
    link: "/products/solar",
    darkBg: false,
    customPadding: "p-8 md:p-12 lg:p-16", // Added more padding for this specific image
  },
  {
    icon: Battery,
    title: "Batteries",
    description:
      "Comprehensive range of battery solutions including tubular, SMF, and VRLA batteries. Our products offer reliable power storage with long-lasting performance and quick charging capabilities.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-THPrubgjA735GKP4RA9I0shyJvaOTd.png",
    link: "/products/batteries",
    darkBg: false,
    customPadding: "p-8 md:p-12 lg:p-16", // Added more padding for this specific image
  },
  {
    icon: Lightbulb,
    title: "Inverter/HUPS",
    description:
      "Innovative inverter and Home UPS solutions providing uninterrupted power supply for homes and businesses. Our products ensure seamless power backup with intelligent features and energy efficiency.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-RFR1v0RQKaloM5sjVZEJWFRZkxJv26.png",
    link: "/products/inverter-hups",
    darkBg: false,
    customPadding: "p-8 md:p-12 lg:p-16", // Added more padding for this specific image
  },
]

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0)

  // Get the current active product
  const currentProduct = productVerticals[activeProduct]
  // Get the icon component for the current product
  const IconComponent = currentProduct.icon

  return (
    <section className="py-10 md:py-24 bg-gradient-to-b from-[#089c9c]/5 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#089c9c] mb-3 md:mb-4">
            Our Product Verticals
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of sustainable energy solutions designed for efficiency and environmental
            consciousness.
          </p>
        </motion.div>

        {/* Product Navigation - Improved for mobile */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {productVerticals.map((product, index) => {
            const NavIcon = product.icon
            return (
              <motion.button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`px-3 py-2 md:px-4 md:py-3 rounded-full flex items-center space-x-1 md:space-x-2 transition-all text-sm md:text-base ${
                  activeProduct === index
                    ? "bg-[#089c9c] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavIcon
                  className={`w-4 h-4 md:w-5 md:h-5 ${activeProduct === index ? "text-white" : "text-[#089c9c]"}`}
                />
                <span className="font-medium">{product.title}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Featured Product Display - Improved for mobile */}
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center"
        >
          {/* Product Image - Adjusted height for mobile */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-xl order-1"
          >
            <div className="absolute inset-0 bg-white border border-gray-100 flex items-center justify-center">
              <div className={`relative w-full h-full ${currentProduct.customPadding || "p-4 md:p-8"}`}>
                <Image
                  src={currentProduct.image || "/placeholder.svg"}
                  alt={currentProduct.title}
                  fill
                  className="transition-transform duration-300 hover:scale-105 object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                  priority
                  unoptimized={
                    currentProduct.image.startsWith("https://") && !currentProduct.image.includes("vercel-storage")
                  }
                />
              </div>
            </div>
          </motion.div>

          {/* Product Description - Improved padding for mobile */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-lg order-2"
          >
            <div className="flex items-center mb-3 md:mb-4">
              <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-[#089c9c] mr-2 md:mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{currentProduct.title}</h3>
            </div>
            <p className="text-gray-600 text-base md:text-lg mb-5 md:mb-6 leading-relaxed">
              {currentProduct.description}
            </p>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              <Link
                href={currentProduct.link}
                className="inline-flex items-center bg-[#089c9c] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-[#078787] transition-colors text-sm md:text-base"
              >
                Explore {currentProduct.title} Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Product Thumbnails - Improved grid for mobile */}
        <div className="mt-8 md:mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 md:gap-4">
          {productVerticals.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveProduct(index)}
              className={`relative cursor-pointer rounded-lg overflow-hidden shadow-md transition-all ${
                activeProduct === index ? "ring-2 md:ring-4 ring-[#089c9c] scale-105" : ""
              }`}
            >
              <div className="relative h-20 sm:h-24 md:h-32">
                <div className="absolute inset-0 bg-white border border-gray-100 flex items-center justify-center">
                  <div className={`relative w-full h-full p-2 md:p-3`}>
                    <Image
                      src={product.image || "/placeholder.svg?height=200&width=200&text=" + product.title}
                      alt={product.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, 20vw"
                      unoptimized={product.image.startsWith("https://") && !product.image.includes("vercel-storage")}
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#089c9c] p-1 md:p-2 text-center">
                  <span className="text-white font-medium text-xs md:text-sm">{product.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

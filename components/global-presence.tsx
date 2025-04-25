"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const locations = [
  { name: "Sudan", coordinates: [30, 15] },
  { name: "Chad", coordinates: [19, 15] },
  { name: "Nigeria", coordinates: [8, 10] },
  { name: "Ghana", coordinates: [0, 8] },
  { name: "Mali", coordinates: [-4, 17] },
  { name: "India", coordinates: [78, 22] },
  { name: "Indonesia", coordinates: [120, -5] },
  { name: "Vietnam", coordinates: [108, 16] },
  { name: "South Africa", coordinates: [25, -29] },
]

const mapVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const markerVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}

export default function GlobalPresence() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary-600 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Durasol's Global Presence
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Powering sustainable energy solutions across Africa and Asia, Durasol is committed to a greener future on a
          global scale.
        </motion.p>
        <motion.div
          className="relative w-full aspect-[16/9]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={mapVariants}
        >
          <Image
            src="/images/world-map-blue.jpeg"
            alt="World Map"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${((location.coordinates[0] + 180) / 360) * 100}%`,
                top: `${((90 - location.coordinates[1]) / 180) * 100}%`,
              }}
              variants={markerVariants}
            >
              <div className="relative">
                <motion.div
                  className="w-3 h-3 bg-primary-600 rounded-full"
                  whileHover={{ scale: 1.5 }}
                  animate={hoveredCountry === location.name ? { scale: 1.5 } : { scale: 1 }}
                />
                <motion.div
                  className="w-3 h-3 bg-primary-600 rounded-full absolute top-0 left-0"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={hoveredCountry === location.name ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {location.name}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

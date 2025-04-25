"use client"

import { Battery, Lightbulb, Users, Factory, HeartHandshake, Award } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Battery,
    title: "Trusted Worldwide",
    description: "20+ years of innovation, powering homes & industries globally.",
  },
  {
    icon: Lightbulb,
    title: "Future-Ready Technology",
    description: "AI-driven smart energy solutions, advanced batteries & IoT integration.",
  },
  {
    icon: Users,
    title: "1M+ Satisfied Customers",
    description: "Proven performance with sustainability at the core.",
  },
  {
    icon: Factory,
    title: "Fully Integrated Value Chain",
    description: "From raw materials to final products, ensuring top-tier quality.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-First Approach",
    description: "Fast support, tailored solutions & long-term partnerships.",
  },
  {
    icon: Award,
    title: "Global Certifications & Standards",
    description: "Adhering to international safety, quality, and environmental benchmarks for reliable performance.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4" variants={itemVariants}>
            Why Choose Durasol Energi?
          </motion.h2>
          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={itemVariants}>
            Experience the Durasol difference with our cutting-edge technology and commitment to sustainability.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#089c9c]"
              whileHover={{ y: -5 }}
            >
              <motion.div variants={iconVariants} whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <feature.icon className="w-12 h-12 text-[#089c9c] mb-4 mx-auto" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

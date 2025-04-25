"use client"

import { Cpu, Battery, Wifi } from "lucide-react"
import { motion } from "framer-motion"

const innovations = [
  {
    icon: Cpu,
    title: "Smart Energy Management",
    description:
      "Our AI-powered systems optimize energy distribution and usage in real-time, ensuring peak performance and efficiency across all connected devices and grids.",
  },
  {
    icon: Battery,
    title: "Advanced Battery Tech",
    description:
      "We're pushing the boundaries of energy storage with our next-gen batteries, offering unprecedented capacity, longevity, and eco-friendliness.",
  },
  {
    icon: Wifi,
    title: "IoT Integration",
    description:
      "Seamlessly connect and control your entire energy ecosystem with our IoT solutions, enabling smarter energy use and predictive maintenance.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Innovation() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 8%)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="inline-block mb-6 bg-gradient-to-r from-primary-200 via-white to-secondary-200 bg-clip-text"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-transparent">Innovation at Durasol</h2>
            </motion.div>
            <p className="text-xl text-primary-50">
              Pioneering the future of energy with cutting-edge technology and sustainable solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {innovations.map((item, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-white/10 rounded-xl p-8 backdrop-blur-sm hover:backdrop-blur-lg transition-all duration-300">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="mb-6">
                    <item.icon className="w-12 h-12 text-primary-100" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                  <p className="text-primary-50">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

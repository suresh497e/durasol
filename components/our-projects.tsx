"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Rooftop Solar Solutions",
    description: "Sustainable rooftop solar solutions for residential, commercial, and institutional applications.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roof-Top-Solution-qasaD3Yy12TKUzZkbkLpqUP61fkSy6.png",
    link: "/projects/rooftop-solar-solutions",
    unoptimized: true,
  },
  {
    title: "Corporate Solar Solutions",
    description:
      "Cost-effective solar power systems for industrial and commercial establishments with rapid ROI and significant environmental benefits.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate-solution-nfdEfk6rdnHowYmsS1vFuBMMJZ0YbO.png",
    link: "/projects/corporate-solar-solutions",
    unoptimized: true,
  },
  {
    title: "EPC Solar Solutions",
    description: "End-to-end engineering, procurement, and construction services for utility-scale solar power plants.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EPC-Solar-b4PyGBemM0H5s3Fr7lnX4mD6OB24yi.png",
    link: "/projects/epc-solar-solutions",
    unoptimized: true,
  },
  {
    title: "Solar Water Pumps - Nepal",
    description:
      "Empowering farmers with sustainable irrigation solutions in remote regions through solar-powered water pump installations.",
    image: "/images/projects/solar-water-pump.png",
    link: "/projects/solar-water-pumps-nepal",
  },
]

export default function OurProjects() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        {/* Direct image implementation */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-2jAYGcAA7b72WLoVcAZNTwwfeHvS6y.png"
            alt="Solar panel installation with professionals"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              imageRendering: "crisp-edges",
            }}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-800/60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl text-white">
              Explore our diverse portfolio of sustainable energy projects, transforming communities and industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized={project.unoptimized}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center bg-[#089c9c] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#078787] transition-colors text-sm"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

export default function EPCSolarSolutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EPC-Solar-b4PyGBemM0H5s3Fr7lnX4mD6OB24yi.png"
            alt="EPC Solar Solutions"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/projects" className="inline-flex items-center text-white mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              EPC Solar – Utility-Scale Land-Based Solar EPC Solutions
            </h1>
            <p className="text-xl md:text-2xl text-primary-50">
              End-to-end Engineering, Procurement, and Construction services for utility-scale solar power plants
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EPC-Solar-b4PyGBemM0H5s3Fr7lnX4mD6OB24yi.png"
                  alt="Utility-scale solar installation"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Intelenergi brings extensive experience in the development, design, and construction of utility-scale
                solar power plants. Our comprehensive EPC (Engineering, Procurement, and Construction) services ensure
                seamless project execution from concept to completion, delivering high-performance solar installations
                that maximize energy production and return on investment.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our team of experts handles every aspect of solar power plant development, including site assessment,
                system design, equipment procurement, construction management, grid connection, and commissioning. We
                leverage cutting-edge technologies and industry best practices to optimize system performance,
                durability, and efficiency.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our EPC Services Include:</h2>

              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Comprehensive site assessment and feasibility studies</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Detailed engineering and system design</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Procurement of high-quality components and equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Construction management and quality control</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Grid connection and system integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Commissioning and performance testing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Operations and maintenance support</span>
                </li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our utility-scale solar projects contribute significantly to the United Nations Sustainable Development
                Goals, particularly Goal 7 (Affordable and Clean Energy) and Goal 13 (Climate Action). By developing
                large-scale solar power plants, we help reduce carbon emissions, decrease dependence on fossil fuels,
                and promote sustainable energy access.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Partner with Intelenergi for clean, scalable, and sustainable energy solutions that power progress.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Utility-Scale Solar Project?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact our team to discuss how our EPC services can help you develop a successful solar power plant.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#089c9c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#078787] transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

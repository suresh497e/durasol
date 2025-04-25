"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Sun, Home, Building2, GraduationCap, ArrowLeft } from "lucide-react"

export default function RooftopSolarSolutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roof-Top-Solution-qasaD3Yy12TKUzZkbkLpqUP61fkSy6.png"
            alt="Rooftop Solar Solutions"
            fill
            className="object-cover"
            unoptimized={true}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-50 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Rooftop Solar Solutions</h1>
            <p className="text-xl md:text-2xl text-primary-50">
              Harnessing the sun's power to deliver clean, sustainable energy for homes, businesses, and institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Solar energy</strong> is one of the most promising and widely accepted sources of renewable
                  energy today. Among its many applications, <strong>rooftop solar systems</strong> stand out for their
                  economic and environmental benefits. By harnessing the sun's power, these systems can deliver
                  <strong> free, uninterrupted electricity for years</strong>, helping both individuals and
                  organizations move towards a <strong>greener and more sustainable future</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  One of the biggest advantages of rooftop solar is its{" "}
                  <strong>affordability and ease of installation</strong>. These systems require{" "}
                  <strong>minimal maintenance</strong> and can significantly reduce electricity bills. Thanks to{" "}
                  <strong>net-metering</strong>, any excess electricity produced can be exported back to the grid,
                  offering <strong>direct financial savings</strong>. With rising concerns over depleting fossil fuels,
                  growing pressure on energy infrastructure, and environmental degradation, governments are encouraging
                  the adoption of solar power through <strong>subsidies and incentives</strong>, especially for
                  <strong> residential users</strong>.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roof-Top-Solution-qasaD3Yy12TKUzZkbkLpqUP61fkSy6.png"
                  alt="Rooftop Solar Installation"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
            </motion.div>
          </div>

          {/* Applications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Sun className="w-10 h-10 text-[#089c9c] mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Applications</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our rooftop solar solutions are tailored for various applications, providing sustainable energy across
              different sectors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Residential */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <Home className="w-6 h-6 text-[#089c9c] mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Residential</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Installing a <strong>solar rooftop system at home</strong> is now more affordable than ever. It's a
                cleaner, greener, and cost-effective way to power your household. Plus, a solar setup adds long-term{" "}
                <strong>value to your property</strong>.
              </p>
              <ul className="space-y-2">
                {[
                  "Affordable home installations",
                  "Reduced electricity bills",
                  "Increased property value",
                  "Government subsidies available",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#089c9c] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Commercial & Industrial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <Building2 className="w-6 h-6 text-[#089c9c] mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Commercial & Industrial</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For commercial and industrial units, rooftop solar systems turn{" "}
                <strong>idle roof space into productive assets</strong>. They offer excellent returns on investment and
                help reduce operational costs. <strong>Customized solar solutions</strong> can be implemented to meet
                the unique energy needs of each establishment.
              </p>
              <ul className="space-y-2">
                {[
                  "Monetize unused roof space",
                  "High ROI through long-term savings",
                  "Customized energy solutions",
                  "Meet sustainability goals",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#089c9c] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Institutional */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-[#089c9c] mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Institutional</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Institutions such as <strong>schools, colleges, universities, research centers, and non-profits</strong>
                can benefit greatly from solar rooftop systems. These installations help in{" "}
                <strong>reducing electricity expenses</strong> and set an example in sustainability for the next
                generation.
              </p>
              <ul className="space-y-2">
                {[
                  "Ideal for educational institutions",
                  "Reduced operational costs",
                  "Educational value for students",
                  "Demonstrate environmental leadership",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#089c9c] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-50 p-8 rounded-xl mb-16"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Common Benefits Across All Rooftop Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Net-Metering Enabled",
                "Government Subsidies Available",
                "Minimal Maintenance Required",
                "Clean Power for Decades",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-[#089c9c] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <blockquote className="text-center max-w-3xl mx-auto italic text-xl text-gray-700">
            "The sun delivers more energy to Earth in one hour than humanity consumes in an entire year. Rooftop solar
            is our way of tapping into this abundant, clean resource."
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Harness the Power of the Sun?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our rooftop solar solutions can benefit your home, business, or institution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-[#089c9c] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

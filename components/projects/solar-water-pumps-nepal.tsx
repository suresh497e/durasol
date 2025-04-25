"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

export default function SolarWaterPumpsNepal() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/projects/solar-water-pump.png"
            alt="Solar Water Pump Installation in Nepal"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Solar Water Pump Installations – Nepal</h1>
            <p className="text-xl md:text-2xl text-primary-50">
              Empowering farmers with sustainable irrigation solutions in remote regions
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
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Intelenergi Global Pvt. Ltd., we have proudly completed the installation of solar-powered water pumps
                ranging from 1HP to 10HP across Nepal's remote villages and agricultural heartlands. These systems are
                more than just pumps—they are lifelines for farmers who lack access to reliable electricity.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                By harnessing solar energy, our installations ensure consistent and cost-free irrigation, enabling
                farmers to grow their crops without worrying about power shortages or high energy bills. From
                small-scale farms to larger horticulture fields, our solar water pumps are transforming lives and lands.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/projects/solar-water-pump-5.png"
                    alt="Farmers with their solar water pump installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/projects/solar-water-pump-1.png"
                    alt="Solar panels installed in rural Nepal"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>

              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">1HP to 10HP solar pump systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Zero grid dependency</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Clean, renewable energy</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Increased agricultural productivity</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Empowering rural communities</span>
                </li>
              </ul>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/projects/solar-water-pump-3.png"
                    alt="Water flowing from solar-powered pump"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/projects/solar-water-pump-2.png"
                    alt="Solar panel installation with water pump"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="text-xl text-[#089c9c] italic text-center my-12">
                "Where the sun shines brightest, hope flows freely—through every drop lifted by our solar solutions."
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
            <h2 className="text-3xl font-bold mb-6">Interested in Solar Water Pumps?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover how our solar water pump solutions can transform agricultural productivity in your region.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#089c9c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#078787] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center border border-[#089c9c] text-[#089c9c] px-6 py-3 rounded-lg font-semibold hover:bg-[#f0fafa] transition-colors"
              >
                View Other Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

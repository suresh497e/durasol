"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Clock, DollarSign, Leaf } from "lucide-react"

export default function CorporateSolarSolutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 py-20 md:py-28">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate-solution-nfdEfk6rdnHowYmsS1vFuBMMJZ0YbO.png"
            alt="Corporate Solar Solutions - Commercial Rooftop Installation"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Corporate Solar Solutions</h1>
            <p className="text-xl md:text-2xl text-primary-50">
              Empowering businesses with sustainable energy solutions that boost profitability and environmental
              responsibility
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to Projects Link */}
            <Link href="/projects" className="inline-flex items-center text-[#089c9c] hover:underline mb-8 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Powering Business Sustainability</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Rooftop solar power plants are rapidly becoming the preferred choice for industrial, commercial, and
                  residential users, thanks to their cost-effective setup and minimal installation complexity. These
                  systems offer a clean, reliable, and sustainable energy source while significantly reducing long-term
                  electricity expenses.
                </p>
                <p className="mb-4">
                  For corporate and industrial establishments, rooftop solar plants not only lower dependence on fossil
                  fuels but also contribute to energy security and environmental sustainability. With a typical payback
                  period of just 4 to 5 years, organizations can enjoy free electricity for decades, boosting both
                  profitability and eco-conscious operations.
                </p>
                <p>
                  In addition, through net metering, any excess power generated can be exported back to the grid,
                  further enhancing returns on investment and promoting energy efficiency.
                </p>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate-solution-nfdEfk6rdnHowYmsS1vFuBMMJZ0YbO.png"
                  alt="Corporate Solar Installation - Aerial View of Commercial Rooftop Solar Panels"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Aerial view of a large-scale commercial rooftop solar installation covering an industrial facility
              </p>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits for Businesses</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <ul className="space-y-4">
                  {[
                    "Significant reduction in operational costs",
                    "Rapid return on investment (4-5 years)",
                    "Enhanced corporate sustainability profile",
                    "Energy independence and security",
                    "Reduced carbon footprint",
                    "Additional revenue through net metering",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-[#089c9c] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Study: Kabul, Afghanistan</h2>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">200 KW Grid-Connected Solar Power Plant</h3>
                <p className="text-gray-700 mb-6">
                  One such success story is the 200 KW Grid-Connected Solar Power Plant commissioned by AutoSol in
                  Kabul, Afghanistan. AutoSol delivered complete turnkey EPC services—covering engineering, procurement,
                  and construction. This project is expected to offset approximately 250 tons of carbon emissions
                  annually and generate cost savings of USD 1,500 to 1,800 per year, making it a model for clean energy
                  adoption in the region.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-primary-50 p-4 rounded-lg flex flex-col items-center text-center">
                    <Clock className="w-8 h-8 text-[#089c9c] mb-2" />
                    <h4 className="font-semibold text-gray-900">Rapid Payback</h4>
                    <p className="text-gray-700">4-5 years ROI period</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg flex flex-col items-center text-center">
                    <Leaf className="w-8 h-8 text-[#089c9c] mb-2" />
                    <h4 className="font-semibold text-gray-900">Carbon Offset</h4>
                    <p className="text-gray-700">250 tons annually</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg flex flex-col items-center text-center">
                    <DollarSign className="w-8 h-8 text-[#089c9c] mb-2" />
                    <h4 className="font-semibold text-gray-900">Cost Savings</h4>
                    <p className="text-gray-700">$1,500-1,800 per year</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12"
            >
              <blockquote className="border-l-4 border-[#089c9c] pl-4 italic text-gray-700">
                "Corporate solar solutions represent not just a smart business decision, but a commitment to a
                sustainable future. The numbers speak for themselves—reduced costs, rapid ROI, and significant
                environmental benefits make this an investment that pays dividends in multiple ways."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business Energy Profile?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss how our corporate solar solutions can benefit your organization.
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

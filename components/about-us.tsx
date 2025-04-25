"use client"

import { motion } from "framer-motion"
import Leadership from "@/components/leadership"

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section - Using direct img tag with blob URL */}
      <section className="relative py-20 md:py-28">
        {/* Direct image with explicit styling */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ABOUT%20US-PlmTl9Wohnr3UY1QtrBfFY1MWZOxsj.png"
            alt="About Us - Team Collaboration"
            className="w-full h-full object-cover"
            style={{
              display: "block",
              imageRendering: "crisp-edges",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-800/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-white">
              Shaping a sustainable future through innovative energy solutions that power communities, transform
              industries, and preserve our planet for generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#089c9c] mb-6">Our Story</h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/global-energy-map.png"
                  alt="Global Energy Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="max-w-xl">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                  Founded in 2014, <span className="text-[#089c9c] font-semibold">Durasol Energi</span> started with a
                  vision to revolutionize the energy sector by providing sustainable and innovative solutions. From
                  humble beginnings, we have grown into a global leader, powering communities and industries across
                  Africa and Asia.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Our journey has been marked by a relentless pursuit of excellence, a commitment to environmental
                  stewardship, and a passion for empowering lives through clean energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Moved above Mission and Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <Leadership />
        </div>
      </section>

      {/* Our Mission, Vision & Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Mission, Vision & Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl flex flex-col items-center">
              <div className="mb-4 w-24 h-24">
                <img src="/images/vision_icon.png" alt="Vision" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">VISION</h3>
              <p className="text-center">
                To Improve the Quality of Life Globally by providing Innovative & Sustainable Solutions.
              </p>
            </div>

            {/* Purpose Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl flex flex-col items-center">
              <div className="mb-4 w-24 h-24">
                <img src="/images/mission_icon.png" alt="Purpose" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">PURPOSE</h3>
              <p className="text-center">
                To be a trusted and profitable Organization providing Sustainable Solutions that improves the Quality of
                Life for People and the Society.
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl flex flex-col items-center">
              <div className="mb-4 w-24 h-24">
                <img src="/images/value_icon.png" alt="Values" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">VALUES</h3>
              <p className="text-center">
                People First
                <br />
                Be Proactive about Excellence
                <br />
                Ownership and Responsibility
                <br />
                Value Creations for Stakeholders
                <br />
                Respect – Culture, Customs, & Law of Land.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

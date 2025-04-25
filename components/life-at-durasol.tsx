"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function LifeAtDurasol() {
  return (
    <>
      {/* Hero Section with Team Photo Background */}
      <section className="relative py-20 md:py-28">
        {/* Team photo background */}
        <div className="absolute inset-0">
          <Image
            src="/images/life-at-intelenergi/team-formal-1.jpeg"
            alt="Durasol Team"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Life at Durasol</h1>
            <p className="text-xl md:text-2xl text-white">
              A glimpse into our vibrant culture, team spirit, and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#089c9c] mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what it's like to work at Durasol Energi, where innovation meets sustainability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl shadow-md p-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-700 mb-4">
                We believe in fostering a culture of innovation, collaboration, and growth. Our team members are our
                greatest asset, and we are committed to creating an environment where everyone can thrive professionally
                and personally.
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Innovation</li>
                <li>Collaboration</li>
                <li>Integrity</li>
                <li>Sustainability</li>
                <li>Customer Focus</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/life-at-intelenergi/team-gathering.jpeg"
                  alt="Team Gathering"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Team Photos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-[#089c9c] mb-8 text-center">Team Moments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: "/images/life-at-intelenergi/celebration-1.jpeg", alt: "Team Celebration" },
                { src: "/images/life-at-intelenergi/team-building-1.jpeg", alt: "Team Building Activity" },
                { src: "/images/life-at-intelenergi/team-lunch-1.jpeg", alt: "Team Lunch" },
                { src: "/images/life-at-intelenergi/team-building-2.jpeg", alt: "Team Building Workshop" },
                { src: "/images/life-at-intelenergi/celebration-2.jpeg", alt: "Company Celebration" },
                { src: "/images/life-at-intelenergi/team-lunch-2.jpeg", alt: "Team Gathering" },
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-64 rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold text-[#089c9c] mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities at Durasol Energi and be part of a team that's making a difference.
            </p>
            <a
              href="/careers"
              className="inline-block mt-6 px-6 py-3 bg-[#089c9c] text-white rounded-lg font-medium hover:bg-[#078787] transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, MapPin } from "lucide-react"

// Define regions and countries
const regions = [
  {
    name: "Asia",
    countries: [
      "Afghanistan",
      "Nepal",
      "Myanmar",
      "Indonesia",
      "India",
      "Sri Lanka",
      "Bhutan",
      "Bangladesh",
      "Thailand",
    ],
  },
  {
    name: "Middle East",
    countries: ["UAE", "Yemen", "Lebanon", "Turkey", "Oman", "Saudi Arabia", "Iraq", "Jordan", "Syria", "Qatar"],
  },
  {
    name: "Africa",
    countries: [
      "Nigeria",
      "Ghana",
      "Kenya",
      "Rwanda",
      "Tanzania",
      "Malawi",
      "Zambia",
      "Zimbabwe",
      "Uganda",
      "Sudan",
      "Chad",
      "Mali",
      "Gabon",
      "Senegal",
    ],
  },
]

export default function GlobalPresenceSection() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Globe className="w-8 h-8 text-[#089c9c] mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Global Presence</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Presence in more than 30 countries and still counting. Overseas offices in Middle East and manufacturing
            facilities at Sudan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all ${
                activeRegion === region.name ? "ring-2 ring-[#089c9c]" : ""
              }`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{region.name}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {region.countries.map((country) => (
                    <div key={country} className="flex items-start">
                      <MapPin className="w-4 h-4 text-[#089c9c] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-[#089c9c]/5 p-6 rounded-xl text-center"
        >
          <p className="text-lg text-gray-700">
            With manufacturing facilities in <span className="font-semibold">India and Sudan</span>, and overseas
            offices in the <span className="font-semibold">Middle East</span>, we're strategically positioned to serve
            global markets with efficiency and local expertise.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

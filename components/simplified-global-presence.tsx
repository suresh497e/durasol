"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Globe, MapPin, Building, Factory, Users } from "lucide-react"
import Image from "next/image"

// Define regions with their key statistics and highlights
const regions = [
  {
    name: "Asia",
    color: "#e11d48", // Bright red
    countries: [
      { name: "India", coordinates: { x: 70, y: 45 } },
      { name: "Nepal", coordinates: { x: 72, y: 42 } },
      { name: "Indonesia", coordinates: { x: 78, y: 58 } },
      { name: "Bangladesh", coordinates: { x: 73, y: 44 } },
      { name: "Afghanistan", coordinates: { x: 65, y: 40 } },
      { name: "Myanmar", coordinates: { x: 75, y: 46 } },
      { name: "Sri Lanka", coordinates: { x: 71, y: 52 } },
      { name: "Bhutan", coordinates: { x: 73, y: 42 } },
      { name: "Thailand", coordinates: { x: 76, y: 48 } },
    ],
    facilities: "Manufacturing Hub in India",
    icon: <Globe className="w-6 h-6 text-[#e11d48]" />,
    image: "/images/india-factory.png",
    regionCoordinates: { x: 70, y: 45 },
    stats: {
      distributors: "50+",
      employees: "200+",
      growth: "35%",
    },
  },
  {
    name: "Middle East",
    color: "#6d28d9", // Purple
    countries: [
      { name: "UAE", coordinates: { x: 62, y: 46 } },
      { name: "Yemen", coordinates: { x: 60, y: 50 } },
      { name: "Lebanon", coordinates: { x: 57, y: 42 } },
      { name: "Turkey", coordinates: { x: 55, y: 40 } },
      { name: "Oman", coordinates: { x: 64, y: 48 } },
      { name: "Saudi Arabia", coordinates: { x: 59, y: 46 } },
      { name: "Iraq", coordinates: { x: 58, y: 42 } },
      { name: "Jordan", coordinates: { x: 56, y: 43 } },
      { name: "Syria", coordinates: { x: 57, y: 41 } },
      { name: "Qatar", coordinates: { x: 62, y: 47 } },
    ],
    facilities: "Regional Office in Dubai",
    icon: <Building className="w-6 h-6 text-[#6d28d9]" />,
    image: "/images/dubai-office.jpeg",
    regionCoordinates: { x: 58, y: 48 },
    stats: {
      distributors: "30+",
      employees: "50+",
      growth: "42%",
    },
  },
  {
    name: "Africa",
    color: "#f59e0b", // Amber/Orange
    countries: [
      { name: "Nigeria", coordinates: { x: 47, y: 53 } },
      { name: "Rwanda", coordinates: { x: 53, y: 56 } },
      { name: "Kenya", coordinates: { x: 55, y: 57 } },
      { name: "Ghana", coordinates: { x: 45, y: 53 } },
      { name: "Tanzania", coordinates: { x: 55, y: 59 } },
      { name: "Malawi", coordinates: { x: 54, y: 61 } },
      { name: "Zambia", coordinates: { x: 53, y: 62 } },
      { name: "Chad", coordinates: { x: 50, y: 52 } },
      { name: "Mali", coordinates: { x: 44, y: 50 } },
      { name: "Gabon", coordinates: { x: 48, y: 56 } },
      { name: "Sudan", coordinates: { x: 54, y: 51 } },
      { name: "Uganda", coordinates: { x: 54, y: 56 } },
      { name: "Zimbabwe", coordinates: { x: 53, y: 63 } },
      { name: "Senegal", coordinates: { x: 41, y: 51 } },
    ],
    facilities: "Manufacturing Facility in Sudan",
    icon: <Factory className="w-6 h-6 text-[#f59e0b]" />,
    image: "/placeholder.svg?height=300&width=400&text=Africa+Operations",
    regionCoordinates: { x: 50, y: 55 },
    stats: {
      distributors: "25+",
      employees: "75+",
      growth: "60%",
    },
  },
]

// Global statistics
const globalStats = [
  { label: "Countries", value: "33", icon: <Globe className="w-5 h-5" />, color: "#e11d48" },
  { label: "Continents", value: "3", icon: <MapPin className="w-5 h-5" />, color: "#6d28d9" },
  { label: "Manufacturing Facilities", value: "2", icon: <Factory className="w-5 h-5" />, color: "#f59e0b" },
  { label: "Distribution Partners", value: "100+", icon: <Users className="w-5 h-5" />, color: "#059669" },
]

export default function SimplifiedGlobalPresence() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)
  const [animateStats, setAnimateStats] = useState(false)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  useEffect(() => {
    // Trigger stats animation when component is in view
    const timeout = setTimeout(() => setAnimateStats(true), 500)

    // Auto-rotate through regions every 5 seconds if none is selected
    let interval: NodeJS.Timeout
    if (!activeRegion) {
      interval = setInterval(() => {
        setHoveredRegion((prev) => {
          if (!prev) return regions[0].name
          const currentIndex = regions.findIndex((r) => r.name === prev)
          return regions[(currentIndex + 1) % regions.length].name
        })
      }, 3000)
    }

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [activeRegion])

  const getRegionByName = (name: string) => {
    return regions.find((r) => r.name === name) || null
  }

  // Get all countries from all regions
  const allCountries = regions.flatMap((region) =>
    region.countries.map((country) => ({
      ...country,
      regionName: region.name,
      regionColor: region.color,
    })),
  )

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header with animated underline */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
            <motion.div
              className="h-1 w-24 bg-[#e11d48] mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
          >
            Empowering communities across <span className="font-semibold text-[#e11d48]">33 countries</span> with
            sustainable energy solutions. Strategic offices in the Middle East and manufacturing excellence in India and
            Sudan.
          </motion.p>
        </div>

        {/* Global Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {globalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={animateStats ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <div style={{ color: stat.color }}>{stat.icon}</div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold" style={{ color: stat.color }}>
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Region Color Legend */}
        <div className="flex justify-center mb-6 gap-6">
          {regions.map((region) => (
            <div
              key={region.name}
              className="flex items-center cursor-pointer"
              onClick={() => setActiveRegion(region.name === activeRegion ? null : region.name)}
            >
              <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: region.color }}></div>
              <span className="text-sm font-medium" style={{ color: region.color }}>
                {region.name}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive World Map */}
        <div>
          <div className="relative w-full h-[400px] md:h-[500px] bg-white rounded-xl shadow-lg overflow-hidden">
            {/* World Map Background */}
            <div className="absolute inset-0">
              <Image
                src="/images/world-map-blue.jpeg"
                alt="World Map"
                fill
                className="object-contain opacity-30"
                priority
              />

              {/* Country Dots - All countries with enhanced blinking effect */}
              {allCountries.map((country, index) => (
                <div
                  key={`${country.regionName}-${country.name}`}
                  className="absolute"
                  style={{
                    left: `${country.coordinates.x}%`,
                    top: `${country.coordinates.y}%`,
                    zIndex: hoveredCountry === country.name ? 20 : 5,
                  }}
                >
                  <motion.div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    initial={{ scale: 1 }}
                    animate={{
                      scale: hoveredCountry === country.name ? 1.5 : 1,
                    }}
                    whileHover={{ scale: 1.5 }}
                  >
                    {/* Enhanced Pulsing Effect */}
                    <motion.div
                      className="absolute rounded-full"
                      style={{
                        backgroundColor: country.regionColor,
                        opacity: 0.5,
                        top: "50%",
                        left: "50%",
                        translateX: "-50%",
                        translateY: "-50%",
                      }}
                      animate={{
                        width: [12, 28, 12],
                        height: [12, 28, 12],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: (index * 0.1) % 2, // Staggered animation
                      }}
                    />

                    {/* Main Dot - Larger and more vibrant */}
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center z-10 relative border-2 border-white"
                      style={{ backgroundColor: country.regionColor }}
                    />

                    {/* Tooltip */}
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white rounded-lg shadow-lg p-2 whitespace-nowrap z-20"
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{
                        opacity: hoveredCountry === country.name ? 1 : 0,
                        y: hoveredCountry === country.name ? 0 : 10,
                        scale: hoveredCountry === country.name ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center">
                        <span className="font-semibold" style={{ color: country.regionColor }}>
                          {country.name}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600">{country.regionName} Region</div>
                    </motion.div>
                  </motion.div>
                </div>
              ))}

              {/* Interactive Region Hotspots */}
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="absolute"
                  style={{
                    left: `${region.regionCoordinates.x}%`,
                    top: `${region.regionCoordinates.y}%`,
                  }}
                >
                  <motion.div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setHoveredRegion(region.name)}
                    onMouseLeave={() => !activeRegion && setHoveredRegion(null)}
                    onClick={() => setActiveRegion(region.name === activeRegion ? null : region.name)}
                    initial={{ scale: 1 }}
                    animate={{
                      scale: hoveredRegion === region.name || activeRegion === region.name ? 1.2 : 1,
                      zIndex: hoveredRegion === region.name || activeRegion === region.name ? 10 : 1,
                    }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  >
                    {/* Pulsing Effect */}
                    <motion.div
                      className="absolute rounded-full"
                      style={{
                        backgroundColor: region.color,
                        opacity: 0.4,
                        top: "50%",
                        left: "50%",
                        translateX: "-50%",
                        translateY: "-50%",
                      }}
                      animate={{
                        width: [30, 60, 30],
                        height: [30, 60, 30],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    />

                    {/* Main Dot */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center z-10 relative border-2 border-white"
                      style={{ backgroundColor: region.color }}
                    >
                      <div className="text-white text-xs font-bold">{region.countries.length}</div>
                    </div>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white rounded-lg shadow-lg p-2 whitespace-nowrap z-20"
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{
                        opacity: hoveredRegion === region.name || activeRegion === region.name ? 1 : 0,
                        y: hoveredRegion === region.name || activeRegion === region.name ? 0 : 10,
                        scale: hoveredRegion === region.name || activeRegion === region.name ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center">
                        <div className="mr-2">{region.icon}</div>
                        <span className="font-semibold" style={{ color: region.color }}>
                          {region.name}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600">{region.countries.length} countries</div>
                    </motion.div>
                  </motion.div>
                </div>
              ))}

              {/* Connection Lines (simplified) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#e11d48" />
                  </marker>
                </defs>

                {hoveredRegion && (
                  <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    {regions.map((region) => {
                      if (region.name !== hoveredRegion) return null

                      const fromRegion = getRegionByName(hoveredRegion)
                      if (!fromRegion) return null

                      return fromRegion.countries.slice(0, 5).map((country, i) => {
                        // Create random-ish endpoints for the lines
                        const endX = country.coordinates.x
                        const endY = country.coordinates.y

                        return (
                          <motion.path
                            key={`${region.name}-${country.name}`}
                            d={`M ${fromRegion.regionCoordinates.x} ${fromRegion.regionCoordinates.y} Q ${
                              (fromRegion.regionCoordinates.x + endX) / 2 + i * 2
                            } ${(fromRegion.regionCoordinates.y + endY) / 2 - 10} ${endX} ${endY}`}
                            stroke={region.color}
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                          />
                        )
                      })
                    })}
                  </motion.g>
                )}
              </svg>
            </div>

            {/* Static Region Info Panels */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Asia Info Panel */}
              <motion.div
                className="absolute bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border-l-4 w-64 pointer-events-auto"
                style={{
                  borderLeftColor: regions[0].color,
                  left: "65%",
                  top: "25%",
                  opacity: activeRegion === "Asia" ? 1 : 0,
                  visibility: activeRegion === "Asia" ? "visible" : "hidden",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeRegion === "Asia" ? 1 : 0,
                  scale: activeRegion === "Asia" ? 1 : 0.9,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-2" style={{ color: regions[0].color }} />
                    <h3 className="text-lg font-bold text-gray-900">Asia Region</h3>
                  </div>
                  <button
                    onClick={() => setActiveRegion(null)}
                    className="text-gray-400 hover:text-gray-600 pointer-events-auto"
                  >
                    ×
                  </button>
                </div>
                <div className="mt-2">
                  <div className="text-xs text-gray-600 mb-1">Key Markets:</div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {regions[0].countries.map((country) => (
                      <span
                        key={country.name}
                        className="px-2 py-0.5 text-xs rounded-full"
                        style={{
                          backgroundColor: `${regions[0].color}15`,
                          color: regions[0].color,
                        }}
                      >
                        {country.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Middle East Info Panel */}
              <motion.div
                className="absolute bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border-l-4 w-64 pointer-events-auto"
                style={{
                  borderLeftColor: regions[1].color,
                  left: "40%",
                  top: "35%",
                  opacity: activeRegion === "Middle East" ? 1 : 0,
                  visibility: activeRegion === "Middle East" ? "visible" : "hidden",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeRegion === "Middle East" ? 1 : 0,
                  scale: activeRegion === "Middle East" ? 1 : 0.9,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <Building className="w-5 h-5 mr-2" style={{ color: regions[1].color }} />
                    <h3 className="text-lg font-bold text-gray-900">Middle East Region</h3>
                  </div>
                  <button
                    onClick={() => setActiveRegion(null)}
                    className="text-gray-400 hover:text-gray-600 pointer-events-auto"
                  >
                    ×
                  </button>
                </div>
                <div className="mt-2">
                  <div className="text-xs text-gray-600 mb-1">Key Markets:</div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {regions[1].countries.map((country) => (
                      <span
                        key={country.name}
                        className="px-2 py-0.5 text-xs rounded-full"
                        style={{
                          backgroundColor: `${regions[1].color}15`,
                          color: regions[1].color,
                        }}
                      >
                        {country.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Africa Info Panel */}
              <motion.div
                className="absolute bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border-l-4 w-64 pointer-events-auto"
                style={{
                  borderLeftColor: regions[2].color,
                  left: "30%",
                  top: "50%",
                  opacity: activeRegion === "Africa" ? 1 : 0,
                  visibility: activeRegion === "Africa" ? "visible" : "hidden",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeRegion === "Africa" ? 1 : 0,
                  scale: activeRegion === "Africa" ? 1 : 0.9,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <Factory className="w-5 h-5 mr-2" style={{ color: regions[2].color }} />
                    <h3 className="text-lg font-bold text-gray-900">Africa Region</h3>
                  </div>
                  <button
                    onClick={() => setActiveRegion(null)}
                    className="text-gray-400 hover:text-gray-600 pointer-events-auto"
                  >
                    ×
                  </button>
                </div>
                <div className="mt-2">
                  <div className="text-xs text-gray-600 mb-1">Key Markets:</div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {regions[2].countries.map((country) => (
                      <span
                        key={country.name}
                        className="px-2 py-0.5 text-xs rounded-full"
                        style={{
                          backgroundColor: `${regions[2].color}15`,
                          color: regions[2].color,
                        }}
                      >
                        {country.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile-friendly region selector */}
            <div className="absolute top-4 left-4 md:hidden">
              <select
                className="bg-white rounded-lg shadow-md px-3 py-2 text-sm"
                value={activeRegion || ""}
                onChange={(e) => setActiveRegion(e.target.value || null)}
              >
                <option value="">Select a region</option>
                {regions.map((region) => (
                  <option key={region.name} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Instructions */}
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-gray-500 hidden md:block">
              Click on a region or country to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

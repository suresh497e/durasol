"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, MapPin, ChevronDown, ChevronRight } from "lucide-react"

// Define regions and countries
const regions = [
  {
    name: "Asia",
    color: "#089c9c",
    countries: [
      { name: "Afghanistan", coordinates: [67.7, 33.9] },
      { name: "Nepal", coordinates: [84.1, 28.3] },
      { name: "Myanmar", coordinates: [95.9, 21.9] },
      { name: "Indonesia", coordinates: [120.0, -5.0] },
      { name: "India", coordinates: [78.9, 20.5] },
      { name: "Sri Lanka", coordinates: [80.7, 7.8] },
      { name: "Bhutan", coordinates: [90.4, 27.5] },
      { name: "Bangladesh", coordinates: [90.3, 23.6] },
      { name: "Thailand", coordinates: [100.9, 15.8] },
    ],
  },
  {
    name: "Middle East",
    color: "#0d6efd",
    countries: [
      { name: "UAE", coordinates: [54.3, 23.4] },
      { name: "Yemen", coordinates: [48.5, 15.5] },
      { name: "Lebanon", coordinates: [35.8, 33.8] },
      { name: "Turkey", coordinates: [35.2, 38.9] },
      { name: "Oman", coordinates: [56.0, 21.0] },
      { name: "Saudi Arabia", coordinates: [45.0, 24.0] },
      { name: "Iraq", coordinates: [43.7, 33.2] },
      { name: "Jordan", coordinates: [36.2, 31.9] },
      { name: "Syria", coordinates: [38.9, 35.0] },
      { name: "Qatar", coordinates: [51.1, 25.3] },
    ],
  },
  {
    name: "Africa",
    color: "#198754",
    countries: [
      { name: "Nigeria", coordinates: [8.6, 9.0] },
      { name: "Ghana", coordinates: [-1.0, 8.0] },
      { name: "Kenya", coordinates: [38.0, 1.0] },
      { name: "Rwanda", coordinates: [29.8, -1.9] },
      { name: "Tanzania", coordinates: [34.8, -6.3] },
      { name: "Malawi", coordinates: [34.3, -13.2] },
      { name: "Zambia", coordinates: [27.8, -13.1] },
      { name: "Zimbabwe", coordinates: [29.1, -19.0] },
      { name: "Uganda", coordinates: [32.2, 1.3] },
      { name: "Sudan", coordinates: [30.0, 15.0] },
      { name: "Chad", coordinates: [19.0, 15.0] },
      { name: "Mali", coordinates: [-4.0, 17.0] },
      { name: "Gabon", coordinates: [11.6, -0.8] },
      { name: "Senegal", coordinates: [-14.4, 14.4] },
    ],
  },
]

export default function GlobalPresenceMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(true)
  const mapRef = useRef<HTMLDivElement>(null)

  // Auto-rotate through regions
  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(() => {
      setActiveRegion((prev) => {
        if (prev === null) return regions[0].name
        const currentIndex = regions.findIndex((r) => r.name === prev)
        const nextIndex = (currentIndex + 1) % regions.length
        return regions[nextIndex].name
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isAnimating])

  // Convert geographic coordinates to SVG coordinates
  const coordsToSVG = (coords: number[], width: number, height: number) => {
    const [lon, lat] = coords
    // Map longitude from -180...180 to 0...width
    const x = ((lon + 180) / 360) * width
    // Map latitude from 90...-90 to 0...height
    // Flip Y axis since SVG 0,0 is top-left but geo 0,0 is center
    const y = ((90 - lat) / 180) * height
    return { x, y }
  }

  const getRegionCountries = () => {
    if (!activeRegion) return []
    return regions.find((r) => r.name === activeRegion)?.countries || []
  }

  const getRegionColor = (regionName: string) => {
    return regions.find((r) => r.name === regionName)?.color || "#089c9c"
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
            Presence in more than 33 countries and still counting. Overseas offices in Middle East and manufacturing
            facilities at Sudan.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Map Visualization */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-3/5 h-[400px] md:h-[500px] bg-white rounded-xl shadow-lg overflow-hidden"
            onMouseEnter={() => setIsAnimating(false)}
            onMouseLeave={() => setIsAnimating(true)}
          >
            {/* World Map SVG */}
            <div className="absolute inset-0 bg-[#f8fafc]">
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20" preserveAspectRatio="xMidYMid meet">
                {/* Simplified world map paths */}
                <path
                  d="M499.27,215.02l-1.14,3.3l1.71,1.14l2.28-1.71l0.57-2.85L499.27,215.02L499.27,215.02M724.01,275.7l-0.29,2.28l1.43,1.43l2.14,0.43l0.43-2.71L724.01,275.7L724.01,275.7M740.09,299.13l-1.0,1.86l1.14,1.0l1.57-1.0l-0.14-1.14L740.09,299.13L740.09,299.13M735.95,291.27l-1.0,0.86l-0.71,1.71l1.14,1.0l2.0-1.71L735.95,291.27L735.95,291.27M728.95,317.85l-1.86,1.14l-1.14-0.86l-1.0,1.14l0.43,2.0l1.57,0.43l1.43-0.43l1.0-1.0l-0.43-1.71L728.95,317.85L728.95,317.85M730.38,325.13l-1.0,0.71l0.86,1.86l1.14,0.86L730.38,325.13L730.38,325.13z"
                  fill="#CCCCCC"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                />
                <path
                  d="M321.13,50.07l-1.14,2.57l0.43,2.71l1.0,1.86l3.28,0.43l3.71-3.0l-1.86-3.28l-3.14-2.28L321.13,50.07L321.13,50.07M330.42,51.93l-3.71,3.0l0.43,3.14l2.43,3.14l1.0,1.14l1.71-1.0l2.71,0.14l-0.26-3.29l-1.71-3.57L330.42,51.93L330.42,51.93M334.27,80.02l-1.86,2.71l-2.71-2.0l-3.0,0.43l-0.71,3.14l3.14,3.14l3.14,1.43l2.43-1.43l1.0-2.43L334.27,80.02L334.27,80.02M347.3,78.31l-2.0,2.28l-0.14,2.71l2.14,2.57l3.14-0.43l1.14-2.28l-1.0-3.0L347.3,78.31L347.3,78.31z"
                  fill="#CCCCCC"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                />
                <path
                  d="M600,160 L620,170 L630,180 L640,190 L650,200 L660,210 L670,220 L680,230 L690,240 L700,250 L710,260 L720,270 L730,280 L740,290 L750,300"
                  fill="none"
                  stroke="#CCCCCC"
                  strokeWidth="0.5"
                />
                <path
                  d="M400,200 L410,210 L420,220 L430,230 L440,240 L450,250 L460,260 L470,270 L480,280 L490,290 L500,300"
                  fill="none"
                  stroke="#CCCCCC"
                  strokeWidth="0.5"
                />
                <path
                  d="M300,150 L310,160 L320,170 L330,180 L340,190 L350,200 L360,210 L370,220 L380,230 L390,240 L400,250"
                  fill="none"
                  stroke="#CCCCCC"
                  strokeWidth="0.5"
                />
                <path
                  d="M200,250 L210,260 L220,270 L230,280 L240,290 L250,300 L260,310 L270,320 L280,330 L290,340 L300,350"
                  fill="none"
                  stroke="#CCCCCC"
                  strokeWidth="0.5"
                />
                <path
                  d="M500,100 L510,110 L520,120 L530,130 L540,140 L550,150 L560,160 L570,170 L580,180 L590,190 L600,200"
                  fill="none"
                  stroke="#CCCCCC"
                  strokeWidth="0.5"
                />
              </svg>

              {/* Region Highlights */}
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Asia Region */}
                <motion.path
                  d="M600,150 Q650,180 700,200 Q750,220 800,250 Q820,270 830,300 Q840,330 830,350 Q820,370 800,380 Q780,390 750,380 Q720,370 700,350 Q680,330 650,300 Q620,270 600,250 Q580,230 570,200 Q560,170 570,150 Q580,130 600,150 Z"
                  fill={activeRegion === "Asia" ? getRegionColor("Asia") : "transparent"}
                  fillOpacity={activeRegion === "Asia" ? 0.2 : 0}
                  stroke={getRegionColor("Asia")}
                  strokeWidth={activeRegion === "Asia" ? 2 : 1}
                  strokeOpacity={activeRegion === "Asia" ? 1 : 0.3}
                  initial={{ scale: 0.95, opacity: 0.3 }}
                  animate={{
                    scale: activeRegion === "Asia" ? 1 : 0.95,
                    opacity: activeRegion === "Asia" ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setActiveRegion("Asia")}
                  className="cursor-pointer"
                />

                {/* Middle East Region */}
                <motion.path
                  d="M500,150 Q520,170 530,200 Q540,230 530,260 Q520,290 500,310 Q480,330 450,320 Q420,310 410,280 Q400,250 410,220 Q420,190 450,170 Q480,150 500,150 Z"
                  fill={activeRegion === "Middle East" ? getRegionColor("Middle East") : "transparent"}
                  fillOpacity={activeRegion === "Middle East" ? 0.2 : 0}
                  stroke={getRegionColor("Middle East")}
                  strokeWidth={activeRegion === "Middle East" ? 2 : 1}
                  strokeOpacity={activeRegion === "Middle East" ? 1 : 0.3}
                  initial={{ scale: 0.95, opacity: 0.3 }}
                  animate={{
                    scale: activeRegion === "Middle East" ? 1 : 0.95,
                    opacity: activeRegion === "Middle East" ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setActiveRegion("Middle East")}
                  className="cursor-pointer"
                />

                {/* Africa Region */}
                <motion.path
                  d="M400,200 Q420,230 430,270 Q440,310 430,350 Q420,390 400,420 Q380,450 350,460 Q320,470 290,450 Q260,430 250,390 Q240,350 250,310 Q260,270 290,240 Q320,210 350,200 Q380,190 400,200 Z"
                  fill={activeRegion === "Africa" ? getRegionColor("Africa") : "transparent"}
                  fillOpacity={activeRegion === "Africa" ? 0.2 : 0}
                  stroke={getRegionColor("Africa")}
                  strokeWidth={activeRegion === "Africa" ? 2 : 1}
                  strokeOpacity={activeRegion === "Africa" ? 1 : 0.3}
                  initial={{ scale: 0.95, opacity: 0.3 }}
                  animate={{
                    scale: activeRegion === "Africa" ? 1 : 0.95,
                    opacity: activeRegion === "Africa" ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setActiveRegion("Africa")}
                  className="cursor-pointer"
                />

                {/* Country Markers */}
                {regions.map((region) =>
                  region.countries.map((country, index) => {
                    const { x, y } = coordsToSVG(country.coordinates, 1000, 500)
                    const isActive = activeRegion === region.name
                    const isHovered = hoveredCountry === country.name

                    return (
                      <g key={`${region.name}-${country.name}`}>
                        <motion.circle
                          cx={x}
                          cy={y}
                          r={isHovered ? 6 : isActive ? 4 : 0}
                          fill={region.color}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: isActive ? 1 : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, delay: isActive ? index * 0.05 : 0 }}
                          onMouseEnter={() => setHoveredCountry(country.name)}
                          onMouseLeave={() => setHoveredCountry(null)}
                        />
                        <motion.circle
                          cx={x}
                          cy={y}
                          r={12}
                          fill="transparent"
                          initial={{ scale: 0 }}
                          animate={{ scale: isActive ? 1 : 0 }}
                          transition={{ duration: 0.3, delay: isActive ? index * 0.05 : 0 }}
                          onMouseEnter={() => setHoveredCountry(country.name)}
                          onMouseLeave={() => setHoveredCountry(null)}
                        />
                        {isHovered && (
                          <motion.g
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <rect
                              x={x - 50}
                              y={y - 30}
                              width={100}
                              height={20}
                              rx={4}
                              fill="white"
                              stroke={region.color}
                              strokeWidth={1}
                            />
                            <text
                              x={x}
                              y={y - 16}
                              textAnchor="middle"
                              fill={region.color}
                              fontSize={10}
                              fontWeight="bold"
                            >
                              {country.name}
                            </text>
                          </motion.g>
                        )}
                      </g>
                    )
                  }),
                )}
              </svg>

              {/* Region Labels */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {regions.map((region) => (
                  <motion.button
                    key={region.name}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeRegion === region.name
                        ? "bg-white text-gray-900 shadow-md"
                        : "bg-white/50 text-gray-700 hover:bg-white/80"
                    }`}
                    onClick={() => setActiveRegion(region.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      borderLeft: `4px solid ${region.color}`,
                    }}
                  >
                    <span>{region.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* Instructions */}
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-lg text-xs text-gray-600">
                Hover over markers to see country names
              </div>
            </div>
          </motion.div>

          {/* Country List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <AnimatePresence mode="wait">
              {activeRegion ? (
                <motion.div
                  key={activeRegion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: getRegionColor(activeRegion) }}
                      ></div>
                      <h3 className="text-2xl font-bold text-gray-900">{activeRegion}</h3>
                    </div>
                    <button
                      onClick={() => setActiveRegion(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {getRegionCountries().map((country) => (
                      <motion.div
                        key={country.name}
                        className={`flex items-center p-2 rounded-lg transition-colors ${
                          hoveredCountry === country.name ? "bg-gray-100" : "hover:bg-gray-50"
                        }`}
                        onMouseEnter={() => setHoveredCountry(country.name)}
                        onMouseLeave={() => setHoveredCountry(null)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <MapPin
                          className="w-4 h-4 mr-2 flex-shrink-0"
                          style={{ color: getRegionColor(activeRegion) }}
                        />
                        <span className="text-gray-700 text-sm">{country.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="all-regions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Presence</h3>
                  <div className="space-y-6">
                    {regions.map((region) => (
                      <div key={region.name} className="space-y-3">
                        <div className="flex items-center cursor-pointer" onClick={() => setActiveRegion(region.name)}>
                          <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: region.color }}></div>
                          <h4 className="text-lg font-semibold text-gray-800">{region.name}</h4>
                          <ChevronRight className="w-4 h-4 ml-2 text-gray-400" />
                        </div>
                        <div className="pl-6 grid grid-cols-2 md:grid-cols-3 gap-2">
                          {region.countries.slice(0, 3).map((country) => (
                            <div key={country.name} className="flex items-center">
                              <div className="w-1.5 h-1.5 rounded-full mr-2 bg-gray-400"></div>
                              <span className="text-sm text-gray-600">{country.name}</span>
                            </div>
                          ))}
                          {region.countries.length > 3 && (
                            <div className="flex items-center text-sm text-[#089c9c] font-medium">
                              +{region.countries.length - 3} more
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="text-gray-600">
                        <span className="font-semibold text-gray-900">33</span> Countries
                      </div>
                      <div className="text-gray-600">
                        <span className="font-semibold text-gray-900">3</span> Continents
                      </div>
                      <div className="text-gray-600">
                        <span className="font-semibold text-gray-900">2</span> Manufacturing Facilities
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

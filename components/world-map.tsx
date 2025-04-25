"use client"

import type React from "react"
import { motion } from "framer-motion"

interface WorldMapProps {
  locations: { name: string; coordinates: number[] }[]
  setHoveredCountry: (country: string | null) => void
}

const WorldMap: React.FC<WorldMapProps> = ({ locations, setHoveredCountry }) => {
  return (
    <svg
      viewBox="0 0 1000 500"
      className="w-full h-full"
      style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}
    >
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="countries">
        {/* World map paths */}
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
        {/* Add more country paths here */}
      </motion.g>
      {locations.map((location, index) => (
        <motion.circle
          key={index}
          cx={((location.coordinates[0] + 180) / 360) * 1000}
          cy={((90 - location.coordinates[1]) / 180) * 500}
          r="5"
          fill="#10B981"
          stroke="#FFFFFF"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 500, damping: 15 }}
          onMouseEnter={() => setHoveredCountry(location.name)}
          onMouseLeave={() => setHoveredCountry(null)}
        />
      ))}
    </svg>
  )
}

export default WorldMap

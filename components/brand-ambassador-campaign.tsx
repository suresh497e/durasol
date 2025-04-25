"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ambassadors = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Solar Energy Advocate",
    image: "/images/brand-ambassadors/ambassador-1.png",
    quote: "Empowering communities through sustainable energy solutions.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Renewable Energy Expert",
    image: "/images/brand-ambassadors/ambassador-2.png",
    quote: "Building a greener future with innovative energy technologies.",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Clean Energy Enthusiast",
    image: "/images/brand-ambassadors/ambassador-3.png",
    quote: "Transforming lives with reliable and sustainable power solutions.",
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Sustainability Champion",
    image: "/images/brand-ambassadors/ambassador-4.png",
    quote: "Promoting eco-friendly energy alternatives for a better tomorrow.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Energy Conservation Advocate",
    image: "/images/brand-ambassadors/ambassador-5.png",
    quote: "Helping businesses reduce their carbon footprint with clean energy.",
  },
  {
    id: 6,
    name: "Ananya Reddy",
    role: "Green Energy Promoter",
    image: "/images/brand-ambassadors/ambassador-6.png",
    quote: "Inspiring communities to embrace renewable energy solutions.",
  },
  {
    id: 7,
    name: "Rahul Verma",
    role: "Sustainable Development Advocate",
    image: "/images/brand-ambassadors/ambassador-7.png",
    quote: "Creating a sustainable future through innovative energy solutions.",
  },
]

export default function BrandAmbassadorCampaign() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleAmbassadors = 3
  const maxIndex = ambassadors.length - visibleAmbassadors

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">Our Brand Ambassador Campaign</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the faces behind Durasol Energi, championing sustainable solutions and community empowerment.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="bg-white/80 p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous ambassadors"
            >
              <ChevronLeft className="h-6 w-6 text-primary-700" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="bg-white/80 p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next ambassadors"
            >
              <ChevronRight className="h-6 w-6 text-primary-700" />
            </button>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              initial={false}
              animate={{ x: `-${currentIndex * (100 / visibleAmbassadors)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {ambassadors.map((ambassador) => (
                <motion.div
                  key={ambassador.id}
                  className="min-w-[calc(33.333%-1rem)] md:min-w-[calc(33.333%-1.5rem)]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="relative h-64">
                      <Image
                        src={ambassador.image || "/placeholder.svg"}
                        alt={ambassador.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-primary-800 mb-1">{ambassador.name}</h3>
                      <p className="text-sm text-primary-600 mb-4">{ambassador.role}</p>
                      <p className="text-gray-600 italic flex-grow">"{ambassador.quote}"</p>
                      <div className="mt-4">
                        <button className="text-primary-700 font-medium hover:text-primary-900 transition-colors">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 ${currentIndex === index ? "bg-primary-700" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

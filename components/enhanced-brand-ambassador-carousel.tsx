"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Mr. Mahender Sharma",
    image: "/images/testimonials/mahender-sharma.webp",
  },
  {
    id: 2,
    name: "Md. Yameen",
    image: "/images/testimonials/md-yameen.webp",
  },
  {
    id: 3,
    name: "Mr. Vinay Gandhi",
    image: "/images/testimonials/vinay-gandhi.webp",
  },
  {
    id: 4,
    name: "Mr. Vikas Saini",
    image: "/images/testimonials/vikas-saini.webp",
  },
  {
    id: 5,
    name: "Mr. Avnish Kumar",
    image: "/images/testimonials/avnish-kumar.webp",
  },
  {
    id: 6,
    name: "Mr. Aman Garg",
    image: "/images/testimonials/aman-garg.webp",
  },
]

export default function EnhancedBrandAmbassadorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Handle auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsAutoPlaying(false)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.changedTouches[0].clientX
      const diff = touchStartX.current - touchEndX

      if (diff > 50) {
        // Swipe left, go to next slide
        nextSlide()
      } else if (diff < -50) {
        // Swipe right, go to previous slide
        prevSlide()
      }

      touchStartX.current = null
      setIsAutoPlaying(true)
    }
  }

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <Quote className="w-6 h-6 text-primary-700" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700">Our Brand Ambassadors</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals who represent Durasol Energi, strengthening bonds and powering communities
            across the nation.
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div className="relative h-[400px] md:h-[600px] w-full">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-0 top-1/2 transform -translate-y-1/2 md:-translate-x-6 bg-white text-primary-700 p-2 md:p-3 rounded-full shadow-lg z-10 transition-all hover:bg-primary-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-0 top-1/2 transform -translate-y-1/2 md:translate-x-6 bg-white text-primary-700 p-2 md:p-3 rounded-full shadow-lg z-10 transition-all hover:bg-primary-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary-700 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Ambassador Name */}
          <div className="text-center mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{testimonials[currentIndex].name}</h3>
                <div className="flex items-center justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-primary-600 font-medium mt-2">Brand Ambassador</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-medium">"Strengthening bonds and powering communities"</p>
          <p className="text-gray-600 mt-2">Proud to have them in the mission of improving the Quality of life.</p>
        </div>
      </div>
    </section>
  )
}

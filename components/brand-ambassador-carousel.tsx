"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

export default function BrandAmbassadorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
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

  // Handle manual scrolling
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft
      const itemWidth = carouselRef.current.clientWidth
      const newIndex = Math.round(scrollPosition / itemWidth)

      if (newIndex !== currentIndex && newIndex < testimonials.length) {
        setCurrentIndex(newIndex)
      }
    }
  }

  return (
    <div
      className="relative w-full py-12 bg-gradient-to-r from-primary-50 to-white overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-700 mb-8">Our Brand Ambassadors</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Meet the passionate individuals who represent Durasol Energi, strengthening bonds and powering communities
          across the nation.
        </p>
      </div>

      {/* Mobile Carousel (Snap Scroll) */}
      <div
        ref={carouselRef}
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        onScroll={handleScroll}
      >
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="flex-shrink-0 w-full snap-center px-4">
            <div className="relative h-[500px] w-full">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-contain"
                priority={index === currentIndex}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block relative max-w-5xl mx-auto">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-full px-4">
                <div className="relative h-[600px] w-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    priority={testimonial.id === currentIndex + 1}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white text-primary-700 p-3 rounded-full shadow-lg z-10 transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white text-primary-700 p-3 rounded-full shadow-lg z-10 transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary-700 w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

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

export default function HorizontalScrollAmbassadors() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const checkScrollability = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10, // 10px buffer
      )

      // Calculate active index based on scroll position
      const itemWidth = container.clientWidth / 2 // Assuming 2 items visible
      const newIndex = Math.round(container.scrollLeft / itemWidth)
      if (newIndex !== activeIndex && newIndex < testimonials.length) {
        setActiveIndex(newIndex)
      }
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollability)
      // Initial check
      checkScrollability()
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollability)
      }
    }
  }, [])

  const scrollLeft = () => {
    const container = scrollContainerRef.current
    if (container) {
      const itemWidth = container.clientWidth / 1.5
      container.scrollBy({ left: -itemWidth, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    const container = scrollContainerRef.current
    if (container) {
      const itemWidth = container.clientWidth / 1.5
      container.scrollBy({ left: itemWidth, behavior: "smooth" })
    }
  }

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current
    if (container) {
      const itemWidth = container.clientWidth / 1.5
      container.scrollTo({ left: index * itemWidth, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">Our Brand Ambassadors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals who represent Durasol Energi, strengthening bonds and powering communities
            across the nation.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`p-2 md:p-3 rounded-full shadow-lg ${
                canScrollLeft
                  ? "bg-white text-primary-700 hover:bg-primary-50"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          <div className="absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`p-2 md:p-3 rounded-full shadow-lg ${
                canScrollRight
                  ? "bg-white text-primary-700 hover:bg-primary-50"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-primary-600 font-medium mb-3">Brand Ambassador</p>
                    <p className="text-gray-600 text-sm">
                      "Strengthening bonds and powering communities" - Proud to have them in the mission of improving
                      the Quality of life.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary-700 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Durasol transformed our energy efficiency and sustainability efforts!",
    author: "Sarah Thompson",
    company: "Green Living Co.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "A game-changer for our eco-friendly projects. Reliable, efficient, and future-proof.",
    author: "Emily Rodriguez",
    company: "EcoHomes LLC",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 text-center">What Our Customers Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                width={100}
                height={100}
                className="rounded-full mx-auto"
              />
            </div>
            <p className="text-xl italic mb-4 text-gray-700">"{testimonials[currentIndex].quote}"</p>
            <p className="font-semibold text-primary-900">{testimonials[currentIndex].author}</p>
            <p className="text-primary-700">{testimonials[currentIndex].company}</p>
          </motion.div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-900 text-white p-2 rounded-full shadow-lg transition-colors hover:bg-primary-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-900 text-white p-2 rounded-full shadow-lg transition-colors hover:bg-primary-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

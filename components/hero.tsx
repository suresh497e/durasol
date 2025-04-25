"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

const slides = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%204%20(1)-JstfhooIh7qpU2aW53rGBzQiFTuUj4.png",
    alt: "Diverse group of people committed to sustainable energy",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20Durasol%202-C0BImgm2GJJiUdnsJc0wNdhMWlrSa6.jpeg",
    alt: "Modern manufacturing facility with professionals in Durasol uniforms",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000) // 3 seconds interval

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[65vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 mt-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].alt}
              fill
              priority
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              style={{ objectPosition: "center" }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-transparent">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundImage: [
              "linear-gradient(to right, rgba(8,156,156,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,156,156,0.1) 1px, transparent 1px)",
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative h-full container mx-auto px-4 md:px-6 flex items-center">
          <motion.div
            className="max-w-2xl space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Empowering a Sustainable Future Together
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Join us in revolutionizing energy solutions for a greener tomorrow. Experience innovation that powers
              progress while protecting our planet.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute right-4 md:right-8 lg:right-12 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10">
        {/* Vertical line connecting icons */}
        <div className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>

        <div className="flex flex-col space-y-3 md:space-y-5 items-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 md:p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-110 hover:bg-primary-500 group"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-700 group-hover:text-white" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 md:p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-110 hover:bg-primary-500 group"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-700 group-hover:text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 md:p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-110 hover:bg-primary-500 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-700 group-hover:text-white" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 md:p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-110 hover:bg-primary-500 group"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-700 group-hover:text-white" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 md:p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-110 hover:bg-primary-500 group"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-700 group-hover:text-white" />
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

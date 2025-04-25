"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  role: string
  videoUrl: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Customer Testimonial 1",
    role: "Customer Testimonial 1",
    videoUrl: "https://youtu.be/ODVQY0kI4pg?si=CGVVjYfTesybv52X",
  },
  {
    id: "2",
    name: "Customer Testimonial 2",
    role: "Customer Testimonial 2",
    videoUrl: "https://youtu.be/0Sws9Y6-VZI?si=EaRDEuK15nTeTq6J",
  },
  {
    id: "3",
    name: "Customer Testimonial 3",
    role: "Customer Testimonial 3",
    videoUrl: "https://youtu.be/PD9Ak5retsg?si=1p265_7_xbE_X20o",
  },
  {
    id: "4",
    name: "Customer Testimonial 4",
    role: "Customer Testimonial 4",
    videoUrl: "https://www.youtube.com/watch?v=qyiZNJDlxS4",
  },
  {
    id: "5",
    name: "Customer Testimonial 5",
    role: "Customer Testimonial 5",
    videoUrl: "https://www.youtube.com/watch?v=example5",
  },
  // Keep existing testimonials
]

const VideoTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)
  const maxIndex = testimonials.length - 1

  const nextTestimonial = () => {
    if (isPlaying) return
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    if (isPlaying) return
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const goToTestimonial = (index: number) => {
    if (isPlaying) return
    setCurrentIndex(index)
  }

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  useEffect(() => {
    setIsPlaying(false)
  }, [currentIndex])

  const currentTestimonial = testimonials[currentIndex]
  const youtubeId = getYouTubeId(currentTestimonial.videoUrl)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#089c9c] mb-4">Customer Video Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from our satisfied customers about their experience with{" "}
            <span className="text-[#089c9c] font-semibold">Durasol Energi</span> products
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            disabled={isPlaying}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#089c9c]" />
          </button>

          <button
            onClick={nextTestimonial}
            disabled={isPlaying}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#089c9c]" />
          </button>

          {/* Video Container */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            {isPlaying ? (
              <iframe
                ref={videoRef}
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title={currentTestimonial.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            ) : (
              <div className="relative w-full h-full cursor-pointer" onClick={handlePlayVideo}>
                <img
                  src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to medium quality if maxresdefault is not available
                    ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-20 transition-all">
                  <div className="bg-[#089c9c] rounded-full p-4 shadow-lg">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">{currentTestimonial.name}</h3>
                  <p className="text-primary-100">{currentTestimonial.role}</p>
                </div>
              </div>
            )}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                disabled={isPlaying}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#089c9c] w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoTestimonials

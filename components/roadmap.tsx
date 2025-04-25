"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Building2, Building, Lightbulb, Factory, Battery, Zap, X } from "lucide-react"
import Image from "next/image"

const milestones = [
  {
    year: 2014,
    title: "Corporate Inception",
    description: "Beginning of Durasol's journey in sustainable energy solutions",
    icon: Calendar,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2012.jpg-XzBL1dawQeFyazC73vYFwG72VGKVoU.jpeg",
    align: "left",
    objectFit: "cover",
    objectPosition: "center",
  },
  {
    year: 2017,
    title: "Battery Plant 1 in Sonipet",
    description: "First manufacturing facility established",
    icon: Factory,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Building%201-durasol.jpg-UI1d4Ul5mThIpUBiki5BBHGlCdkdxg.jpeg",
    align: "right",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    year: 2019,
    title: "Office in Dubai",
    description: "International expansion begins with our presence in the UAE",
    icon: Building,
    image: "/images/dubai-skyline.jpeg",
    align: "left",
    objectFit: "cover",
    objectPosition: "center",
  },
  {
    year: 2020,
    title: "R & D Center in Gurugram & Factorys in Sudan",
    description: "Innovation hub established for future technologies",
    icon: Lightbulb,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/R%26D%20centre.jpg-8TDyyjljM0FLvM3KQJA3nsH8DqgY23.jpeg",
    align: "right",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    year: 2021,
    title: "Inverter Plant in Gurugram",
    description: "Advanced manufacturing facility for cutting-edge inverter solutions",
    icon: Building2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inverter%20plant.jpg-UAMVwNOrGTwIYNIHrATrfpfrtTg4LN.jpeg",
    align: "left",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    year: 2022,
    title: "Battery Plant 2 in Sonipet",
    description: "State-of-the-art manufacturing facility expanding our production capabilities",
    icon: Battery,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Building%202%20-durasol.jpg-UzMwSTFxBEc6dtMsmPR99iDgqNViZk.jpeg",
    align: "right",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    year: 2023,
    title: "HF Off Grid & Lithium Battery Launch",
    description: "Revolutionary new product line introduction",
    icon: Zap,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HF%20%26%20LFPO4.jpg-xVls8BjFhAMAJJdhl2Pceo8I6aSWG7.jpeg",
    align: "left",
    objectFit: "contain",
    objectPosition: "center",
  },
]

export default function Roadmap() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#089c9c] mb-4">Our Growth Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From inception to innovation, our path of continuous growth and expansion
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#089c9c]/20 via-[#089c9c] to-[#089c9c]/20" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`flex flex-col ${milestone.align === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                >
                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 ${milestone.align === "left" ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-xl shadow-lg border border-[#089c9c]/10"
                    >
                      <div
                        className={`flex items-center gap-4 mb-4 ${milestone.align === "left" ? "md:justify-end" : ""}`}
                      >
                        <div className="flex items-center gap-2">
                          <milestone.icon className="w-6 h-6 text-[#089c9c]" />
                          <h3 className="text-2xl font-bold text-gray-800">{milestone.year}</h3>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-[#089c9c] mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Point - Only visible on md and larger screens */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:block">
                    <div className="w-6 h-6 rounded-full bg-[#089c9c] border-4 border-white shadow-lg" />
                  </div>

                  {/* Center Point - Only visible on smaller screens */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 md:hidden">
                    <div className="w-6 h-6 rounded-full bg-[#089c9c] border-4 border-white shadow-lg" />
                  </div>

                  {/* Image Side */}
                  <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative h-56 sm:h-64 md:h-80 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-[#089c9c]/5 to-[#089c9c]/10 cursor-pointer"
                      onClick={() => setSelectedImage(milestone.image)}
                    >
                      {index === 0 ? (
                        // Special handling for the first image (Corporate Inception)
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%2012.jpg-XzBL1dawQeFyazC73vYFwG72VGKVoU.jpeg"
                          alt="Corporate Inception - Durasol Team"
                          fill
                          priority
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <Image
                          src={milestone.image || "/placeholder.svg"}
                          alt={milestone.title}
                          fill
                          className={`${milestone.objectFit === "contain" ? "object-contain p-2" : "object-cover"}`}
                          style={{ objectPosition: milestone.objectPosition }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                        <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-[#089c9c]">
                          {milestone.year}
                        </span>
                        <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-[#089c9c]">
                          Click to enlarge
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Enlarged milestone image"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-white/90 p-2 rounded-full text-[#089c9c] hover:bg-white transition-colors"
                aria-label="Close image"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

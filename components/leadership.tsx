"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

const leaders = [
  {
    name: "Dhananjay Sharma",
    role: "Founder & MD",
    description: "A visionary leader with over 30 years of experience in the energy sector.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CEO%20IMAGE.JPG-EsQmkD1dpLllQVgCDX2IL6LQYVoRUw.jpeg",
    linkedin: "#",
    email: "mailto:md@durasol.com",
    featured: true,
    objectPosition: "center",
  },
  {
    name: "R. Sivarajan",
    role: "Chief Technology Officer",
    description: "An innovation expert with two decades of experience in renewable energy solutions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6039.JPG-LHzjk5vniIXXEORJ7MUf7jfmBN4IbN.jpeg",
    linkedin: "#",
    email: "mailto:cto@durasol.com",
    objectPosition: "top",
  },
  {
    name: "Sanjay Sharma",
    role: "Director – Operations",
    description: "An operations specialist ensuring excellence across all Durasol facilities worldwide.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6230.JPG-fQcgVtphATQUx7v07040OPOUo2gBu9.jpeg",
    linkedin: "#",
    email: "mailto:operations@durasol.com",
    objectPosition: "top",
  },
  {
    name: "Madan Kotnala",
    role: "Director",
    description: "A strategic leader expanding Durasol's presence in international markets.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6045.JPG-YqiGWfmS9imVQuY3E0QSl9w0fyYLAm.jpeg",
    linkedin: "#",
    email: "mailto:director@durasol.com",
    objectPosition: "top",
  },
]

export default function Leadership() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#089c9c] mb-4">Meet Our Leadership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leaders driving innovation and sustainable energy solutions.
          </p>
        </motion.div>

        {/* Horizontal scrollable container for all leaders */}
        <div className="overflow-x-auto pb-8">
          <div className="flex space-x-6 min-w-max">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow w-72 flex flex-col"
              >
                <div className="relative h-[350px] border-b-4 border-[#089c9c]">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: leader.objectPosition || "top" }}
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-[#089c9c] font-medium text-lg mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 mb-5 line-clamp-3 flex-grow">{leader.description}</p>
                  <div className="flex items-center justify-start space-x-4 mt-auto">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={leader.linkedin}
                      className="p-2.5 rounded-full bg-[#089c9c] text-white hover:bg-[#078787] transition-colors"
                      aria-label={`${leader.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={leader.email}
                      className="p-2.5 rounded-full bg-[#089c9c]/10 text-[#089c9c] hover:bg-[#089c9c]/20 transition-colors"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

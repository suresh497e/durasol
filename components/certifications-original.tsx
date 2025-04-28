"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ZoomIn, X } from "lucide-react"

// Combined certifications data
const allCertifications = [
  // Government Recognitions
  {
    id: "star",
    title: "One Star Export House Certificate",
    category: "Government Recognition",
    description: "Government of India, Ministry of Commerce and Industry",
    date: "Valid from: 01/10/2023 to 31/03/2028",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Star.jpg-4zpwSjJ8VfGdZVIt4hqXUbpPuCInQG.jpeg",
  },
  // Achievers Awards
  {
    id: "achiever",
    title: "Indian Achievers' Award",
    category: "Business Leadership",
    description: "Awarded to: Dhananjay Sharma, Founder & MD",
    date: "Year: 2021-22",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AF01V5-glOBFvpIbFkM4EW0pdnFpwEOhasHq2.png",
  },
  // Industry Certifications
  {
    id: "ce",
    title: "CE Certification",
    category: "Industry Certification",
    description: "European Conformity",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ICI-CE-2000-91072201-1-scaled.jpg-DxnxxhkmK4myiZaNGapXevyM6nzo8A.jpeg",
  },
  {
    id: "iso",
    title: "ISO 9001:2015",
    category: "Industry Certification",
    description: "Quality Management System",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO-9001-2015-scaled%20_4.jpg-TwUxYwyBIXb38rcvKuT7t59dx9IA9F.jpeg",
  },
  {
    id: "multiple",
    title: "Industry Certifications",
    category: "Industry Certification",
    description: "Multiple Quality & Safety Standards",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20cert-AbdT0Zu5qCG3Zfl9e16wvEJwnKY0ay.jpeg",
  },
  {
    id: "msme",
    title: "MSME Certificate",
    category: "Industry Certification",
    description: "Micro, Small & Medium Enterprises",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSME-certificate-BVE2QGJNbSMRpj4gRifu3IfYpYMOx6.png",
  },
  {
    id: "udyam",
    title: "Udyam Registration",
    category: "Industry Certification",
    description: "Ministry of MSME, Government of India",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udhyam-cerificate_5-I49EmbItUvE5Z2ezvAhtBa30zXoZnA.png",
  },
  // Trade Mark Certifications
  {
    id: "etg",
    title: "ETG Trademark",
    category: "Trade Mark",
    description: "Trade Mark No. 5503593",
    registeredTo: "DHANANJAY SHARMA TRADING AS D S GLOBAL",
    date: "24/06/2022",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade%206.jpg-kppHuvfrwhhMMLOdo1oju0ojtUxXqw.jpeg",
  },
  {
    id: "tm1",
    title: "Trade Mark Certificate",
    category: "Trade Mark",
    description: "Trade Mark No. 4551400",
    registeredTo: "SUNIL KUMAR SHARMA",
    date: "01/07/2020",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade_1-Z6NhYwehM36Y7Zf4Bl6qE4Svpi8lnt.png",
  },
  {
    id: "tm2",
    title: "Trade Mark Certificate",
    category: "Trade Mark",
    description: "Trade Mark No. 4566656",
    registeredTo: "DHANANJAY SHARMA",
    date: "13/07/2020",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade_4-mA0Q21jHsPdDr9NNgB1ZercyBkjKnK.png",
  },
  {
    id: "tm3",
    title: "Trade Mark Certificate",
    category: "Trade Mark",
    description: "Trade Mark No. 4809033",
    registeredTo: "DHANANJAY SHARMA",
    date: "06/01/2021",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade_2-mrdGiPXi4h4Y57bq9mAUmwgs4cCmnF.png",
  },
  {
    id: "kipor",
    title: "KIPOR Trademark",
    category: "Trade Mark",
    description: "Trade Mark No. 4255002",
    registeredTo: "DHANANJAY SHARMA TRADING AS D S GLOBAL",
    date: "03/08/2019",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade%205.jpg-KFA7iuf6uiunpVX1wLn6fNcRn8vFXR.jpeg",
  },
  {
    id: "tm4",
    title: "Trade Mark Certificate",
    category: "Trade Mark",
    description: "Trade Mark No. 4566657",
    registeredTo: "DHANANJAY SHARMA",
    date: "13/07/2020",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade_3-5Tr78XyBVvLuZsPbd8w9d7R9qqWwvM.png",
  },
]

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  // Filter certifications based on active filter
  const filteredCertifications = activeFilter
    ? allCertifications.filter((cert) => cert.category === activeFilter)
    : allCertifications

  // Get unique categories for filter buttons
  const categories = Array.from(new Set(allCertifications.map((cert) => cert.category)))

  return (
    <div className="bg-white">
      {/* Hero Section with New Image */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-IFdS9I0dl4QmynC0wqrdI5D7QJz485.png"
            alt="Certifications"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              imageRendering: "crisp-edges",
            }}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Certifications</h1>
            <p className="text-lg md:text-xl text-white">
              Our commitment to quality and sustainability is validated by industry-leading certifications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unified Certifications Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-900">Our Certifications</h2>
            <p className="text-base text-gray-700 text-center leading-relaxed mb-8 max-w-3xl mx-auto">
              At Durasol Energi, we adhere to the highest standards of quality, safety, and environmental
              responsibility. Our certifications demonstrate our commitment to excellence.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setActiveFilter(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === null ? "bg-[#089c9c] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category
                      ? "bg-[#089c9c] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedCert(cert.id)}
                >
                  <div className="p-2">
                    <div className="relative h-32 mb-2">
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow-sm">
                        <ZoomIn className="h-3 w-3 text-[#089c9c]" />
                      </div>
                    </div>
                    <div className="border-t pt-2">
                      <h3 className="text-sm font-bold text-gray-900 truncate" title={cert.title}>
                        {cert.title}
                      </h3>
                      <p className="text-xs text-gray-600 truncate" title={cert.description}>
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-white rounded-lg">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10"
              aria-label="Close"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>

            <div className="p-6 pt-12">
              {allCertifications.map(
                (cert) =>
                  selectedCert === cert.id && (
                    <div key={cert.id}>
                      <h3 className="text-xl font-bold text-center mb-4">{cert.title}</h3>
                      <img src={cert.image || "/placeholder.svg"} alt={cert.title} className="w-full h-auto" />
                      <div className="mt-4 space-y-1 text-center">
                        <p className="text-gray-700">{cert.description}</p>
                        {cert.registeredTo && (
                          <p className="text-gray-700">
                            <span className="font-medium">Registered to:</span> {cert.registeredTo}
                          </p>
                        )}
                        {cert.date && (
                          <p className="text-gray-700">
                            <span className="font-medium">Date:</span> {cert.date}
                          </p>
                        )}
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Add default export to maintain compatibility with existing imports
export default Certifications

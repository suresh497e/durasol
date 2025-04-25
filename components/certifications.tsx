"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ZoomIn, X } from "lucide-react"

// Trademark certificates data
const trademarks = [
  {
    id: "etg",
    title: "ETG Trademark",
    description: "Trade Mark No. 5503593",
    registeredTo: "DHANANJAY SHARMA TRADING AS D S GLOBAL",
    date: "24/06/2022",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade%206.jpg-kppHuvfrwhhMMLOdo1oju0ojtUxXqw.jpeg",
  },
  {
    id: "tm1",
    title: "Trade Mark Certificate",
    description: "Trade Mark No. 4551400",
    registeredTo: "SUNIL KUMAR SHARMA",
    date: "01/07/2020",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade_1-Z6NhYwehM36Y7Zf4Bl6qE4Svpi8lnt.png",
  },
  {
    id: "tm2",
    title: "Trade Mark Certificate",
    description: "Trade Mark No. 4566656",
    registeredTo: "DHANANJAY SHARMA",
    date: "13/07/2020",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade_4-mA0Q21jHsPdDr9NNgB1ZercyBkjKnK.png",
  },
  {
    id: "tm3",
    title: "Trade Mark Certificate",
    description: "Trade Mark No. 4809033",
    registeredTo: "DHANANJAY SHARMA",
    date: "06/01/2021",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade_2-mrdGiPXi4h4Y57bq9mAUmwgs4cCmnF.png",
  },
  {
    id: "kipor",
    title: "KIPOR Trademark",
    description: "Trade Mark No. 4255002",
    registeredTo: "DHANANJAY SHARMA TRADING AS D S GLOBAL",
    date: "03/08/2019",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade%205.jpg-KFA7iuf6uiunpVX1wLn6fNcRn8vFXR.jpeg",
  },
  {
    id: "tm4",
    title: "Trade Mark Certificate",
    description: "Trade Mark No. 4566657",
    registeredTo: "DHANANJAY SHARMA",
    date: "13/07/2020",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trade_3-5Tr78XyBVvLuZsPbd8w9d7R9qqWwvM.png",
  },
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  return (
    <div className="bg-white">
      {/* Hero Section with New Image */}
      <section className="relative py-20 md:py-28">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Certifications</h1>
            <p className="text-xl md:text-2xl text-white">
              Our commitment to quality and sustainability is validated by industry-leading certifications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Recognitions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Government Recognitions</h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-12 max-w-3xl mx-auto">
              Durasol Energi has been recognized by government authorities for our contribution to exports and
              sustainable energy solutions.
            </p>

            {/* Direct Certificate Display */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 bg-[#089c9c] text-white">
                  <h3 className="text-xl font-bold text-center">One Star Export House Certificate</h3>
                </div>

                {/* Certificate Image */}
                <div className="p-6">
                  <div
                    className="relative w-full border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setSelectedCert("star")}
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Star.jpg-4zpwSjJ8VfGdZVIt4hqXUbpPuCInQG.jpeg"
                      alt="One Star Export House Certificate"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
                      <ZoomIn className="h-5 w-5 text-[#089c9c]" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Awarded to:</span> INTELENERGI GLOBAL PRIVATE LIMITED
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Issued by:</span> Government of India, Ministry of Commerce and
                      Industry
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Valid from:</span> 01/10/2023 to 31/03/2028
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Achievers Awards</h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-12 max-w-3xl mx-auto">
              Our leadership has been recognized for outstanding contributions to business excellence and nation
              building.
            </p>

            {/* Award Certificate Display */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 bg-[#089c9c] text-white">
                  <h3 className="text-xl font-bold text-center">Indian Achievers' Award</h3>
                </div>

                {/* Award Image */}
                <div className="p-6">
                  <div
                    className="relative w-full border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => setSelectedCert("achiever")}
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AF01V5-glOBFvpIbFkM4EW0pdnFpwEOhasHq2.png"
                      alt="Indian Achievers' Award for Business Leadership"
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
                      <ZoomIn className="h-5 w-5 text-[#089c9c]" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <p className="text-gray-700">
                      <span className="font-semibold">Awarded to:</span> Dhananjay Sharma, Founder & MD
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Category:</span> Business Leadership
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Year:</span> 2021-22
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Presented by:</span> Indian Achievers' Forum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Certifications Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Industry Certifications</h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-12 max-w-3xl mx-auto">
              At Durasol Energi, we adhere to the highest standards of quality, safety, and environmental
              responsibility. Our certifications demonstrate our commitment to excellence and provide assurance to our
              customers and partners.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* CE Certification */}
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCert("ce")}
              >
                <div className="p-4">
                  <div className="relative h-64 mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ICI-CE-2000-91072201-1-scaled.jpg-DxnxxhkmK4myiZaNGapXevyM6nzo8A.jpeg"
                      alt="CE Certification"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">CE Certification</h3>
                    <p className="text-gray-600 text-sm">European Conformity</p>
                  </div>
                </div>
              </div>

              {/* ISO Certification */}
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCert("iso")}
              >
                <div className="p-4">
                  <div className="relative h-64 mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO-9001-2015-scaled%20_4.jpg-TwUxYwyBIXb38rcvKuT7t59dx9IA9F.jpeg"
                      alt="ISO 9001:2015"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">ISO 9001:2015</h3>
                    <p className="text-gray-600 text-sm">Quality Management System</p>
                  </div>
                </div>
              </div>

              {/* Multiple Certifications */}
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCert("multiple")}
              >
                <div className="p-4">
                  <div className="relative h-64 mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20cert-AbdT0Zu5qCG3Zfl9e16wvEJwnKY0ay.jpeg"
                      alt="Multiple Certifications"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Industry Certifications</h3>
                    <p className="text-gray-600 text-sm">Multiple Quality & Safety Standards</p>
                  </div>
                </div>
              </div>

              {/* MSME Certificate */}
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCert("msme")}
              >
                <div className="p-4">
                  <div className="relative h-64 mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSME-certificate-BVE2QGJNbSMRpj4gRifu3IfYpYMOx6.png"
                      alt="MSME Certificate"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">MSME Certificate</h3>
                    <p className="text-gray-600 text-sm">Micro, Small & Medium Enterprises</p>
                  </div>
                </div>
              </div>

              {/* Udyam Certificate */}
              <div
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCert("udyam")}
              >
                <div className="p-4">
                  <div className="relative h-64 mb-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udhyam-cerificate_5-I49EmbItUvE5Z2ezvAhtBa30zXoZnA.png"
                      alt="Udyam Registration"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Udyam Registration</h3>
                    <p className="text-gray-600 text-sm">Ministry of MSME, Government of India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trade Mark Certifications Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Trade Mark Certifications</h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-12 max-w-3xl mx-auto">
              Our registered trademarks represent our commitment to brand integrity and quality assurance across our
              product lines.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trademarks.map((trademark) => (
                <div
                  key={trademark.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCert(trademark.id)}
                >
                  <div className="p-4">
                    <div className="relative h-64 mb-4">
                      <img
                        src={trademark.image || "/placeholder.svg"}
                        alt={trademark.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="border-t pt-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{trademark.title}</h3>
                      <p className="text-gray-600 text-sm">{trademark.description}</p>
                      <p className="text-gray-600 text-sm mt-2">
                        <span className="font-medium">Registered to:</span> {trademark.registeredTo}
                      </p>
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">Date:</span> {trademark.date}
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
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-auto bg-white rounded-lg">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10"
              aria-label="Close"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>

            <div className="p-6 pt-12">
              {selectedCert === "star" && (
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Star.jpg-4zpwSjJ8VfGdZVIt4hqXUbpPuCInQG.jpeg"
                  alt="One Star Export House Certificate"
                  className="w-full h-auto"
                />
              )}
              {selectedCert === "ce" && (
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ICI-CE-2000-91072201-1-scaled.jpg-DxnxxhkmK4myiZaNGapXevyM6nzo8A.jpeg"
                  alt="CE Certification"
                  className="w-full h-auto"
                />
              )}
              {selectedCert === "iso" && (
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO-9001-2015-scaled%20_4.jpg-TwUxYwyBIXb38rcvKuT7t59dx9IA9F.jpeg"
                  alt="ISO 9001:2015"
                  className="w-full h-auto"
                />
              )}
              {selectedCert === "multiple" && (
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20cert-AbdT0Zu5qCG3Zfl9e16wvEJwnKY0ay.jpeg"
                  alt="Multiple Certifications"
                  className="w-full h-auto"
                />
              )}
              {selectedCert === "msme" && (
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MSME-certificate-BVE2QGJNbSMRpj4gRifu3IfYpYMOx6.png"
                  alt="MSME Certificate"
                  className="w-full h-auto"
                />
              )}
              {selectedCert === "udyam" && (
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Udhyam-cerificate_5-I49EmbItUvE5Z2ezvAhtBa30zXoZnA.png"
                  alt="Udyam Registration"
                  className="w-full h-auto"
                />
              )}
              {selectedCert === "achiever" && (
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AF01V5-glOBFvpIbFkM4EW0pdnFpwEOhasHq2.png"
                  alt="Indian Achievers' Award for Business Leadership"
                  className="w-full h-auto"
                />
              )}
              {/* Render trademark certificates in modal */}
              {trademarks.map(
                (trademark) =>
                  selectedCert === trademark.id && (
                    <img
                      key={trademark.id}
                      src={trademark.image || "/placeholder.svg"}
                      alt={trademark.title}
                      className="w-full h-auto"
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Handshake, Scale, Users } from "lucide-react"

export default function CSR() {
  // State to track if component is mounted
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state on component mount
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          {/* Using regular img tag instead of Next.js Image for troubleshooting */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CSR-trXm3hM4Rccg1zx84avESDgst2v2zu.png"
            alt="Hands passing Earth to the next generation"
            className="w-full h-full object-cover"
            style={{ display: "block" }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Corporate Social Responsibility</h1>
            <p className="text-xl md:text-2xl text-white">
              Committed to making a positive impact on society and the environment through sustainable initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* CSR Initiatives */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Initiatives</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Handshake className="h-6 w-6 text-[#089c9c]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Support</h3>
                    <p className="text-gray-600 mt-1">
                      Supporting local communities through education, healthcare, and infrastructure development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Scale className="h-6 w-6 text-[#089c9c]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Environmental Sustainability</h3>
                    <p className="text-gray-600 mt-1">
                      Implementing eco-friendly practices and promoting renewable energy solutions to protect our
                      planet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-[#089c9c]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Employee Engagement</h3>
                    <p className="text-gray-600 mt-1">
                      Encouraging our employees to participate in volunteer activities and contribute to social causes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Using regular img tags for gallery images as well */}
                <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="/images/sponsor-a-student.jpeg"
                    alt="Sponsor a Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="/images/support-a-patient.png"
                    alt="Support a Patient"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="/images/environment.png"
                    alt="Environmental Initiatives"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                  <img
                    src="/images/battery-recycling.png"
                    alt="Battery Recycling Program"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Smart UPS DSQ1000 | Durasol Energi",
  description:
    "Durasol Digital Smart UPS DSQ1000 - Innovative two-in-one power backup solution for home appliances and IT equipment with instant changeover and generator compatibility.",
}

export default function DSQ1000Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#089c9c] to-[#067a7a] py-16 md:py-24">
          <div className="absolute inset-0 opacity-20">
            <Image src="/images/network-bg.png" alt="Network Background" fill className="object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">DSQ1000 Digital Smart UPS</h1>
              <p className="text-xl md:text-2xl opacity-90">
                850VA/12V Digital Smart UPS with modified sine wave output
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-white py-4 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex text-sm text-gray-500">
              <Link href="/" className="hover:text-[#089c9c]">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-[#089c9c]">
                Products
              </Link>
              <span className="mx-2">/</span>
              <Link href="/products/home-ups" className="hover:text-[#089c9c]">
                Home UPS
              </Link>
              <span className="mx-2">/</span>
              <Link href="/products/home-ups/digital-smart-ups" className="hover:text-[#089c9c]">
                Digital Smart UPS
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">DSQ1000</span>
            </div>
          </div>
        </div>

        {/* Product Detail Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Product Image */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
                <div className="relative h-[400px]">
                  <Image
                    src="/products/smart_ups.jpg"
                    alt="DSQ1000 Digital Smart UPS"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Digital Smart UPS HiQ700/1250</h2>
                <p className="text-xl text-[#089c9c] font-medium mb-6">850VA/12V Digital Smart UPS</p>

                <p className="text-gray-700 mb-8">
                  Durasol UPS systems are truly a futuristic concept. These two-in-one products eliminate the need to have separate power backup systems for your home appliances as well as your computer. Based on high-end Microcontroller technology the Durasol Home UPS provides Modified Sine Wave Output that is 100% clean, regulated, completely stable and distortion-free, and safe for running the most sophisticated and sensitive appliance silently.
                </p>

             { /*  <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>850VA/12V capacity suitable for home and small office use</li>
                    <li>Modified sine wave output for reliable performance</li>
                    <li>Advanced battery management technology for longer battery life</li>
                    <li>LCD display for real-time status monitoring</li>
                    <li>Automatic voltage regulation for stable power output</li>
                    <li>Multiple protection features: overload, short circuit, and over-temperature</li>
                    <li>Compatible with various battery types (flat, tubular, SMF)</li>
                    <li>Generator compatible for extended power outages</li>
                  </ul>
                </div> */}

                {/* Download Brochure Button */}
                <a
                  href="/products/pdf/hiq700pdf.pdf"
                  className="inline-flex items-center bg-[#089c9c] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#078787] transition-colors"
                 // download
                >
                  Technical Brochure
                  <Download className="w-4 h-4 ml-2" />
                </a>
              </div> 
            </div> 
          </div>
        </section>

        {/* Technical Specifications */}
      {/*  <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h2>

            <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="p-4 font-medium bg-gray-100">Capacity</div>
                <div className="p-4">850VA / 12V</div>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="p-4 font-medium bg-gray-100">Output Waveform</div>
                <div className="p-4">Modified Sine Wave</div>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="p-4 font-medium bg-gray-100">Input Voltage Range</div>
                <div className="p-4">140V - 290V AC</div>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="p-4 font-medium bg-gray-100">Output Voltage</div>
                <div className="p-4">230V ± 8%</div>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="p-4 font-medium bg-gray-100">Transfer Time</div>
                <div className="p-4">Less than 10ms</div>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="p-4 font-medium bg-gray-100">Battery Type</div>
                <div className="p-4">Compatible with Flat, Tubular, SMF & Local</div>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-200">
                <div className="p-4 font-medium bg-gray-100">Charging Current</div>
                <div className="p-4">10A max</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-4 font-medium bg-gray-100">Protection</div>
                <div className="p-4">Overload, Short Circuit, Battery Low/High, Over Temperature</div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+91 95559 65202" />
    </>
  )
}

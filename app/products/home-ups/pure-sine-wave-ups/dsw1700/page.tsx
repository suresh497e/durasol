import Navbar from "@/components/navbar"
import ProductDetail from "@/components/product-detail"
import Footer from "@/components/footer"
import Image from "next/image"

export default function DSW1700Page() {
  const productData = {
    title: "Durasol Pure Sine Wave UPS DSW3.5KVA – 48V | Reliable Power Backup",
    subtitle: "24V Pure Sine Wave UPS for enhanced power backup capacity",
    description:
      "The Durasol Pure Sine Wave UPS DSW3.5KVA – 48V is engineered for efficient power backup with its stable pure sine wave output. Designed for homes, offices, and commercial setups, it ensures smooth performance for IT loads, medical equipment, and security systems.Equipped with an intelligent battery management system, it supports fast multi-stage charging and instant changeover for uninterrupted power supply. With advanced surge protection, it safeguards sensitive electronics from voltage fluctuations.",
    image: "/placeholder.svg?height=400&width=600&text=DSW1700",
   /* keyFeatures: [
      "24V System Architecture – Higher capacity and longer backup times.",
      "Pure Sine Wave Output – Clean power with minimal harmonic distortion for sensitive electronics.",
      "Advanced Microcontroller-Based Design – Real-time hardware control for optimal performance.",
      "Instant Changeover – Zero-delay switching for IT loads and sensitive electronics.",
      "Three-Stage Battery Charging System – Boost, Absorption, and Float mode for enhanced battery life.",
      "Heavy-Duty Grid Charger – Efficient power conditioning and faster battery charging.",
      "User-Configurable Battery Type Support – Compatible with Tubular, VRLA, Flat Plate, and Li-ion batteries.",
      "Surge Handling Capability – Handles high surge loads for mixed appliance compatibility.",
      "Dual Mode Operation – W-UPS Mode for general appliances and UPS Mode for IT equipment.",
      "Comprehensive Protection Features – Overload, short circuit, deep discharge, over-temperature, and back-feed protection.",
      "Temperature-Controlled Cooling Fan – Better thermal management for longevity.",
    ], */
    relatedProducts: [
      {
        title: "Pure Sine Wave UPS DSW1150",
        category: "Pure Sine Wave UPS",
        description: "Durasol Pure Sine Wave UPS DSW850, DSW950, DSW1050, DSW1150 – 12V | Reliable Power Backup",
        image: "/images/pure-sine-wave-ups.png",
        link: "/products/home-ups/pure-sine-wave-ups/dsw1150",
      },
      {
        title: "Pure Sine Wave UPS DSW 3.5KVA 48V",
        category: "Home UPS",
        description: "Durasol Pure Sine Wave UPS DSW3.5KVA – 48V | High-Performance Backup Power",
        image: "/placeholder.svg?height=300&width=400&text=DSW3.5KVA",
        link: "/products/home-ups/pure-sine-wave-ups/dsw-3-5kva",
      },
      {
        title: "Digital Smart UPS DSQ1125",
        category: "Digital Smart UPS",
        description: "Durasol Digital Smart UPS DSQ1125 | Reliable & Efficient Power Backup",
        image: "/images/dsq1125.png",
        link: "/products/home-ups/digital-smart-ups/dsq1125",
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetail title={productData.title} subtitle={productData.subtitle} description={productData.description} downloads={[{ name: "Technical Brochure", url: "/products/pdf/3.5kvapdf.pdf" }]} image={
                           <div className="relative w-full h-[300px] md:h-[400px]">
                             <Image
                               src="/products/dsw3.5kv.jpg"
                               alt="Mono Crystalline Solar Modules"
                               fill
                               className="object-contain"
                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                             />
                           </div>
                         } />
      <Footer />
    </main>
  )
}

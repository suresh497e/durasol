import Navbar from "@/components/navbar"
import ProductDetail from "@/components/product-detail"
import Footer from "@/components/footer"
import Image from "next/image"

export default function DSW1450Page() {
  const productData = {
    title: "Pure Sine Wave UPS DSW2500, DSW3000 – 24V",
    subtitle: "12V Pure Sine Wave UPS with enhanced capacity for reliable power backup",
    description:
      "The Durasol Pure Sine Wave UPS DSW2500 & DSW3000 – 24V is a high-performance, microcontroller-based UPS system designed to provide stable, distortion-free power backup for home appliances, IT equipment, and sensitive electronics.With pure sine wave output, it ensures safe and reliable operation for computers, LED TVs, security systems, and other power-sensitive devices. The built-in advanced battery management system (BMS) enhances battery life, while the instant changeover mechanism ensures zero downtime. Featuring a three-stage intelligent battery charging system (Boost, Absorption, Float), it supports multiple battery types, including Tubular, VRLA, Li-ion, and Flat Plate batteries, ensuring longer battery life and optimized power efficiency.",
   /* keyFeatures: [
      "Pure Sine Wave Output – Delivers clean power with minimal harmonic distortion.",
      "Enhanced 12V Capacity – Supports more devices with longer backup times.",
      "Advanced Microcontroller-Based Design – Ensures real-time hardware control for optimal performance.",
      "Instant Changeover – Provides zero-delay switching for IT loads and sensitive electronics.",
      "Three-Stage Battery Charging System – Boost, Absorption, and Float mode for enhanced battery life.",
      "Heavy-Duty Grid Charger – Enables efficient power conditioning and faster battery charging.",
      "User-Configurable Battery Type Support – Compatible with Tubular, VRLA, Flat Plate, and Li-ion batteries.",
      "Surge Handling Capability – Handles high surge loads for mixed appliance compatibility.",
      "Dual Mode Operation – W-UPS Mode for general appliances and UPS Mode for IT equipment.",
      "Comprehensive Protection Features – Overload, short circuit, deep discharge, over-temperature, and back-feed protection.",
      "Temperature-Controlled Cooling Fan – Ensures better thermal management for longevity.",
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
        title: "Pure Sine Wave UPS DSW1700",
        category: "Home UPS",
        description: "Durasol Pure Sine Wave UPS DSW1700, DSW2100 – 24V | High-Efficiency Power Backup",
        image: "/placeholder.svg?height=300&width=400&text=DSW1700",
        link: "/products/home-ups/pure-sine-wave-ups/dsw1700",
      },
      {
        title: "Digital Smart UPS DSQ1000",
        category: "Digital Smart UPS",
        description: "Durasol Digital Smart UPS DSQ1000 – Reliable & Efficient Power Backup",
        image: "/images/dsq1000.png",
        link: "/products/home-ups/digital-smart-ups/dsq1000",
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetail title={productData.title} subtitle={productData.subtitle} description={productData.description} image={
                      <div className="relative w-full h-[300px] md:h-[400px]">
                        <Image
                          src="/products/dsw2500.jpg"
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

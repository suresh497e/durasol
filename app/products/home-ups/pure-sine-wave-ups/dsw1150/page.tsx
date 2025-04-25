import Navbar from "@/components/navbar"
import ProductDetail from "@/components/product-detail"
import Footer from "@/components/footer"
import Image from "next/image"

export default function DSW1150Page() {
  const productData = {
    title: "Durasol Pure Sine Wave UPS DSW1700, DSW2100 – 24V | High-Efficiency Power Backup",
    subtitle: "High-efficiency pure sine wave power backup for home and IT applications",
    description:
      "The Durasol Pure Sine Wave UPS DSW1700 & DSW2100 – 24V is an intelligent, microcontroller-based power backup system designed for home, office, and IT applications. It delivers stable, distortion-free pure sine wave output, ensuring the safe operation of sensitive appliances such as computers, LED TVs, and medical equipment.With its advanced three-stage battery charging system, it optimizes battery life while supporting multiple battery types, including Tubular, VRLA, Li-ion, and Flat Plate batteries. The instant changeover feature ensures zero downtime, making it ideal for IT loads and security systems.",
    image: "/images/pure-sine-wave-ups.png",
   /* keyFeatures: [
      "Advanced Microcontroller-Based Design – Ensures real-time hardware control for optimal performance.",
      "Pure Sine Wave Output – Provides clean power suitable for sensitive electronics and precision equipment.",
      "Instant Changeover – Provides zero-delay switching for IT loads and sensitive electronics.",
      "Three-Stage Battery Charging System – Boost, Absorption, and Float mode for enhanced battery life.",
      "Heavy-Duty Grid Charger – Enables efficient power conditioning and faster battery charging.",
      "User-Configurable Battery Type Support – Compatible with Tubular, VRLA, Flat Plate, and Li-ion batteries.",
      "Surge Handling Capability – Handles high surge loads for mixed appliance compatibility.",
      "Dual Mode Operation – W-UPS Mode for general appliances and UPS Mode for IT equipment.",
      "Comprehensive Protection Features – Overload, short circuit, deep discharge, over-temperature, and back-feed protection.",
      "Temperature-Controlled Cooling Fan – Ensures better thermal management for longevity.",
      "Graphical LED/LCD Display – Provides real-time status updates and system monitoring.",
    ], */
    relatedProducts: [
      {
        title: "Durasol Pure Sine Wave UPS DSW1700, DSW2100 – 24V | High-Efficiency Power Backup",
        category: "Home UPS",
        description: "The Durasol Pure Sine Wave UPS DSW1700 & DSW2100 – 24V is an intelligent, microcontroller-based power backup system designed for home, office, and IT applications. It delivers stable, distortion-free pure sine wave output, ensuring the safe operation of sensitive appliances such as computers, LED TVs, and medical equipment. With its advanced three-stage battery charging system, it optimizes battery life while supporting multiple battery types, including Tubular, VRLA, Li-ion, and Flat Plate batteries. The instant changeover feature ensures zero downtime, making it ideal for IT loads and security systems.",
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
      {
        title: "Pure Sine Wave UPS DSW1700",
        category: "Home UPS",
        description: "Durasol Pure Sine Wave UPS DSW1700, DSW2100 – 24V | High-Efficiency Power Backup",
        image: "/placeholder.svg?height=300&width=400&text=DSW1700",
        link: "/products/home-ups/pure-sine-wave-ups/dsw1700",
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetail title={productData.title} subtitle={productData.subtitle} description={productData.description}  downloads={[{ name: "Technical Brochure", url: "/products/pdf/dsw1700pdf.pdf" }]} image={
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src="/products/dsw1700.jpg"
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

import Navbar from "@/components/navbar"
import ProductDetail from "@/components/product-detail"
import Footer from "@/components/footer"
import Image from "next/image"

export default function DSW35KVAPage() {
  const productData = {
    title: "Durasol Pure Sine Wave UPS DSW5KVA – 48V | High-Performance Backup Power",
    subtitle: "High-capacity 48V pure sine wave UPS for demanding applications",
    description:
      "Durasol Pure Sine Wave UPS DSW5KVA – 48V is a powerful and efficient backup solution, ideal for homes, offices, and commercial setups. With its pure sine wave output, it ensures stable and distortion-free power, safeguarding IT equipment, security systems, and medical devices. Featuring an intelligent battery management system, it enhances charging efficiency and extends battery life. Its instant changeover mechanism prevents power interruptions, making it a reliable choice for critical applications.",
    image: "/placeholder.svg?height=400&width=600&text=DSW3.5KVA",
   /* keyFeatures: [
      "48V System Architecture – Maximum capacity and extended backup times.",
      "3.5KVA Rating – Supports multiple devices simultaneously.",
      "Pure Sine Wave Output – Clean power with minimal harmonic distortion.",
      "Advanced Microcontroller-Based Design – Real-time hardware control for optimal performance.",
      "Instant Changeover – Zero-delay switching for critical equipment.",
      "Intelligent Battery Management – Multi-stage charging with battery type selection.",
      "Heavy-Duty Grid Charger – Efficient power conditioning and faster battery charging.",
      "Enhanced Surge Handling – Supports high-inrush current devices.",
      "Dual Mode Operation – W-UPS Mode for general appliances and UPS Mode for IT equipment.",
      "Comprehensive Protection – Overload, short circuit, deep discharge, over-temperature, and back-feed protection.",
      "LCD Display – Real-time monitoring of system parameters.",
      "Temperature-Controlled Cooling – Advanced thermal management system.",
    ], */
    relatedProducts: [
      {
        title: "Pure Sine Wave UPS DSW1700",
        category: "Pure Sine Wave UPS",
        description: "Durasol Pure Sine Wave UPS DSW1700, DSW2100 – 24V | High-Efficiency Power Backup",
        image: "/placeholder.svg?height=300&width=400&text=DSW1700",
        link: "/products/home-ups/pure-sine-wave-ups/dsw1700",
      },
      {
        title: "Pure Sine Wave UPS DSW1150",
        category: "Pure Sine Wave UPS",
        description: "Durasol Pure Sine Wave UPS DSW850, DSW950, DSW1050, DSW1150 – 12V | Reliable Power Backup",
        image: "/images/pure-sine-wave-ups.png",
        link: "/products/home-ups/pure-sine-wave-ups/dsw1150",
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
     <ProductDetail title={productData.title} subtitle={productData.subtitle} description={productData.description} downloads={[{ name: "Technical Brochure", url: "/products/pdf/5kvapdf.pdf" }]} image={
                                <div className="relative w-full h-[300px] md:h-[400px]">
                                  <Image
                                    src="/products/dsw5kv.jpg"
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

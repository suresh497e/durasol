import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { ProductDetail } from "@/components/product-detail"

export default function DSW850Page() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#089c9c]">
              Home
            </Link>
            <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />
            <Link href="/products" className="text-gray-500 hover:text-[#089c9c]">
              Products
            </Link>
            <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />
            <Link href="/products/home-ups" className="text-gray-500 hover:text-[#089c9c]">
              Home UPS
            </Link>
            <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />
            <Link href="/products/home-ups/pure-sine-wave-ups" className="text-gray-500 hover:text-[#089c9c]">
              Pure Sine Wave UPS
            </Link>
            <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />
            <span className="text-[#089c9c] font-medium">DSW850</span>
          </nav>
        </div>
      </section>

      {/* Product Detail Component */}
      <ProductDetail
        title="Durasol Pure Sine Wave UPS DSW850, DSW950, DSW1050, DSW1150 – 12V | Reliable Power Backup"
        description="The Durasol Pure Sine Wave UPS Series (DSW850, DSW950, DSW1050, DSW1150 – 12V) offers seamless power backup with high-efficiency pure sine wave output. Designed to support IT loads, home appliances, and security systems, this advanced UPS system ensures uninterrupted and regulated power delivery with minimal distortion.

Powered by a high-speed microcontroller, it provides instant changeover, making it ideal for sensitive electronics, computers, LED TVs, and music systems. The built-in heavy-duty grid charger ensures optimized battery performance, while the three-stage battery charging system enhances battery longevity.

With multiple user-settable configurations, including selectable battery type support (Tubular, VRLA, Li-ion, Flat Plate) and dual operating modes (W-UPS for wide voltage input, UPS mode for IT equipment), this UPS series guarantees high performance and superior energy efficiency."
        subtitle="700VA/12V Pure Sine Wave UPS"
        image={
          <Image
            src="/products/dsw850.jpg"
            alt="Pure Sine Wave UPS DSW850"
            fill
            className="object-contain"
          />
        }
       /* features={[
          "Pure Sine Wave Output – 100% clean, regulated, stable and distortion free",
          "Generator Compatible – Works seamlessly with generator power",
          "ATBM Technology – Selectable Tubular/LA/VRLA & Li-ion battery support",
          "Instant Changeover – Best suited for IT loads",
          "Battery Charging from 90VAC – Save money and cut electricity bills",
          "Built-in Heavy Duty Grid Charger – For optimized battery performance",
          "Three-Stage Battery Charging – Boost, Absorption, and Float mode for enhanced battery life",
          "Dual Mode Operation – W-UPS Mode for general appliances and UPS Mode for IT equipment",
        ]} */
        specifications={[
          {
            category: "General Specifications",
            items: [
              { name: "Capacity", value: "700VA/12V" },
              { name: "Technology", value: "Pure Sine Wave" },
              { name: "Nominal Voltage", value: "230V AC" },
            ],
          },
        ]}
        downloads={[{ name: "Technical Brochure", url: "/products/pdf/dsw850pdf.pdf" }]}
        relatedProducts={[
          {
            name: "Pure Sine Wave UPS DSW950",
            description: "Enhanced pure sine wave UPS with 760VA capacity for reliable power backup.",
            url: "/products/home-ups/pure-sine-wave-ups/dsw950",
          },
          {
            name: "Pure Sine Wave UPS DSW1050",
            description: "Mid-range pure sine wave UPS with 860VA capacity for superior protection.",
            url: "/products/home-ups/pure-sine-wave-ups/dsw1050",
          },
          {
            name: "Pure Sine Wave UPS DSW1150",
            description: "High-capacity 12V pure sine wave UPS with 950VA output for demanding applications.",
            url: "/products/home-ups/pure-sine-wave-ups/dsw1150",
          },
        ]}
      />

      <Footer />
    </main>
  )
}

import type { Metadata } from "next"
import { ProductDetail } from "@/components/product-detail"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Durasol Tubular Batteries | Durasol Energi",
  description: "Long life and high performance tubular batteries for reliable power backup solutions.",
}

export default function DurasolTubularBatteriesPage() {
  return (
    <>
    <Navbar />
    <ProductDetail
      title="Durasol Tubular Batteries  Long Life & High Performance Power"
      description="Durasol Tubular Batteries provide long-lasting, high-performance energy storage with multi-tube gauntlet technology, thick plates, and extended cycle life. Built for solar, industrial, and backup applications."
      subtitle="Long Life & High Performance Power"
      image={
        <Image
          src="/products/durosal_tubular.jpg"
          alt="Durasol Tubular Batteries"
          width={400}
          height={400}
          className="object-contain"
          priority
        />
      }
     /* features={[
        "Extended cycle life (1500+ cycles)",
        "Enhanced deep discharge recovery",
        "Low maintenance design",
        "Thick tubular plates for durability",
        "Advanced paste formulation",
        "High temperature tolerance",
        "Corrosion-resistant grid alloy",
        "Optimized electrolyte formulation",
      ]} */
      specifications={[
        {
          category: "Electrical Specifications",
          items: [
            { name: "Nominal Voltage", value: "12V" },
            { name: "Capacity Range", value: "100Ah - 200Ah" },
            { name: "Internal Resistance", value: "≤ 4mΩ" },
            { name: "Self Discharge", value: "< 3% per month at 25°C" },
            { name: "Cycle Life", value: "> 1500 cycles at 50% DOD" },
          ],
        },
        {
          category: "Physical Specifications",
          items: [
            { name: "Container Material", value: "High-grade polypropylene" },
            { name: "Terminal Type", value: "Heavy duty lead terminals" },
            { name: "Plate Type", value: "Tubular positive, flat negative" },
            { name: "Separator", value: "Microporous polyethylene" },
            { name: "Electrolyte", value: "Dilute sulfuric acid" },
          ],
        },
        {
          category: "Performance Characteristics",
          items: [
            { name: "Charge Voltage (Float)", value: "13.5V - 13.8V" },
            { name: "Charge Voltage (Cycle)", value: "14.4V - 14.8V" },
            { name: "Maximum Charge Current", value: "0.2C" },
            { name: "Maximum Discharge Current", value: "0.3C" },
            { name: "Deep Discharge Recovery", value: "Excellent" },
          ],
        },
        {
          category: "Environmental Parameters",
          items: [
            { name: "Operating Temperature", value: "-20°C to 50°C" },
            { name: "Storage Temperature", value: "-30°C to 60°C" },
            { name: "Humidity Range", value: "0 to 95% RH (non-condensing)" },
            { name: "Altitude", value: "Up to 3000m above sea level" },
          ],
        },
        {
          category: "Warranty & Certifications",
          items: [
            { name: "Warranty", value: "36 months" },
            { name: "Certifications", value: "ISO 9001, ISO 14001, BIS" },
            { name: "Manufacturing Standards", value: "IEC 60896-21/22, IS 13369" },
          ],
        },
      ]}
      downloads={[
        {
          name: "Technical Brochure",
          //description: "Detailed product information and specifications",
          url: "/products/pdf/durasoltubularpdf.pdf",
        },
       
      ]}
      relatedProducts={[
        {
          name: "Kipor Tall Tubular Battery 150Ah/12V",
          description: "High capacity tubular battery for extended backup",
          url: "/products/batteries/tall-tubular-batteries/kipor-150ah",
        },
        {
          name: "Durasol Digital Smart UPS",
          description: "Advanced UPS system compatible with tubular batteries",
          url: "/products/home-ups/digital-smart-ups",
        },
        {
          name: "Durasol Pure Sine Wave UPS",
          description: "Pure sine wave UPS for sensitive equipment",
          url: "/products/home-ups/pure-sine-wave-ups",
        },
      ]}
    />

    <Footer />
    </>
  )
}

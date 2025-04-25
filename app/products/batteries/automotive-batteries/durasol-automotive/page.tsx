import type { Metadata } from "next"
import { ProductDetail } from "@/components/product-detail"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Kipor Tall Tubular Battery 150Ah/12V | Durasol Energi",
  description: "High capacity 150Ah tubular battery for extended power backup with long life and high performance.",
}

export default function KiporTubularBatteryPage() {
  return (
    <>
    <Navbar />
    
    <ProductDetail
      title="Durasol Automotive Battery – High Performance & Long-Lasting Power"
      description="Durasol Automotive Battery ensures high cranking power, long-lasting performance, and all-weather reliability. Built with low self-discharge and dry-charge technology, it is ideal for passenger cars, trucks, and motorcycles."
      subtitle="Long Life & High Performance"
      image={
        <Image
          src="/products/automative_battery.png"
          alt="Kipor Tall Tubular Battery 150Ah/12V"
          width={400}
          height={400}
          className="object-contain"
          priority
        />
      }
      /*features={[
        "High 150Ah capacity for extended backup",
        "Premium grade lead alloy for longer life",
        "Reinforced container design for durability",
        "Optimized electrolyte formulation",
        "Extended warranty coverage",
        "Spill-proof design for safety",
        "Low water loss operation",
        "Enhanced overcharge protection",
      ]} */
      specifications={[
        {
          category: "Electrical Specifications",
          items: [
            { name: "Nominal Voltage", value: "12V" },
            { name: "Capacity", value: "150Ah @ C20" },
            { name: "Internal Resistance", value: "≤ 3.5mΩ" },
            { name: "Self Discharge", value: "< 2.5% per month at 25°C" },
            { name: "Cycle Life", value: "> 1800 cycles at 50% DOD" },
          ],
        },
        {
          category: "Physical Specifications",
          items: [
            { name: "Dimensions (L×W×H)", value: "502 × 189 × 415 mm" },
            { name: "Weight", value: "Approx. 48 kg" },
            { name: "Terminal Type", value: "Heavy duty brass terminals" },
            { name: "Container Material", value: "High-impact polypropylene" },
            { name: "Plate Design", value: "Thick tubular positive plates" },
          ],
        },
        {
          category: "Performance Characteristics",
          items: [
            { name: "Charge Voltage (Float)", value: "13.6V ± 0.1V" },
            { name: "Charge Voltage (Cycle)", value: "14.6V ± 0.1V" },
            { name: "Maximum Charge Current", value: "30A" },
            { name: "Maximum Discharge Current", value: "45A (continuous)" },
            { name: "Reserve Capacity", value: "320 minutes" },
          ],
        },
        {
          category: "Environmental Parameters",
          items: [
            { name: "Operating Temperature", value: "-20°C to 55°C" },
            { name: "Storage Temperature", value: "-30°C to 60°C" },
            { name: "Humidity Range", value: "0 to 95% RH (non-condensing)" },
            { name: "Altitude", value: "Up to 3500m above sea level" },
          ],
        },
        {
          category: "Warranty & Certifications",
          items: [
            { name: "Warranty", value: "48 months (pro-rata)" },
            { name: "Certifications", value: "ISO 9001, ISO 14001, BIS" },
            { name: "Manufacturing Standards", value: "IEC 60896-21/22, IS 13369" },
            { name: "Quality Assurance", value: "100% tested before dispatch" },
          ],
        },
      ]}
      downloads={[
        {
          name: "Technical Brochure",
          //description: "Detailed product information and specifications",
          url: "/products/pdf/automativebatterypdf.pdf",
        },
        
      ]}
      relatedProducts={[
        {
          name: "Durasol Tubular Batteries",
          description: "Long life tubular batteries for reliable power backup",
          url: "/products/batteries/tall-tubular-batteries/durasol-tubular",
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

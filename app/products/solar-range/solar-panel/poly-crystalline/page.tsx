import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { ProductDetail } from "@/components/product-detail"

export const metadata: Metadata = {
  title: "Poly Crystalline Solar Modules | Durasol Energi",
  description:
    "High efficiency and durable Poly Crystalline Solar Modules from Durasol Energi, designed for cost-effective solar installations with excellent performance in various conditions.",
}

export default function PolycrystallinePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
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
              <Link href="/products/solar-range" className="hover:text-[#089c9c]">
                Solar Range
              </Link>
              <span className="mx-2">/</span>
              <Link href="/products/solar-range/solar-panel" className="hover:text-[#089c9c]">
                Solar Panel
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Poly Crystalline Solar Modules</span>
            </div>
          </div>
        </div>

        <ProductDetail
          title="Poly Crystalline Solar Modules – High Efficiency & Durable Performance"
          description="Durasol Poly Crystalline Solar Modules are designed for high-efficiency solar power generation, offering cost-effective and durable performance for residential, commercial, and industrial applications. Built with advanced multi-crystalline silicon cell technology, these panels ensure enhanced energy output, even under low-light conditions.

Featuring a high-transparency tempered glass coating, corrosion-resistant aluminum frame, and IP67-rated junction box, these solar modules deliver superior weather resistance and long-term reliability. Ideal for on-grid and off-grid solar systems, Durasol Poly Crystalline Modules maximize energy savings while ensuring consistent performance across diverse environmental conditions."
          subtitle="High Efficiency & Durable Performance"
          image={
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src="/products/poly_solar.png"
                alt="Poly Crystalline Solar Modules"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          }
         /* features={[
            "High conversion efficiency up to 17.5%",
            "Excellent performance in diffused light conditions",
            "Anti-reflective coating for improved light absorption",
            "Robust aluminum frame for durability in harsh weather",
            "PID resistant cells for long-term reliability",
            "Positive power tolerance (0~+5W)",
            "High wind and snow load resistance",
            "25-year linear power output warranty",
            "10-year product warranty",
            "Cost-effective solution for residential and commercial installations",
          ]} */
          specifications={[
            {
              category: "Electrical Characteristics",
              items: [
                { name: "Peak Power (Pmax)", value: "330W / 335W / 340W" },
                { name: "Power Tolerance", value: "0~+5W" },
                { name: "Maximum Power Voltage (Vmp)", value: "37.2V" },
                { name: "Maximum Power Current (Imp)", value: "8.87A" },
                { name: "Open Circuit Voltage (Voc)", value: "45.6V" },
                { name: "Short Circuit Current (Isc)", value: "9.45A" },
                { name: "Module Efficiency", value: "Up to 17.5%" },
              ],
            },
            {
              category: "Mechanical Characteristics",
              items: [
                { name: "Cell Type", value: "Poly Crystalline, 156 × 156 mm" },
                { name: "Number of Cells", value: "72 (6 × 12)" },
                { name: "Dimensions", value: "1956 × 992 × 40 mm" },
                { name: "Weight", value: "22.5 kg" },
                { name: "Front Glass", value: "3.2 mm tempered glass with anti-reflective coating" },
                { name: "Frame", value: "Anodized aluminum alloy" },
                { name: "Junction Box", value: "IP67 rated with bypass diodes" },
                { name: "Cables", value: "4 mm², 1000 mm length" },
                { name: "Connector", value: "MC4 compatible" },
              ],
            },
            {
              category: "Temperature Ratings",
              items: [
                { name: "Operating Temperature", value: "-40°C to +85°C" },
                { name: "Temperature Coefficient of Pmax", value: "-0.40%/°C" },
                { name: "Temperature Coefficient of Voc", value: "-0.31%/°C" },
                { name: "Temperature Coefficient of Isc", value: "0.05%/°C" },
                { name: "Nominal Operating Cell Temperature", value: "45±2°C" },
              ],
            },
            {
              category: "Maximum Ratings",
              items: [
                { name: "Maximum System Voltage", value: "1000V DC (IEC) / 1000V DC (UL)" },
                { name: "Maximum Series Fuse Rating", value: "15A" },
                { name: "Wind Load / Snow Load", value: "2400 Pa / 5400 Pa" },
                { name: "Hail Resistance", value: "25 mm at 23 m/s" },
              ],
            },
            {
              category: "Certifications",
              items: [
                { name: "Quality Certifications", value: "ISO 9001, ISO 14001" },
                { name: "Product Certifications", value: "IEC 61215, IEC 61730, UL 1703, MCS, CE" },
                { name: "Other", value: "Salt Mist Corrosion Resistance, Ammonia Resistance" },
              ],
            },
          ]}
          downloads={[
            {
              name: "Technical Brochure",
              //description: "Detailed product information and specifications",
              url: "/products/pdf/polysolarpdf.pdf",
            },
            
          ]}
          relatedProducts={[
            {
              name: "Mono Crystalline Modules",
              description: "Premium high-efficiency solar panels for maximum power generation in limited space.",
              link: "/products/solar-range/solar-panel/mono-crystalline",
            },
            {
              name: "MPPT PCU 2500-3000/24V",
              description: "High-efficiency solar charge controller and inverter for optimal solar power utilization.",
              link: "/products/solar-range/mppt-pcu/mppt-2500-3000",
            },
            {
              name: "Hybrid MPPT Inverter",
              description: "Advanced hybrid inverter for seamless integration of solar, grid, and battery power.",
              link: "/products/solar-range/hybrid-mppt-inverter",
            },
          ]}
        />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+91 95559 65202" />
    </>
  )
}

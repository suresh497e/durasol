import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { ProductDetail } from "@/components/product-detail"

export const metadata: Metadata = {
  title: "Mono Crystalline Modules | Durasol Energi",
  description:
    "Premium high-efficiency Mono Crystalline Solar Modules from Durasol Energi, designed for maximum power generation in limited space with superior performance in all conditions.",
}

export default function MonocrystallinePage() {
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
              <span className="text-gray-900 font-medium">Mono Crystalline Modules</span>
            </div>
          </div>
        </div>

        <ProductDetail
          title="Mono Crystalline Modules"
          description="Mono Crystalline Solar Modules deliver high efficiency, reliability, and superior power output for on-grid and off-grid solar applications. Designed for maximum durability and low-light performance, they ensure long-term energy savings and sustainability.

This version is fully optimized for SEO, ensuring higher search rankings, increased user engagement, and better conversion rates. 🚀 Let me know if you need any refinements!

Durasol Mono Crystalline Solar Modules are highly efficient and reliable solar PV panels designed for maximum power output and long-term durability. Utilizing advanced crystalline silicon technology, these modules range from 10Wp to 390Wp, making them ideal for on-grid and off-grid solar power plants, solar water pumps, solar street lighting, and other solar systems.

Manufactured using an automated production line, these sealed and weatherproof solar panels are built to withstand extreme environmental conditions, including high ultraviolet radiation and moisture exposure. The high maximum voltage design reduces Balance of System (BOS) costs, while enhanced low-light performance ensures efficient energy generation even in cloudy conditions.

"
          subtitle="Premium High-Efficiency Solar Panels"
          image={
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src="/products/mono_solar.png"
                alt="Mono Crystalline Solar Modules"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          }
         /* features={[
            "Superior conversion efficiency up to 21.5%",
            "Excellent low-light performance",
            "PERC cell technology for enhanced power output",
            "Half-cell design for reduced shading impact",
            "Multi-busbar technology for lower resistive losses",
            "Anti-PID technology for long-term reliability",
            "Positive power tolerance (0~+5W)",
            "Enhanced mechanical strength for extreme weather conditions",
            "30-year linear power output warranty",
            "12-year product warranty",
            "Ideal for space-constrained residential and commercial installations",
          ]} */
          specifications={[
            {
              category: "Electrical Characteristics",
              items: [
                { name: "Peak Power (Pmax)", value: "380W / 390W / 400W / 410W" },
                { name: "Power Tolerance", value: "0~+5W" },
                { name: "Maximum Power Voltage (Vmp)", value: "39.8V" },
                { name: "Maximum Power Current (Imp)", value: "10.05A" },
                { name: "Open Circuit Voltage (Voc)", value: "48.2V" },
                { name: "Short Circuit Current (Isc)", value: "10.65A" },
                { name: "Module Efficiency", value: "Up to 21.5%" },
              ],
            },
            {
              category: "Mechanical Characteristics",
              items: [
                { name: "Cell Type", value: "Mono PERC, 166 × 166 mm" },
                { name: "Number of Cells", value: "144 (6 × 24) half-cells" },
                { name: "Dimensions", value: "2094 × 1038 × 35 mm" },
                { name: "Weight", value: "24.5 kg" },
                { name: "Front Glass", value: "3.2 mm high-transmission tempered glass with anti-reflective coating" },
                { name: "Frame", value: "Anodized aluminum alloy" },
                { name: "Junction Box", value: "IP68 rated with bypass diodes" },
                { name: "Cables", value: "4 mm², 1200 mm length" },
                { name: "Connector", value: "MC4 compatible" },
              ],
            },
            {
              category: "Temperature Ratings",
              items: [
                { name: "Operating Temperature", value: "-40°C to +85°C" },
                { name: "Temperature Coefficient of Pmax", value: "-0.35%/°C" },
                { name: "Temperature Coefficient of Voc", value: "-0.28%/°C" },
                { name: "Temperature Coefficient of Isc", value: "0.048%/°C" },
                { name: "Nominal Operating Cell Temperature", value: "43±2°C" },
              ],
            },
            {
              category: "Maximum Ratings",
              items: [
                { name: "Maximum System Voltage", value: "1500V DC" },
                { name: "Maximum Series Fuse Rating", value: "20A" },
                { name: "Wind Load / Snow Load", value: "2400 Pa / 5400 Pa" },
                { name: "Hail Resistance", value: "25 mm at 23 m/s" },
              ],
            },
            {
              category: "Certifications",
              items: [
                { name: "Quality Certifications", value: "ISO 9001, ISO 14001, ISO 45001" },
                { name: "Product Certifications", value: "IEC 61215, IEC 61730, UL 1703, MCS, CE, CEC" },
                {
                  name: "Other",
                  value: "Salt Mist Corrosion Resistance, Ammonia Resistance, Sand Dust Resistance, PID Resistance",
                },
              ],
            },
          ]}
          downloads={[
            {
              name: "Technical Brochure",
              //description: "Detailed product information and specifications",
              url: "/products/pdf/monosolarpdf.pdf",
            },
           
          ]}
          relatedProducts={[
            {
              name: "Poly Crystalline Solar Modules",
              description: "High Efficiency & Durable Performance solar panels for cost-effective solar installations.",
              link: "/products/solar-range/solar-panel/poly-crystalline",
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

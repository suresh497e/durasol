import Navbar from "@/components/navbar";
import { ProductDetail } from "@/components/product-detail";
import Footer from "@/components/footer";
import Image from "next/image";

export default function DSW950Page() {
  const productData = {
    title:
      "Durasol Pure Sine Wave UPS DSW1250, DSW1450 – 12V | Reliable & Efficient Power Backup",
    subtitle: "760VA/12V Pure Sine Wave UPS for enhanced power backup",
    description:
      "The Durasol Pure Sine Wave UPS DSW1250 & DSW1450 – 12V is a high-performance, microcontroller-based power backup solution designed to provide uninterrupted, stable, and clean electricity for home appliances, IT equipment, and sensitive electronics. With its pure sine wave output, this UPS ensures zero distortion and stable voltage levels, making it safe for computers, LED TVs, music systems, and other sophisticated appliances. The built-in advanced three-stage battery charging system (Boost, Absorption, Float) enhances battery lifespan and performance while ensuring fast charging and optimal power management.",

    /* keyFeatures: [
      "760VA/12V Capacity – Provides sufficient backup power for essential home and office equipment.",
      "Pure Sine Wave Output – Delivers clean power with minimal harmonic distortion for sensitive electronics.",
      "Microcontroller-Based Design – Ensures real-time hardware control for optimal performance.",
      "Instant Changeover – Zero-delay switching for IT loads and sensitive electronics.",
      "Three-Stage Battery Charging – Boost, Absorption, and Float mode for enhanced battery life.",
      "Heavy-Duty Grid Charger – Enables efficient power conditioning and faster battery charging.",
      "Multiple Battery Compatibility – Works with Tubular, VRLA, Flat Plate, and Li-ion batteries.",
      "Dual Mode Operation – W-UPS Mode for general appliances and UPS Mode for IT equipment.",
      "Comprehensive Protection – Overload, short circuit, deep discharge, over-temperature, and back-feed protection.",
      "Temperature-Controlled Cooling – Better thermal management for extended operational life.",
      "User-Friendly Display – Provides real-time status updates and system monitoring.",
    ], */
    relatedProducts: [
      {
        title: "Pure Sine Wave UPS DSW850",
        category: "Pure Sine Wave UPS",
        description:
          "Durasol Pure Sine Wave UPS DSW850 | 700VA/12V Reliable Power Backup",
        image: "/images/pure-sine-wave-ups-black.jpeg",
        link: "/products/home-ups/pure-sine-wave-ups/dsw850",
      },
      {
        title: "Pure Sine Wave UPS DSW1050",
        category: "Pure Sine Wave UPS",
        description:
          "Durasol Pure Sine Wave UPS DSW1050 | 860VA/12V High-Efficiency Power Backup",
        image: "/images/pure-sine-wave-ups-black.jpeg",
        link: "/products/home-ups/pure-sine-wave-ups/dsw1050",
      },
      {
        title: "Digital Smart UPS DSQ1000",
        category: "Digital Smart UPS",
        description:
          "Durasol Digital Smart UPS DSQ1000 | Reliable & Efficient Power Backup",
        image: "/images/dsq1000.png",
        link: "/products/home-ups/digital-smart-ups/dsq1000",
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetail
        title={productData.title}
        subtitle={productData.subtitle}
        description={productData.description}
        downloads={[{ name: "Technical Brochure", url: "/products/pdf/dsw1250pdf.pdf" }]}
        image={
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/products/dsw1250.jpg"
              alt="Mono Crystalline Solar Modules"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        }
      />
      <Footer />
    </main>
  );
}

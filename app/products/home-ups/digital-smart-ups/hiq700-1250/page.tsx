import type { Metadata } from "next"
import Image from "next/image"
import { ProductDetail } from "@/components/product-detail"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "HiQ700-1250 | Digital Smart UPS | Durasol Energi",
  description:
    "HiQ700-1250 Digital Smart UPS with advanced features for reliable power backup and protection for your home and office equipment.",
}

export default function HiQ7001250Page() {
  return (
    <>
    <Navbar />
    
    <ProductDetail
      title="Durasol Digital Smart UPS DSQ1125 | Reliable & Efficient Power Backup"
      description="The Durasol Digital Smart UPS DSQ1125 is an intelligent and efficient power backup system designed for home, office, and IT applications. With advanced microcontroller technology, it ensures stable, regulated power output while protecting sensitive devices like LED TVs, computers, and security systems.This digital UPS features dual mode operation for wider voltage range compatibility and instant changeover technology, preventing power disruptions. Its intelligent battery management system supports multiple battery types, ensuring longer battery life and optimized charging cycles."
      subtitle="Advanced power backup solution with intelligent features"
      image={
        <Image
          src="/products/dsq1125.jpg"
          alt="HiQ700-1250 Digital Smart UPS"
          width={500}
          height={500}
          className="object-contain"
        />
      }
      /*features={[
        "Available in 700VA and 1250VA capacities",
        "Pure Sine Wave output for sensitive electronics",
        "Microprocessor-based digital control",
        "LCD display for real-time status monitoring",
        "Automatic Voltage Regulation (AVR)",
        "Short circuit and overload protection",
        "Cold start function (start without mains power)",
        "Smart battery management system",
        "USB communication port (optional)",
        "Compatible with generators",
      ]} */
      specifications={[
        {
          category: "General",
          items: [
            { name: "Model", value: "HiQ700-1250" },
            { name: "Capacity", value: "700VA/1250VA" },
            { name: "Technology", value: "Line Interactive with AVR" },
            { name: "Input Voltage", value: "140-300V AC" },
            { name: "Output Voltage", value: "230V AC ±10%" },
            { name: "Output Waveform", value: "Pure Sine Wave" },
            { name: "Frequency", value: "50Hz ±1Hz" },
          ],
        },
        {
          category: "Protection",
          items: [
            { name: "Overload Protection", value: "Yes" },
            { name: "Short Circuit Protection", value: "Yes" },
            { name: "Surge Protection", value: "Yes" },
            { name: "Battery Deep Discharge Protection", value: "Yes" },
            { name: "Battery Overcharge Protection", value: "Yes" },
          ],
        },
        {
          category: "Battery",
          items: [
            { name: "Battery Type", value: "Sealed Maintenance Free (SMF)" },
            { name: "Backup Time", value: "Depends on connected load" },
            { name: "Charging Time", value: "8-10 hours to 90% capacity" },
            { name: "Battery Management", value: "Advanced charging algorithm with temperature compensation" },
          ],
        },
        {
          category: "Physical",
          items: [
            { name: "Dimensions (W×D×H)", value: "Varies by model" },
            { name: "Weight", value: "Varies by model" },
            { name: "Color", value: "Black" },
            { name: "Display", value: "LCD with status indicators" },
          ],
        },
        {
          category: "Environment",
          items: [
            { name: "Operating Temperature", value: "0°C to 40°C" },
            { name: "Humidity", value: "0-90% RH (non-condensing)" },
            { name: "Noise Level", value: "<40dB" },
          ],
        },
        {
          category: "Features",
          items: [
            { name: "Cold Start", value: "Yes" },
            { name: "Auto Restart", value: "Yes" },
            { name: "Generator Compatible", value: "Yes" },
            { name: "Communication", value: "USB port (optional)" },
            { name: "Software", value: "Power management software (optional)" },
          ],
        },
        {
          category: "Warranty",
          items: [
            { name: "Standard Warranty", value: "2 years on UPS, 1 year on battery" },
            { name: "Extended Warranty", value: "Available" },
          ],
        },
      ]}
      downloads={[
        { name: "Technical Brochure", url: "/products/pdf/ds1125pdf.pdf" },
       
      ]}
      relatedProducts={[
        {
          name: "DSQ1000",
          description: "Digital Smart UPS with 850VA capacity",
          url: "/products/home-ups/digital-smart-ups/dsq1000",
        },
        {
          name: "DSQ1125",
          description: "Digital Smart UPS with 1000VA capacity",
          url: "/products/home-ups/digital-smart-ups/dsq1125",
        },
        {
          name: "DSW1150",
          description: "Pure Sine Wave UPS with 1150VA capacity",
          url: "/products/home-ups/pure-sine-wave-ups/dsw1150",
        },
      ]}
    />
    <Footer />
    </>
  )
}

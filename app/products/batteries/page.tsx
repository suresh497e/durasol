import type { Metadata } from "next"
import BatteriesClientPage from "./BatteriesClientPage"

export const metadata: Metadata = {
  title: "Batteries | Durasol Energi",
  description:
    "Explore Durasol's range of high-performance batteries including Tall Tubular, Automotive, and VRLA batteries designed for reliability and longevity.",
}

export default function BatteriesPage() {
  return <BatteriesClientPage />
}

import type { Metadata } from "next"
import LithiumClientPage from "./LithiumClientPage"

export const metadata: Metadata = {
  title: "Lithium (LiFEPO4) Batteries | Durasol Energi",
  description:
    "Explore Durasol's advanced Lithium Iron Phosphate (LiFEPO4) battery solutions for residential, commercial, and industrial applications with superior performance and longevity.",
}

export default function LithiumPage() {
  return <LithiumClientPage />
}

import type { Metadata } from "next"
import TallTubularBatteriesClientPage from "./TallTubularBatteriesClientPage"

export const metadata: Metadata = {
  title: "Tall Tubular Batteries | Durasol Energi",
  description:
    "Explore Durasol's range of Tall Tubular Batteries providing long-lasting power backup with high performance and durability for homes and businesses.",
}

export default function TallTubularBatteriesPage() {
  return <TallTubularBatteriesClientPage />
}

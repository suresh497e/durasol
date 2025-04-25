import type { Metadata } from "next"
import AutomotiveBatteriesClientPage from "./AutomotiveBatteriesClientPage"

export const metadata: Metadata = {
  title: "Automotive Batteries | Durasol Energi",
  description:
    "Explore Durasol's range of high-performance automotive batteries designed for reliability, long life, and superior starting power in all conditions.",
}

export default function AutomotiveBatteriesPage() {
  return <AutomotiveBatteriesClientPage />
}

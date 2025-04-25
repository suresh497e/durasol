import type { Metadata } from "next"
import ACStreetLightsClientPage from "./ACStreetLightsClientPage"

export const metadata: Metadata = {
  title: "AC Street Lights | Durasol Energi",
  description:
    "Explore Durasol's range of energy-efficient AC LED street lights and flood lights designed for urban, commercial, and industrial outdoor lighting applications.",
}

export default function ACStreetLightsPage() {
  return <ACStreetLightsClientPage />
}

import type { Metadata } from "next"
import SolarPanelClientPage from "./SolarPanelClientPage"

export const metadata: Metadata = {
  title: "Solar Panels | Durasol Energi",
  description:
    "Explore Durasol's range of high-efficiency solar panels including Poly Crystalline and Mono Crystalline modules for residential and commercial applications.",
}

export default function SolarPanelPage() {
  return <SolarPanelClientPage />
}

import type { Metadata } from "next"
import SolarRangeClientPage from "./SolarRangeClientPage"

export const metadata: Metadata = {
  title: "Solar Range | Durasol Energi",
  description:
    "Explore Durasol's comprehensive range of solar products including PWM PCU, MPPT PCU, Hybrid Inverters, and Solar Panels for sustainable energy solutions.",
}

export default function SolarRangePage() {
  return <SolarRangeClientPage />
}

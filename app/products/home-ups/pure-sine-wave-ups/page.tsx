import type { Metadata } from "next"
import PureSineWaveUPSClientPage from "./PureSineWaveUPSClientPage"

export const metadata: Metadata = {
  title: "Pure Sine Wave UPS | Durasol Energi",
  description:
    "Explore Durasol's range of Pure Sine Wave UPS systems providing clean, stable power backup for sensitive electronics with advanced features and multiple battery compatibility.",
}

export default function PureSineWaveUPSPage() {
  return <PureSineWaveUPSClientPage />
}

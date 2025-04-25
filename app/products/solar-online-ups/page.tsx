import type { Metadata } from "next"
import SolarOnlineUPSClientPage from "./SolarOnlineUPSClientPage"

export const metadata: Metadata = {
  title: "Solar Online UPS | Durasol Energi",
  description:
    "Explore Durasol's range of Solar Online UPS systems for uninterrupted power supply with solar integration, available in single phase and three phase configurations.",
}

export default function SolarOnlineUPSPage() {
  return <SolarOnlineUPSClientPage />
}

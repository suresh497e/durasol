import type { Metadata } from "next"
import SolarWaterPumpsClientPage from "./SolarWaterPumpsClientPage"

export const metadata: Metadata = {
  title: "Solar Water Pumps | Durasol Energi",
  description:
    "Explore Durasol's range of solar water pumping solutions including solar pump inverters, controllers, and pumps for agriculture, irrigation, and water supply.",
}

export default function SolarWaterPumpsPage() {
  return <SolarWaterPumpsClientPage />
}

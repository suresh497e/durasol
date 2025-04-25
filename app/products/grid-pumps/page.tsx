import type { Metadata } from "next"
import GridPumpsClientPage from "./GridPumpsClientPage"

export const metadata: Metadata = {
  title: "Grid Pumps | Durasol Energi",
  description:
    "Explore Durasol's range of grid-connected water pumps for domestic, residential, agricultural, and irrigation applications with high efficiency and reliability.",
}

export default function GridPumpsPage() {
  return <GridPumpsClientPage />
}

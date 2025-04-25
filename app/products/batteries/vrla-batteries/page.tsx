import type { Metadata } from "next"
import VRLABatteriesClientPage from "./VRLABatteriesClientPage"

export const metadata: Metadata = {
  title: "VRLA Batteries | Durasol Energi",
  description:
    "Explore Durasol's range of VRLA batteries including AGM and Gel technologies for UPS, telecom, and emergency power applications.",
}

export default function VRLABatteriesPage() {
  return <VRLABatteriesClientPage />
}

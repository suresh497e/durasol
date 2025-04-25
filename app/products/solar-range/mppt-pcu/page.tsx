import type { Metadata } from "next"
import MpptPcuClientPage from "./mpptPcuClientPage"

export const metadata: Metadata = {
  title: "MPPT PCU | Durasol Energi",
  description:
    "Explore Durasol's range of MPPT PCU systems providing efficient solar energy conversion with maximum power point tracking technology for optimal performance.",
}

export default function MpptPcuPage() {
  return <MpptPcuClientPage />
}

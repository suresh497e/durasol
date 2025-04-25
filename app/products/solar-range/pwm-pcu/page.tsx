import type { Metadata } from "next"
import PWMPCUClientPage from "./PWMPCUClientPage"

export const metadata: Metadata = {
  title: "PWM PCU | Solar Range | Durasol Energi",
  description:
    "Explore Durasol's PWM PCU range including Advanced Solar Charge Controllers & Inverters and DSH series models for efficient solar energy solutions.",
}

export default function PWMPCUPage() {
  return <PWMPCUClientPage />
}

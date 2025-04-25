import type { Metadata } from "next"
import DigitalSmartUPSClientPage from "./DigitalSmartUPSClientPage"

export const metadata: Metadata = {
  title: "Digital Smart UPS | Durasol Energi",
  description:
    "Explore Durasol's range of Digital Smart UPS systems providing reliable power backup for homes and offices with advanced features and multiple battery compatibility.",
}

export default function DigitalSmartUPSPage() {
  return <DigitalSmartUPSClientPage />
}

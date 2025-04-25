import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Pure Sine Wave UPS Brochure | Durasol Energi",
  description: "Download the technical brochure for Durasol Energi's Pure Sine Wave UPS range.",
}

export default function BrochurePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
          <h1 className="text-3xl font-bold text-white">Pure Sine Wave UPS Technical Brochure</h1>
          <p className="text-white/80 mt-2">
            Complete technical specifications and features of the entire Pure Sine Wave UPS range
          </p>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] relative bg-gray-100 rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/pure-sine-wave-ups.png"
                  alt="Pure Sine Wave UPS Brochure Cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Preview</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800">Durasol Energi Pure Sine Wave UPS</h2>
              <p className="mt-4 text-gray-600">
                This comprehensive technical brochure contains detailed information about our entire Pure Sine Wave UPS
                range, including:
              </p>

              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Complete technical specifications for all models (DSW850-DSW6000)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Detailed feature descriptions and benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Installation diagrams and connection instructions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>LED/LCD display indicators and alarm descriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Physical dimensions and environmental specifications</span>
                </li>
              </ul>

              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-4">
                  Note: In a production environment, this would be a downloadable PDF file. For this demo, we're showing
                  a brochure information page.
                </p>
                <Link href="/products/home-ups/pure-sine-wave-ups">
                  <Button className="bg-blue-600 hover:bg-blue-700">Return to Pure Sine Wave UPS Products</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 border-t">
          <h3 className="text-lg font-semibold text-gray-800">About Durasol Energi</h3>
          <p className="mt-2 text-gray-600">
            From a modest start in early 2000, we invested a lot of time, effort and money solving customer problems in
            the areas of electricity. Today, we can't imagine life without electricity. We always strive to offer
            solutions to our customers which can bring brightness and smiles in their life.
          </p>
          <div className="mt-4 flex items-center">
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-white rounded-full p-2 shadow-sm flex items-center justify-center">
                <span className="text-blue-600 font-bold">ISO</span>
              </div>
              <div className="w-16 h-16 bg-white rounded-full p-2 shadow-sm flex items-center justify-center">
                <span className="text-blue-600 font-bold">CE</span>
              </div>
              <div className="w-16 h-16 bg-white rounded-full p-2 shadow-sm flex items-center justify-center">
                <span className="text-blue-600 font-bold">RoHS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

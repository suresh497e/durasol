import Link from "next/link"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#089c9c] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact & Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:underline">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:underline">
                  Media
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/home-ups" className="hover:underline">
                  Home UPS
                </Link>
              </li>
              <li>
                <Link href="/products/home-ups/pure-sine-wave-ups" className="hover:underline">
                  Pure Sine Wave UPS
                </Link>
              </li>
              <li>
                <Link href="/products/home-ups/digital-smart-ups" className="hover:underline">
                  Digital Smart UPS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="hover:underline">
                  All Projects
                </Link>
              </li>
              <li>
                <Link href="/projects/solar-water-pumps-nepal" className="hover:underline">
                  Solar Water Pumps
                </Link>
              </li>
              <li>
                <Link href="/projects/rooftop-solar-solutions" className="hover:underline">
                  Rooftop Solar
                </Link>
              </li>
              <li>
                <Link href="/projects/corporate-solar-solutions" className="hover:underline">
                  Corporate Solar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/csr" className="hover:underline">
                  CSR Initiatives
                </Link>
              </li>
              <li>
                <Link href="/life-at-intelenergi" className="hover:underline">
                  Life at IntelEnergi
                </Link>
              </li>
              <li>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-white/80 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover:text-white/80 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-white/80 transition-colors"
                  >
                    <LinkedIn className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-white/80 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2024 Durasol Energi. All Rights Reserved.</p>
          <div className="mt-2">
            <span className="text-white/80">Powering a sustainable future through innovative energy solutions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Also export as default for backward compatibility
export default Footer

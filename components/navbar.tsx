"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

// Define the navigation items with nested structure
const navItems = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Products",
    path: "/products",
    dropdown: [
      {
        name: "Home UPS",
        path: "/products/home-ups",
        submenu: [
          { name: "Digital Smart UPS", path: "/products/home-ups/digital-smart-ups" },
          { name: "Pure Sine Wave UPS", path: "/products/home-ups/pure-sine-wave-ups" },
        ],
      },
      {
        name: "Solar Range",
        path: "/products/solar-range",
        submenu: [
          { name: "PWM PCU", path: "/products/solar-range/pwm-pcu" },
          { name: "MPPT PCU", path: "/products/solar-range/mppt-pcu" },
          { name: "Hybrid MPPT Inverter", path: "/products/solar-range/hybrid-mppt-inverter" },
          {
            name: "Hi-Frequency based Active Hybrid Solar Inverter",
            path: "/products/solar-range/active-hybrid-solar-inverter",
          },
          { name: "Solar Panel", path: "/products/solar-range/solar-panel" },
        ],
      },
      {
        name: "Batteries",
        path: "/products/batteries",
        submenu: [
          { name: "Tall Tubular Batteries", path: "/products/batteries/tall-tubular-batteries" },
          { name: "Automotive Batteries", path: "/products/batteries/automotive-batteries" },
          { name: "VRLA Batteries", path: "/products/batteries/vrla-batteries" },
        ],
      },
      {
        name: "Lithium (LiFEPO4)",
        path: "/products/lithium-lifepo4",
        submenu: [
          {
            name: "Low Voltage Wall Mounted Battery (CE5, CE10, CE15)",
            path: "/products/lithium-lifepo4/wall-mounted-ce",
          },
          { name: "Low Voltage Wall Mounted Battery (MOON 5&10)", path: "/products/lithium-lifepo4/wall-mounted-moon" },
          { name: "Low Voltage Rack Mounted Battery (CT-5)", path: "/products/lithium-lifepo4/rack-mounted-ct5" },
          { name: "Energy Storage Power Bank (CS-5000-X-P)", path: "/products/lithium-lifepo4/power-bank" },
          { name: "Industrial & Commercial Battery Storage", path: "/products/lithium-lifepo4/industrial-commercial" },
         // { name: "Lithium Energy Storage & Peak Load Shifting", path: "/products/lithium-lifepo4/energy-storage" },
          { name: "Monoblock Battery (12.8V)", path: "/products/lithium-lifepo4/monoblock-battery" },
        ],
      },
      {
        name: "Solar Online UPS",
        path: "/products/solar-online-ups",
        submenu: [
          { name: "Single Phase Online UPS", path: "/products/solar-online-ups/single-phase" },
          { name: "Three Phase Online UPS", path: "/products/solar-online-ups/three-phase" },
        ],
      },
      {
        name: "Solar Water Pumps",
        path: "/products/solar-water-pumps",
        submenu: [
          { name: "Solar Pump Inverter", path: "/products/solar-water-pumps/pump-inverter" },
          { name: "Solar Controller", path: "/products/solar-water-pumps/controller" },
          { name: "Solar Pumps", path: "/products/solar-water-pumps/pumps" },
        ],
      },
      {
        name: "Grid Pumps",
        path: "/products/grid-pumps",
        submenu: [
          { name: "Domestic & Residential Pumps", path: "/products/grid-pumps/domestic-residential" },
          { name: "Agriculture & Irrigation Pumps", path: "/products/grid-pumps/agriculture-irrigation" },
        ],
      },
      {
        name: "AC Street Lights",
        path: "/products/ac-street-lights",
        submenu: [
          {
            name: "High-Performance LED Street Lights (50W, 100W)",
            path: "/products/ac-street-lights/led-street-lights",
          },
          { name: "Flood Lights (100W, 150W)", path: "/products/ac-street-lights/flood-lights" },
        ],
      },
    ],
  },
  { name: "Projects", path: "/projects" },
  { name: "CSR", path: "/csr" },
  { name: "Certifications", path: "/certifications" },
  { name: "Media", path: "/media" },
  { name: "Contact Us", path: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setActiveSubmenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
      setActiveSubmenu(null)
    } else {
      setActiveDropdown(name)
      setActiveSubmenu(null)
    }
  }

  const toggleSubmenu = (e: React.MouseEvent, name: string) => {
    e.stopPropagation() // Prevent parent dropdown from closing
    if (activeSubmenu === name) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(name)
    }
  }

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-2 md:px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.JPG-8VNkFPDcsjEOUT2Fq4JBzx6YN3sGw7.jpeg"
              alt="Durasol Energi Logo"
              width={150}
              height={45}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.slice(0, -1).map((item) => (
              <div key={item.name} className="relative" ref={item.name === "Products" ? dropdownRef : null}>
                {item.dropdown ? (
                  <div className="relative group">
                    <button
                      className="flex items-center text-sm xl:text-base font-medium text-black hover:text-[#089c9c] transition-colors whitespace-nowrap"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {item.dropdown.map((dropdownItem) => (
                            <div key={dropdownItem.name}>
                              {dropdownItem.submenu ? (
                                <div className="relative">
                                  <button
                                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#089c9c]"
                                    onClick={(e) => toggleSubmenu(e, dropdownItem.name)}
                                  >
                                    {dropdownItem.name}
                                    <ChevronRight
                                      className={`ml-1 h-4 w-4 transition-transform ${activeSubmenu === dropdownItem.name ? "rotate-90" : ""}`}
                                    />
                                  </button>

                                  {/* Submenu */}
                                  {activeSubmenu === dropdownItem.name && (
                                    <div className="absolute left-full top-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                      <div className="py-1">
                                        {dropdownItem.submenu.map((submenuItem) => (
                                          <Link
                                            key={submenuItem.name}
                                            href={submenuItem.path}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#089c9c]"
                                            onClick={() => {
                                              setActiveDropdown(null)
                                              setActiveSubmenu(null)
                                              window.scrollTo(0, 0)
                                            }}
                                          >
                                            {submenuItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  href={dropdownItem.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#089c9c]"
                                  onClick={() => {
                                    setActiveDropdown(null)
                                    window.scrollTo(0, 0)
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="text-sm xl:text-base font-medium text-black hover:text-[#089c9c] transition-colors whitespace-nowrap"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="text-sm xl:text-base font-medium text-[#089c9c] hover:text-[#078787] transition-colors whitespace-nowrap"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact Us
            </Link>
            <a
              href="https://distribution.durasolenergi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm xl:text-base font-medium text-black bg-[#089c9c] hover:bg-[#078787] hover:text-black px-3 py-1 rounded-md transition-colors whitespace-nowrap"
            >
              Distributor Portal
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-black hover:text-[#089c9c]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div>
                  <button
                    className="flex items-center justify-between w-full py-3 px-4 text-black hover:bg-gray-50 hover:text-[#089c9c] transition-colors"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Mobile Dropdown */}
                  {activeDropdown === item.name && (
                    <div className="bg-gray-50">
                      {item.dropdown.map((dropdownItem) => (
                        <div key={dropdownItem.name}>
                          {dropdownItem.submenu ? (
                            <div>
                              <button
                                className="flex items-center justify-between w-full py-2 px-8 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#089c9c]"
                                onClick={(e) => toggleSubmenu(e, dropdownItem.name)}
                              >
                                <span>{dropdownItem.name}</span>
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform ${activeSubmenu === dropdownItem.name ? "rotate-180" : ""}`}
                                />
                              </button>

                              {/* Mobile Submenu */}
                              {activeSubmenu === dropdownItem.name && (
                                <div className="bg-gray-100">
                                  {dropdownItem.submenu.map((submenuItem) => (
                                    <Link
                                      key={submenuItem.name}
                                      href={submenuItem.path}
                                      className="block py-2 px-12 text-sm text-gray-600 hover:bg-gray-200 hover:text-[#089c9c]"
                                      onClick={() => {
                                        setIsOpen(false)
                                        setActiveDropdown(null)
                                        setActiveSubmenu(null)
                                        window.scrollTo(0, 0)
                                      }}
                                    >
                                      {submenuItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={dropdownItem.path}
                              className="block py-2 px-8 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#089c9c]"
                              onClick={() => {
                                setIsOpen(false)
                                setActiveDropdown(null)
                                window.scrollTo(0, 0)
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path}
                  className="block py-3 px-4 text-black hover:bg-gray-50 hover:text-[#089c9c] transition-colors"
                  onClick={() => {
                    setIsOpen(false)
                    window.scrollTo(0, 0)
                  }}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="block py-3 px-4 text-[#089c9c] hover:bg-gray-50 hover:text-[#078787] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <a
            href="https://distribution.durasolenergi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 px-4 text-black bg-[#089c9c] hover:bg-[#078787] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Distributor Portal
          </a>
        </div>
      )}
    </nav>
  )
}

// Add default export to maintain compatibility with existing imports
export default Navbar

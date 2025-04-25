"use client"

import Link from "next/link"
import Image from "next/image"
// Import from our exports utility instead of using wildcard imports
import { Card, CardContent, Button, Navbar, Footer, ContactCTA } from "@/lib/exports"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SolarRangeClientPage() {
  // Component implementation remains the same
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-800 to-green-600 py-16 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Solar Range</h1>
                <p className="text-xl mb-6">
                  Harness the power of the sun with Durasol's comprehensive range of solar products. From efficient PCUs
                  to high-performance solar panels, we offer complete solar solutions for residential and commercial
                  applications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-white text-green-700 hover:bg-gray-100">
                    <Link href="#products">Explore Products</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-700"
                  >
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md h-64 md:h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Durasol Solar Range"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-green-700">Sustainable Energy Solutions</h2>
                  <p className="text-gray-700 mb-4">
                    Durasol's Solar Range offers cutting-edge technology to convert solar energy into reliable power for
                    homes, businesses, and industrial applications. Our products are designed for maximum efficiency,
                    durability, and ease of use.
                  </p>
                  <p className="text-gray-700 mb-4">
                    With a focus on innovation and quality, our solar solutions help reduce electricity bills, decrease
                    carbon footprint, and provide energy independence even in areas with unreliable grid power.
                  </p>
                  <h3 className="text-2xl font-semibold mb-3 text-green-700 mt-6">Key Benefits</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Significant reduction in electricity bills</li>
                    <li>Reliable power backup during grid outages</li>
                    <li>Environment-friendly renewable energy solution</li>
                    <li>Low maintenance and long operational life</li>
                    <li>Government subsidies and tax benefits available</li>
                    <li>Quick return on investment</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-64 md:h-80">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Solar Energy Benefits"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-6 text-green-700">Applications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-green-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-green-700">Residential</h3>
                      <p className="text-gray-700">
                        Power your home with clean solar energy, reducing electricity bills and ensuring backup power
                        during outages.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-green-700">Commercial</h3>
                      <p className="text-gray-700">
                        Ideal for offices, shops, and small businesses looking to reduce operational costs and ensure
                        uninterrupted power.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-green-700">Agricultural</h3>
                      <p className="text-gray-700">
                        Power irrigation pumps, farm equipment, and agricultural facilities with sustainable solar
                        energy.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-green-700">Industrial</h3>
                      <p className="text-gray-700">
                        Reduce dependency on grid power and lower energy costs for manufacturing and industrial
                        operations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-green-700">Remote Areas</h3>
                      <p className="text-gray-700">
                        Provide reliable power in off-grid locations where conventional electricity is unavailable or
                        unreliable.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 text-green-700">Institutional</h3>
                      <p className="text-gray-700">
                        Perfect for schools, hospitals, and government buildings seeking sustainable energy solutions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="products" className="mt-6" id="products">
              <h2 className="text-3xl font-bold mb-8 text-green-700">Our Solar Product Range</h2>

              {/* PWM PCU Section */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-green-700">PWM PCU</h3>
                  <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                    <Link href="/products/solar-range/pwm-pcu">View All PWM PCU</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-green-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Durasol Solar PCU PWM"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-green-700">Durasol Solar PCU PWM</h4>
                      <p className="text-gray-700 mb-4 text-sm">
                        Advanced Solar Charge Controller & Inverter with intelligent battery management and efficient
                        power conversion.
                      </p>
                      <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                        <Link href="/products/solar-range/pwm-pcu/solar-pcu-pwm">View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="PWM PCU – DSH Series"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-green-700">PWM PCU – DSH Series</h4>
                      <p className="text-gray-700 mb-4 text-sm">
                        DSH2500, DSH3000, DSH2570, DSH3070 – 24V models with high efficiency and reliable performance.
                      </p>
                      <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                        <Link href="/products/solar-range/pwm-pcu/dsh-series">View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* MPPT PCU Section */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-green-700">MPPT PCU</h3>
                  <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                    <Link href="/products/solar-range/mppt-pcu">View All MPPT PCU</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-green-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="MPPT PCU 2500-3000/24V"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-green-700">MPPT PCU 2500-3000/24V</h4>
                      <p className="text-gray-700 mb-4 text-sm">
                        High-efficiency MPPT solar charge controller with 2500-3000VA capacity and 24V battery
                        compatibility.
                      </p>
                      <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                        <Link href="/products/solar-range/mppt-pcu/mppt-2500-3000">View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Durasol MPPT Solar Hybrid PCU"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-green-700">Durasol MPPT Solar Hybrid PCU</h4>
                      <p className="text-gray-700 mb-4 text-sm">
                        High Efficiency & Smart Power Management system with advanced MPPT technology for maximum solar
                        harvest.
                      </p>
                      <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                        <Link href="/products/solar-range/mppt-pcu/solar-hybrid-pcu">View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Durasol MPPT Solar Hybrid PCU Enhanced"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-green-700">Durasol MPPT Solar Hybrid PCU</h4>
                      <p className="text-gray-700 mb-4 text-sm">
                        High Efficiency & Smart Power Management with enhanced features for optimal performance.
                      </p>
                      <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                        <Link href="/products/solar-range/mppt-pcu/solar-hybrid-pcu-enhanced">View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Hybrid MPPT Inverter Section */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-green-700">Hybrid MPPT Inverter</h3>
                  <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                    <Link href="/products/solar-range/hybrid-mppt-inverter">View Details</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-green-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Hybrid MPPT Inverter"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-green-700">Hybrid MPPT Inverter</h4>
                      <p className="text-gray-700 mb-4 text-sm">
                        Advanced hybrid inverter with MPPT technology for optimal solar energy utilization and grid
                        integration.
                      </p>
                      <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                        <Link href="/products/solar-range/hybrid-mppt-inverter">View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Hi-Frequency Based Active Hybrid Solar Inverter Section */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-green-700">
                    Hi-Frequency Based Active Hybrid Solar Inverter
                  </h3>
                  <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                    <Link href="/products/solar-range/hi-frequency-inverter">View Details</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-green-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Hi-Frequency Based Active Hybrid Solar Inverter"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-green-700">
                        Hi-Frequency Based Active Hybrid Solar Inverter
                      </h4>
                      <p className="text-gray-700 mb-4 text-sm">
                        Cutting-edge high-frequency inverter technology for efficient and reliable solar power
                        conversion.
                      </p>
                      <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                        <Link href="/products/solar-range/hi-frequency-inverter">View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Solar Panel Section */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-green-700">Solar Panel</h3>
                  <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                    <Link href="/products/solar-range/solar-panel">View All Solar Panels</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="border-green-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Poly Crystalline Solar Modules"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-green-700">Poly Crystalline Solar Modules</h4>
                      <p className="text-gray-700 mb-4 text-sm">
                        High Efficiency & Durable Performance solar panels for cost-effective solar installations.
                      </p>
                      <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                        <Link href="/products/solar-range/solar-panel/poly-crystalline">View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Mono Crystalline Modules"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-green-700">Mono Crystalline Modules</h4>
                      <p className="text-gray-700 mb-4 text-sm">
                        Premium high-efficiency solar panels for maximum power generation in limited space.
                      </p>
                      <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                        <Link href="/products/solar-range/solar-panel/mono-crystalline">View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA Section */}
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

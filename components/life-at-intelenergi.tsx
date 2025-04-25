"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, X } from "lucide-react"

export default function LifeAtIntelEnergi() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    {
      src: "/images/life-at-intelenergi/team-gathering.jpeg",
      alt: "Team gathering at IntelEnergi",
      description: "Team members at our annual gathering event",
    },
    {
      src: "/images/life-at-intelenergi/team-formal-1.jpeg",
      alt: "IntelEnergi team formal photo",
      description: "Our team in front of the IntelEnergi Global headquarters",
    },
    {
      src: "/images/life-at-intelenergi/team-formal-2.jpeg",
      alt: "IntelEnergi team formal photo alternate",
      description: "The IntelEnergi leadership and team members",
    },
    {
      src: "/images/life-at-intelenergi/team-outing.jpeg",
      alt: "Team outing at a garden",
      description: "Team members enjoying a day out at a local resort",
    },
    {
      src: "/images/life-at-intelenergi/team-building-1.jpeg",
      alt: "Team building activity - rope bridge",
      description: "Team building activities - crossing the rope bridge challenge",
    },
    {
      src: "/images/life-at-intelenergi/team-building-2.jpeg",
      alt: "Team building activity - rope course",
      description: "Our team tackling the adventure course together",
    },
    {
      src: "/images/life-at-intelenergi/team-building-3.jpeg",
      alt: "Team building activity - tire wall",
      description: "Taking a moment to enjoy the adventure course",
    },
    {
      src: "/images/life-at-intelenergi/team-building-4.jpeg",
      alt: "Team building activity - rope net",
      description: "Navigating the rope net challenge during our team outing",
    },
    // New images
    {
      src: "/images/life-at-intelenergi/celebration-1.jpeg",
      alt: "Independence Day celebration",
      description: "Team celebrating Independence Day with cake cutting ceremony",
    },
    {
      src: "/images/life-at-intelenergi/celebration-2.jpeg",
      alt: "Independence Day celebration alternate view",
      description: "Another view of our Independence Day celebration with the team",
    },
    {
      src: "/images/life-at-intelenergi/celebration-3.jpeg",
      alt: "Independence Day cake cutting",
      description: "Team members cutting cake during the Independence Day celebration",
    },
    {
      src: "/images/life-at-intelenergi/team-lunch-1.jpeg",
      alt: "Team lunch at restaurant",
      description: "Team members enjoying lunch together at a restaurant",
    },
    {
      src: "/images/life-at-intelenergi/team-lunch-2.jpeg",
      alt: "Team lunch gathering",
      description: "Another view of our team lunch gathering",
    },
    {
      src: "/images/life-at-intelenergi/team-lunch-3.jpeg",
      alt: "Team lunch celebration",
      description: "Team members at a special lunch celebration",
    },
  ]

  const openLightbox = (src: string) => {
    setSelectedImage(src)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const currentIndex = selectedImage ? images.findIndex((img) => img.src === selectedImage) : -1

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1].src)
    }
  }

  const goToPrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1].src)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section with Team Photo Background */}
      <section className="relative h-[50vh] md:h-[60vh]">
        {/* Team photo background */}
        <div className="absolute inset-0">
          <Image
            src="/images/life-at-intelenergi/team-formal-1.jpeg"
            alt="IntelEnergi Team"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Life at IntelEnergi</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Experience the vibrant culture, team spirit, and collaborative environment that makes IntelEnergi a great
              place to work.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Culture & Values</h2>
            <p className="text-lg text-gray-600">
              At IntelEnergi, we believe in fostering a culture of innovation, collaboration, and growth. Our team
              members are our greatest asset, and we are committed to creating an environment where everyone can thrive
              professionally and personally.
            </p>
          </div>
        </div>
      </section>

      {/* Celebrations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Celebrations & Events</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            We celebrate important occasions, festivals, and achievements together as a team. These moments of joy and
            camaraderie strengthen our bonds and create lasting memories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/life-at-intelenergi/celebration-1.jpeg"
                  alt="Independence Day celebration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">National Celebrations</h3>
                <p className="text-gray-600">
                  We proudly celebrate our national festivals and important days with enthusiasm and team spirit.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/life-at-intelenergi/team-lunch-1.jpeg"
                  alt="Team lunch"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Team Lunches</h3>
                <p className="text-gray-600">
                  Regular team lunches provide opportunities for team members to connect beyond work and strengthen
                  relationships.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/life-at-intelenergi/team-building-2.jpeg"
                  alt="Team building activities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Team Building</h3>
                <p className="text-gray-600">
                  Our team building activities foster collaboration, trust, and effective communication among team
                  members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Life at IntelEnergi Gallery</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(image.src)}
              >
                <div className="relative h-64">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Building Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Team Building & Activities</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              We believe that a strong team is built through shared experiences and challenges. Our regular team
              building activities help foster camaraderie, trust, and effective communication among our team members.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Team Activities</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-800">Adventure Course Challenge</p>
                    <p className="text-gray-600">
                      Our team tackled various obstacles including rope bridges, tire walls, and climbing nets to build
                      trust and teamwork.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-800">Independence Day Celebration</p>
                    <p className="text-gray-600">
                      A special celebration with cake cutting and team activities to commemorate our national
                      Independence Day.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-800">Team Lunches & Outings</p>
                    <p className="text-gray-600">
                      Regular team lunches and outings to strengthen bonds and create a positive work environment.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            onClick={goToPrev}
            className={`absolute left-4 text-white hover:text-gray-300 z-10 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <ArrowLeft size={32} />
          </button>

          <button
            onClick={goToNext}
            className={`absolute right-4 text-white hover:text-gray-300 z-10 ${currentIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentIndex === images.length - 1}
            aria-label="Next image"
          >
            <ArrowRight size={32} />
          </button>

          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image src={selectedImage || "/placeholder.svg"} alt="Enlarged view" fill className="object-contain" />
          </div>

          {currentIndex !== -1 && (
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg">{images[currentIndex].description}</p>
              <p className="text-sm mt-2">
                {currentIndex + 1} of {images.length}
              </p>
            </div>
          )}
        </div>
      )}
    </main>
  )
}

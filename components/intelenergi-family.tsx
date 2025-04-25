"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Add this style to hide scrollbars but keep functionality
const scrollbarHideStyle = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, Opera */
  }
`

export default function IntelenergiFamily() {
  // Array of actual brand logos with direct URLs
  const brandLogos = [
    {
      id: 1,
      name: "Durasol",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.JPG-EtqYHU581BMLsOyMeyWoxdmLmKnehy.jpeg",
    },
    {
      id: 2,
      name: "Altima",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Altima-logo_new-d97dBAwCdlpsZTiNVpyPXo50IwFI2I.webp",
    },
    {
      id: 3,
      name: "TECHNOF",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/technof-6BuiZpS8MAGq8mFa6MNgH593aFxAN6.png",
    },
    {
      id: 4,
      name: "ETG",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/etg_new_logo-QtUVkjoJio7PuhWOpaRCskRUZ3e4LF.webp",
    },
    {
      id: 5,
      name: "KIPOR",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kipor_new_logo-vsTDKUFHFgBMqdPvapFwOwakW6I8EA.webp",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <style jsx global>
        {scrollbarHideStyle}
      </style>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#089c9c] mb-6">The Intelenergi Family</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Harnessing the unique strengths of our experts, we unite to deliver impactful solutions that power a better
            tomorrow. Meet the brands that represent our dedication and expertise.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our commitment goes beyond just delivering solar solutions. We're here to support every aspect of your
            project needs—providing comprehensive, customized services tailored to your specific requirements.
          </p>
        </motion.div>

        {/* Auto-scrolling logos */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="flex items-center gap-12 py-4"
              animate={{ x: [0, -1500] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              {brandLogos.map((brand) => (
                <motion.div
                  key={brand.id}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all w-[220px] h-[120px] flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain"
                        sizes="150px"
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Duplicate logos for seamless scrolling */}
              {brandLogos.map((brand) => (
                <motion.div
                  key={`duplicate-${brand.id}`}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all w-[220px] h-[120px] flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={`${brand.name} logo`}
                        fill
                        className="object-contain"
                        sizes="150px"
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

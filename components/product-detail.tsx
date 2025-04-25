"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"

interface SpecificationItem {
  name: string
  value: string | React.ReactNode
}

interface SpecificationCategory {
  category: string
  items: SpecificationItem[]
}

interface ProductDetailProps {
  title: string
  subtitle: string
  image: React.ReactNode
  description?: string
  features?: string[]
  specifications: SpecificationCategory[]
  downloads: { name: string; url: string }[]
  relatedProducts: { name: string; description: string; url: string }[]
}

export function ProductDetail({
  title,
  subtitle,
  image,
  description,
  features,
  specifications,
  downloads,
  relatedProducts,
}: ProductDetailProps) {

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.toLowerCase().endsWith('.pdf')) {
      e.preventDefault()
      window.open(url, '_blank')
    }
  }
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Product Image */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <div className="relative h-[400px]">{image}</div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-[#089c9c] font-medium mb-6">{subtitle}</p>

            {features && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  {features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {description && (
              <div className="mb-8">
                {/* <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3> */}
                <div className="text-gray-700 space-y-4">
                  {description.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              {/* <h3 className="text-xl font-bold text-gray-900 mb-4">Downloads</h3> */}
              <div className="flex flex-wrap gap-4">
                {downloads?.map((download, index) => (
                  <a
                    key={index}
                    href={download.url}
                    className="inline-flex items-center bg-[#089c9c] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#078787] transition-colors"
                   // download
                    onClick={(e) => handleDownloadClick(e, download.url)}
                  >
                    {download.name}
                    <Download className="w-4 h-4 ml-2" />
                  </a>
                ))}
              </div>
            </div>

            {/* Remove or comment out this section
            <a
              href="/brochures/product-brochure.pdf"
              className="inline-flex items-center bg-[#089c9c] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#078787] transition-colors"
              download
            >
              Download Brochure
              <Download className="w-4 h-4 ml-2" />
            </a>
            */}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        {/*  <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h2>

          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl overflow-hidden">
            {specifications.map((category) => (
              <div key={category.category}>
                <div className="p-4 font-medium bg-gray-100">{category.category}</div>
                {category.items.map((item) => (
                  <div key={item.name} className="grid grid-cols-2 border-b border-gray-200">
                    <div className="p-4 font-medium bg-gray-100">{item.name}</div>
                    <div className="p-4">{item.value}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Related Products */}
        {/*  <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.name}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{relatedProduct.name}</h3>
                  <p className="text-gray-600 mb-4">{relatedProduct.description}</p>
                  <a
                    href={relatedProduct.url}
                    className="text-[#089c9c] font-medium hover:text-[#078787] transition-colors"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default ProductDetail

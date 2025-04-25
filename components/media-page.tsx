"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Calendar, ChevronRight, Search, FileText } from "lucide-react"

// Sample article data
const articles = [
  {
    id: 1,
    title: "Why should India lag behind in global energy storage technologies",
    // publication: "ANI News",
    date: "January 15, 2025",
    description:
      "An article discussing India's position in global energy storage technologies and the importance of advancing in this sector for sustainable development.",
    imagetest:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Why%20should%20India%20lag%20behind%20in%20global%20energy%20storage%20technologies-uCjOLI2wqSjYwtdVhF0RrvkFX1L9jL.png",
    image: "/media/media_img1.png",
    link: "https://www.aninews.in/news/business/why-should-india-lag-behind-in-global-energy-storage-technologies20250115112858/",
  },
  {
    id: 2,
    title: "Durasol Energi: A Greener, Cleaner India",
    //publication: "Business Connect India",
    date: "2024",
    description:
      "A feature on Durasol Energi's contributions to creating a more sustainable and environmentally friendly India through innovative energy solutions.",
    imageTest:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Why%20should%20India%20lag%20behind%20in%20global%20energy%20storage%20technologies%202-mMPjERq4Bd0ZQbQyBSh0qBAg9ZFp2w.png",
    image: "/media/media_img2.png",

    link: "https://businessconnectindia.in/durasol-energi-a-greener-cleaner-india/",
  },
  {
    id: 3,
    title: "Durasol Energi Company Profile",
    // publication: "Durasol Official Publication",
    date: "October 2024",
    description:
      "A comprehensive overview of Durasol Energi's mission, vision, products, and impact in the sustainable energy sector.",
    imageTest:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Why%20should%20India%20lag%20behind%20in%20global%20energy%20storage%20technologies%203-Kp7mXfe5qCwPvdqir8R5jwFrrGbJJK.png",
    image: "/media/media_img3.png",
    link: "https://durasolenergi.com/wp-content/uploads/2024/10/DURASOL_ENERGI_400.pdf",
  },
  {
    id: 4,
    title: "Intelenergi Global",
    // publication: "Corporate Publication",
    date: "December 2022",
    description:
      "An in-depth look at Intelenergi Global's operations, innovations, and market presence in the energy sector.",
    imageTest: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/51-KhoJ14CYBeSMNI62mC7Tr5IrhhXKFO.png",
    image: "/media/media_img4.png",
    link: "https://durasolenergi.com/wp-content/uploads/2022/12/Intelenergi-Global-PDF-1-1.pdf",
  },
  {
    id: 5,
    title: "Indian Achievers World Feature",
    // publication: "Indian Achievers World",
    date: "June 2022",
    description:
      "A special feature highlighting Durasol Energi's achievements and contributions to India's renewable energy landscape.",
    imageTest: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/45-LdIXv5bOCBeMYQgIU73TU8GWEiczI6.png",
    image: "/media/media_img5.png",
    link: "https://durasolenergi.com/wp-content/uploads/2022/07/Indian_Acievers_World_June22_compressed.pdf",
  },
]

export default function MediaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredArticles, setFilteredArticles] = useState(articles)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)

    if (term.trim() === "") {
      setFilteredArticles(articles)
    } else {
      const filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(term.toLowerCase()) ||
          //article.publication.toLowerCase().includes(term.toLowerCase()) ||
          article.description
            .toLowerCase()
            .includes(term.toLowerCase()),
      )
      setFilteredArticles(filtered)
    }
  }

  const handleArticleClick = (link: string) => {
    // Check if the link is a PDF
    if (link.endsWith(".pdf")) {
      window.open(link, "_blank")
    } else {
      window.open(link, "_blank")
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        {/* Direct image with explicit styling */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/media-dMC5oWOu2TlFuJVeJaOoXK62HA6eHN.png"
            alt="Media Digital Wall"
            className="w-full h-full object-cover"
            style={{
              display: "block",
              imageRendering: "crisp-edges",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Media</h1>
            <p className="text-xl md:text-2xl text-white">
              News, articles, and updates about Durasol Energi's journey in sustainable energy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Published Articles Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#089c9c] mb-6 text-center">Published Articles</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Stay updated with the latest news, press mentions, and published articles featuring Durasol. Our journey
              in transforming industrial energy solutions is regularly covered in various leading publications. Browse
              through the articles below to learn more about our innovations, impact, and industry insights.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#089c9c] focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div
                    className="relative h-64 md:h-72 cursor-pointer"
                    onClick={() => handleArticleClick(article.link)}
                  >
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      {/* <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-[#089c9c]">
                        {article.publication}
                      </span> */}
                      {article.link.endsWith(".pdf") && (
                        <span className="absolute top-4 right-4 inline-flex items-center px-3 py-1 bg-red-500/90 text-white rounded-full text-xs font-medium">
                          <FileText className="w-3 h-3 mr-1" />
                          PDF
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {article.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                    <button
                      onClick={() => handleArticleClick(article.link)}
                      className="inline-flex items-center text-[#089c9c] hover:text-[#078787] font-medium"
                    >
                      {article.link.endsWith(".pdf") ? "View PDF" : "Read Full Article"}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Press Releases & Media Kit Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#089c9c] mb-6">Press Releases & Media Kit</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Access our latest press releases, brand assets, and media resources. For press inquiries, please contact
              our media relations team.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Press Releases</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest announcements and news from Durasol Energi.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#089c9c] text-white rounded-lg hover:bg-[#078787] transition-colors"
              >
                View Press Releases
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Media Kit</h3>
              <p className="text-gray-600 mb-6">
                Download our brand assets, logos, executive photos, and product images for media use.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#089c9c] text-white rounded-lg hover:bg-[#078787] transition-colors"
              >
                Download Media Kit
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

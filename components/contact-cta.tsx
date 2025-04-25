"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build a Greener Future Together</h2>
          <p className="text-xl mb-8">
            Looking for reliable and sustainable industrial energy solutions?
            <br />
            We're here to help.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              <span className="text-lg">+91 8826022335 | 1800 88 95095 (Toll Free)</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              <span className="text-lg">info@durasolenergi.com</span>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-[#089c9c] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA

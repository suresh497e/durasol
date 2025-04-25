"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"

interface EnhancedWhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export default function EnhancedWhatsAppButton({
  phoneNumber = "+919999999999",
  message = "Hello! I'd like to know more about Durasol products.",
}: EnhancedWhatsAppButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  // Format phone number by removing any non-digit characters
  const formattedNumber = phoneNumber ? phoneNumber.replace(/\D/g, "") : ""

  // Create WhatsApp URL with phone number and optional message
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg mb-2 whitespace-nowrap"
          >
            <div className="text-sm font-medium">Need help? Chat with us!</div>
            <div className="text-xs text-gray-500">{phoneNumber}</div>
            <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="ml-2 hidden md:inline">Chat with us</span>
      </motion.a>
    </div>
  )
}

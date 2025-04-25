"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export default function WhatsAppButton({
  phoneNumber = "+919999999999",
  message = "Hello! I'd like to know more about Durasol products.",
}: WhatsAppButtonProps) {
  // Format phone number by removing any non-digit characters
  const formattedNumber = phoneNumber ? phoneNumber.replace(/\D/g, "") : ""

  // Create WhatsApp URL with phone number and optional message
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="ml-2 hidden md:inline">Chat with us</span>
    </motion.a>
  )
}

import Navbar from "@/components/navbar"
import CSR from "@/components/csr"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function CSRPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CSR />
      <Footer />
      <WhatsAppButton phoneNumber="+15551234567" />
    </main>
  )
}

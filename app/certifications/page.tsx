import Navbar from "@/components/navbar"
//import Certifications from "@/components/certifications"
import Certifications from "@/components/certifications-original"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function CertificationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Certifications />
      <Footer />
      <WhatsAppButton phoneNumber="+919999999999" />
    </main>
  )
}

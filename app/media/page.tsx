import Navbar from "@/components/navbar"
import MediaPage from "@/components/media-page"
import CompactAmbassadorCarousel from "@/components/compact-ambassador-carousel"
import Footer from "@/components/footer"

export default function Media() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <MediaPage />
      <CompactAmbassadorCarousel />
      <Footer />
    </main>
  )
}

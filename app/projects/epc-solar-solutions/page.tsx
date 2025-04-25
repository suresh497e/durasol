import Navbar from "@/components/navbar"
import EPCSolarSolutions from "@/components/projects/epc-solar-solutions"
import Footer from "@/components/footer"

export const metadata = {
  title: "EPC Solar Solutions | Durasol Energi",
  description: "End-to-end Engineering, Procurement, and Construction services for utility-scale solar power plants.",
}

export default function EPCSolarSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <EPCSolarSolutions />
      <Footer />
    </main>
  )
}

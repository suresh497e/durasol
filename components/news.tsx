import { Newspaper, TrendingUp, Handshake } from "lucide-react"

const newsItems = [
  {
    icon: Newspaper,
    title: "Next-Gen Solar Storage Unveiled",
    description: "Pushing the boundaries of energy innovation.",
  },
  {
    icon: TrendingUp,
    title: "Record Growth in 2023",
    description: "Expanding reach and impact worldwide.",
  },
  {
    icon: Handshake,
    title: "New Strategic Partnerships",
    description: "Strengthening global sustainability efforts.",
  },
]

export default function News() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">Latest News</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <item.icon className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

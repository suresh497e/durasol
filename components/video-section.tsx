"use client"

export default function VideoSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/KGAkZODqwF4?autoplay=1&mute=1&loop=1&playlist=KGAkZODqwF4&controls=0&showinfo=0&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
        />
      </div>

      {/* Overlay - Keeping a subtle overlay for better video visibility but removing text */}
      <div className="absolute inset-0 bg-blue-900/30" />
    </section>
  )
}

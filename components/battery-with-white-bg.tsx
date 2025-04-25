import Image from "next/image"

export default function BatteryWithWhiteBg() {
  return (
    <div className="relative w-full h-full bg-white flex items-center justify-center">
      {/* This div creates a white background container for the battery image */}
      <div className="relative w-[80%] h-[80%] max-w-md bg-white">
        <Image
          src="/images/battery-image.png"
          alt="Durasol Automotive Battery"
          fill
          className="object-contain mix-blend-multiply" // Using mix-blend-multiply to help with background
          sizes="(max-width: 768px) 80vw, 50vw"
          priority
        />
      </div>
    </div>
  )
}

import { Battery } from "lucide-react"

export default function BatteryImage({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-4">
        <div className="bg-primary-50 p-6 rounded-full mb-4">
          <Battery className="w-16 h-16 md:w-24 md:h-24 text-[#089c9c]" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-2">Durasol Batteries</h3>
        <p className="text-sm md:text-base text-gray-600 text-center max-w-md">
          High-performance energy storage solutions with long-lasting power and reliability
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="bg-primary-50 p-2 rounded text-center">
            <span className="text-xs font-medium text-primary-700">Tubular</span>
          </div>
          <div className="bg-primary-50 p-2 rounded text-center">
            <span className="text-xs font-medium text-primary-700">SMF</span>
          </div>
          <div className="bg-primary-50 p-2 rounded text-center">
            <span className="text-xs font-medium text-primary-700">Automotive</span>
          </div>
        </div>
      </div>
    </div>
  )
}

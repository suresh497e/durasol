export function InstallationDiagram() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Installation Diagram</h2>

        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <div className="text-lg font-semibold mb-2">FROM GRID / MAINS SUPPLY</div>
                  <div className="w-full h-12 relative">
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                      <path d="M50,0 L50,50" stroke="#089c9c" strokeWidth="2" />
                      <path d="M50,50 L100,50" stroke="#089c9c" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 bg-[#089c9c] text-white rounded-lg flex items-center justify-center p-4 mb-4">
                    <div className="text-center">
                      <div className="font-bold">DURASOL</div>
                      <div className="text-xs">PURE SINE WAVE UPS</div>
                    </div>
                  </div>
                  <div className="w-full h-12 relative">
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                      <path d="M50,0 L50,50" stroke="#089c9c" strokeWidth="2" />
                      <path d="M50,50 L100,50" stroke="#089c9c" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                  <div className="text-lg font-semibold mb-2">TO LOAD</div>
                  <div className="w-full h-12 relative">
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                      <path d="M0,50 L50,50" stroke="#089c9c" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-8 w-full">
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
                  <div className="w-32 h-24 border-2 border-[#089c9c] rounded-lg flex items-center justify-center p-2 mx-4">
                    <div className="text-center">
                      <div className="font-semibold">BATTERY</div>
                    </div>
                  </div>
                  <div className="w-32 h-24 border-2 border-[#089c9c] rounded-lg flex items-center justify-center p-2 mx-4">
                    <div className="text-center">
                      <div className="font-semibold">BATTERY</div>
                      <div className="text-xs text-gray-500">(For 24V models)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-sm text-gray-600 text-center">
                <p>
                  *Note: Please connect one battery for 12V system and two batteries in series for 24V system and four
                  batteries for 48V system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

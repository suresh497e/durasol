import { Download, FileText } from "lucide-react"

interface BrochureDownloadProps {
  title: string
  description: string
  brochureUrl: string
}

export function BrochureDownload({ title, description, brochureUrl }: BrochureDownloadProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="bg-[#089c9c]/10 p-6 rounded-full">
              <FileText className="w-12 h-12 text-[#089c9c]" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <a
                href={brochureUrl}
                className="inline-flex items-center bg-[#089c9c] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#078787] transition-colors"
                download
              >
                Download Brochure
                <Download className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

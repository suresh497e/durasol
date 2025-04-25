import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import Link from "next/link"

interface BrochureDownloadButtonProps {
  brochurePath: string
  buttonText?: string
  className?: string
}

export function BrochureDownloadButton({
  brochurePath,
  buttonText = "Download Brochure",
  className = "",
}: BrochureDownloadButtonProps) {
  return (
    <Link href={brochurePath}>
      <Button className={`flex items-center gap-2 ${className}`} variant="outline">
        <FileDown size={18} />
        {buttonText}
      </Button>
    </Link>
  )
}

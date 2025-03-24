import Link from "next/link"
import type { ReactNode } from "react"

interface DocHeaderProps {
  title: string
  color: string
  icon: ReactNode
}

export default function DocHeader({ title, color, icon }: DocHeaderProps) {
  return (
    <header className="border-b" style={{ borderColor: `${color}40` }}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-start">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full" style={{ backgroundColor: `${color}40` }}>
          <div className="p-1 rounded-full text-white">
            {icon}
          </div>
          <span className="font-medium text-white">{title} Documentation</span>
        </div>
      </div>
    </header>
  )
}
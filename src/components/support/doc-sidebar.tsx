"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarItem {
  title: string
  links: {
    title: string
    href: string
  }[]
}

interface DocSidebarProps {
  items: SidebarItem[]
  className?: string
  color: string
}

export default function DocSidebar({ items, className, color }: DocSidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    items.reduce((acc, item) => ({ ...acc, [item.title]: true }), {}),
  )

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className={cn("space-y-6 text-white", className)}>
      {items.map((item) => (
        <div key={item.title} className="space-y-2" style={{ color: `${color}`}}>
          <button
            onClick={() => toggleSection(item.title)}
            className="flex w-full items-center justify-between text-sm font-medium"
          >
            {item.title}
            <ChevronDown className={cn("h-4 w-4 transition-transform", openSections[item.title] ? "rotate-180" : "")} />
          </button>
          {openSections[item.title] && (
            <div className="ml-4 space-y-1 pt-1">
              {item.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-1 text-sm text-muted-foreground hover:text-[#5328f3]"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}


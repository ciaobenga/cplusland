"use client"

import { useState, type FormEvent } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Define the types of content that can be searched
interface SearchResult {
  id: string
  title: string
  description: string
  type: "integration" | "faq" | "article"
  url: string
}

// Sample data for search results
const searchableContent: SearchResult[] = [
  {
    id: "stripe-1",
    title: "Connecting your Stripe account",
    description: "Learn how to connect and configure your Stripe integration",
    type: "integration",
    url: "/support/stripe",
  },
  {
    id: "stripe-2",
    title: "Troubleshooting Stripe webhooks",
    description: "Common issues with Stripe webhook configuration and solutions",
    type: "integration",
    url: "/support/stripe",
  },
  {
    id: "asana-1",
    title: "Asana project synchronization",
    description: "How to sync your Asana projects with our platform",
    type: "integration",
    url: "/support/asana#sync",
  },
  {
    id: "slack-1",
    title: "Setting up Slack notifications",
    description: "Configure automated notifications to your Slack channels",
    type: "integration",
    url: "/support/slack/notifications",
  },
  {
    id: "faq-1",
    title: "How do I connect my Stripe account?",
    description: "Step-by-step guide to connecting your Stripe account",
    type: "faq",
    url: "/support/faq#stripe-connection",
  },
  {
    id: "faq-2",
    title: "Can I use multiple payment processors?",
    description: "Information about using multiple payment integrations simultaneously",
    type: "faq",
    url: "/support",
  },
  {
    id: "article-1",
    title: "Best practices for integration security",
    description: "Learn how to secure your third-party integrations",
    type: "article",
    url: "/support",
  },
  {
    id: "article-2",
    title: "Optimizing API usage with rate limits",
    description: "How to work efficiently with API rate limits",
    type: "article",
    url: "/support",
  },
]

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) {
      setSearchResults([])
      setShowResults(false)
      return
    }

    setIsSearching(true)

    // Simulate search delay
    setTimeout(() => {
      const query = searchQuery.toLowerCase()
      const results = searchableContent.filter(
        (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
      )

      setSearchResults(results)
      setShowResults(true)
      setIsSearching(false)
    }, 300)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
    setShowResults(false)
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "integration":
        return "Integration"
      case "faq":
        return "FAQ"
      case "article":
        return "Article"
      default:
        return "Resource"
    }
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for help..."
          className="pl-10 pr-16 py-6 w-full text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => {
            if (searchResults.length > 0) {
              setShowResults(true)
            }
          }}
        />
        {searchQuery && (
          <Button type="button" variant="ghost" size="icon" className="absolute right-12 top-2" onClick={clearSearch}>
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
        <Button type="submit" className="absolute bg-[#5328f3] hover:bg-[#5634ce] right-2 top-2">
          Search
        </Button>
      </form>

      {showResults && (
        <div className="absolute z-10 mt-2 w-full bg-background border rounded-md shadow-lg max-h-[70vh] overflow-y-auto">
          <div className="p-4 border-b">
            <p className="text-sm text-muted-foreground">
              {searchResults.length === 0
                ? "No results found"
                : `Found ${searchResults.length} result${searchResults.length === 1 ? "" : "s"}`}
            </p>
          </div>

          {searchResults.length > 0 && (
            <ul className="divide-y">
              {searchResults.map((result) => (
                <li key={result.id} className="p-4 hover:bg-muted transition-colors">
                  <Link href={result.url} className="block">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium">{result.title}</h3>
                      <span className="text-xs bg-muted-foreground/20 text-muted-foreground px-2 py-1 rounded">
                        {getTypeLabel(result.type)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
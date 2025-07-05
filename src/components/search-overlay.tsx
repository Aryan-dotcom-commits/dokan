"use client"

import { useState, useEffect } from "react"
import { Search, X, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchOverlayProps {
  onClose: () => void
}

const trendingSearches = ["Wireless Headphones", "Smart Watch", "Minimalist Lamp", "Cotton T-Shirt", "Coffee Mug"]

const recentSearches = ["Premium Audio", "Sustainable Fashion", "Home Decor"]

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Prevent body scroll when overlay is open
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Navigate to products page with search query
      window.location.href = `/products?search=${encodeURIComponent(query.trim())}`
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md" onClick={onClose} />

      {/* Search Container */}
      <div className="relative w-full max-w-2xl mx-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20">
        <div className="p-6">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(searchQuery)
                }
              }}
              className="pl-12 pr-12 py-4 text-lg border-0 bg-gray-50/50 focus:bg-white/80 transition-colors"
              autoFocus
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search Suggestions */}
          <div className="space-y-6">
            {/* Trending Searches */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-gray-500" />
                <h3 className="text-sm font-medium text-gray-700">Trending</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Searches</h3>
              <div className="space-y-2">
                {recentSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg text-left transition-colors"
                  >
                    <Search className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">{term}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex gap-2 text-xs text-gray-500">
              <span>Press</span>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-600">Enter</kbd>
              <span>to search</span>
              <span className="mx-2">•</span>
              <span>Press</span>
              <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-600">Esc</kbd>
              <span>to close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

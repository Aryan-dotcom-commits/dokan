"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Menu, X, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const collections = [
  {
    name: "New Arrivals",
    href: "/products?collection=new-arrivals",
    description: "Latest products",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Best Sellers",
    href: "/products?collection=best-sellers",
    description: "Most popular items",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Electronics",
    href: "/products?category=electronics",
    description: "Tech & gadgets",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Fashion",
    href: "/products?category=fashion",
    description: "Clothing & accessories",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Home & Living",
    href: "/products?category=home",
    description: "Furniture & decor",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Sustainable",
    href: "/products?collection=sustainable",
    description: "Eco-friendly products",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()
  const cartItemCount = 2 // Mock cart count
  const wishlistCount = 5 // Mock wishlist count

  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "New In", href: "/products?collection=new-arrivals" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsCollectionsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCollectionsOpen(false)
    }, 150) // Small delay to allow mouse to move to dropdown
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo and Navigation */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <Link href="/" className="text-2xl font-semibold tracking-tight text-black">
              Dokan
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href ? "text-black" : "text-slate-600 hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Collections Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Button variant="ghost" className="text-sm font-medium text-slate-600 hover:text-black p-0 h-auto">
                  Collections
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>

                {/* Mega Menu */}
                {isCollectionsOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                    <div className="w-[800px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-8">
                      <div className="grid grid-cols-3 gap-6">
                        {collections.map((collection) => (
                          <Link
                            key={collection.name}
                            href={collection.href}
                            className="group block p-4 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-slate-100">
                              <div
                                className="w-full h-full bg-slate-100 group-hover:scale-105 transition-transform duration-300"
                                style={{
                                  backgroundImage: `url(${collection.image})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                              />
                            </div>
                            <h3 className="font-medium text-slate-900 mb-1 group-hover:text-black">
                              {collection.name}
                            </h3>
                            <p className="text-sm text-slate-600">{collection.description}</p>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                        <Link href="/products">
                          <Button variant="outline" className="px-8 border-slate-300 hover:bg-slate-50">
                            View All Products
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Search Bar and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 bg-slate-50 border-slate-200 focus:bg-white focus:border-slate-400 transition-colors"
              />
            </form>

            {/* Icons */}
            <div className="flex items-center space-x-2">
              <Link href="/wishlist" className="relative p-2 hover:bg-slate-100 rounded-full transition-colors">
                <Heart className="h-5 w-5 text-slate-600 hover:text-red-500" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-black text-white">
                    {wishlistCount}
                  </Badge>
                )}
              </Link>
              <Link href="/cart" className="relative p-2 hover:bg-slate-100 rounded-full transition-colors">
                <ShoppingCart className="h-5 w-5 text-slate-600 hover:text-black" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-black text-white">
                    {cartItemCount}
                  </Badge>
                )}
              </Link>
              <Link href="/profile" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <User className="h-5 w-5 text-slate-600 hover:text-black" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

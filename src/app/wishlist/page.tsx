"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Trash2, Share2, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface WishlistItem {
  id: number
  title: string
  price: number
  originalPrice?: number
  inStock: boolean
  image: string
  brand: string
  addedDate: string
  category: string
}

// Mock wishlist data
const wishlistItems: WishlistItem[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 349.99,
    inStock: true,
    image: "/placeholder.svg?height=300&width=300",
    brand: "AudioTech",
    addedDate: "2024-01-15",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.99,
    inStock: true,
    image: "/placeholder.svg?height=300&width=300",
    brand: "FitPro",
    addedDate: "2024-01-12",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Minimalist Desk Lamp",
    price: 89.99,
    inStock: false,
    image: "/placeholder.svg?height=300&width=300",
    brand: "LightCo",
    addedDate: "2024-01-10",
    category: "Home",
  },
  {
    id: 4,
    title: "Organic Cotton T-Shirt",
    price: 49.99,
    inStock: true,
    image: "/placeholder.svg?height=300&width=300",
    brand: "EcoWear",
    addedDate: "2024-01-08",
    category: "Fashion",
  },
  {
    id: 5,
    title: "Ceramic Coffee Mug",
    price: 24.99,
    inStock: true,
    image: "/placeholder.svg?height=300&width=300",
    brand: "BrewMaster",
    addedDate: "2024-01-05",
    category: "Home",
  },
]

export default function WishlistPage() {
  const [items, setItems] = useState<WishlistItem[]>(wishlistItems)
  const [sortBy, setSortBy] = useState("newest")
  const [filterBy, setFilterBy] = useState("all")

  const removeFromWishlist = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const addToCart = (id: number) => {
    // Add to cart logic here
    console.log("Added to cart:", id)
  }

  const filteredItems = items.filter((item) => {
    if (filterBy === "all") return true
    if (filterBy === "in-stock") return item.inStock
    if (filterBy === "out-of-stock") return !item.inStock
    return item.category.toLowerCase() === filterBy
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
      case "oldest":
        return new Date(a.addedDate).getTime() - new Date(b.addedDate).getTime()
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
              <Heart className="h-12 w-12 text-slate-400" />
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 mb-4">Your wishlist is empty</h1>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Start adding products you love to your wishlist and keep track of items you want to buy later.
            </p>
            <Link href="/products">
              <Button className="bg-black hover:bg-slate-800 text-white">Start Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900 mb-2">My Wishlist</h1>
              <p className="text-slate-600">{items.length} items saved for later</p>
            </div>
            <Button variant="outline" className="flex items-center gap-2 border-slate-300">
              <Share2 className="h-4 w-4" />
              Share Wishlist
            </Button>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">Filter:</span>
              </div>
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Items</SelectItem>
                  <SelectItem value="in-stock">In Stock</SelectItem>
                  <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="home">Home</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-slate-700">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Sale Badge */}
                {item.originalPrice && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-red-500 text-white">Sale</Badge>
                  </div>
                )}

                {/* Stock Status */}
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="secondary" className="bg-white/90 text-slate-900">
                      Out of Stock
                    </Badge>
                  </div>
                )}

                {/* Remove Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-slate-600 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <p className="text-sm text-slate-500 mb-1">{item.brand}</p>
                  <h3 className="font-medium text-slate-900 mb-2 line-clamp-2">{item.title}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-semibold text-slate-900">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">${item.originalPrice}</span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500">Added {new Date(item.addedDate).toLocaleDateString()}</p>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => addToCart(item.id)}
                    disabled={!item.inStock}
                    className="flex-1 bg-black hover:bg-slate-800 text-white disabled:bg-slate-300"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeFromWishlist(item.id)}
                    className="border-slate-300 hover:bg-red-50 hover:border-red-300 hover:text-red-600"
                  >
                    <Heart className="h-4 w-4 fill-current" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                onClick={() => {
                  const inStockItems = items.filter((item) => item.inStock)
                  inStockItems.forEach((item) => addToCart(item.id))
                }}
                className="border-slate-300 hover:bg-slate-50"
              >
                Add All In-Stock to Cart
              </Button>
              <Button
                variant="outline"
                onClick={() => setItems([])}
                className="border-red-300 text-red-700 hover:bg-red-50"
              >
                Clear Wishlist
              </Button>
              <Link href="/products">
                <Button variant="outline" className="border-slate-300">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

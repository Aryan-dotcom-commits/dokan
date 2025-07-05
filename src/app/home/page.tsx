import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Star, TrendingUp, Clock, Gift, Zap, Package, Users, Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"

// Mock product data
const featuredProducts = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300",
    brand: "AudioTech",
    inStock: true,
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.99,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    brand: "FitPro",
    inStock: true,
  },
  {
    id: 3,
    title: "Minimalist Desk Lamp",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 56,
    image: "/placeholder.svg?height=300&width=300",
    brand: "LightCo",
    inStock: true,
  },
  {
    id: 4,
    title: "Organic Cotton T-Shirt",
    price: 49.99,
    rating: 4.5,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    brand: "EcoWear",
    inStock: true,
  },
  {
    id: 5,
    title: "Ceramic Coffee Mug",
    price: 24.99,
    rating: 4.9,
    reviews: 78,
    image: "/placeholder.svg?height=300&width=300",
    brand: "BrewMaster",
    inStock: true,
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviews: 145,
    image: "/placeholder.svg?height=300&width=300",
    brand: "SoundWave",
    inStock: true,
  },
  {
    id: 7,
    title: "Wireless Phone Charger",
    price: 39.99,
    rating: 4.3,
    reviews: 92,
    image: "/placeholder.svg?height=300&width=300",
    brand: "ChargeTech",
    inStock: true,
  },
  {
    id: 8,
    title: "Stainless Steel Water Bottle",
    price: 34.99,
    rating: 4.6,
    reviews: 167,
    image: "/placeholder.svg?height=300&width=300",
    brand: "HydroFlow",
    inStock: true,
  },
]

const trendingProducts = [
  {
    id: 9,
    title: "Gaming Mechanical Keyboard",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 234,
    image: "/placeholder.svg?height=400&width=600",
    brand: "GameTech",
    inStock: true,
  },
  {
    id: 10,
    title: "4K Webcam",
    price: 129.99,
    rating: 4.5,
    reviews: 156,
    image: "/placeholder.svg?height=400&width=600",
    brand: "StreamPro",
    inStock: true,
  },
  {
    id: 11,
    title: "Ergonomic Office Chair",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg?height=400&width=600",
    brand: "ComfortSeating",
    inStock: true,
  },
  {
    id: 12,
    title: "Smart Home Hub",
    price: 99.99,
    rating: 4.4,
    reviews: 178,
    image: "/placeholder.svg?height=400&width=600",
    brand: "SmartLife",
    inStock: true,
  },
  {
    id: 13,
    title: "Portable SSD Drive",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.9,
    reviews: 267,
    image: "/placeholder.svg?height=400&width=600",
    brand: "DataVault",
    inStock: true,
  },
  {
    id: 14,
    title: "Noise Cancelling Earbuds",
    price: 189.99,
    rating: 4.6,
    reviews: 145,
    image: "/placeholder.svg?height=400&width=600",
    brand: "SilentSound",
    inStock: true,
  },
]

const bestSellers = [
  {
    id: 15,
    title: "Smartphone Case",
    price: 19.99,
    rating: 4.3,
    reviews: 456,
    image: "/placeholder.svg?height=200&width=200",
    brand: "ProtectTech",
    inStock: true,
  },
  {
    id: 16,
    title: "USB-C Cable",
    price: 14.99,
    rating: 4.7,
    reviews: 789,
    image: "/placeholder.svg?height=200&width=200",
    brand: "ConnectPro",
    inStock: true,
  },
  {
    id: 17,
    title: "Screen Cleaner Kit",
    price: 12.99,
    rating: 4.5,
    reviews: 234,
    image: "/placeholder.svg?height=200&width=200",
    brand: "CleanTech",
    inStock: true,
  },
  {
    id: 18,
    title: "Phone Stand",
    price: 16.99,
    rating: 4.4,
    reviews: 345,
    image: "/placeholder.svg?height=200&width=200",
    brand: "StandPro",
    inStock: true,
  },
  {
    id: 19,
    title: "Laptop Sleeve",
    price: 29.99,
    rating: 4.6,
    reviews: 167,
    image: "/placeholder.svg?height=200&width=200",
    brand: "ProtectCase",
    inStock: true,
  },
  {
    id: 20,
    title: "Wireless Mouse",
    price: 39.99,
    rating: 4.5,
    reviews: 278,
    image: "/placeholder.svg?height=200&width=200",
    brand: "ClickTech",
    inStock: true,
  },
  {
    id: 21,
    title: "Desk Organizer",
    price: 24.99,
    rating: 4.8,
    reviews: 123,
    image: "/placeholder.svg?height=200&width=200",
    brand: "OrganizePro",
    inStock: true,
  },
  {
    id: 22,
    title: "LED Strip Lights",
    price: 22.99,
    rating: 4.2,
    reviews: 189,
    image: "/placeholder.svg?height=200&width=200",
    brand: "LightStrip",
    inStock: true,
  },
]

function ProductCard({ product, size = "default" }: { product: any; size?: "default" | "small" | "large" }) {
  const cardClass = size === "small" ? "p-4" : size === "large" ? "p-6" : "p-6"
  const imageClass = size === "small" ? "aspect-square" : size === "large" ? "aspect-video" : "aspect-square"

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className={`relative ${imageClass} overflow-hidden`}>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.originalPrice && (
          <div className="absolute top-3 left-3">
            <span className="bg-slate-900 text-white text-xs font-medium px-2 py-1 rounded-full">
              Save ${(product.originalPrice - product.price).toFixed(0)}
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-slate-600 hover:text-slate-900" />
          </button>
        </div>
      </div>

      <div className={cardClass}>
        <p className="text-sm text-slate-500 mb-1">{product.brand}</p>
        <h3 className="font-medium text-slate-900 mb-2 line-clamp-2">{product.title}</h3>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-slate-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-slate-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-slate-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <Button size="sm" className="bg-slate-800 hover:bg-slate-700 text-white px-4">
            <ShoppingCart className="h-3 w-3 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative h-[500px] bg-gradient-to-r from-slate-800 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-slate-600/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white/90 mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Summer Clearance</h1>
            <p className="text-xl mb-8 text-white/90">Up to 70% off on thousands of items. Don't miss out!</p>
            <Link href="/products">
              <Button
                size="lg"
                className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-3 rounded-full font-semibold"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Shop by Category</h2>
            <p className="text-slate-600">Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Electronics", count: "2.5k+ items" },
              { name: "Fashion", count: "4.2k+ items" },
              { name: "Home & Living", count: "1.8k+ items" },
              { name: "Sports & Fitness", count: "950+ items" },
            ].map((category) => (
              <Link key={category.name} href={`/products?category=${category.name.toLowerCase()}`}>
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-slate-200">
                  <div className="w-16 h-16 bg-slate-700 rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-slate-500">{category.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Products</h2>
              <p className="text-slate-600">Handpicked items just for you</p>
            </div>
            <Link href="/products">
              <Button
                variant="outline"
                className="rounded-full bg-transparent border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-6 h-6" />
                <span className="text-lg font-semibold">Flash Sale</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">24 Hours Only!</h2>
              <p className="text-xl mb-8">Get up to 50% off on electronics</p>
              <Link href="/products?sale=flash">
                <Button size="lg" className="bg-white text-slate-700 hover:bg-slate-100 px-8 rounded-full">
                  Shop Flash Sale
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-slate-700" />
            <h2 className="text-3xl font-bold text-slate-900">Trending Now</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers - Max 4 per row */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-6 h-6 text-slate-700 fill-current" />
            <h2 className="text-3xl font-bold text-slate-900">Best Sellers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} size="small" />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Gift className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Special Offers</h2>
            <p className="text-slate-600">Don't miss out on these amazing deals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-700 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
              <Package className="w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Free Shipping</h3>
              <p className="mb-6">On orders over $50. No minimum purchase required.</p>
              <Button className="bg-white text-slate-700 hover:bg-slate-100 rounded-full">Learn More</Button>
            </div>

            <div className="bg-slate-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
              <Users className="w-8 h-8 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Member Exclusive</h3>
              <p className="mb-6">Get 15% off your first purchase as a new member.</p>
              <Button className="bg-white text-slate-600 hover:bg-slate-100 rounded-full">Join Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

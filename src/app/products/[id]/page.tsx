"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Award,
  Plus,
  Minus,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

// Mock product data
const productData = {
  id: 1,
  title: "Premium Wireless Headphones",
  brand: "AudioTech",
  price: 299.99,
  originalPrice: 349.99,
  rating: 4.8,
  reviewCount: 124,
  inStock: true,
  stockCount: 15,
  description:
    "Experience premium sound quality with our flagship wireless headphones. Featuring advanced noise cancellation, 30-hour battery life, and premium materials for ultimate comfort.",
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Premium leather ear cups",
    "Bluetooth 5.0 connectivity",
    "Quick charge: 5 min = 2 hours playback",
    "Foldable design for portability",
  ],
  specifications: {
    "Driver Size": "40mm",
    "Frequency Response": "20Hz - 20kHz",
    Impedance: "32 ohms",
    Weight: "250g",
    Connectivity: "Bluetooth 5.0, 3.5mm jack",
    "Battery Life": "30 hours (ANC on), 40 hours (ANC off)",
    "Charging Time": "2 hours",
    Warranty: "2 years",
  },
  images: [
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  colors: ["Black", "White", "Silver"],
  sizes: ["One Size"],
}

// Mock reviews data
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    comment:
      "Absolutely amazing sound quality! The noise cancellation works perfectly and the battery life is incredible.",
    verified: true,
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Great headphones overall. Very comfortable for long listening sessions. Only minor complaint is they're a bit heavy.",
    verified: true,
  },
  {
    id: 3,
    name: "Emily Davis",
    rating: 5,
    date: "2024-01-08",
    comment: "Best purchase I've made this year! The sound is crystal clear and the build quality is excellent.",
    verified: true,
  },
]

// Mock recommended products
const recommendedProducts = [
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    brand: "FitPro",
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    price: 79.99,
    rating: 4.4,
    reviews: 145,
    image: "/placeholder.svg?height=300&width=300",
    brand: "SoundWave",
  },
  {
    id: 4,
    title: "Wireless Earbuds",
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.7,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    brand: "AudioTech",
  },
  {
    id: 5,
    title: "Gaming Headset",
    price: 129.99,
    rating: 4.5,
    reviews: 167,
    image: "/placeholder.svg?height=300&width=300",
    brand: "GameSound",
  },
  {
    id: 6,
    title: "Noise Cancelling Earbuds",
    price: 189.99,
    rating: 4.8,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300",
    brand: "SilentSound",
  },
  {
    id: 7,
    title: "Studio Monitor Headphones",
    price: 249.99,
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    brand: "ProAudio",
  },
]

function RecommendedProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 4
  const totalItems = recommendedProducts.length

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= totalItems ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, totalItems - itemsPerView) : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {recommendedProducts.map((product) => (
            <div key={product.id} className="w-1/4 flex-shrink-0 px-3">
              <Link href={`/products/${product.id}`}>
                <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-slate-900 text-white">
                          Save ${(product.originalPrice - product.price).toFixed(0)}
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                        <Heart className="h-4 w-4 text-slate-600 hover:text-slate-900" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
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
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-slate-300 hover:bg-white/90"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm border-slate-300 hover:bg-white/90"
        onClick={nextSlide}
        disabled={currentIndex + itemsPerView >= totalItems}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(totalItems / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / itemsPerView) === index ? "bg-slate-800" : "bg-slate-300"
            }`}
            onClick={() => setCurrentIndex(index * itemsPerView)}
          />
        ))}
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(productData.colors[0])
  const [selectedSize, setSelectedSize] = useState(productData.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted)
    // Add wishlist logic here
  }

  const handleBuyNow = () => {
    // Add to cart and redirect to checkout
    console.log("Buy now:", { productData, selectedColor, selectedSize, quantity })
    window.location.href = "/checkout"
  }

  const handleAddToCart = () => {
    // Add to cart logic
    console.log("Add to cart:", { productData, selectedColor, selectedSize, quantity })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-slate-600">
          <Link href="/products" className="hover:text-slate-900 transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link href="/products?category=electronics" className="hover:text-slate-900 transition-colors">
            Electronics
          </Link>
          <span>/</span>
          <span className="text-slate-900">{productData.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <Image
                src={productData.images[selectedImage] || "/placeholder.svg"}
                alt={productData.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg border-2 overflow-hidden transition-colors ${
                    selectedImage === index ? "border-slate-800" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${productData.title} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <p className="text-slate-600 mb-2">{productData.brand}</p>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">{productData.title}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(productData.rating) ? "text-yellow-400 fill-current" : "text-slate-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-slate-600">({productData.reviewCount} reviews)</span>
                </div>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-slate-600 hover:text-slate-900">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-slate-900">${productData.price}</span>
                {productData.originalPrice && (
                  <span className="text-xl text-slate-500 line-through">${productData.originalPrice}</span>
                )}
                {productData.originalPrice && (
                  <Badge className="bg-green-100 text-green-800">
                    Save{" "}
                    {Math.round(((productData.originalPrice - productData.price) / productData.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {productData.inStock ? (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-green-700 font-medium">In Stock</span>
                    <span className="text-slate-500">({productData.stockCount} available)</span>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-red-700 font-medium">Out of Stock</span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-slate-700 leading-relaxed">{productData.description}</p>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {/* Color Selection */}
              <div>
                <Label className="text-slate-700 font-medium mb-3 block">Color: {selectedColor}</Label>
                <div className="flex gap-3">
                  {productData.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                        selectedColor === color
                          ? "border-slate-800 bg-slate-800 text-white"
                          : "border-slate-300 hover:border-slate-400"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <Label className="text-slate-700 font-medium mb-3 block">Size</Label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {productData.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div>
                <Label className="text-slate-700 font-medium mb-3 block">Quantity</Label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="border-slate-300 hover:bg-slate-50 bg-transparent"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.min(productData.stockCount, quantity + 1))}
                    className="border-slate-300 hover:bg-slate-50 bg-transparent"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  onClick={handleBuyNow}
                  disabled={!productData.inStock}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 text-lg font-semibold"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Buy Now
                </Button>
                <Button
                  onClick={handleAddToWishlist}
                  variant="outline"
                  className={`px-6 py-3 border-slate-300 hover:bg-slate-50 bg-transparent ${
                    isWishlisted ? "bg-slate-100 text-slate-900" : ""
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current text-red-500" : ""}`} />
                </Button>
              </div>
              <Button
                onClick={handleAddToCart}
                variant="outline"
                disabled={!productData.inStock}
                className="w-full border-slate-300 hover:bg-slate-50 bg-transparent py-3"
              >
                Add to Cart
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="text-center">
                <Truck className="h-6 w-6 text-slate-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 text-slate-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-slate-600 mx-auto mb-2" />
                <p className="text-sm text-slate-600">2-Year Warranty</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({productData.reviewCount})</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {productData.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Award className="h-4 w-4 text-slate-600 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(productData.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-slate-100">
                        <span className="font-medium text-slate-700">{key}</span>
                        <span className="text-slate-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-slate-900">Customer Reviews</h3>
                    <Button variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                      Write a Review
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-slate-100 pb-6 last:border-b-0">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                              <span className="text-slate-600 font-medium">{review.name[0]}</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">{review.name}</p>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "text-yellow-400 fill-current" : "text-slate-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                {review.verified && (
                                  <Badge variant="secondary" className="text-xs">
                                    Verified Purchase
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-slate-500">{review.date}</span>
                        </div>
                        <p className="text-slate-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Recommended Products */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recommended Products</h2>
            <p className="text-slate-600">You might also like these products</p>
          </div>
          <RecommendedProductsCarousel />
        </div>
      </div>
    </div>
  )
}

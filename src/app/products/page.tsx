"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ProductCard from "@/components/product-card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Mock data - replace with your API calls
const allProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 500) + 50,
  inStock: Math.random() > 0.2,
  image: "/placeholder.svg?height=300&width=300",
  brand: ["AudioTech", "FitPro", "LightCo", "EcoWear", "BrewMaster"][Math.floor(Math.random() * 5)],
}))

const brands = ["AudioTech", "FitPro", "LightCo", "EcoWear", "BrewMaster"]

export default function ProductsPage() {
  // Get search params from URL
  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "")
  const urlSearchTerm = searchParams.get("search") || ""

  // Initialize search term from URL
  const [searchTerm, setSearchTerm] = useState(urlSearchTerm)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 500])
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 12

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesBrand && matchesPrice && matchesSearch
  })

  // Paginate products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    }
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
            {urlSearchTerm ? `Search results for "${urlSearchTerm}"` : "All Products"}
          </h1>
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:items-start lg:relative">
          {/* Filters Sidebar */}
          <div className="lg:w-64 lg:absolute lg:left-4 lg:top-8 lg:h-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-medium text-gray-900 mb-4">Brands</h3>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                      />
                      <Label htmlFor={brand} className="text-sm font-normal">
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-medium text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500}
                    min={0}
                    step={10}
                    className="w-full [&_[role=slider]]:bg-slate-800 [&_[role=slider]]:border-slate-800 [&_.range]:bg-slate-800"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                onClick={() => {
                  setSelectedBrands([])
                  setPriceRange([0, 500])
                  setSearchTerm("")
                  setCurrentPage(1)
                }}
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1 lg:ml-72">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of{" "}
                {filteredProducts.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (currentPage > 1) setCurrentPage(currentPage - 1)
                      }}
                    />
                  </PaginationItem>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = i + 1
                    return (
                      <PaginationItem key={pageNum}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === pageNum}
                          onClick={(e) => {
                            e.preventDefault()
                            setCurrentPage(pageNum)
                          }}
                        >
                          {pageNum}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  })}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

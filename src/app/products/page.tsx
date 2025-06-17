"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ProductCard from "@/components/siteComponents/productCard"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination"
import { Check } from "lucide-react"

// Mock data for now, will check after fetching the API

const allProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 500) + 50,
  inStock: Math.random() > 0.2,
  image: "/placeholder.svg?height=300&width=300",
  brand: ["AudioTech", "FitPro", "LightCo", "EcoWear", "BrewMaster"][Math.floor(Math.random() * 5)],
}))

const brands = ["AudioTech", "FitPro", "LightCo", "EcoWear", "BrewMaster"]

export default function ProductPage() 
{
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState([0, 500]);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerpage = 12;

    const filteredProducts = allProducts.filter((product) => {
        const matchBrand = selectedBrands?.length === 0 || selectedBrands?.includes(product.brand);
        const matchPrice = product.price >= priceRange[0] && product.price < priceRange[1];

        return matchBrand && matchPrice;
    })

    // Pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerpage);
    const startIndex = (currentPage - 1) * itemsPerpage;
    const paginatedPages = filteredProducts.slice(startIndex, startIndex + itemsPerpage)

    const handleBrandChange = (brands: string, checked: boolean) => {
        if (checked) setSelectedBrands([...selectedBrands, brands])
            else setSelectedBrands(selectedBrands.filter((b) => b !== brands));

        setCurrentPage(1);
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-4">
                        All Products
                    </h1>

                    <Input 
                        placeholder="Search Products..."
                        className="max-w-md"
                    />
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg-items-center lg:relative">
                    {/** Sidebar Filters */}
                    <div className="lg:w-64 lg:absolute lg:left-4 lg:top-8 lg:h-auto">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg border">
                                <h3 className="font-medium text-gray-900 mb-4"> Brands </h3>
                                <div className="space-y-3">
                                    {brands.map((brand) => (
                                        <div key={brand} className="flex intems-center space-x-2">
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

                            {/** Price Range filter */}
                            <div className="bg-white p-6 rounded-lg border">
                                <h3 className="font-medium text-gray-900 mb-4"> Price Range </h3>
                                <div className="space-y-4">
                                    <Slider 
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                        max={500}
                                        min={0}
                                        step={10}
                                        className="w-full"
                                    />

                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>${priceRange[0]}</span>
                                        <span>${priceRange[1]}</span>
                                    </div>
                                </div>
                            </div>

                            <Button variant="outline" onClick={() => {
                                setSelectedBrands([])
                                setPriceRange([0, 500])
                                setCurrentPage(1)
                            }}> Clear Filters </Button>
                        </div>
                    </div>

                    {/** Products Grid */}
                    <div className="flex-1 lg:ml-72">
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-gray-600">
                                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerpage, filteredProducts.length)} of{" "}
                                {filteredProducts.length} products
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {paginatedPages.map((product) => (
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
    );
}

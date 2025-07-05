"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Upload, Package, DollarSign, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface ProductFormData {
  // Basic Info
  name: string
  description: string
  category: string
  brand: string

  // Pricing & Inventory
  price: string
  comparePrice: string
  costPerItem: string
  stock: string
  sku: string
  trackQuantity: boolean

  // Shipping
  weight: string
  dimensions: {
    length: string
    width: string
    height: string
  }

  // Images & Media
  images: File[]

  // SEO & Visibility
  seoTitle: string
  seoDescription: string
  tags: string[]
  status: string
}

const categories = [
  "Electronics",
  "Fashion",
  "Home & Living",
  "Sports & Fitness",
  "Books",
  "Beauty & Health",
  "Automotive",
  "Toys & Games",
]

export default function AddProductPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    comparePrice: "",
    costPerItem: "",
    stock: "",
    sku: "",
    trackQuantity: true,
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    images: [],
    seoTitle: "",
    seoDescription: "",
    tags: [],
    status: "draft",
  })

  const totalSteps = 4

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Product data:", formData)
    // Redirect back to dashboard
    window.location.href = "/vendor/dashboard"
  }

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const updateNestedFormData = (parent: string, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...((prev[parent as keyof ProductFormData] as object) || {}),
        [field]: value,
      },
    }))
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/vendor/dashboard">
            <Button variant="outline" size="icon" className="border-slate-300 hover:bg-slate-50 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Add New Product</h1>
            <p className="text-slate-600">Create a new product listing for your store</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep ? "bg-slate-800 text-white" : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step}
                </div>
                {step < totalSteps && (
                  <div className={`flex-1 h-1 mx-4 ${step < currentStep ? "bg-slate-800" : "bg-slate-200"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Basic Info</span>
            <span>Pricing</span>
            <span>Shipping</span>
            <span>Media & SEO</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-6 h-6 text-slate-700" />
                <h2 className="text-2xl font-semibold text-slate-900">Basic Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="name" className="text-slate-700 font-medium">
                    Product Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    placeholder="Enter product name"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-slate-700 font-medium">
                    Category *
                  </Label>
                  <Select value={formData.category} onValueChange={(value) => updateFormData("category", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="brand" className="text-slate-700 font-medium">
                    Brand
                  </Label>
                  <Input
                    id="brand"
                    value={formData.brand}
                    onChange={(e) => updateFormData("brand", e.target.value)}
                    placeholder="Enter brand name"
                    className="mt-2"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="description" className="text-slate-700 font-medium">
                    Description *
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => updateFormData("description", e.target.value)}
                    placeholder="Describe your product..."
                    className="mt-2 min-h-32"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Pricing & Inventory */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-slate-700" />
                <h2 className="text-2xl font-semibold text-slate-900">Pricing & Inventory</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="price" className="text-slate-700 font-medium">
                    Price *
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => updateFormData("price", e.target.value)}
                    placeholder="0.00"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="comparePrice" className="text-slate-700 font-medium">
                    Compare at Price
                  </Label>
                  <Input
                    id="comparePrice"
                    type="number"
                    step="0.01"
                    value={formData.comparePrice}
                    onChange={(e) => updateFormData("comparePrice", e.target.value)}
                    placeholder="0.00"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="costPerItem" className="text-slate-700 font-medium">
                    Cost per Item
                  </Label>
                  <Input
                    id="costPerItem"
                    type="number"
                    step="0.01"
                    value={formData.costPerItem}
                    onChange={(e) => updateFormData("costPerItem", e.target.value)}
                    placeholder="0.00"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="sku" className="text-slate-700 font-medium">
                    SKU
                  </Label>
                  <Input
                    id="sku"
                    value={formData.sku}
                    onChange={(e) => updateFormData("sku", e.target.value)}
                    placeholder="Enter SKU"
                    className="mt-2"
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox
                      id="trackQuantity"
                      checked={formData.trackQuantity}
                      onCheckedChange={(checked) => updateFormData("trackQuantity", checked)}
                    />
                    <Label htmlFor="trackQuantity" className="text-slate-700">
                      Track quantity
                    </Label>
                  </div>

                  {formData.trackQuantity && (
                    <div>
                      <Label htmlFor="stock" className="text-slate-700 font-medium">
                        Stock Quantity
                      </Label>
                      <Input
                        id="stock"
                        type="number"
                        value={formData.stock}
                        onChange={(e) => updateFormData("stock", e.target.value)}
                        placeholder="0"
                        className="mt-2"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Shipping */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-6 h-6 text-slate-700" />
                <h2 className="text-2xl font-semibold text-slate-900">Shipping Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="weight" className="text-slate-700 font-medium">
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.01"
                    value={formData.weight}
                    onChange={(e) => updateFormData("weight", e.target.value)}
                    placeholder="0.00"
                    className="mt-2"
                  />
                </div>

                <div></div>

                <div className="md:col-span-2">
                  <Label className="text-slate-700 font-medium">Dimensions (cm)</Label>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    <div>
                      <Input
                        type="number"
                        step="0.01"
                        value={formData.dimensions.length}
                        onChange={(e) => updateNestedFormData("dimensions", "length", e.target.value)}
                        placeholder="Length"
                      />
                    </div>
                    <div>
                      <Input
                        type="number"
                        step="0.01"
                        value={formData.dimensions.width}
                        onChange={(e) => updateNestedFormData("dimensions", "width", e.target.value)}
                        placeholder="Width"
                      />
                    </div>
                    <div>
                      <Input
                        type="number"
                        step="0.01"
                        value={formData.dimensions.height}
                        onChange={(e) => updateNestedFormData("dimensions", "height", e.target.value)}
                        placeholder="Height"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Media & SEO */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <ImageIcon className="w-6 h-6 text-slate-700" />
                <h2 className="text-2xl font-semibold text-slate-900">Media & SEO</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-slate-700 font-medium">Product Images</Label>
                  <div className="mt-2 border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-slate-400 transition-colors">
                    <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 mb-2">Drag and drop images here, or click to browse</p>
                    <p className="text-sm text-slate-500">PNG, JPG, GIF up to 10MB each</p>
                    <Button variant="outline" className="mt-4 border-slate-300 hover:bg-slate-50 bg-transparent">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="seoTitle" className="text-slate-700 font-medium">
                      SEO Title
                    </Label>
                    <Input
                      id="seoTitle"
                      value={formData.seoTitle}
                      onChange={(e) => updateFormData("seoTitle", e.target.value)}
                      placeholder="SEO optimized title"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="status" className="text-slate-700 font-medium">
                      Status
                    </Label>
                    <Select value={formData.status} onValueChange={(value) => updateFormData("status", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="seoDescription" className="text-slate-700 font-medium">
                      SEO Description
                    </Label>
                    <Textarea
                      id="seoDescription"
                      value={formData.seoDescription}
                      onChange={(e) => updateFormData("seoDescription", e.target.value)}
                      placeholder="SEO meta description"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 border-t border-slate-200 mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="border-slate-300 hover:bg-slate-50 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={handleNext} className="bg-slate-800 hover:bg-slate-700 text-white">
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-slate-800 hover:bg-slate-700 text-white"
              >
                {isLoading ? "Creating Product..." : "Create Product"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

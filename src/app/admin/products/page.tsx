"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const brands = ["Kitchen", "Daily Living", "Bedroom", "Lifestyle", "Cozy"]

const ProductForm = () => {
  const [selectBrand, setSelectBrand] = useState(true);
  const [formData, setFormData] = useState({
    productName: "",
    quantity: "",
    brand: "",
    price: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBrandSelect = (selectedBrand: string) => {
    setFormData(prev => ({
      ...prev,
      brand: selectedBrand
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch ('/api/products', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    });

    console.log('Sending Data', response);

    if (response.ok) {
      console.log('Bro products are added successfully.');
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg border border-slate-200 bg-white">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold text-slate-800">
              Add New Product
            </CardTitle>
            <CardDescription className="text-lg text-slate-600">
              Fill in the details to add a new product to your inventory
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="productName" className="text-sm font-semibold text-slate-700">
                  Product Name
                </label>
                <Input
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="Enter product name (e.g., Wireless Headphones)"
                  className="h-12 border-slate-300 focus:border-slate-500 focus:ring-slate-500/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="quantity" className="text-sm font-semibold text-slate-700">
                  Quantity
                </label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="Enter quantity (e.g., 50)"
                  className="h-12 border-slate-300 focus:border-slate-500 focus:ring-slate-500/20"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700">
                  Brand
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {brands.map((brand) => (
                    <Card
                      key={brand}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectBrand ? '' : ''
                      }`}
                      onClick={() => handleBrandSelect(brand)}
                    >
                      <CardContent className="p-4 text-center">
                        <span className="font-medium text-slate-800">{brand}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="price" className="text-sm font-semibold text-slate-700">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 font-medium">
                    $
                  </span>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="0.00"
                    className="h-12 pl-8 border-slate-300 focus:border-slate-500 focus:ring-slate-500/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-semibold text-slate-700">
                  Short Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter a brief description of the product (e.g., High-quality wireless headphones with noise cancellation and 30-hour battery life)"
                  className="min-h-[100px] border-slate-300 focus:border-slate-500 focus:ring-slate-500/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-lg shadow-lg transition-colors duration-200"
              >
                Add Product
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductForm;

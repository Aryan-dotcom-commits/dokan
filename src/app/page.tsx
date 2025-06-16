'use client'
import HeroSection from "@/components/siteComponents/hero-section"
import { Suspense } from "react";
import ProductCarousel from "@/components/siteComponents/productCarousel";

export default function Homepage() {
  const featuredProducts = [
    {
      id: 1,
      title: 'Wireless Headphones',
      price: 49.99,
      inStock: true,
      image: "",
      brand: "JBL"
    },

    {
      id: 2,
      title: 'Austin Hoodie',
      price: 65.99,
      inStock: true,
      image: "",
      brand: "Austin"
    },

    {
      id: 3,
      title: 'Linen Pants',
      price: 30.05,
      inStock: false,
      image: "",
      brand: "Levis"
    },

    {
      id: 4,
      title: 'Product 4',
      price: 9.12,
      inStock: true,
      image: "",
      brand: "NIKE"
    },

    {
      id: 5,
      title: 'Jordan 94',
      price: 12.99,
      inStock: false,
      image: "",
      brand: "Nike"
    },

  ]
  return (
    <section className="min h-screen">
      <HeroSection />
      {/** Featured Products Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium products
            </p>
          </div>

          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <ProductCarousel products={featuredProducts}/>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
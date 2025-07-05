import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

const categories = [
  {
    name: "Electronics",
    description: "Cutting-edge technology",
    image: "/placeholder.svg?height=400&width=600",
    href: "/products?category=electronics",
    gradient: "from-blue-500 to-cyan-500",
    accent: "blue",
  },
  {
    name: "Fashion",
    description: "Contemporary style",
    image: "/placeholder.svg?height=400&width=600",
    href: "/products?category=fashion",
    gradient: "from-pink-500 to-rose-500",
    accent: "pink",
  },
  {
    name: "Home & Living",
    description: "Modern essentials",
    image: "/placeholder.svg?height=400&width=600",
    href: "/products?category=home",
    gradient: "from-green-500 to-emerald-500",
    accent: "green",
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Categories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Shop by
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our thoughtfully curated collections designed for modern living
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                index === 1 ? "lg:scale-110 lg:z-10" : ""
              }`}
            >
              {/* Background Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <div
                  className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-700"
                  style={{
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                />

                {/* Floating Elements */}
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 text-lg">{category.description}</p>

                  <Link href={category.href}>
                    <Button
                      variant="ghost"
                      className={`group/btn p-0 h-auto font-semibold text-lg hover:bg-transparent bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent hover:scale-105 transition-all duration-300`}
                    >
                      Explore Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>

                {/* Decorative Element */}
                <div
                  className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r ${category.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

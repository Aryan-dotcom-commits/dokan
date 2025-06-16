import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl" />
      </div>

      <div className="relative text-center max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-slate-200">
            ✨ New Collection Available
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-slate-900 mb-6">
          Premium
          <span className="block font-medium text-slate-900">Collection</span>
        </h1>

        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Curated products for the modern lifestyle. Quality, design, and sustainability in perfect harmony.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/products">
            <Button size="lg" className="px-8 py-3 bg-black hover:bg-slate-800 text-white group">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/products?collection=new-arrivals">
            <Button variant="outline" size="lg" className="px-8 py-3 group border-slate-300 hover:bg-slate-100">
              <Sparkles className="mr-2 h-4 w-4" />
              Explore Collections
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">10K+</div>
            <div className="text-sm text-slate-600">Products</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">50K+</div>
            <div className="text-sm text-slate-600">Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">99%</div>
            <div className="text-sm text-slate-600">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

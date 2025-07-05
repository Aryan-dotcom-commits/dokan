import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Users, Sparkles } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-white">About Dokan</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Crafted for the
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future
                </span>
              </h2>

              <p className="text-xl text-white/80 leading-relaxed">
                We believe in creating products that don't just meet today's needs, but anticipate tomorrow's
                possibilities. Every item in our collection represents a commitment to innovation, sustainability, and
                exceptional design.
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Users, title: "50K+ Community", desc: "Growing family of satisfied customers" },
                { icon: Award, title: "Premium Quality", desc: "Carefully curated and tested products" },
                { icon: Sparkles, title: "Innovation First", desc: "Latest trends and cutting-edge design" },
                { icon: ArrowRight, title: "Fast Delivery", desc: "Quick and reliable shipping worldwide" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                >
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-white/70">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-xl rounded-full font-semibold transition-all duration-300"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 overflow-hidden">
                <div
                  className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"
                  style={{
                    backgroundImage: "url(/placeholder.svg?height=600&width=600)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    99%
                  </div>
                  <div className="text-sm text-white/80 font-medium">Satisfaction</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-sm text-white/80 font-medium">Support</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-4 h-4 bg-purple-400 rounded-full animate-pulse" />
              <div
                className="absolute bottom-1/4 left-0 w-3 h-3 bg-pink-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

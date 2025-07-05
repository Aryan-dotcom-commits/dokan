import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ShoppingCart, Store, Users, TrendingUp, Shield, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-600/30 to-slate-500/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-500/30 to-slate-600/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-slate-400/20 to-slate-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="space-y-8 mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white/90">
              <Zap className="w-4 h-4 text-slate-300" />
              <span className="text-sm font-medium">The Ultimate Marketplace</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block text-white leading-tight">Buy, Sell,</span>
              <span className="block bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent leading-tight">
                Succeed
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Join thousands of buyers and sellers in our thriving marketplace.
              <span className="block mt-2 text-slate-300">
                Whether you're shopping or starting your business, we've got you covered.
              </span>
            </p>
          </div>

          {/* Dual CTA */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-16">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 max-w-md">
              <ShoppingCart className="w-12 h-12 text-slate-300 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-white mb-4">Start Shopping</h3>
              <p className="text-white/70 mb-6">Discover amazing products from trusted sellers worldwide</p>
              <Link href="/home">
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white border-0 rounded-full font-semibold py-3">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 max-w-md">
              <Store className="w-12 h-12 text-slate-300 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-white mb-4">Become a Vendor</h3>
              <p className="text-white/70 mb-6">Start selling your products and build your business with us</p>
              <Link href="/register?role=vendor">
                <Button className="w-full bg-slate-600 hover:bg-slate-500 text-white border-0 rounded-full font-semibold py-3">
                  Start Selling
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50K+", label: "Active Users", icon: Users },
              { number: "10K+", label: "Products Listed", icon: ShoppingCart },
              { number: "99.9%", label: "Success Rate", icon: TrendingUp },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="w-8 h-8 text-slate-300 mb-4 mx-auto" />
                <div className="text-3xl font-bold text-slate-300 mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Choose
              <span className="block bg-gradient-to-r from-slate-700 to-slate-800 bg-clip-text text-transparent">
                Our Platform?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Transactions",
                description: "Your payments and data are protected with enterprise-grade security",
              },
              {
                icon: TrendingUp,
                title: "Grow Your Business",
                description: "Access powerful analytics and tools to scale your selling operations",
              },
              {
                icon: Users,
                title: "Trusted Community",
                description: "Join a community of verified buyers and sellers with ratings and reviews",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex p-4 rounded-2xl bg-slate-700 mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get
            <span className="block bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">
              Started?
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join our marketplace today and start your journey as a buyer or seller
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="px-10 py-4 bg-slate-700 hover:bg-slate-600 text-white border-0 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300"
              >
                Sign Up Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-4 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-xl rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

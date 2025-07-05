"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Send, Sparkles } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
          {/* Icon */}
          <div className="inline-flex p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-8">
            <Mail className="h-8 w-8 text-white" />
          </div>

          {/* Content */}
          <div className="space-y-6 mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Stay in the
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Loop
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Be the first to discover new arrivals, exclusive offers, and design insights. Join our community of modern
              lifestyle enthusiasts.
            </p>
          </div>

          {/* Newsletter Form */}
          {isSubscribed ? (
            <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-8 max-w-md mx-auto backdrop-blur-xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 text-green-400" />
                <span className="text-xl font-semibold text-green-300">Welcome aboard!</span>
              </div>
              <p className="text-green-200">
                Thank you for joining our community. Check your inbox for a special welcome offer! 🎉
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-purple-400 rounded-full text-lg backdrop-blur-xl"
                  />
                </div>
                <Button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Subscribe
                </Button>
              </div>
            </form>
          )}

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>50K+ subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

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
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-slate-900 rounded-3xl p-12 text-white">
          <Mail className="h-12 w-12 mx-auto mb-6 text-slate-300" />

          <h2 className="text-3xl font-light tracking-tight mb-4">Stay in the Loop</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive offers, and design insights. Join our community of design
            enthusiasts.
          </p>

          {isSubscribed ? (
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-green-300">Thank you for subscribing! 🎉</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20"
              />
              <Button
                type="submit"
                variant="secondary"
                className="px-8 whitespace-nowrap bg-white text-slate-900 hover:bg-slate-100"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-xs text-slate-400 mt-4">No spam, unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}

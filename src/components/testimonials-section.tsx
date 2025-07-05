"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    content:
      "The quality is exceptional and the design is exactly what I was looking for. Every detail is perfect and the customer service is outstanding.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    content:
      "Fast shipping, great customer service, and products that exceed expectations. This is exactly what modern e-commerce should be.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Interior Designer",
    content:
      "I love the minimalist aesthetic and sustainable approach. These products fit perfectly into my lifestyle and design philosophy.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    gradient: "from-green-500 to-emerald-500",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <Star className="w-4 h-4 text-purple-600 fill-current" />
            <span className="text-sm font-semibold text-purple-700">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            What Our
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust our quality and service
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50 max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentTestimonial.gradient} mb-8`}>
              <Quote className="h-8 w-8 text-white" />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-2xl md:text-3xl text-slate-800 mb-8 font-light leading-relaxed">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 border-4 border-white shadow-lg"
                  style={{
                    backgroundImage: `url(${currentTestimonial.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${currentTestimonial.gradient} rounded-full border-2 border-white`}
                />
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-900 text-lg">{currentTestimonial.name}</div>
                <div className="text-slate-600">{currentTestimonial.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 border-slate-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? `bg-gradient-to-r ${currentTestimonial.gradient} scale-125`
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 border-slate-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

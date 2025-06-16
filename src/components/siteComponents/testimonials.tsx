"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Designer",
    content: "The quality is exceptional and the design is exactly what I was looking for. Every detail is perfect.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Entrepreneur",
    content: "Fast shipping, great customer service, and products that exceed expectations. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Creative Director",
    content:
      "I love the minimalist aesthetic and sustainable approach. These products fit perfectly into my lifestyle.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
    {/** To display which testimonial to be displayed */}
    const [currentFeedback, setCurrentFeedback] = useState<number>(0);

    const nextTestimonial = () => {
        setCurrentFeedback((feedback) => (feedback + 1) % testimonials.length);
    }

    const prevTestimonials = () => {
        setCurrentFeedback((feedback) => ((feedback - 1 + testimonials.length) % testimonials.length));
    }

    const curretTestimonials = testimonials[currentFeedback];

    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-16">
                    <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-4"> What Our Customers Say </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto"> Join thousands of satisfied customers who trust our quality </p>
                </div>

                <div className="relative bg-white rounded-2xl p-12 shadow-sm">
                    <div className="flex justify-center mb-6">
                        {Array.from({length: curretTestimonials.rating}).map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current"/>
                        ))}
                    </div>

                    <blockquote className="text-xl text-gray-900 mb-8 font-light leading-relaxed">
                        {curretTestimonials.content}
                    </blockquote>

                    <div className="flex items-center justify-center space-x-4">
                        <div 
                            className="w-12 h-12 rounded-full bg-gray-200"
                            style={{
                                backgroundImage: '',
                                backgroundSize: 'cover',
                                backgroundPosition: "center"
                            }}
                        />

                        <div className="text-left">
                            <div className="font-medium text-gray-900"> {curretTestimonials.name} </div>
                            <div className="text-sm text-gray-600"> {curretTestimonials.role} </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center space-x-4 mt-8">
                        <Button variant="ghost" size="icon" onClick={prevTestimonials}> 
                            <ChevronLeft className="w-4 h-4"/>    
                        </Button>

                        <div className="flex space-x-2">
                            {testimonials.map((_, i) => (
                                <button key={i}
                                className={`w-2 h-2 rounded-full transition-colors ${i === currentFeedback ? "bg-gray-900" : "bg-gray-300"}`} 
                                onClick={() => setCurrentFeedback(i)}
                                />
                            ))}
                        </div>

                        <Button variant="outline" size="icon" onClick={nextTestimonial}>
                            <ChevronRight className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
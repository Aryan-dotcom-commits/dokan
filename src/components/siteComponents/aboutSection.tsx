import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                    <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-6"> Crafted for the 
                        <span className="block font-medium"> Modern Lifestyle </span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        We believe in quality over quantity. Every product in our collection is carefully selected for its design,
                        functionality, and sustainability. Our mission is to bring you items that enhance your daily life while
                        reflecting your values.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/products">
                            <Button size="lg" className="px-8 bg-black hover:bg-slate-800 text-white group">Shop Now</Button>
                        </Link>

                        <Link href="/about">
                            <Button size="lg" variant="outline" className="px-8"> Our Story </Button>
                        </Link>
                    </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                            <div className="w-full h-full" 
                                style={{
                                    backgroundImage: '',
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900"> 5K+ </div>
                                <div className="text-sm text-gray-600"> Happy Customers </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}
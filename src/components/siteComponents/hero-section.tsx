import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection()
{
    return(
        <section className="relative h-screen flex items-center justify-center bg-slate-500
        overflow-hidden">
            {/** Background css for nav */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-200/50 rounded-full
                blur-3xl">
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-50 rounded-full blur-3xl" />
                </div>
            </div>

            <div className="relative text-center max-w-4xl mx-auto px-4">
                <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700
                    border border-slate-200">
                        ✨ New Collection Available
                    </span>
                </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-slate-900 mb-6">
                Premium
                <span className="block font-medium text-slate-900"> Collections </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                Curated products for the modern lifestyle. Quality, design, and sustainability in perfect harmony.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/products">
                    <Button size="lg" className="px-8 py-3 bg-black hover:bg-slate-800 text-white group">
                        Shop Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover: translate-x-1 transition-transform"/>  
                    </Button>   
                </Link>
            </div>
        </section>  
    );
}
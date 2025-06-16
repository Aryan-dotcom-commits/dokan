"use client"

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User, Menu, X, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "lucide-react";
import { Input } from "../ui/input";
import { time } from "console";

/** This is static for now, api banayexi change garxu */
const collections = [
    {
        name: "New Arrivals",
        href: "/products?collections=new-arrivals",
        descriptions: "Our Latest",
        image: ""
    },
    {
        name: "Best Sellers",
        href: "/products?collection=best-sellers",
        description: "Most popular items",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Electronics",
        href: "/products?category=electronics",
        description: "Tech & gadgets",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Fashion",
        href: "/products?category=fashion",
        description: "Clothing & accessories",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Home & Living",
        href: "/products?category=home",
        description: "Furniture & decor",
        image: "/placeholder.svg?height=200&width=300",
    },
    {
        name: "Sustainable",
        href: "/products?collection=sustainable",
        description: "Eco-friendly products",
        image: "/placeholder.svg?height=200&width=300",
    },
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isCollectionOpen, setCollectionOpen] = useState(false);
    const pathName = usePathname();
    const cartItemCounts = 1;
    const wishlistCounts = 4;

    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Shop", href: "/shop" }
    ];

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setCollectionOpen(true);
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setCollectionOpen(false);
        }, 150); //Delay to close the dropdown
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, []);

    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/** Left side of the navigation i.e. Logo and nav stuff */}
                    <div className="flex items-center space-x-12">
                        <Link href="/" className="text-2xl font-semibold tracking-tight text-black"> Dokan </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((items) => (
                            <Link href={items.href} key={items.name} 
                                className={`text-sm font-medium transition-colors ${pathName === items.href ? "text-black" : "text-slate-600 hover:text-black"}`}
                            >
                                {items.name}
                            </Link>
                        ))}
                    </div>

                    <div 
                        ref={dropdownRef}
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Button variant="ghost" className="text-sm font-medium text-slate-600 hover:text-black p-0 h-auto">
                            Collections
                            <ChevronDown className="ml-1 h-3 w-3"/>
                        </Button>

                        {/**Mega Menu */}
                        {isCollectionOpen && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                                <div className="w-[800px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-8">
                                    <div className="gird gird-cols-3 gap-6">
                                        {collections.map((collection) => (
                                            <Link
                                                key={collection.name}
                                                href={collection.href}
                                                className="group block p-4 rounded-xl hover:bg-slate-50 transition-colors"
                                            >
                                                 <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-slate-100">
                                                    <div
                                                        className="w-full h-full bg-slate-100 group-hover:scale-105 transition-transform duration-300"
                                                        style={{
                                                        backgroundImage: `url(${collection.image})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                        }}
                                                    />
                                                </div>
                                                <h3 className="font-medium text-slate-900 mb-1 group-hover:text-black">
                                                    {collection.name}
                                                </h3>
                                                <p className="text-sm text-slate-600">{collection.description}</p>
                                            </Link>
                                        ))}
                                    </div>

                                    {/**View All Products */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
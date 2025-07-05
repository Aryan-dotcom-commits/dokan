"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const cartItemCount = 2 // Mock cart count
  const wishlistCount = 5 // Mock wishlist count

  const leftNavigation = [
    { name: "Home", href: "/home" },
    { name: "Products", href: "/products" },
    { name: "In Sale", href: "/products?sale=true" },
  ]

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Left Side - Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 flex-1">
            {leftNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-slate-900 ${
                  pathname === item.href ? "text-slate-900 font-semibold" : "text-slate-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center lg:flex-none">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-slate-900 hover:text-slate-700 transition-colors"
            >
              Dokan
            </Link>
          </div>

          {/* Right Side - Icons */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 justify-end">
            <Link href="/wishlist" className="relative p-2 hover:bg-slate-100 rounded-full transition-colors group">
              <Heart className="h-5 w-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                  {wishlistCount}
                </Badge>
              )}
            </Link>
            <Link href="/cart" className="relative p-2 hover:bg-slate-100 rounded-full transition-colors group">
              <ShoppingCart className="h-5 w-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                  {cartItemCount}
                </Badge>
              )}
            </Link>
            <Link href="/profile" className="p-2 hover:bg-slate-100 rounded-full transition-colors group">
              <User className="h-5 w-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {leftNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors rounded-lg ${
                    pathname === item.href
                      ? "text-slate-900 bg-slate-100 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Icons */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-slate-200 mt-4">
                <Link href="/wishlist" className="flex flex-col items-center gap-1 text-slate-600">
                  <div className="relative">
                    <Heart className="h-6 w-6" />
                    {wishlistCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center text-xs bg-slate-900 text-white">
                        {wishlistCount}
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs">Wishlist</span>
                </Link>
                <Link href="/cart" className="flex flex-col items-center gap-1 text-slate-600">
                  <div className="relative">
                    <ShoppingCart className="h-6 w-6" />
                    {cartItemCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center text-xs bg-slate-900 text-white">
                        {cartItemCount}
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs">Cart</span>
                </Link>
                <Link href="/profile" className="flex flex-col items-center gap-1 text-slate-600">
                  <User className="h-6 w-6" />
                  <span className="text-xs">Profile</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

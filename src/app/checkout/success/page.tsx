"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Check, Package, Truck, Mail, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Mock order data
const orderData = {
  orderNumber: "ORD-2024-001234",
  orderDate: new Date().toLocaleDateString(),
  estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  total: 779.95,
  items: [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 299.99,
      quantity: 1,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      price: 199.99,
      quantity: 2,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      price: 79.99,
      quantity: 1,
      image: "/placeholder.svg?height=60&width=60",
    },
  ],
  shippingAddress: {
    name: "John Doe",
    address: "123 Main Street, Apt 4B",
    city: "New York, NY 10001",
    country: "United States",
  },
  paymentMethod: "•••• •••• •••• 1234",
}

export default function CheckoutSuccessPage() {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-bounce" />
          <div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-slate-600 mb-2">Thank you for your purchase</p>
          <p className="text-slate-500">
            Order #{orderData.orderNumber} • Placed on {orderData.orderDate}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-slate-600" />
                  Order Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Order Confirmed</p>
                      <p className="text-sm text-slate-500">We've received your order</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Confirmed</Badge>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                  <Truck className="w-4 h-4" />
                  <span>Estimated delivery: {orderData.estimatedDelivery}</span>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
                <CardDescription>Review your purchased items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderData.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-500">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping & Payment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Shipping Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p className="font-medium text-slate-900">{orderData.shippingAddress.name}</p>
                    <p>{orderData.shippingAddress.address}</p>
                    <p>{orderData.shippingAddress.city}</p>
                    <p>{orderData.shippingAddress.country}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                      <span className="text-xs font-bold">💳</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Credit Card</p>
                      <p className="text-sm text-slate-500">{orderData.paymentMethod}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Order Summary & Actions */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>$699.97</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>$15.00</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax</span>
                    <span>$64.98</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold text-slate-900">
                    <span>Total</span>
                    <span>${orderData.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Receipt
                  </Button>

                  <Button variant="outline" className="w-full border-slate-300 hover:bg-slate-50 bg-transparent">
                    <Package className="w-4 h-4 mr-2" />
                    Track Order
                  </Button>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium text-slate-900">What's Next?</h4>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>Confirmation email sent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      <span>Order processing begins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      <span>Shipping updates via email</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continue Shopping */}
            <div className="mt-6 text-center">
              <Link href="/products">
                <Button variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                  Continue Shopping
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <Card className="mt-12">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Need Help?</h3>
              <p className="text-slate-600 mb-4">
                Our customer support team is here to help with any questions about your order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                  Contact Support
                </Button>
                <Button variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                  View FAQ
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

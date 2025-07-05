"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CreditCard, Shield, Truck, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Mock cart data
const cartItems = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
    brand: "AudioTech",
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
    brand: "FitPro",
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    price: 79.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
    brand: "SoundWave",
  },
]

interface CheckoutFormData {
  // Contact Information
  email: string
  phone: string

  // Shipping Address
  firstName: string
  lastName: string
  address: string
  apartment: string
  city: string
  state: string
  zipCode: string
  country: string

  // Billing Address
  billingDifferent: boolean
  billingFirstName: string
  billingLastName: string
  billingAddress: string
  billingApartment: string
  billingCity: string
  billingState: string
  billingZipCode: string
  billingCountry: string

  // Payment
  paymentMethod: string
  cardNumber: string
  expiryDate: string
  cvv: string
  cardName: string

  // Options
  saveInfo: boolean
  newsletter: boolean
  specialInstructions: string
}

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    billingDifferent: false,
    billingFirstName: "",
    billingLastName: "",
    billingAddress: "",
    billingApartment: "",
    billingCity: "",
    billingState: "",
    billingZipCode: "",
    billingCountry: "",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    saveInfo: false,
    newsletter: false,
    specialInstructions: "",
  })

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 15.0
  const tax = subtotal * 0.08
  const discount = 0 // Could be applied if there's a coupon
  const total = subtotal + shipping + tax - discount

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))
    console.log("Order submitted:", formData)
    // Redirect to success page
    window.location.href = "/checkout/success"
  }

  const countries = ["United States", "Canada", "United Kingdom", "Australia", "Germany", "France"]
  const states = ["California", "New York", "Texas", "Florida", "Illinois", "Pennsylvania"]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/cart">
            <Button variant="outline" size="icon" className="border-slate-300 hover:bg-slate-50 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
            <p className="text-slate-600">Complete your purchase</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Contact Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="john@example.com"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-slate-700 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="mt-2"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Shipping Address</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-slate-700 font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      placeholder="John"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-slate-700 font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      placeholder="Doe"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-slate-700 font-medium">
                    Address *
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => updateFormData("address", e.target.value)}
                    placeholder="123 Main Street"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="apartment" className="text-slate-700 font-medium">
                    Apartment, suite, etc.
                  </Label>
                  <Input
                    id="apartment"
                    value={formData.apartment}
                    onChange={(e) => updateFormData("apartment", e.target.value)}
                    placeholder="Apt 4B"
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-slate-700 font-medium">
                      City *
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => updateFormData("city", e.target.value)}
                      placeholder="New York"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-slate-700 font-medium">
                      State *
                    </Label>
                    <Select value={formData.state} onValueChange={(value) => updateFormData("state", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zipCode" className="text-slate-700 font-medium">
                      ZIP Code *
                    </Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => updateFormData("zipCode", e.target.value)}
                      placeholder="10001"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country" className="text-slate-700 font-medium">
                    Country *
                  </Label>
                  <Select value={formData.country} onValueChange={(value) => updateFormData("country", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <h2 className="text-xl font-semibold text-slate-900">Payment Method</h2>
                <Lock className="w-4 h-4 text-slate-500" />
              </div>

              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => updateFormData("paymentMethod", value)}
                className="space-y-4"
              >
                {/* Credit/Debit Card */}
                <div className="border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-3 cursor-pointer flex-1">
                      <CreditCard className="w-5 h-5 text-slate-600" />
                      <span className="font-medium">Credit or Debit Card</span>
                      <div className="flex gap-2 ml-auto">
                        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          VISA
                        </div>
                        <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          MC
                        </div>
                        <div className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                          AMEX
                        </div>
                      </div>
                    </Label>
                  </div>

                  {formData.paymentMethod === "card" && (
                    <div className="mt-4 space-y-4 pl-8">
                      <div>
                        <Label htmlFor="cardNumber" className="text-slate-700 font-medium">
                          Card Number *
                        </Label>
                        <Input
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) => updateFormData("cardNumber", e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          className="mt-2"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate" className="text-slate-700 font-medium">
                            Expiry Date *
                          </Label>
                          <Input
                            id="expiryDate"
                            value={formData.expiryDate}
                            onChange={(e) => updateFormData("expiryDate", e.target.value)}
                            placeholder="MM/YY"
                            className="mt-2"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="text-slate-700 font-medium">
                            CVV *
                          </Label>
                          <Input
                            id="cvv"
                            value={formData.cvv}
                            onChange={(e) => updateFormData("cvv", e.target.value)}
                            placeholder="123"
                            className="mt-2"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName" className="text-slate-700 font-medium">
                          Name on Card *
                        </Label>
                        <Input
                          id="cardName"
                          value={formData.cardName}
                          onChange={(e) => updateFormData("cardName", e.target.value)}
                          placeholder="John Doe"
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* PayPal */}
                <div className="border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex items-center gap-3 cursor-pointer flex-1">
                      <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">P</span>
                      </div>
                      <span className="font-medium">PayPal</span>
                      <Badge variant="secondary" className="ml-auto">
                        Express
                      </Badge>
                    </Label>
                  </div>
                  {formData.paymentMethod === "paypal" && (
                    <div className="mt-4 pl-8">
                      <p className="text-sm text-slate-600">
                        You'll be redirected to PayPal to complete your payment securely.
                      </p>
                    </div>
                  )}
                </div>

                {/* Digital Wallet */}
                <div className="border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="wallet" id="wallet" />
                    <Label htmlFor="wallet" className="flex items-center gap-3 cursor-pointer flex-1">
                      <div className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center">
                        <span className="text-white text-xs">📱</span>
                      </div>
                      <span className="font-medium">Digital Wallet</span>
                      <div className="flex gap-2 ml-auto">
                        <Badge variant="outline" className="text-xs">
                          Apple Pay
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Google Pay
                        </Badge>
                      </div>
                    </Label>
                  </div>
                  {formData.paymentMethod === "wallet" && (
                    <div className="mt-4 pl-8">
                      <p className="text-sm text-slate-600">
                        Use your saved payment method from Apple Pay or Google Pay for quick checkout.
                      </p>
                    </div>
                  )}
                </div>
              </RadioGroup>
            </div>

            {/* Additional Options */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Additional Options</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="saveInfo"
                    checked={formData.saveInfo}
                    onCheckedChange={(checked) => updateFormData("saveInfo", checked)}
                  />
                  <Label htmlFor="saveInfo" className="text-slate-700">
                    Save my information for faster checkout next time
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => updateFormData("newsletter", checked)}
                  />
                  <Label htmlFor="newsletter" className="text-slate-700">
                    Subscribe to our newsletter for exclusive offers
                  </Label>
                </div>

                <div>
                  <Label htmlFor="specialInstructions" className="text-slate-700 font-medium">
                    Special Instructions
                  </Label>
                  <Textarea
                    id="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={(e) => updateFormData("specialInstructions", e.target.value)}
                    placeholder="Any special delivery instructions..."
                    className="mt-2"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 sticky top-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-slate-100 rounded-lg overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center text-xs font-medium">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-slate-900 truncate">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.brand}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              {/* Order Totals */}
              <div className="space-y-3">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between text-lg font-semibold text-slate-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </div>

              {/* Complete Order Button */}
              <Button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white py-3 text-lg font-semibold"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </div>
                ) : (
                  <>Complete Order • ${total.toFixed(2)}</>
                )}
              </Button>

              {/* Trust Indicators */}
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Truck className="w-3 h-3" />
                  <span>Free returns</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>Secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

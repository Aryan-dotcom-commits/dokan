"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft, User, Store, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

type UserRole = "buyer" | "vendor"

export default function LoginPage() {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState<UserRole | null>(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole)
    setStep(2)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Login attempt:", { role, email, password, rememberMe })

    // Redirect based on role
    window.location.href = role === "vendor" ? "/vendor/dashboard" : "/home"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-semibold tracking-tight text-white mb-6 inline-block">
            Dokan
          </Link>
          <h1 className="text-2xl font-semibold text-white mb-2">Welcome Back</h1>
          <p className="text-white/70">Sign in to your account</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i <= step ? "bg-slate-700 text-white" : "bg-white/20 text-white/50"
                  }`}
                >
                  {i}
                </div>
                {i < 2 && <div className={`w-8 h-0.5 ${i < step ? "bg-slate-700" : "bg-white/20"}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
          {/* Step 1: Role Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold text-white mb-2">Select Your Role</h2>
                <p className="text-white/70">How are you using our platform?</p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => handleRoleSelect("buyer")}
                  className="w-full p-6 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-105 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-700 rounded-xl">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Continue as Buyer</h3>
                      <p className="text-white/70 text-sm">Browse and purchase products</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleRoleSelect("vendor")}
                  className="w-full p-6 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 transition-all duration-300 hover:scale-105 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-600 rounded-xl">
                      <Store className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Continue as Vendor</h3>
                      <p className="text-white/70 text-sm">Manage your business and sales</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Login Form */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  Sign in as {role === "buyer" ? "Buyer" : "Vendor"}
                </h2>
                <p className="text-white/70">Enter your credentials to continue</p>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <Label htmlFor="remember" className="text-white/80">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-white/80 hover:text-white text-sm">
                  Forgot password?
                </Link>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1 border-white/30 text-white hover:bg-white/10"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="submit" disabled={isLoading} className="flex-1 bg-slate-700 hover:bg-slate-600">
                  {isLoading ? "Signing in..." : "Sign In"}
                  {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-white/70">
            Don't have an account?{" "}
            <Link href="/register" className="text-white hover:text-slate-300 font-medium">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

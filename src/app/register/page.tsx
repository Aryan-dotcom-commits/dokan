"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft, User, Store, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

type UserRole = "buyer" | "vendor"

interface FormData {
  role: UserRole | null
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  businessName?: string
  businessType?: string
  agreeToTerms: boolean
}

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    role: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessType: "",
    agreeToTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRoleSelect = (role: UserRole) => {
    setFormData({ ...formData, role })
    setStep(2)
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Registration data:", formData)
    window.location.href = formData.role === "vendor" ? "/vendor/dashboard" : "/home"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-semibold tracking-tight text-white mb-6 inline-block">
            Dokan
          </Link>
          <h1 className="text-2xl font-semibold text-white mb-2">Create Account</h1>
          <p className="text-white/70">Join our marketplace community</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i <= step ? "bg-slate-600 text-white" : "bg-white/20 text-white/50"
                  }`}
                >
                  {i}
                </div>
                {i < 3 && <div className={`w-8 h-0.5 ${i < step ? "bg-slate-600" : "bg-white/20"}`} />}
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
                <h2 className="text-xl font-semibold text-white mb-2">Choose Your Role</h2>
                <p className="text-white/70">How do you want to use our platform?</p>
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
                      <h3 className="font-semibold text-white">I want to buy products</h3>
                      <p className="text-white/70 text-sm">Browse and purchase from various sellers</p>
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
                      <h3 className="font-semibold text-white">I want to sell products</h3>
                      <p className="text-white/70 text-sm">Start your business and reach customers</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-white mb-2">Personal Information</h2>
                <p className="text-white/70">Tell us about yourself</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">First Name</Label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Last Name</Label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Create password"
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

              {formData.role === "vendor" && (
                <>
                  <div className="space-y-2">
                    <Label className="text-white">Business Name</Label>
                    <Input
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Your Business Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Business Type</Label>
                    <Input
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="e.g., Electronics, Fashion"
                    />
                  </div>
                </>
              )}

              <div className="flex gap-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={handleNext} className="flex-1 bg-slate-700 hover:bg-slate-600">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-white mb-2">Almost Done!</h2>
                <p className="text-white/70">Review and confirm your information</p>
              </div>

              <div className="space-y-4 bg-white/5 rounded-xl p-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Role:</span>
                  <span className="text-white capitalize">{formData.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Name:</span>
                  <span className="text-white">
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Email:</span>
                  <span className="text-white">{formData.email}</span>
                </div>
                {formData.role === "vendor" && (
                  <div className="flex justify-between">
                    <span className="text-white/70">Business:</span>
                    <span className="text-white">{formData.businessName}</span>
                  </div>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                />
                <Label htmlFor="terms" className="text-sm text-white/80 leading-relaxed">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.agreeToTerms || isLoading}
                  className="flex-1 bg-slate-700 hover:bg-slate-600"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                  {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-6">
          <p className="text-white/70">
            Already have an account?{" "}
            <Link href="/login" className="text-white hover:text-slate-300 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

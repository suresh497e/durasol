"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("distributor@durasol.com")
  const [password, setPassword] = useState("durasol2024")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      if (email === "distributor@durasol.com" && password === "durasol2024") {
        // Success - store auth state and redirect
        localStorage.setItem(
          "durasol-auth",
          JSON.stringify({
            isLoggedIn: true,
            user: {
              name: "Rajesh Kumar",
              email: "distributor@durasol.com",
              role: "distributor",
            },
          }),
        )

        // toast({
        //   title: "Login Successful",
        //   description: "Welcome back to Durasol Distributor Portal!",
        // })

        router.push("/distributor")
      } else if (email === "admin@durasol.com" && password === "admin2024") {
        // Admin login
        localStorage.setItem(
          "durasol-auth",
          JSON.stringify({
            isLoggedIn: true,
            user: {
              name: "Admin User",
              email: "admin@durasol.com",
              role: "admin",
            },
          }),
        )

        // toast({
        //   title: "Admin Login Successful",
        //   description: "Welcome to the Durasol Admin Portal!",
        // })

        router.push("/admin/birthday-form")
      } else {
        // Failed login
        setError("Invalid email or password. Please try again.")
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          action: <ToastAction altText="Try Again">Try Again</ToastAction>,
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 flex flex-col items-center">
          <div className="w-48 h-16 relative mb-4">
            <Image
              src="/images/durasol-logo.png"
              alt="Durasol Energi Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <CardTitle className="text-2xl font-bold text-center text-[#005A9C]">Distributor Portal Login</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access the portal</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-3 text-sm bg-red-50 border border-red-200 text-red-600 rounded-md">{error}</div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="distributor@durasol.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="text-xs text-[#E31E24] hover:underline"
                  onClick={(e) => {
                    e.preventDefault()
                    toast({
                      title: "Password Reset",
                      description: "A password reset link would be sent to your email.",
                    })
                  }}
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-10 w-10 text-muted-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me for 30 days
              </Label>
            </div>
            <Button type="submit" className="w-full bg-[#005A9C] hover:bg-[#004a80]" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center text-sm text-muted-foreground">
          <div className="text-xs text-center w-full">
            Sample Credentials:
            <div className="mt-1 grid grid-cols-2 gap-2 text-xs">
              <div className="border rounded p-2">
                <strong>Distributor:</strong>
                <br />
                distributor@durasol.com
                <br />
                durasol2024
              </div>
              <div className="border rounded p-2">
                <strong>Admin:</strong>
                <br />
                admin@durasol.com
                <br />
                admin2024
              </div>
            </div>
          </div>
          <p>
            By signing in, you agree to our{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-[#E31E24]">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-[#E31E24]">
              Privacy Policy
            </Link>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

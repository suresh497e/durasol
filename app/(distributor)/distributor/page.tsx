"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileSection } from "@/components/profile-section"
import { FeedbackSection } from "@/components/feedback-section"
import { BirthdayWishesSection } from "@/components/birthday-wishes-section"
import { useAuth } from "@/components/auth-provider"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const { logout, user, isLoggedIn } = useAuth()
  const router = useRouter()

  // useEffect(() => {
    // If not logged in, redirect to login page
  //   if (!isLoggedIn) {
  //     router.push("/login")
  //   }
  // }, [isLoggedIn, router])

  // If not logged in, don't render the page content
  // if (!isLoggedIn) {
  //   return null
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/durasol-logo.png"
                alt="Durasol Energi Logo"
                width={150}
                height={50}
                className="h-auto"
              />
            </Link>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-1">
            <Button variant="ghost">Dashboard</Button>
            {user?.role === "admin" && (
              <Button variant="ghost" asChild>
                <Link href="/admin">Admin</Link>
              </Button>
            )}
            <Button variant="ghost">Support</Button>
            <Button variant="ghost" onClick={logout}>
              Logout
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Welcome, {user?.name || "Distributor"}</h1>
            <p className="text-muted-foreground">Manage your profile and activities</p>
          </div>
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="birthdays">Birthday Wishes</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-6">
              <ProfileSection />
            </TabsContent>
            <TabsContent value="birthdays" className="space-y-6">
              <BirthdayWishesSection />
            </TabsContent>
            <TabsContent value="feedback" className="space-y-6">
              <FeedbackSection />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t py-6 bg-[#005A9C] text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center">
            <p className="text-center text-sm md:text-left">
              &copy; {new Date().getFullYear()} Durasol Energi. All rights reserved.
            </p>
          </div>
          <p className="text-center text-sm font-medium uppercase tracking-wider">Let's improve the quality of life</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

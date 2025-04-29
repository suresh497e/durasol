"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, User, Mail, Phone, MapPin } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export function ProfileSection() {
  const [date, setDate] = useState<Date>()
  const [activeTab, setActiveTab] = useState("personal")

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
      action: <ToastAction altText="Close">Close</ToastAction>,
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="bg-[#005A9C] text-white">
          <CardTitle>Profile Section</CardTitle>
          <CardDescription className="text-gray-100">Your personal and business information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold">Rajesh Kumar</h3>
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#E31E24] hover:bg-[#c01a1f]">Premium Distributor</Badge>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>rajesh.kumar@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-32 h-32 rounded-full bg-[#005A9C]/10 flex items-center justify-center">
                <User className="h-16 w-16 text-[#005A9C]" />
                <Button size="sm" className="absolute bottom-0 right-0 bg-[#005A9C] hover:bg-[#004a80]">
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Tabs defaultValue="personal" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="family">Family Details</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleUpdateProfile}>
            {activeTab === "personal" ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="holiday-preferences">Holiday Preferences</Label>
                    <Input
                      id="holiday-preferences"
                      placeholder="e.g., Hill stations, Beach resorts"
                      defaultValue="Hill stations, Goa beaches"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="food-preferences">Food Preferences</Label>
                    <Select defaultValue="vegetarian">
                      <SelectTrigger>
                        <SelectValue placeholder="Select food preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="jain">Jain</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interests">Interests</Label>
                    <Input
                      id="interests"
                      placeholder="e.g., Cricket, Bollywood movies, Yoga"
                      defaultValue="Cricket, Reading, Yoga"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education">Educational Qualifications</Label>
                    <Input
                      id="education"
                      placeholder="e.g., B.Tech in Electrical Engineering"
                      defaultValue="B.Tech in Electrical Engineering"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthday">Your Birthday</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "dd-MM-yyyy") : <span>15-04-1985</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          defaultMonth={new Date(1985, 3, 15)}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="anniversary">Wedding Anniversary</Label>
                    <Input id="anniversary" placeholder="dd-mm-yyyy" defaultValue="12-11-2010" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your complete address"
                    className="min-h-[100px]"
                    defaultValue="123 Seashore Road, Juhu, Mumbai, Maharashtra - 400049"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="spouse-name">Spouse Name</Label>
                    <Input id="spouse-name" placeholder="Spouse's full name" defaultValue="Priya Kumar" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spouse-birthday">Spouse Birthday</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>22-07-1988</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          defaultMonth={new Date(1988, 6, 22)}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="children-details">Children Details</Label>
                  <Textarea
                    id="children-details"
                    placeholder="Name, Birthday (one per line)"
                    className="min-h-[100px]"
                    defaultValue="Arjun Kumar, 28-03-2012&#10;Aanya Kumar, 10-10-2015"
                  />
                </div>
              </div>
            )}
            <Button type="submit" className="w-full md:w-auto bg-[#005A9C] hover:bg-[#004a80]">
              Update Profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Gift, Cake } from "lucide-react"

// Sample birthday wishes received
const receivedWishes = [
  {
    id: 1,
    from: "Durasol Energi Team",
    message:
      "Happy Birthday, Rajesh! Wishing you a fantastic day filled with joy and happiness. May the coming year bring you success and prosperity.",
    date: new Date(2023, 3, 15), // April 15, 2023
  },
  {
    id: 2,
    from: "Durasol Energi Team",
    message:
      "Happy Birthday to your spouse! We at Durasol Energi extend our warmest wishes on this special day. May it be filled with love, laughter, and beautiful moments.",
    date: new Date(2023, 6, 22), // July 22, 2023
  },
]

export function BirthdayWishesSection() {
  const [activeTab, setActiveTab] = useState("upcoming")

  // Sample upcoming birthdays
  const upcomingBirthdays = [
    {
      name: "Your Birthday",
      date: new Date(new Date().getFullYear(), 3, 15), // April 15
      type: "Self",
    },
    {
      name: "Spouse Birthday",
      date: new Date(new Date().getFullYear(), 6, 22), // July 22
      type: "Spouse",
    },
    {
      name: "Child's Birthday",
      date: new Date(new Date().getFullYear(), 9, 10), // October 10
      type: "Child",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="bg-[#005A9C] text-white">
          <CardTitle>Birthday Wishes</CardTitle>
          <CardDescription className="text-gray-100">View your upcoming birthdays and received wishes</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex border-b mb-6">
            <button
              className={`pb-2 px-4 ${
                activeTab === "upcoming"
                  ? "border-b-2 border-[#005A9C] text-[#005A9C] font-medium"
                  : "text-muted-foreground"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Birthdays
            </button>
            <button
              className={`pb-2 px-4 ${
                activeTab === "received"
                  ? "border-b-2 border-[#005A9C] text-[#005A9C] font-medium"
                  : "text-muted-foreground"
              }`}
              onClick={() => setActiveTab("received")}
            >
              Received Wishes
            </button>
          </div>

          {activeTab === "upcoming" ? (
            <div className="space-y-4">
              {upcomingBirthdays.map((birthday, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#005A9C]/10 p-3 rounded-full">
                      <Cake className="h-6 w-6 text-[#005A9C]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{birthday.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{format(birthday.date, "MMMM dd, yyyy")}</span>
                      </div>
                      <Badge className="mt-2 bg-[#005A9C]">{birthday.type}</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {receivedWishes.map((wish) => (
                <Card key={wish.id} className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#E31E24]/10 p-3 rounded-full">
                      <Gift className="h-6 w-6 text-[#E31E24]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{wish.from}</h3>
                        <span className="text-sm text-muted-foreground">{format(wish.date, "MMM dd, yyyy")}</span>
                      </div>
                      <p className="mt-2 text-sm">{wish.message}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

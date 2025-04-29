"use client"

import { useState } from "react"
import { format, isSameDay, addDays } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Send, CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Mail, MessageSquare, MessageCircle, ImageIcon, Gift, CheckCircle2 } from "lucide-react"
import Link from "next/link"

// Sample birthday data
const initialBirthdays = [
  {
    id: 1,
    name: "Rajesh Kumar",
    type: "Distributor",
    date: new Date(new Date().getFullYear(), 5, 15), // June 15
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Priya Sharma",
    type: "Distributor",
    date: new Date(new Date().getFullYear(), 4, 22), // May 22
    status: "Upcoming",
  },
  {
    id: 3,
    name: "Amit Patel",
    type: "Distributor",
    date: new Date(new Date().getFullYear(), 3, 10), // April 10
    status: "Sent",
  },
  {
    id: 4,
    name: "Sunita Verma (Spouse of Vikram Singh)",
    type: "Spouse",
    date: new Date(new Date().getFullYear(), 7, 5), // August 5
    status: "Upcoming",
  },
  {
    id: 5,
    name: "Arjun Kumar (Child of Rajesh Kumar)",
    type: "Child",
    date: new Date(new Date().getFullYear(), 2, 28), // March 28
    status: "Sent",
  },
]

// Sample wish templates
const wishTemplates = [
  {
    id: 1,
    title: "Standard Birthday Wish",
    content:
      "Dear [NAME],\n\nHappy Birthday! Wishing you a fantastic day filled with joy and happiness. May the coming year bring you success and prosperity.\n\nWarm regards,\nDurasol Energi Team",
  },
  {
    id: 2,
    title: "Premium Distributor Birthday Wish",
    content:
      "Dear [NAME],\n\nWishing you a very Happy Birthday! As our valued premium distributor, we appreciate your continued partnership and support. May your special day be as wonderful as you are.\n\nBest wishes,\nDurasol Energi Team",
  },
  {
    id: 3,
    title: "Spouse Birthday Wish",
    content:
      "Dear [NAME],\n\nHappy Birthday! We at Durasol Energi extend our warmest wishes to you on your special day. May it be filled with love, laughter, and beautiful moments.\n\nBest regards,\nDurasol Energi Team",
  },
  {
    id: 4,
    title: "Child Birthday Wish",
    content:
      "Dear [NAME],\n\nHappy Birthday! Wishing you a day full of fun, games, and sweet surprises. May all your wishes come true!\n\nBest wishes,\nDurasol Energi Team",
  },
]

export function BirthdayManagement() {
  const [birthdays, setBirthdays] = useState(initialBirthdays)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTemplate, setSelectedTemplate] = useState(wishTemplates[0])
  const [customMessage, setCustomMessage] = useState("")
  const [selectedPerson, setSelectedPerson] = useState<(typeof initialBirthdays)[0] | null>(null)
  const [isWishDialogOpen, setIsWishDialogOpen] = useState(false)
  const [deliveryMethod, setDeliveryMethod] = useState("email")
  const [scheduleType, setScheduleType] = useState("now")
  const [scheduledDate, setScheduledDate] = useState<Date | undefined>(undefined)
  const [scheduledTime, setScheduledTime] = useState("09:00")

  // Get today's birthdays
  const todayBirthdays = birthdays.filter(
    (birthday) => isSameDay(birthday.date, new Date()) && birthday.status === "Upcoming",
  )

  // Get upcoming birthdays (next 30 days)
  const upcomingBirthdays = birthdays
    .filter((birthday) => {
      const today = new Date()
      const thirtyDaysLater = addDays(today, 30)
      return (
        birthday.date >= today &&
        birthday.date <= thirtyDaysLater &&
        !isSameDay(birthday.date, today) &&
        birthday.status === "Upcoming"
      )
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  const handleSendWish = () => {
    if (!selectedPerson) return

    // In a real application, you would send the wish via email/SMS here
    const message = customMessage || selectedTemplate.content.replace("[NAME]", selectedPerson.name)
    console.log(`Sending wish to ${selectedPerson.name}: ${message}`)

    // Update the birthday status
    setBirthdays(
      birthdays.map((birthday) => (birthday.id === selectedPerson.id ? { ...birthday, status: "Sent" } : birthday)),
    )

    setIsWishDialogOpen(false)
    setCustomMessage("")

    toast({
      title: "Birthday Wish Sent",
      description: `Your birthday wish has been sent to ${selectedPerson.name}.`,
    })
  }

  const openWishDialog = (person: (typeof initialBirthdays)[0]) => {
    setSelectedPerson(person)
    // Select appropriate template based on person type
    if (person.type === "Distributor") {
      setSelectedTemplate(wishTemplates[0])
    } else if (person.type === "Spouse") {
      setSelectedTemplate(wishTemplates[2])
    } else if (person.type === "Child") {
      setSelectedTemplate(wishTemplates[3])
    }
    setIsWishDialogOpen(true)

    // Pre-fill custom message with template
    setCustomMessage(wishTemplates[0].content.replace("[NAME]", person.name))

    // Set default scheduled date to a week from now
    const nextWeek = new Date()
    nextWeek.setDate(nextWeek.getDate() + 7)
    setScheduledDate(nextWeek)
  }

  // Function to highlight birthday dates on the calendar
  const isDayWithBirthday = (day: Date) => {
    return birthdays.some((birthday) => isSameDay(day, birthday.date))
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader className="bg-[#005A9C] text-white">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Birthday Calendar</CardTitle>
                <CardDescription className="text-gray-100">
                  Manage birthday wishes for distributors and their families
                </CardDescription>
              </div>
              <Button asChild className="bg-white text-[#005A9C] hover:bg-gray-100">
                <Link href="/admin/birthday-form/page">
                  <Send className="mr-2 h-4 w-4" />
                  New Birthday Wish
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Today's Birthdays</h3>
                {todayBirthdays.length === 0 ? (
                  <p className="text-muted-foreground">No birthdays today</p>
                ) : (
                  <div className="space-y-4">
                    {todayBirthdays.map((person) => (
                      <Card key={person.id} className="p-4 border-l-4 border-l-[#E31E24]">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">{person.name}</h4>
                            <p className="text-sm text-muted-foreground">{person.type}</p>
                          </div>
                          <Button onClick={() => openWishDialog(person)} className="bg-[#E31E24] hover:bg-[#c01a1f]">
                            <Send className="mr-2 h-4 w-4" />
                            Send Wish
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                <h3 className="text-lg font-medium mt-6 mb-4">Upcoming Birthdays</h3>
                {upcomingBirthdays.length === 0 ? (
                  <p className="text-muted-foreground">No upcoming birthdays in the next 30 days</p>
                ) : (
                  <div className="space-y-4">
                    {upcomingBirthdays.map((person) => (
                      <Card key={person.id} className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">{person.name}</h4>
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-muted-foreground">{person.type}</p>
                              <span className="text-sm text-muted-foreground">•</span>
                              <p className="text-sm text-muted-foreground">{format(person.date, "MMM dd")}</p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            onClick={() => openWishDialog(person)}
                            className="border-[#005A9C] text-[#005A9C] hover:bg-[#005A9C] hover:text-white"
                          >
                            <Send className="mr-2 h-4 w-4" />
                            Schedule Wish
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border shadow"
                  modifiers={{
                    birthday: (date) => isDayWithBirthday(date),
                  }}
                  modifiersStyles={{
                    birthday: {
                      fontWeight: "bold",
                      backgroundColor: "rgba(227, 30, 36, 0.1)",
                      color: "#E31E24",
                      borderRadius: "0",
                    },
                  }}
                />
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Selected Date: {date ? format(date, "MMMM dd, yyyy") : "None"}</h4>
                  {date && (
                    <div>
                      {birthdays.filter((birthday) => isSameDay(birthday.date, date)).length > 0 ? (
                        <div className="space-y-2">
                          {birthdays
                            .filter((birthday) => isSameDay(birthday.date, date))
                            .map((person) => (
                              <div key={person.id} className="flex justify-between items-center p-2 border rounded-md">
                                <div>
                                  <p className="font-medium">{person.name}</p>
                                  <p className="text-sm text-muted-foreground">{person.type}</p>
                                </div>
                                <Badge className={person.status === "Sent" ? "bg-green-600" : "bg-[#005A9C]"}>
                                  {person.status}
                                </Badge>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground">No birthdays on this date</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-[#005A9C] text-white">
            <CardTitle>Wish Templates</CardTitle>
            <CardDescription className="text-gray-100">Customize your birthday messages</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {wishTemplates.map((template) => (
                <div key={template.id} className="p-3 border rounded-md">
                  <h4 className="font-medium mb-1">{template.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{template.content.split("\n")[0]}...</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[#005A9C] hover:bg-[#004a80]">Manage Templates</Button>
          </CardFooter>
        </Card>
      </div>

      <Dialog open={isWishDialogOpen} onOpenChange={setIsWishDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Send Birthday Wish</DialogTitle>
            <DialogDescription>
              {selectedPerson && <>Customize and send a birthday wish to {selectedPerson.name}</>}
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Delivery Method</label>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className={`flex-1 ${deliveryMethod === "email" ? "bg-[#005A9C] text-white" : ""}`}
                    onClick={() => setDeliveryMethod("email")}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    className={`flex-1 ${deliveryMethod === "sms" ? "bg-[#005A9C] text-white" : ""}`}
                    onClick={() => setDeliveryMethod("sms")}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    SMS
                  </Button>
                  <Button
                    variant="outline"
                    className={`flex-1 ${deliveryMethod === "whatsapp" ? "bg-[#005A9C] text-white" : ""}`}
                    onClick={() => setDeliveryMethod("whatsapp")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Select Template</label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={selectedTemplate.id}
                  onChange={(e) => {
                    const template = wishTemplates.find((t) => t.id === Number.parseInt(e.target.value))
                    if (template) setSelectedTemplate(template)
                  }}
                >
                  {wishTemplates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Customize Message</label>
                <Textarea
                  placeholder="Enter your custom message or leave blank to use the template"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="min-h-[150px]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Delivery Schedule</label>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className={`flex-1 ${scheduleType === "now" ? "bg-[#005A9C] text-white" : ""}`}
                    onClick={() => setScheduleType("now")}
                  >
                    Send Now
                  </Button>
                  <Button
                    variant="outline"
                    className={`flex-1 ${scheduleType === "scheduled" ? "bg-[#005A9C] text-white" : ""}`}
                    onClick={() => setScheduleType("scheduled")}
                  >
                    Schedule
                  </Button>
                </div>
              </div>

              {scheduleType === "scheduled" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Date & Time</label>
                  <div className="flex space-x-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !scheduledDate && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {scheduledDate ? format(scheduledDate, "dd-MM-yyyy") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={scheduledDate}
                          onSelect={setScheduledDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                    <select
                      className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={scheduledTime}
                      onChange={(e) => setScheduledTime(e.target.value)}
                    >
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium">Add Attachment</label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="flex items-center justify-center">
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Add Image
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center">
                    <Gift className="mr-2 h-4 w-4" />
                    Add Gift Card
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Preview</h3>
                <div className="border rounded-md p-4 bg-white">
                  <div className="flex items-center mb-3">
                    <Image
                      src="/images/durasol-logo.png"
                      alt="Durasol Energi Logo"
                      width={100}
                      height={30}
                      className="h-auto"
                    />
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">{selectedPerson && `To: ${selectedPerson.name}`}</h4>
                    <div className="text-sm whitespace-pre-line border-l-2 border-[#005A9C] pl-3 py-1">
                      {customMessage ||
                        (selectedPerson && selectedTemplate.content.replace("[NAME]", selectedPerson.name))}
                    </div>
                    <div className="pt-3 border-t text-sm text-muted-foreground">
                      <p>Best regards,</p>
                      <p>Durasol Energi Team</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Recipient Details</h3>
                <div className="rounded-md border p-3">
                  {selectedPerson && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Name:</span>
                        <span className="text-sm">{selectedPerson.name}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm font-medium">Type:</span>
                        <span className="text-sm">{selectedPerson.type}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm font-medium">Birthday:</span>
                        <span className="text-sm">{format(selectedPerson.date, "MMMM dd, yyyy")}</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm font-medium">Delivery:</span>
                        <span className="text-sm capitalize">{deliveryMethod}</span>
                      </div>
                      {scheduleType === "scheduled" && scheduledDate && (
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm font-medium">Scheduled:</span>
                          <span className="text-sm">
                            {format(scheduledDate, "MMM dd, yyyy")} at {scheduledTime}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Tracking</h3>
                <div className="rounded-md border p-3 bg-muted/50">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm text-muted-foreground">Delivery receipt</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm text-muted-foreground">Read receipt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsWishDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSendWish} className="bg-[#005A9C] hover:bg-[#004a80]">
              {scheduleType === "now" ? "Send Now" : "Schedule"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

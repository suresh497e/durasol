"use client"

import { useState } from "react"
import Image from "next/image"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { CalendarIcon, Mail, MessageSquare, MessageCircle, ImageIcon, Gift, Upload, Send } from "lucide-react"
import Link from "next/link"

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

// Sample card designs
const cardDesigns = [
  { id: 1, name: "Classic Blue", color: "bg-blue-100 border-blue-500" },
  { id: 2, name: "Elegant Red", color: "bg-red-100 border-red-500" },
  { id: 3, name: "Durasol Brand", color: "bg-white border-[#005A9C]" },
  { id: 4, name: "Festive", color: "bg-yellow-100 border-yellow-500" },
  { id: 5, name: "Minimalist", color: "bg-gray-100 border-gray-500" },
  { id: 6, name: "Custom", color: "bg-white border-dashed border-gray-400" },
]

export default function BirthdayWishForm() {
  const [activeTab, setActiveTab] = useState("compose")
  const [recipientName, setRecipientName] = useState("Rajesh Kumar")
  const [recipientType, setRecipientType] = useState("Distributor")
  const [recipientEmail, setRecipientEmail] = useState("rajesh.kumar@example.com")
  const [recipientPhone, setRecipientPhone] = useState("+91 98765 43210")
  const [selectedTemplate, setSelectedTemplate] = useState(wishTemplates[0])
  const [customMessage, setCustomMessage] = useState("")
  const [deliveryMethod, setDeliveryMethod] = useState("email")
  const [scheduleType, setScheduleType] = useState("now")
  const [scheduledDate, setScheduledDate] = useState<Date | undefined>(new Date())
  const [scheduledTime, setScheduledTime] = useState("09:00")
  const [selectedDesign, setSelectedDesign] = useState(cardDesigns[2])
  const [attachmentType, setAttachmentType] = useState<string | null>(null)
  const [giftCardValue, setGiftCardValue] = useState("1000")
  const [previewMode, setPreviewMode] = useState("email")

  const handleSendWish = () => {
    if (!recipientName || !recipientEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required recipient details.",
        variant: "destructive",
      })
      return
    }

    // In a real application, you would send the wish via email/SMS/WhatsApp here
    const message = customMessage || selectedTemplate.content.replace("[NAME]", recipientName)
    console.log(`Sending ${deliveryMethod} wish to ${recipientName}: ${message}`)

    toast({
      title: scheduleType === "now" ? "Birthday Wish Sent" : "Birthday Wish Scheduled",
      description:
        scheduleType === "now"
          ? `Your birthday wish has been sent to ${recipientName}.`
          : `Your birthday wish has been scheduled for ${scheduledDate ? format(scheduledDate, "MMM dd, yyyy") : "N/A"} at ${scheduledTime}.`,
    })

    // Reset form or redirect
    setActiveTab("compose")
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Birthday Wish Form</h1>
        <p className="text-muted-foreground">
          Create and send personalized birthday wishes to distributors and their families
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="bg-[#005A9C] text-white">
              <CardTitle>Create Birthday Wish</CardTitle>
              <CardDescription className="text-gray-100">Customize your message and delivery options</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs defaultValue="compose" onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="compose">Compose</TabsTrigger>
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="delivery">Delivery</TabsTrigger>
                </TabsList>

                <TabsContent value="compose" className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="recipient-name">Recipient Name*</Label>
                      <Input
                        id="recipient-name"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="Full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="recipient-type">Recipient Type</Label>
                      <select
                        id="recipient-type"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={recipientType}
                        onChange={(e) => setRecipientType(e.target.value)}
                      >
                        <option value="Distributor">Distributor</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Child">Child</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="template">Select Template</Label>
                    <select
                      id="template"
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
                    <div className="flex justify-between items-center">
                      <Label htmlFor="custom-message">Customize Message</Label>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCustomMessage(selectedTemplate.content.replace("[NAME]", recipientName))}
                        className="text-xs"
                      >
                        Use Template
                      </Button>
                    </div>
                    <Textarea
                      id="custom-message"
                      placeholder="Enter your custom message or use the template"
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      className="min-h-[200px]"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="design" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <Label>Card Design</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {cardDesigns.map((design) => (
                        <div
                          key={design.id}
                          className={`border-2 rounded-md p-4 cursor-pointer transition-all ${
                            selectedDesign.id === design.id
                              ? "border-[#005A9C] ring-2 ring-[#005A9C] ring-opacity-50"
                              : "border-transparent hover:border-gray-300"
                          }`}
                          onClick={() => setSelectedDesign(design)}
                        >
                          <div className={`h-20 rounded-md border ${design.color} flex items-center justify-center`}>
                            {design.id === 6 ? (
                              <div className="text-center text-sm text-gray-500">
                                <Upload className="h-5 w-5 mx-auto mb-1" />
                                Custom
                              </div>
                            ) : (
                              <span className="text-sm font-medium">{design.name}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Attachments</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div
                        className={`border rounded-md p-4 cursor-pointer ${
                          attachmentType === "image" ? "border-[#005A9C] bg-blue-50" : ""
                        }`}
                        onClick={() => setAttachmentType(attachmentType === "image" ? null : "image")}
                      >
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <ImageIcon className="h-5 w-5 text-[#005A9C]" />
                          </div>
                          <div>
                            <h4 className="font-medium">Add Image</h4>
                            <p className="text-sm text-muted-foreground">Attach a birthday image</p>
                          </div>
                        </div>

                        {attachmentType === "image" && (
                          <div className="mt-4 border-t pt-4">
                            <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6">
                              <div className="text-center">
                                <Upload className="h-8 w-8 mx-auto text-gray-400" />
                                <p className="mt-2 text-sm font-medium">Click to upload or drag and drop</p>
                                <p className="mt-1 text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. 2MB)</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className={`border rounded-md p-4 cursor-pointer ${
                          attachmentType === "gift" ? "border-[#005A9C] bg-blue-50" : ""
                        }`}
                        onClick={() => setAttachmentType(attachmentType === "gift" ? null : "gift")}
                      >
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <Gift className="h-5 w-5 text-[#005A9C]" />
                          </div>
                          <div>
                            <h4 className="font-medium">Add Gift Card</h4>
                            <p className="text-sm text-muted-foreground">Include a digital gift card</p>
                          </div>
                        </div>

                        {attachmentType === "gift" && (
                          <div className="mt-4 border-t pt-4 space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="gift-type">Gift Card Type</Label>
                              <select
                                id="gift-type"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="amazon">Amazon Gift Card</option>
                                <option value="flipkart">Flipkart Gift Card</option>
                                <option value="swiggy">Swiggy Gift Card</option>
                                <option value="zomato">Zomato Gift Card</option>
                              </select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="gift-value">Gift Card Value (₹)</Label>
                              <Input
                                id="gift-value"
                                type="number"
                                value={giftCardValue}
                                onChange={(e) => setGiftCardValue(e.target.value)}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="delivery" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <Label>Recipient Contact Details</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="recipient-email">Email Address*</Label>
                        <Input
                          id="recipient-email"
                          type="email"
                          value={recipientEmail}
                          onChange={(e) => setRecipientEmail(e.target.value)}
                          placeholder="email@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="recipient-phone">Phone Number</Label>
                        <Input
                          id="recipient-phone"
                          value={recipientPhone}
                          onChange={(e) => setRecipientPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Delivery Method</Label>
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
                    <Label>Delivery Schedule</Label>
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
                      <Label>Select Date & Time</Label>
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
                    <Label>Tracking Options</Label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="delivery-receipt" className="mr-2" defaultChecked />
                        <Label htmlFor="delivery-receipt" className="text-sm font-normal">
                          Request delivery receipt
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="read-receipt" className="mr-2" defaultChecked />
                        <Label htmlFor="read-receipt" className="text-sm font-normal">
                          Request read receipt
                        </Label>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button variant="outline">Save as Draft</Button>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setPreviewMode(previewMode === "email" ? "mobile" : "email")}>
                  {previewMode === "email" ? "Mobile Preview" : "Email Preview"}
                </Button>
                <Button onClick={handleSendWish} className="bg-[#005A9C] hover:bg-[#004a80]">
                  <Send className="mr-2 h-4 w-4" />
                  {scheduleType === "now" ? "Send Now" : "Schedule"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="bg-[#005A9C] text-white">
              <CardTitle>Preview</CardTitle>
              <CardDescription className="text-gray-100">
                {previewMode === "email" ? "Email Preview" : "Mobile Preview"}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {previewMode === "email" ? (
                <div className={`border-2 rounded-md p-4 ${selectedDesign.color}`}>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/durasol-logo.png"
                      alt="Durasol Energi Logo"
                      width={120}
                      height={40}
                      className="h-auto"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">
                      {recipientName ? `Dear ${recipientName},` : "Dear Recipient,"}
                    </h3>
                    <div className="text-sm whitespace-pre-line">
                      {customMessage || selectedTemplate.content.replace("[NAME]", recipientName || "Recipient")}
                    </div>

                    {attachmentType === "image" && (
                      <div className="my-4 bg-gray-100 h-40 flex items-center justify-center rounded-md">
                        <ImageIcon className="h-8 w-8 text-gray-400" />
                      </div>
                    )}

                    {attachmentType === "gift" && (
                      <div className="my-4 border rounded-md p-4 bg-yellow-50">
                        <div className="flex items-center">
                          <Gift className="h-5 w-5 text-yellow-600 mr-2" />
                          <span className="font-medium">Gift Card Included</span>
                        </div>
                        <p className="text-sm mt-1">₹{giftCardValue} Gift Card</p>
                      </div>
                    )}

                    <div className="pt-4 border-t text-sm text-muted-foreground">
                      <p>Best regards,</p>
                      <p className="font-medium">Durasol Energi Team</p>
                      <p className="mt-2 text-xs">Let's improve the quality of life</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border-2 rounded-md p-3 max-w-[300px] mx-auto bg-gray-50">
                  <div className="rounded-t-md bg-gray-200 p-1 flex justify-center">
                    <div className="w-16 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                  <div className="p-3 space-y-3">
                    {deliveryMethod === "whatsapp" && (
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
                          <MessageCircle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-medium">Durasol Energi</p>
                          <p className="text-xs text-muted-foreground">WhatsApp Business</p>
                        </div>
                      </div>
                    )}

                    {deliveryMethod === "sms" && (
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                          <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-medium">Durasol Energi</p>
                          <p className="text-xs text-muted-foreground">SMS</p>
                        </div>
                      </div>
                    )}

                    <div className={`rounded-md p-3 ${selectedDesign.color}`}>
                      <p className="text-xs mb-2">{recipientName ? `Dear ${recipientName},` : "Dear Recipient,"}</p>
                      <p className="text-xs whitespace-pre-line line-clamp-6">
                        {customMessage || selectedTemplate.content.replace("[NAME]", recipientName || "Recipient")}
                      </p>

                      {attachmentType === "image" && (
                        <div className="my-2 bg-gray-100 h-20 flex items-center justify-center rounded-md">
                          <ImageIcon className="h-5 w-5 text-gray-400" />
                        </div>
                      )}

                      {attachmentType === "gift" && (
                        <div className="my-2 border rounded-md p-2 bg-yellow-50">
                          <div className="flex items-center">
                            <Gift className="h-3 w-3 text-yellow-600 mr-1" />
                            <span className="text-xs font-medium">₹{giftCardValue} Gift Card</span>
                          </div>
                        </div>
                      )}

                      <p className="text-xs mt-2 text-muted-foreground">- Durasol Energi Team</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex-col space-y-4 border-t pt-6">
              <div className="w-full">
                <h4 className="text-sm font-medium mb-2">Recipient Summary</h4>
                <div className="rounded-md border p-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Name:</span>
                    <span className="text-sm font-medium">{recipientName || "Not specified"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Type:</span>
                    <span className="text-sm">{recipientType}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Delivery:</span>
                    <span className="text-sm capitalize">{deliveryMethod}</span>
                  </div>
                  {scheduleType === "scheduled" && scheduledDate && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Scheduled:</span>
                      <span className="text-sm">
                        {format(scheduledDate, "MMM dd, yyyy")} at {scheduledTime}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin">Back to Birthday Management</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

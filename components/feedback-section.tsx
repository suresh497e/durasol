"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export function FeedbackSection() {
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (feedback.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter your feedback before submitting.",
        variant: "destructive",
      })
      return
    }

    // Here you would typically send the feedback to your backend
    console.log("Feedback submitted:", feedback)

    toast({
      title: "Feedback Submitted",
      description: "Thank you for your valuable input!",
      action: <ToastAction altText="Close">Close</ToastAction>,
    })

    setFeedback("")
  }

  return (
    <Card>
      <CardHeader className="bg-[#005A9C] text-white">
        <CardTitle>Feedback / Suggestions</CardTitle>
        <CardDescription className="text-gray-100">We value your input</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Enter your feedback or suggestions here"
            className="min-h-[150px]"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <Button type="submit" className="bg-[#005A9C] hover:bg-[#004a80]">
            Submit Feedback
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

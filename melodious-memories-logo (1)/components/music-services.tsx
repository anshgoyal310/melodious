"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { playfair } from "@/app/layout"
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Kiran",
    occasion: "Anniversary Gift",
    quote: "My Boyfriend was moved to tears when he heard our story in song. Simply beautiful.",
    rating: 5,
  },
  {
    name: "Khushi",
    occasion: "Anniversary Gift",
    quote: "The most unique and touching gift I've ever received. The quality was amazing!",
    rating: 5,
  },
  {
    name: "Ansh",
    occasion: "Propose gift",
    quote: "The most heartfelt gift I’ve ever given—perfectly captured emotions in a beautiful song.",
    rating: 5,
  },
  {
    name: "Priyanshu",
    occasion: "Propose gift",
    quote: "The song perfectly captured the emotions and feelings of when we first met—truly magical!",
    rating: 5,
  },
]

export function MusicServices() {
  const { toast } = useToast()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [volume, setVolume] = useState([75])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [requestForm, setRequestForm] = useState({
    name: "",
    email: "",
    occasion: "",
    requirements: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/music-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestForm),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request")
      }

      toast({
        title: "Request Submitted!",
        description: "We'll review your requirements and get back to you soon.",
      })

      // Reset form
      setRequestForm({
        name: "",
        email: "",
        occasion: "",
        requirements: "",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit request",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Add scroll into view functionality
  useEffect(() => {
    const hash = window.location.hash
    if (hash === "#testimonials") {
      const element = document.getElementById("testimonials")
      if (element) {
        // Add a slight delay to ensure smooth scrolling after page load
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [])

  return (
    <section id="testimonials" className="py-20">
      {" "}
      {/* Changed ID to testimonials */}
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className={`${playfair.className} text-3xl font-bold sm:text-4xl md:text-5xl`}>
                Your Story, Your Melody
              </h2>
              <p className="text-muted-foreground text-lg">
                From the first &apos;hello&apos; to cherished anniversaries, we transform your love into timeless songs.
                Our professional artists craft each piece with passion and care.
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <h3 className="font-medium">{testimonials[currentTestimonial].name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].occasion}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="italic">&quot;{testimonials[currentTestimonial].quote}&quot;</p>
                  <div className="pt-4 flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    >
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    <Button size="icon" className="h-12 w-12" onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                    >
                      <SkipForward className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-2 ml-auto">
                      <Volume2 className="h-4 w-4" />
                      <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-24" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full sm:w-auto">
                  Create Your Song
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create Your Custom Song</DialogTitle>
                  <DialogDescription>Tell us about your special occasion and requirements</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={requestForm.name}
                      onChange={(e) => setRequestForm((prev) => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      value={requestForm.email}
                      onChange={(e) => setRequestForm((prev) => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="occasion" className="text-sm font-medium">
                      Occasion
                    </label>
                    <Select
                      value={requestForm.occasion}
                      onValueChange={(value) => setRequestForm((prev) => ({ ...prev, occasion: value }))}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="valentine">Valentine's Day</SelectItem>
                        <SelectItem value="proposal">Proposal</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="requirements" className="text-sm font-medium">
                      Your Requirements
                    </label>
                    <Textarea
                      id="requirements"
                      placeholder="Tell us about your story and song preferences..."
                      className="min-h-[100px]"
                      value={requestForm.requirements}
                      onChange={(e) => setRequestForm((prev) => ({ ...prev, requirements: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" variant="outline" className="text-white border-white">
                Watch Recording Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


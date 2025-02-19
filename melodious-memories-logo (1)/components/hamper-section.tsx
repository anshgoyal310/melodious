"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"
import { playfair } from "@/app/layout"
import { Music, Film, Star, Check, ArrowRight } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    title: "Basic Plan",
    description: "Get a heartfelt custom song delivered in just 4 days!",
    price: "₹999",
    icon: Music,
    features: [
      "Professionally written and composed",
      "Personalized based on your story",
      "High-quality audio file",
      "Song delivery in 4 days",
    ],
    color: "bg-blue-50 dark:bg-blue-950",
    hoverColor: "hover:border-blue-300 dark:hover:border-blue-700",
    iconColor: "text-blue-500",
  },
  {
    title: "Enhanced Plan",
    description: "A custom song with your special moments brought to life through video editing.",
    price: "₹1,999",
    icon: Film,
    features: ["2–3 minute custom song", "Custom song + video", "Professional video editing", "Delivery within 4 days"],
    color: "bg-teal-50 dark:bg-teal-950",
    hoverColor: "hover:border-teal-300 dark:hover:border-teal-700",
    iconColor: "text-teal-500",
    popular: true,
  },
  {
    title: "Premium Plan",
    description: "The ultimate personalized experience with a song and fully customized visuals.",
    price: "₹2,599",
    icon: Star,
    features: ["2–3 minute custom song", "Priority 2-day delivery", "Advanced video editing", "Custom visual effects"],
    color: "bg-amber-50 dark:bg-amber-950",
    hoverColor: "hover:border-amber-300 dark:hover:border-amber-700",
    iconColor: "text-amber-500",
  },
]

export function HamperSection() {
  const { toast } = useToast()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<(typeof plans)[0] | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPlan) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: selectedPlan.title,
          customerDetails,
          amount: selectedPlan.price,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to place order")
      }

      toast({
        title: "Order Placed Successfully!",
        description: "We'll contact you soon with next steps.",
      })

      // Reset form
      setCustomerDetails({
        name: "",
        email: "",
        phone: "",
      })
      setSelectedPlan(null)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to place order",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="hampers" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className={`${playfair.className} text-3xl font-bold sm:text-4xl md:text-5xl`}>
            Choose Your Perfect Musical Gift
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Select from our carefully crafted packages, each designed to create a unique and memorable experience for
            your special occasion.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const isHovered = hoveredCard === index

            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 border-2 ${plan.popular ? "scale-105 shadow-xl" : ""} ${plan.hoverColor}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 opacity-40 ${plan.color} transition-opacity duration-300 ${
                    isHovered ? "opacity-60" : ""
                  }`}
                />

                {/* Popular Badge */}
                {plan.popular && (
                  <Badge
                    className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 font-semibold"
                    variant="secondary"
                  >
                    Most Purchased ⭐
                  </Badge>
                )}

                <CardHeader className="relative">
                  <div className={`p-3 rounded-lg inline-flex ${plan.color} mb-4`}>
                    <Icon className={`h-6 w-6 ${plan.iconColor}`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/song</span>
                  </div>
                  {plan.popular && (
                    <p className="text-sm text-pink-600 font-medium">Over 1000+ customers chose this plan!</p>
                  )}
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className={`h-4 w-4 ${plan.iconColor}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="relative">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full group"
                        size="lg"
                        variant={plan.popular ? "default" : "outline"}
                        onClick={() => setSelectedPlan(plan)}
                      >
                        <span className="mr-2">Order Now</span>
                        <ArrowRight
                          className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                        />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Order {plan.title}</DialogTitle>
                        <DialogDescription>Fill in your details to place the order</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleOrder} className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            value={customerDetails.name}
                            onChange={(e) => setCustomerDetails((prev) => ({ ...prev, name: e.target.value }))}
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
                            value={customerDetails.email}
                            onChange={(e) => setCustomerDetails((prev) => ({ ...prev, email: e.target.value }))}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Your phone number"
                            value={customerDetails.phone}
                            onChange={(e) => setCustomerDetails((prev) => ({ ...prev, phone: e.target.value }))}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Processing..." : "Confirm Order"}
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 border-2 border-transparent transition-colors duration-300 pointer-events-none ${
                    isHovered ? plan.hoverColor : ""
                  }`}
                />
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">All plans include high-quality audio files.</p>
        </div>
      </div>
    </section>
  )
}


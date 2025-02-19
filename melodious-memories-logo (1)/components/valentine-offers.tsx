'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { greatVibes } from "@/app/layout"
import { Calendar, Gift, Heart, Music, Sparkles } from 'lucide-react'
import { useEffect, useState } from "react"

const valentineDates = [
  { date: "Feb 7", name: "Rose Day", icon: Heart, color: "text-pink-500", offer: "40% OFF" },
  { date: "Feb 8", name: "Propose Day", icon: Music, color: "text-purple-500", offer: "45% OFF" },
  { date: "Feb 9", name: "Chocolate Day", icon: Gift, color: "text-amber-700", offer: "50% OFF" },
  { date: "Feb 10", name: "Promise Day", icon: Sparkles, color: "text-yellow-500", offer: "55% OFF" },
  { date: "Feb 14", name: "Valentine's Day", icon: Heart, color: "text-red-500", offer: "60% OFF" },
]

export function ValentineOffers() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % valentineDates.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-b from-pink-50/50 via-white to-transparent">
      <div className="container py-8">
        <div className="text-center mb-8">
          <h2 className={`${greatVibes.className} text-3xl text-pink-600`}>
            Valentine&apos;s Week Special
          </h2>
          <p className="text-muted-foreground mt-2">
            Celebrate each day with special offers and create unforgettable memories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {valentineDates.map((date, index) => {
            const Icon = date.icon
            const isActive = index === activeIndex
            
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 ${
                  isActive ? 'ring-2 ring-pink-500 shadow-lg scale-105' : ''
                }`}
              >
                <CardContent className="p-4">
                  <div className={`absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : ''
                  }`} />
                  
                  <div className="relative space-y-3 text-center">
                    <div className="flex items-center justify-center gap-1 text-sm font-medium">
                      <Calendar className="h-4 w-4" />
                      {date.date}
                    </div>
                    
                    <Icon className={`h-8 w-8 mx-auto ${date.color} transition-transform duration-500 ${
                      isActive ? 'scale-110 animate-pulse' : ''
                    }`} />
                    
                    <div className="space-y-1">
                      <h3 className="font-medium">{date.name}</h3>
                      <p className={`text-sm font-bold ${isActive ? 'text-pink-600' : 'text-muted-foreground'}`}>
                        {date.offer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}


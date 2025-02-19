'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { greatVibes } from "@/app/layout"
import { Heart, Gift, Music2, Calendar } from 'lucide-react'
import { useEffect, useState } from "react"

const valentineDays = [
  { date: "Feb 7", name: "Rose Day", icon: Heart, discount: "40% OFF" },
  { date: "Feb 8", name: "Propose Day", icon: Music2, discount: "45% OFF" },
  { date: "Feb 9", name: "Chocolate Day", icon: Gift, discount: "50% OFF" },
  { date: "Feb 10", name: "Teddy Day", icon: Heart, discount: "55% OFF" },
  { date: "Feb 14", name: "Valentine's Day", icon: Heart, discount: "60% OFF" },
]

export function ValentinesWeek() {
  const [activeDay, setActiveDay] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDay((prev) => (prev + 1) % valentineDays.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-b from-pink-50/50 to-white">
      <div className="container py-8">
        <div className="text-center space-y-4 mb-8">
          <h2 className={`text-2xl md:text-3xl font-bold ${greatVibes.className} text-pink-600`}>
            Valentine&apos;s Week Special
          </h2>
          <p className="text-muted-foreground">
            Celebrate each day of love with special offers and create unforgettable memories
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {valentineDays.map((day, index) => {
            const isActive = index === activeDay
            const Icon = day.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 ${
                  isActive ? 'ring-2 ring-pink-500 shadow-lg scale-105' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent transition-opacity duration-500 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`} />
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-sm font-medium flex items-center justify-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {day.date}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <Icon className={`h-8 w-8 mx-auto transition-colors duration-500 ${
                    isActive ? 'text-pink-500' : 'text-gray-400'
                  }`} />
                  <div className="space-y-1">
                    <h3 className="font-medium">{day.name}</h3>
                    <p className={`text-sm font-bold transition-colors duration-500 ${
                      isActive ? 'text-pink-600' : 'text-muted-foreground'
                    }`}>
                      {day.discount}
                    </p>
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


'use client'

import { Button } from "@/components/ui/button"
import { greatVibes } from "@/app/layout"
import { Calendar, Gift, Heart } from 'lucide-react'
import { useEffect, useState } from "react"

export function ValentineCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const valentinesDay = new Date('2024-02-14T00:00:00')
      const now = new Date()
      const difference = valentinesDay.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-rose-500 text-white">
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute animate-float text-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
            }}
          />
        ))}
      </div>
      
      <div className="container relative py-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <h2 className={`${greatVibes.className} text-2xl md:text-3xl`}>
              This Valentine&apos;s Day, Make It Special
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-lg">
              <Gift className="h-5 w-5 animate-bounce" />
              <span className="font-semibold">Early Bird Offer:</span>
              <span className="text-yellow-300 font-bold">60% OFF</span>
            </div>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-pink-600 hover:bg-pink-50 hover:text-pink-700"
            >
              Book Now & Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


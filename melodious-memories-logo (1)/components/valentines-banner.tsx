'use client'

import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'
import { useEffect, useState } from "react"

export function ValentinesBanner() {
  const [isVisible, setIsVisible] = useState(true)

  return isVisible ? (
    <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>
      <div className="container relative">
        <div className="flex items-center justify-between py-3 px-4">
          <p className="text-sm md:text-base font-medium">
            Say &apos;I Love You&apos; in a Unique Way – Exclusive Valentine&apos;s Discounts{" "}
            <span className="inline-block animate-pulse font-bold">
              Get 60% OFF!
            </span>
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close promotion banner"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  ) : null
}


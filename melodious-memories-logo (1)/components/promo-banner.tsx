'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white relative overflow-hidden">
      <div className="container relative">
        <div className="flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-2 mx-auto">
            <Sparkles className="h-5 w-5 animate-pulse text-yellow-200" />
            <p className="text-sm md:text-base font-medium">
              Say &apos;I Love You&apos; in a Unique Way – Exclusive Valentine&apos;s Discounts{" "}
              <span className="inline-block font-bold bg-white/10 px-2 py-0.5 rounded-full animate-pulse">
                Get 60% OFF!
              </span>
            </p>
            <Sparkles className="h-5 w-5 animate-pulse text-yellow-200" />
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            aria-label="Close promotion banner"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  )
}


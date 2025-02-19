'use client'

import { greatVibes, playfair } from "@/app/layout"
import { Music, Sparkles, Heart } from 'lucide-react'
import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  scale: number
  rotation: number
  delay: number
}

export function AnimatedLogo() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [elements] = useState<FloatingElement[]>(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      rotation: Math.random() * 360,
      delay: Math.random() * 2
    }))
  )

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setIsPlaying(prev => !prev)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div 
      className="relative py-8 px-4 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 via-rose-100/20 to-pink-100/20 animate-pulse" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {elements.map((element, i) => {
          const Icon = i % 3 === 0 ? Music : i % 3 === 1 ? Sparkles : Heart
          return (
            <div
              key={element.id}
              className={`
                absolute transition-all duration-1000
                ${isHovered ? 'opacity-100' : 'opacity-50'}
              `}
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                transform: `scale(${element.scale}) rotate(${element.rotation}deg)`,
                transitionDelay: `${element.delay}s`
              }}
            >
              <Icon 
                className={`
                  w-4 h-4 text-pink-300/30
                  animate-float
                `}
                style={{
                  animationDelay: `${element.delay}s`,
                  animationDuration: `${4 + element.delay}s`
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Main logo container with continuous floating animation */}
      <div className="relative flex flex-col items-center animate-gentle-float">
        {/* Sparkle effects */}
        <div className="absolute -top-4 left-1/4 animate-sparkle">
          <Sparkles className="w-4 h-4 text-yellow-300/50" />
        </div>
        <div className="absolute -bottom-4 right-1/4 animate-sparkle-delayed">
          <Sparkles className="w-4 h-4 text-yellow-300/50" />
        </div>

        {/* Main title with floating effect */}
        <div className="relative">
          <h1 
            className={`
              ${greatVibes.className}
              text-4xl md:text-5xl lg:text-6xl
              bg-clip-text text-transparent
              bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600
              animate-gradient-x
              transition-all duration-700 transform
              hover:scale-110
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
          >
            Melodious
          </h1>
          
          {/* Glowing orb behind text */}
          <div className="absolute inset-0 bg-pink-300/20 filter blur-2xl animate-pulse-slow" />
        </div>

        {/* Subtitle with animated underline */}
        <div 
          className={`
            relative mt-2
            transition-all duration-700 delay-300
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}
        >
          <div className="flex items-center gap-3">
            <span className={`
              h-px w-12 
              bg-gradient-to-r from-transparent via-pink-300 to-transparent
              transition-all duration-500 animate-width
              ${isHovered ? 'w-16 opacity-100' : 'w-12 opacity-70'}
            `} />
            <span className={`
              ${playfair.className}
              text-lg tracking-widest
              transition-all duration-500
              ${isHovered ? 'text-pink-600' : 'text-muted-foreground'}
              animate-shimmer
            `}>
              MEMORIES
            </span>
            <span className={`
              h-px w-12
              bg-gradient-to-r from-transparent via-pink-300 to-transparent
              transition-all duration-500 animate-width
              ${isHovered ? 'w-16 opacity-100' : 'w-12 opacity-70'}
            `} />
          </div>
          
          {/* Animated underline */}
          <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-slide" />
        </div>
      </div>

      {/* Musical notes with continuous movement */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <Music
            key={i}
            className={`
              absolute text-pink-400/20
              animate-float-notes
              transition-opacity duration-1000
            `}
            style={{
              left: `${15 + i * 20}%`,
              top: `${40 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: isHovered ? 0.4 : 0.2
            }}
          />
        ))}
      </div>
    </div>
  )
}


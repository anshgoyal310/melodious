'use client'

import { Button } from "@/components/ui/button"
import { greatVibes, playfair } from "@/app/layout"
import { ArrowLeft, ArrowRight, Heart, Music2 } from 'lucide-react'
import Image from "next/image"
import { useEffect, useState } from "react"

const occasions = [
  {
    title: "Valentine's Day",
    description: "Express your love through music",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leonardo_Kino_XL_A_romantic_candlelit_dinner_setting_under_a_s_3.jpg-suwXDoSLa3GSP2AdxTJrK8joXn4Fi8.jpeg",
  },
  {
    title: "Proposals",
    description: "Make the moment perfect",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leonardo_Kino_XL_A_magical_sunset_proposal_on_a_secluded_beach_2.jpg-gyEvjFVmi9y548RYQ4HEf39l87vgC7.jpeg",
  },
  {
    title: "Anniversaries",
    description: "Celebrate your special milestones",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leonardo_Kino_XL_A_romantic_candlelit_dinner_setting_under_a_d_0.jpg-KJHL2G6FxRXcGFPD2xdA4AgXqMGBD8.jpeg",
  },
  {
    title: "Birthdays",
    description: "Create magical birthday memories",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leonardo_Kino_XL_A_cheerful_birthday_celebration_scene_with_fr_1.jpg-xKBWPMWcHZRCYcWQZ8YFmnfIDWxtiO.jpeg",
  },
  {
    title: "Weddings",
    description: "Make your first dance unforgettable",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leonardo_Kino_XL_A_vibrant_Indian_outdoor_wedding_ceremony_at_2.jpg-BcNwtx0jEKbDz8zkbiPhrSWog2X0Hd.jpeg",
  },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % occasions.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + occasions.length) % occasions.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white py-20">
      <div className="floating-notes absolute inset-0 pointer-events-none">
        {mounted && Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1
            }}
          >
            {i % 2 === 0 ? <Heart className="h-4 w-4" /> : <Music2 className="h-4 w-4" />}
          </div>
        ))}
      </div>
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Turn Your Love Story Into a{" "}
                <span className={`${greatVibes.className} text-pink-600`}>
                  Song
                </span>
                {" "}This Valentine&apos;s!
              </h1>
              <p className="text-muted-foreground text-lg max-w-[600px]">
                Personalized songs and Valentine&apos;s hampers to make your moments unforgettable.
                Create a unique musical gift that will be cherished forever.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-100 to-rose-100">
              {/* Image Slider */}
              <div className="relative w-full h-full">
                {occasions.map((occasion, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden={index !== currentSlide}
                  >
                    <Image
                      src={occasion.image}
                      alt={occasion.title}
                      fill
                      className="object-cover"
                      priority={index === currentSlide}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className={`${greatVibes.className} text-3xl mb-2`}>
                        {occasion.title}
                      </h2>
                      <p className="text-white/90">
                        {occasion.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors flex items-center justify-center text-white"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors flex items-center justify-center text-white"
                aria-label="Next slide"
              >
                <ArrowRight className="h-6 w-6" />
              </button>

              {/* Dots Navigation */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
                {occasions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true)
                        setCurrentSlide(index)
                        setTimeout(() => setIsAnimating(false), 500)
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-white w-4' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === currentSlide}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


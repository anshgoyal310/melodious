"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

const WHATSAPP_MESSAGE = "Hi! I would like to know more about personalized songs with Melodious Memories."
const WHATSAPP_NUMBER = "918955817991"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <>
      {isVisible && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
        >
          <Button size="lg" className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg relative">
            <MessageCircle className="h-6 w-6 text-white" />
            <span className="sr-only">Chat on WhatsApp</span>

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-white text-green-600 text-sm rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Chat with us on WhatsApp
            </span>
          </Button>
        </a>
      )}
    </>
  )
}


'use client'

import { FloatingElements } from "@/components/floating-elements"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface RomanticThemeProviderProps {
  children: React.ReactNode
  className?: string
}

export function RomanticThemeProvider({
  children,
  className
}: RomanticThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn("min-h-screen bg-gradient-to-b from-pink-50/50 to-white", className)}>
        {children}
      </div>
    )
  }

  return (
    <div className={cn(
      "min-h-screen bg-gradient-to-b from-pink-50/50 to-white relative overflow-hidden",
      className
    )}>
      <FloatingElements />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}


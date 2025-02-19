'use client'

import { cn } from "@/lib/utils"
import { Dancing_Script, Playfair_Display } from 'next/font/google'
import { LogoProps, LogoVariations } from "./logo-variations"

const dancingScript = Dancing_Script({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export function Logo({ variation = LogoVariations.FULL, className, size = 200 }: LogoProps) {
  const scale = size / 200

  if (variation === LogoVariations.SIMPLIFIED) {
    return (
      <div className={cn("relative inline-block", className)} style={{ width: size, height: size }}>
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="100" cy="100" r="98" fill="url(#simplified-gradient)" stroke="currentColor" strokeWidth="2" />
          <path
            d="M100 50C83.33 50 70 63.33 70 80C70 110 130 125 130 155C130 171.67 116.67 185 100 185C83.33 185 70 171.67 70 155"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <text
            x="100"
            y="120"
            className={playfair.className}
            textAnchor="middle"
            fill="white"
            fontSize={24 * scale}
          >
            MM
          </text>
          <defs>
            <linearGradient id="simplified-gradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF69B4" />
              <stop offset="1" stopColor="#FFD700" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  if (variation === LogoVariations.MONOCHROME) {
    return (
      <div className={cn("relative inline-block", className)} style={{ width: size, height: size }}>
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="100" cy="100" r="98" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
          <path
            d="M100 50C83.33 50 70 63.33 70 80C70 110 130 125 130 155C130 171.67 116.67 185 100 185C83.33 185 70 171.67 70 155"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M50 100C50 72.3858 72.3858 50 100 50"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <text
            x="100"
            y="140"
            className={dancingScript.className}
            textAnchor="middle"
            fill="currentColor"
            fontSize={28 * scale}
          >
            Melodious
          </text>
          <text
            x="100"
            y="170"
            className={playfair.className}
            textAnchor="middle"
            fill="currentColor"
            fontSize={16 * scale}
          >
            MEMORIES
          </text>
        </svg>
      </div>
    )
  }

  // Full logo (default)
  return (
    <div className={cn("relative inline-block", className)} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF69B4" />
            <stop offset="1" stopColor="#FFD700" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Main circle */}
        <circle
          cx="100"
          cy="100"
          r="98"
          fill="url(#logo-gradient)"
          stroke="#FFD700"
          strokeWidth="2"
          filter="url(#shadow)"
        />

        {/* Musical heart */}
        <path
          d="M100 50C83.33 50 70 63.33 70 80C70 110 130 125 130 155C130 171.67 116.67 185 100 185C83.33 185 70 171.67 70 155"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#shadow)"
        />

        {/* Musical staff lines */}
        <path
          d="M50 100C50 72.3858 72.3858 50 100 50"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Text */}
        <text
          x="100"
          y="140"
          className={dancingScript.className}
          textAnchor="middle"
          fill="white"
          fontSize={28 * scale}
          filter="url(#shadow)"
        >
          Melodious
        </text>
        <text
          x="100"
          y="170"
          className={playfair.className}
          textAnchor="middle"
          fill="white"
          fontSize={16 * scale}
        >
          MEMORIES
        </text>
      </svg>
    </div>
  )
}


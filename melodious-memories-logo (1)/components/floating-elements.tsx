'use client'

import { useEffect, useRef, useState } from 'react'
import { Heart, Music, Gift, Sparkles, Candy } from 'lucide-react'

interface FloatingElement {
  id: number
  x: number
  y: number
  scale: number
  rotation: number
  type: 'heart' | 'music' | 'gift' | 'sparkle' | 'rose' | 'chocolate'
  delay: number
  speed: number
  layer: number
}

const RosePetal = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-rose-300">
    <path d="M12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2Z" fill="currentColor"/>
    <path d="M12 18C8.68629 18 6 20.6863 6 24H18C18 20.6863 15.3137 18 12 18Z" fill="currentColor"/>
  </svg>
)

const Chocolate = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-700">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/>
    <path d="M7 7H17V17H7V7Z" fill="#4B2D17"/>
  </svg>
)

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const types: FloatingElement['type'][] = ['heart', 'music', 'gift', 'sparkle', 'rose', 'chocolate']
    const newElements: FloatingElement[] = []

    for (let i = 0; i < 40; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360,
        type: types[Math.floor(Math.random() * types.length)],
        delay: Math.random() * 5,
        speed: Math.random() * 0.5 + 0.5,
        layer: Math.floor(Math.random() * 3)
      })
    }

    setElements(newElements)

    let lastTime = 0
    const animate = (currentTime: number) => {
      if (lastTime === 0) {
        lastTime = currentTime
      }
      const delta = (currentTime - lastTime) / 1000

      setElements(prev => prev.map(element => {
        const newY = ((element.y - (element.speed * 10 * delta)) + 100) % 100
        return {
          ...element,
          y: newY,
          rotation: element.rotation + element.speed * 30 * delta
        }
      }))

      lastTime = currentTime
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width * 100
      const y = (e.clientY - rect.top) / rect.height * 100

      setElements(prev => prev.map(element => ({
        ...element,
        x: element.x + (x > element.x ? 0.3 : -0.3) * element.scale * element.layer,
        rotation: element.rotation + (x > element.x ? 2 : -2)
      })))
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const getIcon = (type: FloatingElement['type'], scale: number) => {
    const size = `${scale * 24}px`
    switch (type) {
      case 'heart':
        return <Heart className="text-pink-400" style={{ width: size, height: size }} />
      case 'music':
        return <Music className="text-purple-400" style={{ width: size, height: size }} />
      case 'gift':
        return <Gift className="text-rose-400" style={{ width: size, height: size }} />
      case 'sparkle':
        return (
          <div className="relative">
            <Sparkles className="text-yellow-400 animate-pulse" style={{ width: size, height: size }} />
            <div className="absolute inset-0 bg-yellow-400 blur-sm opacity-30 animate-ping" />
          </div>
        )
      case 'rose':
        return <RosePetal style={{ width: size, height: size }} />
      case 'chocolate':
        return <Chocolate style={{ width: size, height: size }} />
    }
  }

  return (
    <>
      <div 
        className="fixed inset-0 bg-gradient-to-b from-pink-50/50 to-white pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.05) 0%, transparent 50%)`
        }}
      />
      <div 
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        {elements.map((element) => (
          <div
            key={element.id}
            className={`absolute transition-all duration-300 ease-out`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `scale(${element.scale}) rotate(${element.rotation}deg)`,
              opacity: 0.15 + (element.layer * 0.1),
              zIndex: element.layer,
              filter: element.type === 'sparkle' ? 'blur(0.5px)' : 'none',
              animation: `float ${8 + element.layer * 2}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`
            }}
          >
            {getIcon(element.type, 1 + element.layer * 0.5)}
          </div>
        ))}
      </div>
    </>
  )
}


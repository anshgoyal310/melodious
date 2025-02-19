import { Button } from "@/components/ui/button"
import { playfair } from "@/app/layout"
import { Headphones, Heart, Music, Pen } from 'lucide-react'

const steps = [
  {
    icon: Heart,
    title: "Share Your Story",
    description: "Tell us about your special someone and the occasion you're celebrating."
  },
  {
    icon: Headphones,
    title: "Choose Your Style",
    description: "Select the perfect musical style and mood for your custom song."
  },
  {
    icon: Music,
    title: "Receive Your Song",
    description: "Get your professionally recorded song ready to share with your loved one."
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className={`${playfair.className} text-3xl font-bold sm:text-4xl md:text-5xl`}>
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            Creating your perfect musical gift is easy. Follow these simple steps to get started.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center space-y-4 p-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-pink-100 rounded-full scale-[1.8] blur-xl opacity-50" />
                <div className="relative h-16 w-16 rounded-full bg-pink-100 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-pink-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-pink-200" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">
            Start Now
          </Button>
        </div>
      </div>
    </section>
  )
}


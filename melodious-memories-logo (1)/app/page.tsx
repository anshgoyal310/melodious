import { ContactSection } from "@/components/contact-section"
import { HamperSection } from "@/components/hamper-section"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { MusicServices } from "@/components/music-services"
import { PromoBanner } from "@/components/promo-banner"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PromoBanner />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <HamperSection />
        <MusicServices />
        <HowItWorks />
        <ContactSection />
      </main>
    </div>
  )
}


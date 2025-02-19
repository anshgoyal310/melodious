import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { WhatsAppSupport } from "@/components/whatsapp-support"
import { playfair } from "@/app/layout"
import { Facebook, Instagram, Send, Youtube } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className={`${playfair.className} text-3xl font-bold sm:text-4xl`}>Start Your Musical Journey</h2>
              <p className="text-muted-foreground text-lg">
                Have questions about our services? Get in touch with us, and we&apos;ll help you create the perfect
                musical gift.
              </p>
            </div>
            <WhatsAppSupport />
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <Send className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-muted-foreground">hello@melodiousmemories.com</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Follow Us</p>
                <div className="flex gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-pink-600 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-pink-600 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-pink-600 transition-colors">
                    <Youtube className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="Tell us about your special occasion..." className="min-h-[150px]" />
            </div>
            <Button size="lg" className="w-full sm:w-auto">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


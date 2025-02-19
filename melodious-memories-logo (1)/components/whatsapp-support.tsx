import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Clock, CheckCircle2 } from "lucide-react"

const WHATSAPP_MESSAGE = "Hi! I would like to know more about personalized songs with Melodious Memories."
const WHATSAPP_NUMBER = "918955817991"

export function WhatsAppSupport() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <Card className="relative overflow-hidden border-2 border-green-500/20 bg-gradient-to-br from-green-50 to-transparent">
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -translate-y-16 translate-x-16" />
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
            <MessageCircle className="h-6 w-6 text-green-600" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">24/7 WhatsApp Support</h3>
            <p className="text-muted-foreground">Get instant responses and personalized assistance through WhatsApp</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-green-500" />
            <span>Available 24/7</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Quick Response Time</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-500/20 to-green-500/10 animate-pulse rounded-lg" />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block transition-transform hover:scale-105"
          >
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white gap-2" size="lg">
              <MessageCircle className="h-5 w-5" />
              Chat with Us on WhatsApp
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}


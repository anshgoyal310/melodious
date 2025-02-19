import { AnimatedLogo } from "@/components/animated-logo"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Link from "next/link"

const navigation = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Hampers", href: "#hampers" },
  { name: "Music Services", href: "#music-services" },
  { name: "Testimonials", href: "#testimonials" },
]

export function SiteHeader() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', href);
      }
    }
  };

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col">
        <AnimatedLogo />
        <div className="flex h-14 items-center justify-between">
          <nav className="hidden md:flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="#contact" onClick={handleNavClick}>
                Start Your Story
              </Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        handleNavClick(e);
                      }}
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}


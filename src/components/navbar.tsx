import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              SWAG.<span className="text-white/60">DESIGN</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#works"
                className="font-geist text-white hover:text-white/60 transition-colors duration-200"
              >
                Работы
              </a>
              <a href="#about" className="font-geist text-white hover:text-white/60 transition-colors duration-200">
                О дизайнере
              </a>
              <a href="#contact" className="font-geist text-white hover:text-white/60 transition-colors duration-200">
                Контакты
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-white hover:bg-white/90 text-black font-geist border-0">Заказать проект</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/60 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-white/10">
              <a
                href="#works"
                className="block px-3 py-2 font-geist text-white hover:text-white/60 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Работы
              </a>
              <a
                href="#about"
                className="block px-3 py-2 font-geist text-white hover:text-white/60 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                О дизайнере
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 font-geist text-white hover:text-white/60 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-white hover:bg-white/90 text-black font-geist border-0">
                  Заказать проект
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
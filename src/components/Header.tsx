'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '#' },
  { label: 'Planos', href: '#planos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1E3A5F] shadow-lg' : 'bg-[#1E3A5F]/90 backdrop-blur-sm'}`}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 animate-fadeIn">
            <img
              src="/logo-white.png"
              alt="Saúde Piltcher"
              className="h-8 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 text-[15px] hover:text-white transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#CDFF00] after:transition-all after:duration-300 hover:after:w-full"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/555381000017"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-[#CDFF00] text-[#1E3A5F] font-semibold text-sm px-5 py-2 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            Fale conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 text-[15px] transition-colors hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/555381000017"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#CDFF00] text-[#1E3A5F] text-center py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

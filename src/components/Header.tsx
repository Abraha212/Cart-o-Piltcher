'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1E3A5F]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo-white.png"
              alt="Saúde Piltcher"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/80 text-[15px] hover:text-white transition-colors">
              Início
            </a>
            <a href="#planos" className="text-white/80 text-[15px] hover:text-white transition-colors">
              Planos
            </a>
            <a href="#beneficios" className="text-white/80 text-[15px] hover:text-white transition-colors">
              Benefícios
            </a>
            <a href="#duvidas" className="text-white/80 text-[15px] hover:text-white transition-colors">
              Dúvidas
            </a>
            <a href="#contato" className="text-white/80 text-[15px] hover:text-white transition-colors">
              Contato
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contato"
            className="hidden sm:inline-block bg-[#CDFF00] text-[#1E3A5F] font-semibold text-sm px-5 py-2 rounded-lg hover:opacity-90 transition-all"
          >
            Fale conosco
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white/80 text-[15px]" onClick={() => setIsMenuOpen(false)}>Início</a>
              <a href="#planos" className="text-white/80 text-[15px]" onClick={() => setIsMenuOpen(false)}>Planos</a>
              <a href="#beneficios" className="text-white/80 text-[15px]" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
              <a href="#duvidas" className="text-white/80 text-[15px]" onClick={() => setIsMenuOpen(false)}>Dúvidas</a>
              <a href="#contato" className="text-white/80 text-[15px]" onClick={() => setIsMenuOpen(false)}>Contato</a>
              <a
                href="#contato"
                className="bg-[#CDFF00] text-[#1E3A5F] text-center py-2 rounded-lg font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

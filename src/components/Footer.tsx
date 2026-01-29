'use client'

import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const links = [
    { label: 'Início', href: '#' },
    { label: 'Planos', href: '#planos' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <footer ref={footerRef} className="bg-[#0F172A] py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-20">
        {/* Logo */}
        <div className={`text-center mb-4 md:mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <img
            src="/logo-white.png"
            alt="Cartão Saúde Piltcher"
            className="h-8 md:h-11 w-auto mx-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Menu de Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-9 mb-4 md:mb-6">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-white text-xs sm:text-sm md:text-[15px] hover:text-[#CDFF00] transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <p className="text-white/70 text-xs md:text-sm leading-[1.6]">
            Cartão Saúde Piltcher - Cuidando de Pelotas com Amor e Precisão.
          </p>
          <p className="text-white/70 text-[10px] md:text-sm leading-[1.6] mt-2">
            Aviso Legal: Benefícios exclusivos no Hospital Piltcher. Não é um plano de saúde tradicional. Consulte condições específicas.
          </p>
          <p className="text-white/50 text-[10px] md:text-sm mt-3 md:mt-4">
            © 2026 Hospital Piltcher. Todos os direitos reservados.
          </p>
          <p className="text-white/50 text-[10px] md:text-sm mt-1 md:mt-2 hover:text-[#CDFF00] transition-colors duration-300">
            Desenvolvido com ❤️ por BrioLab
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { Pill, Users, Handshake } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const benefits = [
  {
    icon: Pill,
    title: 'ACESSO PRIORITÁRIO',
    description: 'Consultas com especialistas em até 72h, sem longas filas de espera. Atendimento no PS 24h com prioridade para titulares e dependentes.',
  },
  {
    icon: Users,
    title: 'PROTEÇÃO FAMILIAR',
    description: 'Nos planos Família, seus entes queridos também estão protegidos. Dependentes adicionais por apenas R$20,99/mês cada.',
  },
  {
    icon: Pill,
    title: 'ECONOMIA REAL',
    description: 'Reduza seus gastos com saúde através de descontos expressivos em consultas, exames e procedimentos. Dependendo do uso, a economia pode chegar a centenas de reais por mês.',
  },
  {
    icon: Handshake,
    title: 'TRANQUILIDADE',
    description: 'Saiba que você tem um hospital de referência à sua disposição quando precisar, sem se preocupar com valores inacessíveis.',
  },
]

export default function Transformation() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="beneficios"
      className="relative py-12 md:py-16 overflow-hidden"
      style={{
        backgroundImage: 'url(/transformation-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Título */}
        <div className={`mb-8 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-[42px] font-black italic leading-tight">
            <span className="text-[#CDFF00]">COMO O CARTÃO</span>
            <br />
            <span className="text-[#CDFF00]">PILTCHER </span>
            <span className="text-white">TRANSFORMA</span>
          </h2>
          <p className="text-white text-sm md:text-lg mt-2 md:mt-3">
            sua experiência de saúde
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`bg-[#CDFF00] p-4 md:p-5 rounded-xl flex items-start gap-3 md:gap-4 hover-lift hover-shine cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center">
                <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-[#1E3A5F]" />
              </div>
              <div>
                <h3 className="text-[#1E3A5F] text-xs md:text-sm font-bold mb-1">
                  {benefit.title} <span className="font-normal">-</span>
                </h3>
                <p className="text-[#1E3A5F]/80 text-xs md:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RT Info */}
        <p className={`text-white/70 text-[10px] md:text-xs mt-6 md:mt-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          RT: Maíra Guedes Piltcher - CRM: 18548
        </p>
      </div>
    </section>
  )
}

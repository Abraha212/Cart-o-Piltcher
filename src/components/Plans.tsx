'use client'

import { useEffect, useRef, useState } from 'react'

const features = [
  {
    name: 'Desconto nos exames laboratoriais e de imagens',
    checks: [true, true, true],
  },
  {
    name: 'Desconto no valor da consulta do pronto atendimento 24h',
    checks: [true, false, false],
  },
  {
    name: 'Consulta gratuita em Pronto Socorro Clínico 24 horas e Pronto Atendimento',
    checks: [false, true, true],
  },
  {
    name: 'Consultas gratuitas com clínico geral 24h',
    checks: [false, false, true],
  },
  {
    name: 'Descontos e valores diferenciados em pacotes cirúrgicos',
    checks: [true, true, true],
  },
  {
    name: 'Desconto em consulta com especialistas e internações',
    checks: [true, true, true],
  },
  {
    name: 'Clube de benefícios',
    checks: [false, true, true],
  },
  {
    name: 'Farmácia com desconto em medicamentos',
    checks: [true, true, true],
  },
]

const plans = ['Básico', 'Casal', 'Família']

export default function Plans() {
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
    <section ref={sectionRef} id="planos" className="py-12 md:py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Cabeçalho */}
        <div className={`text-center mb-8 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-2">
            ENCONTRE A SUA OPÇÃO IDEAL:
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base">
            Planos pensados para suas necessidades
          </p>
        </div>

        {/* Tabela de Comparação - Desktop */}
        <div className={`hidden md:block overflow-x-auto mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-[2px] mb-[2px]">
            <div className="bg-[#1E3A5F] rounded-tl-lg p-4"></div>
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`bg-[#1E3A5F] text-white text-center py-4 font-bold text-lg ${i === plans.length - 1 ? 'rounded-tr-lg' : ''}`}
              >
                {plan}
              </div>
            ))}
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-[2px]">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-[2px] transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${idx * 80 + 300}ms` }}
              >
                <div className={`bg-[#1E3A5F] px-4 py-3 flex items-center ${idx === features.length - 1 ? 'rounded-bl-lg' : ''}`}>
                  <span className="text-white text-sm font-medium leading-tight">
                    {feature.name}
                  </span>
                </div>
                {feature.checks.map((hasCheck, pIdx) => (
                  <div
                    key={pIdx}
                    className={`bg-[#CDFF00] py-3 flex items-center justify-center transition-all duration-300 hover:bg-[#d8ff33] ${idx === features.length - 1 && pIdx === plans.length - 1 ? 'rounded-br-lg' : ''}`}
                  >
                    {hasCheck ? (
                      <svg className="w-6 h-6 text-[#1E3A5F]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className="text-[#1E3A5F]/20 text-xl font-bold"></span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Cards de Planos - Mobile */}
        <div className={`md:hidden space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {plans.map((plan, planIdx) => (
            <div key={planIdx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Header do Card */}
              <div className="bg-[#1E3A5F] text-white text-center py-4">
                <h3 className="text-xl font-bold">{plan}</h3>
              </div>
              
              {/* Lista de Benefícios */}
              <div className="p-4 space-y-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${feature.checks[planIdx] ? 'bg-[#CDFF00]' : 'bg-gray-200'}`}>
                      {feature.checks[planIdx] ? (
                        <svg className="w-4 h-4 text-[#1E3A5F]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="text-gray-400 text-xs">✕</span>
                      )}
                    </div>
                    <span className={`text-sm ${feature.checks[planIdx] ? 'text-[#1E3A5F]' : 'text-gray-400 line-through'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Botão CTA */}
        <div className={`mt-6 md:mt-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <a
            href="#contato"
            className="block w-full bg-[#CDFF00] text-[#1E3A5F] font-semibold text-sm md:text-base text-center py-3 md:py-4 rounded-lg hover-glow hover-pulse hover-shine transition-all duration-300"
          >
            Quero solicitar o meu cartão
          </a>
        </div>
      </div>
    </section>
  )
}

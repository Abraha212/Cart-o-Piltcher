'use client'

import { useEffect, useRef, useState } from 'react'

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const plans = [
    { name: 'PLANO 1', price: '30,99', desc: 'pelo titular', extra: 'e 20,99 por dependente.' },
    { name: 'PLANO 2', price: '114,99', desc: 'por 1', extra: 'titular e 1 dependente.' },
    { name: 'PLANO 3', price: '184,99', desc: 'por 1', extra: 'titular e 3 dependente.' },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-[#1E3A5F]">
      <div className="max-w-[1000px] mx-auto px-5 md:px-10">
        {/* Cards de Planos */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch mb-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-[#CDFF00] rounded-lg px-6 py-4 flex items-center gap-4 flex-1 max-w-[340px] hover-lift transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h3 className="text-[#1E3A5F] text-xl font-bold whitespace-nowrap">
                {plan.name}
              </h3>
              <p className="text-[#1E3A5F] text-sm leading-tight">
                A partir de <strong>{plan.price}</strong> {plan.desc}<br />
                {plan.extra}
              </p>
            </div>
          ))}
        </div>

        {/* Aviso Legal */}
        <p className={`text-white/80 text-xs text-center max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
          O Cartão Saúde Piltcher não é um plano de saúde. Os benefícios e gratuidades aplicam-se exclusivamente
          aos serviços prestados dentro do Hospital Piltcher, conforme condições contratuais de cada plano. Consulte
          a cobertura detalhada, carências (se aplicáveis) e regras de utilização. Valores sujeitos a alteração sem
          aviso prévio. Dependentes adicionais: R$ 20,99/mês cada.
        </p>
      </div>
    </section>
  )
}

'use client'

import { Heart, DollarSign, Building2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function About() {
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

  const benefits = [
    { icon: Heart, title: 'Atendimento Humanizado', desc: 'Respeito e atenção em cada consulta' },
    { icon: DollarSign, title: 'Valores Acessíveis', desc: 'Saúde de qualidade que cabe no seu orçamento' },
    { icon: Building2, title: 'Hospital de Excelência', desc: 'Estrutura completa para você e sua família' },
  ]

  return (
    <section ref={sectionRef} className="bg-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 md:gap-12 items-center">
          {/* Imagem - Esquerda */}
          <div
            className={`h-[280px] sm:h-[350px] lg:h-[600px] w-full bg-cover bg-center rounded-xl hover-zoom transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ backgroundImage: 'url(/nurse-arm.png)' }}
          />

          {/* Conteúdo - Direita */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Título */}
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold leading-[1.2] mb-2">
              <span className="text-black">CHEGA DE ESCOLHER ENTRE</span>
              <br />
              <span className="text-black">SAÚDE E DIGNIDADE</span>
            </h2>

            {/* Parágrafo Introdutório */}
            <p className="text-[#374151] text-sm sm:text-base leading-[1.6] mt-4 md:mt-6 mb-6 md:mb-8">
              Esperar meses por uma consulta? Não ter acesso a um especialista quando mais precisa? Sabemos que essa é a realidade de muitos pelotenses. O Cartão Piltcher existe para que você não precise mais adiar seus cuidados.
            </p>

            {/* Cards de Benefícios */}
            <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-9">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 md:gap-[18px] bg-[#1E3A5F] px-4 md:px-6 py-4 md:py-5 rounded-[10px] hover-lift hover-shine cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${i * 150 + 400}ms` }}
                >
                  <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-white flex-shrink-0" />
                  <div>
                    <h3 className="text-white text-sm md:text-[17px] font-bold mb-[2px]">{benefit.title}</h3>
                    <p className="text-white/90 text-xs md:text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão */}
            <a
              href="#planos"
              className={`block w-full text-center bg-[#CDFF00] text-[#1E3A5F] font-semibold text-sm md:text-base py-3 md:py-[18px] rounded-lg hover-glow hover-pulse transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '850ms' }}
            >
              Quero Saber Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

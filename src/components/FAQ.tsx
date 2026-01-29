'use client'

import { useState, useEffect, useRef } from 'react'
import { Plus, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Quais são as principais diferenças entre o Cartão Saúde Piltcher e um plano de saúde tradicional?',
    answer: 'As principais diferenças são: O Cartão Saúde Piltcher oferece benefícios exclusivamente no Hospital Piltcher. Os valores são geralmente mais acessíveis que planos de saúde tradicionais. Você paga apenas pelos serviços que utiliza (além da mensalidade do cartão). Não há complexas regras de coparticipação como em planos tradicionais. A adesão é mais simples e direta.',
  },
  {
    question: 'Qual a principal diferença entre os planos Essencial, Família 1 e Família 2?',
    answer: 'A diferença está na mensalidade, no número de dependentes inclusos, e nos serviços que são oferecidos com desconto versus os que são gratuitos (como consultas no PS ou com Clínico Geral 24h) e benefícios adicionais como Cartão Farmácia e Clube de Benefícios. Consulte a tabela comparativa acima para detalhes.',
  },
  {
    question: 'O Cartão Saúde Piltcher é um plano de saúde?',
    answer: 'Não. O Cartão Saúde Piltcher é uma modalidade de desconto e benefícios para serviços de saúde, diferente de um plano de saúde tradicional. Enquanto planos de saúde são regulamentados pela ANS (Agência Nacional de Saúde Suplementar) e oferecem cobertura em diversas unidades de atendimento, o Cartão Saúde Piltcher proporciona benefícios específicos dentro do Hospital Piltcher, com valores previsíveis e transparentes.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
    <section ref={sectionRef} id="duvidas" className="py-12 md:py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-20">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black uppercase mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          SUAS DÚVIDAS FREQUENTES
        </h2>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border border-[#E5E7EB] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <button
                className="w-full flex items-center justify-between p-4 md:p-6 pr-6 md:pr-8 text-left relative hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-black text-sm md:text-[17px] font-semibold pr-8 md:pr-10">
                  {faq.question}
                </span>
                <span className="absolute right-4 md:right-8 text-[#6B7280] text-xl md:text-2xl transition-transform duration-300" style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  {openIndex === i ? <ChevronDown size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-4 md:px-8 pb-4 md:pb-6">
                  <p className="text-[#4B5563] text-xs md:text-[15px] leading-[1.7]">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-8 md:mt-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
          <a
            href="https://wa.me/555381000017"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-[#CDFF00] text-[#1E3A5F] font-semibold text-sm md:text-base px-8 md:px-11 py-3 md:py-[18px] rounded-lg hover-glow hover-pulse hover-shine transition-all duration-300"
          >
            Não encontrou sua dúvida? Fale conosco
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
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

  return (
    <section id="duvidas" className="py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-5 md:px-20">
        <h2 className="text-4xl font-bold text-center text-black uppercase mb-12">
          SUAS DÚVIDAS FREQUENTES
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-6 pr-8 text-left relative hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-black text-[17px] font-semibold pr-10">
                  {faq.question}
                </span>
                <span className="absolute right-8 text-[#6B7280] text-2xl transition-transform duration-300" style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  {openIndex === i ? <ChevronDown size={24} /> : <Plus size={24} />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-8 pb-6">
                  <p className="text-[#4B5563] text-[15px] leading-[1.7]">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-block bg-[#CDFF00] text-[#1E3A5F] font-semibold text-base px-11 py-[18px] rounded-lg hover:opacity-90 transition-all duration-300"
          >
            Não encontrou sua dúvida? Fale conosco
          </a>
        </div>
      </div>
    </section>
  )
}

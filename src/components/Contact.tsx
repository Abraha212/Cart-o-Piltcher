'use client'

import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    { icon: MapPin, text: 'R. Andrade Neves, 3006 - Centro, Pelotas - RS, 96020-080' },
    { icon: Clock, text: 'Atendimento 24 horas' },
    { icon: Phone, text: 'Telefone: (53) 3222-9999' },
    { icon: MessageCircle, text: 'WhatsApp: (53) 99999-9999' },
  ]

  return (
    <section ref={sectionRef} id="contato" className="py-20 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start">
          {/* Mapa - Esquerda */}
          <div className={`h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.0!2d-52.34!3d-31.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUi4gQW5kcmFkZSBOZXZlcywgMzAwNg!5e0!3m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização Hospital Piltcher"
            />
          </div>

          {/* Card de Informações - Direita */}
          <div className={`bg-white p-9 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h2 className="text-[#1E3A5F] text-[28px] font-bold mb-8 leading-[1.3]">
              Pronto Para Ter Acesso Facilitado à Saúde de Qualidade em Pelotas?
            </h2>

            <div className="space-y-5 mb-9">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={{ transitionDelay: `${i * 100 + 400}ms` }}
                >
                  <item.icon className="w-[22px] h-[22px] text-[#1E5BA8] flex-shrink-0 mt-[2px]" />
                  <p className="text-[#374151] text-[15px] leading-[1.5]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Botão */}
            <a
              href="https://wa.me/5553999999999"
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center bg-[#CDFF00] text-[#1E3A5F] font-semibold text-base py-[18px] rounded-lg hover:opacity-90 hover-glow transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '800ms' }}
            >
              Quero meu cartão agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

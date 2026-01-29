'use client'

import { useEffect, useRef, useState } from 'react'

export default function Strip() {
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

  return (
    <section ref={sectionRef} className="relative z-20 -mt-24 pb-10">
      <div className="max-w-[1000px] mx-auto px-5 md:px-10">
        {/* Caixa azul contida - sobreposta à seção acima */}
        <div className={`bg-[#1E3A5F] rounded-2xl py-12 px-8 md:px-16 text-center shadow-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
            Uma nova era na saúde de Pelotas
          </h2>
          <p className="text-white/90 text-base leading-[1.7] max-w-[600px] mx-auto mb-8">
            Entendemos como pode ser frustrante lidar com a saúde. A espera, a incerteza, a falta de atenção... No Hospital Piltcher, estamos aqui para mudar isso. Oferecemos uma gama completa de serviços para cuidar de você, com o carinho e a atenção que você merece:
          </p>
          <a
            href="#contato"
            className={`block w-full max-w-[500px] mx-auto bg-[#CDFF00] text-[#1E3A5F] font-semibold text-base py-4 rounded-lg hover-glow hover-pulse hover-shine transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '300ms' }}
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  )
}

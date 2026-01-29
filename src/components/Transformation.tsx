import { Pill, Users, Handshake } from 'lucide-react'

const benefits = [
  {
    icon: Pill,
    title: 'ACESSO PRIORITÁRIO',
    description: 'Consultas com especialistas em até 72h, sem longas filas de espera. Atendimento no PS 24h com prioridade para titulares e dependentes.',
    position: 'left',
  },
  {
    icon: Users,
    title: 'PROTEÇÃO FAMILIAR',
    description: 'Nos planos Família, seus entes queridos também estão protegidos. Dependentes adicionais por apenas R$20,99/mês cada.',
    position: 'right',
  },
  {
    icon: Pill,
    title: 'ECONOMIA REAL',
    description: 'Reduza seus gastos com saúde através de descontos expressivos em consultas, exames e procedimentos. Dependendo do uso, a economia pode chegar a centenas de reais por mês.',
    position: 'left',
  },
  {
    icon: Handshake,
    title: 'TRANQUILIDADE',
    description: 'Saiba que você tem um hospital de referência à sua disposição quando precisar, sem se preocupar com valores inacessíveis.',
    position: 'right',
  },
]

export default function Transformation() {
  const leftBenefits = benefits.filter(b => b.position === 'left')
  const rightBenefits = benefits.filter(b => b.position === 'right')

  return (
    <section
      id="beneficios"
      className="relative py-16 overflow-hidden"
      style={{
        backgroundImage: 'url(/transformation-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Título */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-[42px] font-black italic leading-tight">
            <span className="text-[#CDFF00]">COMO O CARTÃO</span>
            <br />
            <span className="text-[#CDFF00]">PILTCHER </span>
            <span className="text-white">TRANSFORMA</span>
          </h2>
          <p className="text-white text-base md:text-lg mt-3">
            sua experiência de saúde
          </p>
        </div>

        {/* Grid de Cards - Layout 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-10">
          {/* Coluna Esquerda */}
          <div className="flex flex-col gap-6">
            {leftBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-[#CDFF00] p-5 rounded-xl flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <div>
                  <h3 className="text-[#1E3A5F] text-sm font-bold mb-1">
                    {benefit.title} <span className="font-normal">-</span>
                  </h3>
                  <p className="text-[#1E3A5F]/80 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Coluna Direita */}
          <div className="flex flex-col gap-6">
            {rightBenefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-[#CDFF00] p-5 rounded-xl flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#1E3A5F]/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <div>
                  <h3 className="text-[#1E3A5F] text-sm font-bold mb-1">
                    {benefit.title} <span className="font-normal">-</span>
                  </h3>
                  <p className="text-[#1E3A5F]/80 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RT Info */}
        <p className="text-white/70 text-xs mt-8">
          RT: Maíra Guedes Piltcher - CRM: 18548
        </p>
      </div>
    </section>
  )
}

import { CalendarCheck, PiggyBank, Users, Heart } from 'lucide-react'

const benefits = [
  {
    icon: CalendarCheck,
    title: 'ACESSO PRIORITÁRIO',
    description: 'Consultas com especialistas em até 72h, sem longas filas de espera. Atendimento no PS 24h com prioridade para titulares e dependentes.',
  },
  {
    icon: Users,
    title: 'PROTEÇÃO FAMILIAR',
    description: 'Nos planos Família, seus entes queridos também estão protegidos. Dependentes adicionais por apenas R$20,99/mês cada.',
  },
  {
    icon: PiggyBank,
    title: 'ECONOMIA REAL',
    description: 'Reduza seus gastos com saúde através de descontos expressivos em consultas, exames e procedimentos. Dependendo do uso, a economia pode chegar a centenas de reais por mês.',
  },
  {
    icon: Heart,
    title: 'TRANQUILIDADE',
    description: 'Saiba que você tem um hospital de referência à sua disposição quando precisar, sem se preocupar com valores inacessíveis.',
  },
]

export default function Transformation() {
  return (
    <section
      id="beneficios"
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/transformation-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Marca d'água "Atendimento" */}
      <div
        className="absolute right-[10%] top-1/2 -translate-y-1/2 text-[180px] font-extrabold text-white opacity-[0.08] pointer-events-none select-none hidden lg:block"
        style={{ zIndex: 1 }}
      >
        Atendimento
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-20">
        {/* Título */}
        <div className="mb-11">
          <h2 className="text-[42px] font-bold leading-tight">
            <span className="text-white">COMO O CARTÃO</span>
            <br />
            <span className="text-white">PILTCHER </span>
            <span className="text-[#CDFF00]">TRANSFORMA</span>
          </h2>
          <p className="text-white mt-2 text-[42px] font-bold">SUA VIDA:</p>
          <p className="text-white/90 text-[17px] mt-4">
            Descubra os benefícios exclusivos que transformam sua experiência de saúde
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-[#CDFF00] p-7 rounded-xl flex flex-col items-start"
            >
              <div className="mb-5">
                <benefit.icon className="w-12 h-12 text-[#1E5BA8]" />
              </div>
              <h3 className="text-[#1E3A5F] text-[19px] font-bold mb-3 leading-[1.3]">
                {benefit.title}
              </h3>
              <p className="text-[#1E3A5F]/85 text-[15px] leading-[1.6]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botão */}
        <a
          href="#contato"
          className="inline-block bg-[#CDFF00] text-[#1E3A5F] font-semibold text-base px-10 py-[18px] rounded-lg hover:opacity-90 transition-all duration-300"
        >
          Quero meu cartão agora
        </a>

        {/* RT Info */}
        <p className="text-white/60 text-xs text-center mt-10">
          RT: Maira Guedes Piltcher - CRM: 18548
        </p>
      </div>
    </section>
  )
}

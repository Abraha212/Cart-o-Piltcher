const features = [
  {
    name: 'Desconto nos exames laboratoriais e de imagens',
    checks: [true, true, true], // Básico ✓, Casal ✓, Família ✓
  },
  {
    name: 'Desconto no valor da consulta do pronto atendimento 24h',
    checks: [true, false, false], // Básico ✓, Casal ✗, Família ✗
  },
  {
    name: 'Consulta gratuita em Pronto Socorro Clínico 24 horas e Pronto Atendimento',
    checks: [false, true, true], // Básico ✗, Casal ✓, Família ✓
  },
  {
    name: 'Consultas gratuitas com clínico geral 24h',
    checks: [false, false, true], // Básico ✗, Casal ✗, Família ✓
  },
  {
    name: 'Descontos e valores diferenciados em pacotes cirúrgicos',
    checks: [true, true, true], // Básico ✓, Casal ✓, Família ✓
  },
  {
    name: 'Desconto em consulta com especialistas e internações',
    checks: [true, true, true], // Básico ✓, Casal ✓, Família ✓
  },
  {
    name: 'Clube de benefícios',
    checks: [false, true, true], // Básico ✗, Casal ✓, Família ✓
  },
  {
    name: 'Farmácia com desconto em medicamentos',
    checks: [true, true, true], // Básico ✓, Casal ✓, Família ✓
  },
]

const plans = ['Básico', 'Casal', 'Família']

export default function Plans() {
  return (
    <section id="planos" className="py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-5 md:px-10">
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-2">
            ENCONTRE A SUA OPÇÃO IDEAL:
          </h2>
          <p className="text-[#6B7280] text-base">
            Planos pensados para suas necessidades
          </p>
        </div>

        {/* Tabela de Comparação */}
        <div className="overflow-x-auto mb-6">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-[2px] mb-[2px]">
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
              <div key={idx} className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-[2px]">
                {/* Coluna de descrição - Azul escuro com texto branco */}
                <div className={`bg-[#1E3A5F] px-4 py-3 flex items-center ${idx === features.length - 1 ? 'rounded-bl-lg' : ''}`}>
                  <span className="text-white text-sm font-medium leading-tight">
                    {feature.name}
                  </span>
                </div>
                {/* Colunas de checkmarks - Verde limão */}
                {feature.checks.map((hasCheck, pIdx) => (
                  <div
                    key={pIdx}
                    className={`bg-[#CDFF00] py-3 flex items-center justify-center ${idx === features.length - 1 && pIdx === plans.length - 1 ? 'rounded-br-lg' : ''}`}
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

        {/* Botão CTA */}
        <div className="mt-8">
          <a
            href="#contato"
            className="block w-full bg-[#CDFF00] text-[#1E3A5F] font-semibold text-base text-center py-4 rounded-lg hover:opacity-90 transition-all duration-300"
          >
            Quero solicitar o meu cartão
          </a>
        </div>
      </div>
    </section>
  )
}

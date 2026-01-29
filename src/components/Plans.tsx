const features = [
  'Consultas gratuitas com clínico geral 24h',
  'Consulta gratuita em Pronto Socorro Clínico 24h',
  'Desconto nos exames laboratoriais e de imagens',
  'Desconto no valor da consulta do pronto atendimento 24h',
  'Desconto em consulta com especialistas e internações',
  'Descontos em pacotes cirúrgicos',
  'Farmácia com desconto em medicamentos',
  'Clube de benefícios',
]

const plans = [
  {
    name: 'BÁSICO',
    checks: [true, true, true, true, false, false, false, false],
  },
  {
    name: 'CASAL',
    checks: [true, true, true, true, true, true, false, false],
  },
  {
    name: 'FAMÍLIA',
    checks: [true, true, true, true, true, true, true, true],
  },
]

export default function Plans() {
  return (
    <section id="planos" className="py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-5 md:px-10">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-3">
            ENCONTRE A SUA OPÇÃO IDEAL:
          </h2>
          <p className="text-[#6B7280] text-base">
            Planos pensados para suas necessidades
          </p>
        </div>

        {/* Tabela de Comparação */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full min-w-[600px]">
            {/* Cabeçalho da Tabela */}
            <thead>
              <tr>
                <th className="bg-[#1E3A5F] text-white text-left px-4 py-4 font-semibold text-sm rounded-tl-lg w-[40%]">
                  Benefícios
                </th>
                {plans.map((plan, i) => (
                  <th
                    key={i}
                    className={`bg-[#1E3A5F] text-white text-center px-4 py-4 font-bold text-base ${i === plans.length - 1 ? 'rounded-tr-lg' : ''}`}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Corpo da Tabela */}
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx}>
                  <td className={`bg-[#1E3A5F] text-white px-4 py-3 text-sm font-medium ${idx === features.length - 1 ? 'rounded-bl-lg' : ''}`}>
                    {feature}
                  </td>
                  {plans.map((plan, pIdx) => (
                    <td
                      key={pIdx}
                      className={`bg-[#CDFF00] px-4 py-3 text-center border-b border-[#c4f000] ${idx === features.length - 1 && pIdx === plans.length - 1 ? 'rounded-br-lg' : ''}`}
                    >
                      {plan.checks[idx] ? (
                        <span className="text-[#1E3A5F] text-xl font-bold">✓</span>
                      ) : (
                        <span className="text-[#1E3A5F]/30 text-lg">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Aviso Legal */}
        <p className="text-xs text-[#6B7280] text-center max-w-3xl mx-auto leading-relaxed">
          O Cartão Saúde Piltcher não é um plano de saúde. Os benefícios aplicam-se exclusivamente aos serviços prestados dentro do Hospital Piltcher. Consulte condições contratuais.
        </p>
      </div>
    </section>
  )
}

export default function Pricing() {
  return (
    <section className="py-16 bg-[#1E3A5F]">
      <div className="max-w-[1000px] mx-auto px-5 md:px-10">
        {/* Cards de Planos */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch mb-8">
          {/* PLANO 1 */}
          <div className="bg-[#CDFF00] rounded-lg px-6 py-4 flex items-center gap-4 flex-1 max-w-[340px]">
            <h3 className="text-[#1E3A5F] text-xl font-bold whitespace-nowrap">
              PLANO 1
            </h3>
            <p className="text-[#1E3A5F] text-sm leading-tight">
              A partir de <strong>30,99</strong> pelo titular<br />
              e <strong>20,99</strong> por dependente.
            </p>
          </div>

          {/* PLANO 2 */}
          <div className="bg-[#CDFF00] rounded-lg px-6 py-4 flex items-center gap-4 flex-1 max-w-[340px]">
            <h3 className="text-[#1E3A5F] text-xl font-bold whitespace-nowrap">
              PLANO 2
            </h3>
            <p className="text-[#1E3A5F] text-sm leading-tight">
              A partir de <strong>114,99</strong> por 1<br />
              titular e 1 dependente.
            </p>
          </div>

          {/* PLANO 3 */}
          <div className="bg-[#CDFF00] rounded-lg px-6 py-4 flex items-center gap-4 flex-1 max-w-[340px]">
            <h3 className="text-[#1E3A5F] text-xl font-bold whitespace-nowrap">
              PLANO 3
            </h3>
            <p className="text-[#1E3A5F] text-sm leading-tight">
              A partir de <strong>184,99</strong> por 1<br />
              titular e 3 dependente.
            </p>
          </div>
        </div>

        {/* Aviso Legal */}
        <p className="text-white/80 text-xs text-center max-w-3xl mx-auto leading-relaxed">
          O Cartão Saúde Piltcher não é um plano de saúde. Os benefícios e gratuidades aplicam-se exclusivamente
          aos serviços prestados dentro do Hospital Piltcher, conforme condições contratuais de cada plano. Consulte
          a cobertura detalhada, carências (se aplicáveis) e regras de utilização. Valores sujeitos a alteração sem
          aviso prévio. Dependentes adicionais: R$ 20,99/mês cada.
        </p>
      </div>
    </section>
  )
}

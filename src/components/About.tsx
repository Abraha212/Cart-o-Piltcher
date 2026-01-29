import { Heart, DollarSign, Building2 } from 'lucide-react'

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-center">
          {/* Imagem - Esquerda */}
          <div
            className="h-[400px] lg:h-[600px] w-full bg-cover bg-center rounded-xl"
            style={{ backgroundImage: 'url(/nurse-arm.png)' }}
          />

          {/* Conteúdo - Direita */}
          <div>
            {/* Título */}
            <h2 className="text-[38px] font-bold leading-[1.2] mb-2">
              <span className="text-black">CHEGA DE ESCOLHER ENTRE</span>
              <br />
              <span className="text-black">SAUDE E DIGNIDADE</span>
            </h2>

            {/* Parágrafo Introdutório */}
            <p className="text-[#374151] text-base leading-[1.6] mt-6 mb-8">
              Esperar meses por uma consulta? Não ter acesso a um especialista quando mais precisa? Sabemos que essa é a realidade de muitos pelotenses. O Cartão Piltcher existe para que você não precise mais adiar seus cuidados.
            </p>

            {/* Cards de Benefícios */}
            <div className="flex flex-col gap-4 mb-9">
              <div className="flex items-center gap-[18px] bg-[#1E3A5F] px-6 py-5 rounded-[10px]">
                <Heart className="w-7 h-7 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-white text-[17px] font-bold mb-[3px]">Atendimento Humanizado</h3>
                  <p className="text-white/90 text-sm">Respeito e atenção em cada consulta</p>
                </div>
              </div>

              <div className="flex items-center gap-[18px] bg-[#1E3A5F] px-6 py-5 rounded-[10px]">
                <DollarSign className="w-7 h-7 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-white text-[17px] font-bold mb-[3px]">Valores Acessíveis</h3>
                  <p className="text-white/90 text-sm">Saúde de qualidade que cabe no seu orçamento</p>
                </div>
              </div>

              <div className="flex items-center gap-[18px] bg-[#1E3A5F] px-6 py-5 rounded-[10px]">
                <Building2 className="w-7 h-7 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-white text-[17px] font-bold mb-[3px]">Hospital de Excelência</h3>
                  <p className="text-white/90 text-sm">Estrutura completa para você e sua família</p>
                </div>
              </div>
            </div>

            {/* Botão */}
            <a
              href="#planos"
              className="block w-full text-center bg-[#CDFF00] text-[#1E3A5F] font-semibold text-base py-[18px] rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Quero Saber Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

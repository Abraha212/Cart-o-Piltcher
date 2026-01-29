export default function Hero() {
  return (
    <section
      className="relative min-h-screen pt-16"
      style={{
        backgroundImage: 'url(/hero-hands.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/35"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-20 pt-24 sm:pt-32 md:pt-36 pb-32 sm:pb-36 md:pb-40">
        {/* Título */}
        <h1 className="text-3xl sm:text-4xl md:text-[52px] font-black italic leading-[1.1] mb-6 md:mb-8 animate-fadeInUp">
          <span className="block">
            <span className="text-[#CDFF00]">SAÚDE</span>
            <span className="text-white"> HUMANIZADA</span>
          </span>
          <span className="text-white block">QUE RESPEITA SEU</span>
          <span className="text-[#CDFF00] block">TEMPO E BOLSO</span>
        </h1>

        {/* Subtexto */}
        <div className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl space-y-3 md:space-y-4 animate-fadeInUp delay-200" style={{ animationFillMode: 'both' }}>
          <p>
            Em Pelotas, sabemos que o acesso à saúde de qualidade nem sempre é fácil. Filas, altos custos...
          </p>
          <p>
            O Cartão Saúde Piltcher <span className="bg-[#CDFF00] text-[#1E3A5F] px-1">nasceu para mudar isso.</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Tenha acesso à excelência do nosso hospital com planos a partir de R$ 30,99/mês.
          </p>
          <p className="font-semibold">
            Cuidado, respeito e dignidade – agora, ao seu alcance.
          </p>
        </div>

        {/* Botão CTA */}
        <a
          href="#planos"
          className="inline-block w-full sm:w-auto text-center bg-[#CDFF00] text-[#1E3A5F] font-semibold text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-4 rounded-full hover-glow hover-pulse hover-shine transition-all duration-300 animate-fadeInUp delay-400"
          style={{ animationFillMode: 'both' }}
        >
          Quero acesso a saúde de qualidade agora
        </a>
      </div>
    </section>
  )
}

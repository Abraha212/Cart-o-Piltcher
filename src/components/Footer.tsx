export default function Footer() {
  return (
    <footer className="bg-[#0F172A] py-12">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="/logo-white.png"
            alt="Cartão Saúde Piltcher"
            className="h-11 w-auto mx-auto"
          />
        </div>

        {/* Menu de Links */}
        <nav className="flex flex-wrap justify-center gap-9 mb-6">
          <a href="#" className="text-white text-[15px] hover:opacity-80 transition-opacity">
            Início
          </a>
          <a href="#planos" className="text-white text-[15px] hover:opacity-80 transition-opacity">
            Planos
          </a>
          <a href="#beneficios" className="text-white text-[15px] hover:opacity-80 transition-opacity">
            Benefícios
          </a>
          <a href="#duvidas" className="text-white text-[15px] hover:opacity-80 transition-opacity">
            Dúvidas
          </a>
          <a href="#contato" className="text-white text-[15px] hover:opacity-80 transition-opacity">
            Contato
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/70 text-sm leading-[1.6]">
            Cartão Saúde Piltcher - Cuidando de Pelotas com Amor e Precisão.
          </p>
          <p className="text-white/70 text-sm leading-[1.6] mt-2">
            Aviso Legal: Benefícios exclusivos no Hospital Piltcher. Não é um plano de saúde tradicional. Consulte condições específicas.
          </p>
          <p className="text-white/50 text-sm mt-4">
            © 2024 Hospital Piltcher. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

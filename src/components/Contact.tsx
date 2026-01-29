import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start">
          {/* Mapa - Esquerda */}
          <div className="h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
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
          <div className="bg-white p-9 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h2 className="text-[#1E3A5F] text-[28px] font-bold mb-8 leading-[1.3]">
              Pronto Para Ter Acesso Facilitado à Saúde de Qualidade em Pelotas?
            </h2>

            <div className="space-y-5 mb-9">
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <MapPin className="w-[22px] h-[22px] text-[#1E5BA8] flex-shrink-0 mt-[2px]" />
                <p className="text-[#374151] text-[15px] leading-[1.5]">
                  R. Andrade Neves, 3006 - Centro, Pelotas - RS, 96020-080
                </p>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4">
                <Clock className="w-[22px] h-[22px] text-[#1E5BA8] flex-shrink-0 mt-[2px]" />
                <p className="text-[#374151] text-[15px] leading-[1.5]">
                  Atendimento 24 horas
                </p>
              </div>

              {/* Telefone */}
              <div className="flex items-start gap-4">
                <Phone className="w-[22px] h-[22px] text-[#1E5BA8] flex-shrink-0 mt-[2px]" />
                <p className="text-[#374151] text-[15px] leading-[1.5]">
                  Telefone: (53) 3222-9999
                </p>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <MessageCircle className="w-[22px] h-[22px] text-[#1E5BA8] flex-shrink-0 mt-[2px]" />
                <p className="text-[#374151] text-[15px] leading-[1.5]">
                  WhatsApp: (53) 99999-9999
                </p>
              </div>
            </div>

            {/* Botão */}
            <a
              href="https://wa.me/5553999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#CDFF00] text-[#1E3A5F] font-semibold text-base py-[18px] rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Quero meu cartão agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

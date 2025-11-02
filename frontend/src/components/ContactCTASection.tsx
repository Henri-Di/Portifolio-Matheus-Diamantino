// src/components/ContactCTASection.tsx
import React from "react";
import { FaEnvelope, FaHandshake, FaRocket, FaCheckCircle } from "react-icons/fa";

/* =====================================================
   Componente ContactCTASection
   - Seção CTA de contato com destaque visual
   - Background animado e gradiente para engajamento
   - Dois blocos principais: features e formulário de contato
===================================================== */
const ContactCTASection: React.FC = () => {
  return (
    <section id="contact-cta" className="relative py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white overflow-hidden">
      
      {/* ---------------------
          Background shapes animados
          - Ícones grandes e sem interação (pointer-events-none)
          - Criam sensação de movimento e profundidade
      --------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        <FaRocket className="absolute top-10 left-5 text-white text-8xl opacity-20 animate-bounce-slow" />
        <FaCheckCircle className="absolute bottom-10 right-10 text-white text-8xl opacity-20 animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ---------------------
            Título e descrição centralizados
            - Comunicação clara e persuasiva
            - Destaque visual em palavras-chave
        --------------------- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Vamos construir algo <span className="text-yellow-300">incrível</span> juntos
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
            Envie sua proposta ou ideia e transforme em soluções digitais modernas, escaláveis e de alta performance. 🚀
          </p>
        </div>

        {/* ---------------------
            Grid principal: Features à esquerda, Formulário à direita
            - Responsivo: 1 coluna em mobile, 2 em desktop
        --------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left column: Features */}
          <div className="space-y-6">
            {[
              { icon: <FaHandshake />, title: "Parcerias estratégicas", desc: "Trabalhamos próximos aos clientes para criar soluções que realmente impactam seu negócio." },
              { icon: <FaRocket />, title: "Entrega rápida", desc: "Projetos entregues de forma ágil, mantendo qualidade e performance em todas as etapas." },
              { icon: <FaEnvelope />, title: "Comunicação transparente", desc: "Feedback constante e comunicação clara durante todo o desenvolvimento do projeto." },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                {/* Ícone grande com hover suave para interação visual */}
                <div className="text-5xl text-white transition-transform duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>
                {/* Texto da feature */}
                <div>
                  <h3 className="text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-yellow-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-100">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column: Formulário de contato */}
          <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-8 transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Envie sua proposta
            </h3>
            <form className="space-y-4">
              {/* Nome */}
              <div>
                <label className="block mb-1 font-semibold">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 transition-all duration-300 shadow-sm"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 transition-all duration-300 shadow-sm"
                />
              </div>
              {/* Mensagem */}
              <div>
                <label className="block mb-1 font-semibold">Mensagem</label>
                <textarea
                  placeholder="Descreva sua proposta ou ideia"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 transition-all duration-300 shadow-sm"
                />
              </div>
              {/* Botão de envio */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.6),0_0_15px_rgba(139,92,246,0.5)]"
              >
                Enviar Proposta
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ---------------------
          Blobs animados de background
          - Apenas decorativo, pointer-events-none
          - Criam profundidade e movimento sutil na seção
      --------------------- */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-500 rounded-full opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-purple-500 via-cyan-400 to-yellow-400 rounded-full opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
    </section>
  );
};

export default ContactCTASection;

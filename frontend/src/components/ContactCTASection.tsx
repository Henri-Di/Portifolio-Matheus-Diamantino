// src/components/ContactCTASection.tsx
import React from "react";
import { FaEnvelope, FaHandshake, FaRocket, FaCheckCircle } from "react-icons/fa";

/* =====================================================
   COMPONENTE: ContactCTASection
   - Seção CTA com foco em conversão e impacto visual
   - Fundo com gradiente líquido e animações suaves
   - Features + formulário de proposta
===================================================== */
const ContactCTASection: React.FC = () => {
  return (
    <section
      id="contact-cta"
      className="relative py-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white overflow-hidden"
    >
      {/* ---------------------
          ELEMENTOS DECORATIVOS
          - Ícones grandes com movimento sutil
          - Blobs e gradientes para profundidade
      --------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        <FaRocket className="absolute top-10 left-8 text-white text-8xl opacity-15 animate-float" />
        <FaCheckCircle className="absolute bottom-12 right-12 text-white text-8xl opacity-15 animate-spin-slow" />
        <div className="absolute -top-32 -left-40 w-[450px] h-[450px] bg-cyan-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------------
            HEADER PRINCIPAL
            - Chamado à ação persuasivo
            - Tipografia expressiva e emocional
        --------------------- */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Vamos construir algo{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
              incrível
            </span>{" "}
            juntos
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Compartilhe sua ideia e transforme-a em uma solução digital de alta
            performance. Inovação, velocidade e impacto — do conceito ao
            resultado. 🚀
          </p>
        </div>

        {/* ---------------------
            GRID PRINCIPAL
            - Coluna esquerda: features
            - Coluna direita: formulário
        --------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* ==== FEATURES ==== */}
          <div className="space-y-8 animate-fadeInLeft">
            {[
              {
                icon: <FaHandshake />,
                title: "Parcerias estratégicas",
                desc: "Trabalho próximo ao cliente, entendendo as reais necessidades para criar soluções com propósito.",
              },
              {
                icon: <FaRocket />,
                title: "Entrega ágil e eficiente",
                desc: "Projetos entregues com rapidez, mantendo qualidade, performance e escalabilidade.",
              },
              {
                icon: <FaEnvelope />,
                title: "Comunicação transparente",
                desc: "Feedback constante, clareza e acompanhamento em cada etapa do processo.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 group transition-transform duration-300 hover:translate-x-2"
              >
                {/* Ícone */}
                <div className="text-5xl text-white transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                  {feature.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-yellow-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-100/90 leading-relaxed text-sm sm:text-base">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ==== FORMULÁRIO ==== */}
          <div className="bg-white/95 backdrop-blur-xl text-gray-900 rounded-3xl shadow-2xl p-8 animate-fadeInRight transition-transform duration-500 hover:scale-[1.03]">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Envie sua proposta
            </h3>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Proposta enviada com sucesso!");
              }}
            >
              {/* Nome */}
              <div>
                <label className="block mb-1 font-semibold">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 transition-all duration-300 shadow-sm"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 transition-all duration-300 shadow-sm"
                />
              </div>
              {/* Mensagem */}
              <div>
                <label className="block mb-1 font-semibold">Mensagem</label>
                <textarea
                  placeholder="Descreva sua proposta ou ideia"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 transition-all duration-300 shadow-sm"
                />
              </div>
              {/* Botão */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5),0_0_15px_rgba(139,92,246,0.4)]"
              >
                Enviar Proposta
              </button>
            </form>
          </div>
        </div>

        {/* CTA secundário */}
        <div className="mt-16 text-center animate-fadeInUp">
          <p className="text-gray-200 text-sm sm:text-base">
            Pronto para dar o próximo passo?
            <br />
            <span className="font-semibold text-yellow-300">
              Vamos conversar sobre seu projeto.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;

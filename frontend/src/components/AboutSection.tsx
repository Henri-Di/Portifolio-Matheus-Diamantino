// src/components/AboutSection.tsx
import React from "react";
import { FaCode, FaLaptopCode, FaLightbulb, FaRocket } from "react-icons/fa";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Background sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_70%)]"></div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-500 animate-gradient-x">
          Sobre Mim
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Um pouco sobre minha trajetória e como posso transformar sua ideia em realidade digital.
        </p>
      </div>

      {/* Conteúdo principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>
            Olá! Sou{" "}
            <span className="font-semibold text-cyan-500">
              Matheus Diamantino
            </span>
            , desenvolvedor web fullstack em Brasília. Minha missão é criar
            soluções digitais robustas e eficientes que atendam às necessidades
            específicas de cada empresa, fortalecendo sua presença online.
          </p>

          <p>
            Combinando{" "}
            <span className="font-semibold text-purple-500">inovação</span> e
            boas práticas de desenvolvimento, entrego sistemas seguros,
            escaláveis e funcionais que geram resultados concretos para os
            negócios.
          </p>

          <p>
            Mais do que código, busco construir ferramentas digitais que causem{" "}
            <span className="font-semibold text-cyan-500">impacto real</span>,
            agregando valor à sua marca e ampliando sua visibilidade no mercado.
          </p>

          <p>
            Vamos transformar sua ideia em uma plataforma digital eficaz?{" "}
            <span className="font-semibold text-purple-500">
              Juntos, podemos fazer acontecer.
            </span>
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block mt-4 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-500 hover:scale-105"
          >
            Fale comigo
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FaCode className="text-4xl text-cyan-400 mb-4" />,
              title: "Fullstack Development",
              text: "Do frontend ao backend, construo soluções completas e escaláveis para qualquer projeto.",
              border: "hover:border-cyan-400",
              shadow:
                "hover:shadow-[0_0_25px_rgba(6,182,212,0.4),0_0_40px_rgba(139,92,246,0.3)]",
            },
            {
              icon: <FaLaptopCode className="text-4xl text-purple-400 mb-4" />,
              title: "Arquitetura & Código Limpo",
              text: "Sigo as melhores práticas do mercado, garantindo código seguro, escalável e de fácil manutenção.",
              border: "hover:border-purple-400",
              shadow:
                "hover:shadow-[0_0_25px_rgba(139,92,246,0.4),0_0_40px_rgba(6,182,212,0.3)]",
            },
            {
              icon: <FaLightbulb className="text-4xl text-yellow-400 mb-4" />,
              title: "Soluções Criativas",
              text: "Transformo ideias em ferramentas digitais que resolvem problemas reais de forma inovadora.",
              border: "hover:border-cyan-400",
              shadow:
                "hover:shadow-[0_0_25px_rgba(6,182,212,0.4),0_0_40px_rgba(139,92,246,0.3)]",
            },
            {
              icon: <FaRocket className="text-4xl text-purple-500 mb-4" />,
              title: "Resultados Impactantes",
              text: "Meu foco é entregar valor real para empresas, aumentando visibilidade, performance e presença digital.",
              border: "hover:border-purple-400",
              shadow:
                "hover:shadow-[0_0_25px_rgba(139,92,246,0.4),0_0_40px_rgba(6,182,212,0.3)]",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-transparent ${card.border} ${card.shadow} transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:rotate-[0.5deg] hover:scale-[1.02] group`}
            >
              <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {card.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-500">
                {card.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

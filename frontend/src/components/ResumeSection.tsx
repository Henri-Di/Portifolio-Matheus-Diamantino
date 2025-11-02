// src/components/ResumeSection.tsx
import React from "react";
import { FaDownload } from "react-icons/fa";

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-16 sm:py-20 bg-gray-50 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Meu Currículo
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Conheça minhas experiências, habilidades e projetos realizados. Faça o download do meu currículo completo para avaliar meu perfil profissional.
        </p>

        {/* Card com destaque */}
        <div className="mt-12 relative bg-white rounded-2xl shadow-lg p-8 sm:p-12 flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_30px_rgba(6,182,212,0.4),0_0_20px_rgba(139,92,246,0.3)]">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {/* Ícone */}
            <FaDownload className="text-5xl sm:text-6xl text-cyan-400 transition-transform duration-500 group-hover:animate-bounce" />

            {/* Descrição */}
            <div className="text-center sm:text-left space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Currículo Profissional
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Visualize meu histórico profissional, competências técnicas e projetos realizados. Um resumo completo para mostrar minha experiência e dedicação em TI.
              </p>
            </div>
          </div>

          {/* Botão de download */}
          <a
            href="/Curriculo-Matheus-Henrique-Ribeiro-Diamantino.pdf"
            download
            className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.6),0_0_15px_rgba(6,182,212,0.5)]"
          >
            <FaDownload className="mr-2 text-lg transition-transform duration-500 group-hover:animate-bounce" />
            Baixar Currículo
          </a>
        </div>
      </div>

      {/* Efeito de fundo sutil (opcional) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-200 to-purple-300 rounded-full opacity-20 -translate-x-1/2 animate-blob"></div>
      </div>
    </section>
  );
};

export default ResumeSection;

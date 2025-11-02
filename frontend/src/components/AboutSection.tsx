// src/components/AboutSection.tsx
import React from "react";
import { FaCode, FaLaptopCode, FaLightbulb, FaRocket } from "react-icons/fa";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      {/* ===================== */}
      {/* Seção: Cabeçalho Principal */}
      {/* ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        {/* Título com gradiente e destaque visual */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Sobre Mim
        </h2>
        {/* Descrição breve contextualizando o visitante */}
        <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
          Um pouco sobre minha trajetória e como posso transformar sua ideia em realidade digital.
        </p>
      </div>

      {/* ===================== */}
      {/* Conteúdo principal da seção */}
      {/* ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">

        {/* --------------------- */}
        {/* Coluna 1: Texto informativo */}
        {/* --------------------- */}
        <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            Olá! Sou <span className="font-semibold text-cyan-500">Matheus Diamantino</span>, desenvolvedor web fullstack em Brasília. Minha missão é criar soluções digitais robustas e eficientes que atendam às necessidades específicas de cada empresa, fortalecendo sua presença online.
          </p>

          <p>
            Combinando <span className="font-semibold text-purple-500">inovação</span> e boas práticas de desenvolvimento, entrego sistemas seguros, escaláveis e funcionais que geram resultados concretos para os negócios.
          </p>

          <p>
            Mais do que código, busco construir ferramentas digitais que causem <span className="font-semibold text-cyan-500">impacto real</span>, agregando valor à sua marca e ampliando sua visibilidade no mercado.
          </p>

          <p>
            Vamos transformar sua ideia em uma plataforma digital eficaz? <span className="font-semibold text-purple-500">Juntos, podemos fazer acontecer.</span>
          </p>

          {/* --------------------- */}
          {/* CTA: Call-to-Action */}
          {/* --------------------- */}
          <a
            href="#contact"
            className="mt-4 inline-block px-6 py-3 bg-cyan-500 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300"
          >
            Fale comigo
          </a>
        </div>

        {/* --------------------- */}
        {/* Coluna 2: Cards de destaque */}
        {/* --------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Cada card representa um diferencial/competência */}
          
          {/* Card 1 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border-2 border-transparent hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.6),0_0_30px_rgba(139,92,246,0.5)] transition-all duration-500 group">
            <FaCode className="text-4xl text-cyan-400 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse" />
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Fullstack Development</h4>
            <p className="text-gray-500 text-sm text-center">
              Do frontend ao backend, construo soluções completas e escaláveis para qualquer projeto.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border-2 border-transparent hover:border-purple-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.5),0_0_30px_rgba(6,182,212,0.6)] transition-all duration-500 group">
            <FaLaptopCode className="text-4xl text-purple-400 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse" />
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Arquitetura & Código Limpo</h4>
            <p className="text-gray-500 text-sm text-center">
              Sigo as melhores práticas do mercado, garantindo código seguro, escalável e de fácil manutenção.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border-2 border-transparent hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.6),0_0_30px_rgba(139,92,246,0.5)] transition-all duration-500 group">
            <FaLightbulb className="text-4xl text-yellow-400 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse" />
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Soluções Criativas</h4>
            <p className="text-gray-500 text-sm text-center">
              Transformo ideias em ferramentas digitais que resolvem problemas reais de forma inovadora.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl border-2 border-transparent hover:border-purple-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.5),0_0_30px_rgba(6,182,212,0.6)] transition-all duration-500 group">
            <FaRocket className="text-4xl text-purple-500 mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse" />
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Resultados Impactantes</h4>
            <p className="text-gray-500 text-sm text-center">
              Meu foco é entregar valor real para empresas, aumentando visibilidade, performance e presença digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

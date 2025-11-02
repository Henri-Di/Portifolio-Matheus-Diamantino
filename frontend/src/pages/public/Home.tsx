// src/pages/public/Home.tsx
import React from "react";
import Header from "../../components/Header"; 
import AboutSection from "../../components/AboutSection";
import PortfolioSection from "../../components/PortifolioSection";
import TechSection from "../../components/TechSection";
import ResumeSection from "../../components/ResumeSection";
import ContactSection from "../../components/ContactSection";
import ContactCTASection from "../../components/ContactCTASection";
import Footer from "../../components/Footer"; 
import BackgroundIcons from "../../components/BackgroundIcons";
import ButtonTop from "../../components/ButtonTop"; 

/**
 * Página inicial do portfólio.
 * Estrutura principal da Home com foco em UI/UX:
 *  - Background animado para dinamismo visual
 *  - Header fixo com navegação suave
 *  - Seções bem separadas e com hierarquia visual clara
 *  - Footer com contatos e efeito moderno
 *  - Botão "Top" para melhor navegação UX
 */
const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* Background flutuante com ícones animados para efeito visual sutil */}
      <BackgroundIcons />

      {/* Cabeçalho fixo com navegação sticky e hover/active states */}
      <Header />

      {/* Conteúdo principal da página */}
      <main className="pt-24 max-w-7xl mx-auto px-6 space-y-16">

        {/* Seção "Sobre Mim" */}
        {/* Inclui apresentação pessoal, resumo e foto de destaque */}
        <AboutSection />

        {/* Seção de Tecnologias */}
        {/* Cards com ícones, tooltips e animação hover neon para UI/UX */}
        <TechSection />

        {/* Seção de Portfólio */}
        {/* Projetos recentes com vídeos, ícones, badges de tecnologias e links */}
        <PortfolioSection />

        {/* Seção de Currículo */}
        {/* Card chamativo com botão de download e efeitos de destaque */}
        <ResumeSection />

        {/* Seção de Contato */}
        {/* Cards interativos com links externos, cores e tooltips para melhor UX */}
        <ContactSection />

        {/* Seção de CTA para captação de clientes */}
        {/* Botões e chamadas para ação claras, destacando engajamento */}
        <ContactCTASection />  
      </main>

      {/* Rodapé */}
      {/* Contém informações de copyright, links sociais com hover e glow, fundo animado */}
      <Footer />

      {/* Botão "Voltar ao Topo" */}
      {/* Facilita navegação para UX em páginas longas */}
      <ButtonTop />
    </div>
  );
};

export default Home;

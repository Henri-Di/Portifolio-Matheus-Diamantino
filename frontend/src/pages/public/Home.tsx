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

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Background flutuante */}
      <BackgroundIcons />

      {/* Header */}
      <Header />

      {/* Conteúdo da página */}
      <main className="pt-24 max-w-7xl mx-auto px-6 space-y-16">
        {/* Seção Sobre Mim */}
        <AboutSection />

        {/* Seção de Tecnologias */}
        <TechSection />

        {/* Seção de Portfólio */}
        <PortfolioSection />

        {/* Seção de Currículo */}
        <ResumeSection />

        {/* Seção de Contato */}
        <ContactSection />

        {/* Seção de Captação de Clientes */}
        <ContactCTASection />  
      </main>

      {/* Footer */}
      <Footer />

      {/* Botão Topo */}
      <ButtonTop />
    </div>
  );
};

export default Home;

// src/components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

/* =====================================================
   Lista de links sociais
   - Cada item possui nome, ícone, link e cor personalizada
   - Hover com animação e glow para melhor UX
===================================================== */
const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/seugithub", color: "#181717" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/seulinkedin", color: "#0077B5" },
  { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/seunumero", color: "#25D366" },
  { name: "Gmail", icon: <FaEnvelope />, link: "mailto:seuemail@gmail.com", color: "#D44638" },
];

/* =====================================================
   Componente Footer
   - Rodapé com informações de direitos autorais
   - Redes sociais com hover animado
   - Fundo decorativo moderno e sutil
===================================================== */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Ano atual dinâmico

  return (
    <footer className="w-full bg-gray-50/50 backdrop-blur-md shadow-inner border-t border-gray-200 mt-16 relative">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* ---------------------
            Texto do rodapé
            - Direitos autorais e créditos de desenvolvimento
            - Gradiente no nome da marca para destaque visual
        --------------------- */}
        <div className="text-center sm:text-left space-y-1">
          <span className="text-gray-600 text-sm sm:text-base">
            &copy; {currentYear}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold">
              Studio M&D
            </span>
            . Todos os direitos reservados.
          </span>
          <p className="text-gray-500 text-sm sm:text-base">
            Desenvolvido por{" "}
            <span className="font-semibold text-gray-700 hover:text-cyan-500 transition-colors duration-300">
              Matheus Diamantino
            </span>
          </p>
        </div>

        {/* ---------------------
            Redes sociais
            - Hover com escala, rotação e glow
            - Glow sutil melhora percepção visual e foco
        --------------------- */}
        <div className="flex space-x-6 mt-4 sm:mt-0">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              {/* Ícone da rede social */}
              <div
                className="text-2xl sm:text-3xl transition-all duration-300 transform hover:scale-125 hover:rotate-6"
                style={{ color: social.color }}
              >
                {social.icon}
              </div>
              {/* Glow sutil no hover */}
              <span className="absolute inset-0 rounded-full opacity-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></span>
            </a>
          ))}
        </div>
      </div>

      {/* ---------------------
          Fundo decorativo moderno
          - Blob grande com animação sutil
          - Apenas decorativo, pointer-events-none
      --------------------- */}
      <div className="absolute -top-16 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-200 to-purple-300 rounded-full opacity-20 -translate-x-1/2 animate-blob pointer-events-none"></div>
    </footer>
  );
};

export default Footer;

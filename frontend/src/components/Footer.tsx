// src/components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

/* =====================================================
   Lista de links sociais
   - Cada item possui nome, ícone, link e cor personalizada
   - Hover com animação e glow para melhor UX
===================================================== */
const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/Henri-Di", color: "#181717" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/matheus-diamantino-952b3121a/", color: "#0077B5" },
  { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/+5561999745671", color: "#25D366" },
  { name: "Gmail", icon: <FaEnvelope />, link: "mailto:matheus.diamantino20@gmail.com", color: "#D44638" },
];

/* =====================================================
   Componente Footer
===================================================== */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gray-50/50 backdrop-blur-md shadow-inner border-t border-gray-200 mt-16 overflow-hidden">
      
      {/* ========================
          Fundo decorativo
      ======================== */}
      <div className="absolute -top-20 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-200 via-purple-300 to-blue-300 rounded-full opacity-20 -translate-x-1/2 animate-blob pointer-events-none"></div>
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-400 rounded-full opacity-15 animate-pulse pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-6 animate-fadeInUp">
        
        {/* ========================
            Texto do rodapé
        ======================== */}
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
            <span className="font-semibold text-gray-700 hover:text-cyan-500 transition-colors duration-300 cursor-pointer">
              Matheus Diamantino
            </span>
          </p>
        </div>

        {/* ========================
            Redes sociais
        ======================== */}
        <div className="flex space-x-6 mt-4 sm:mt-0">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              {/* Ícone com hover glow neon */}
              <div
                className="text-2xl sm:text-3xl transition-transform duration-300 transform hover:scale-125 hover:rotate-6 hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.7)]"
                style={{ color: social.color }}
              >
                {social.icon}
              </div>

              {/* Glow sutil no hover */}
              <span className="absolute inset-0 rounded-full opacity-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 blur-xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

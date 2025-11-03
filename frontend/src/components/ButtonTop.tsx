// src/components/ButtonTop.tsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

/* =====================================================
   Componente ButtonTop
   - Botão "Voltar ao topo" fixo no canto inferior direito
   - Gradiente moderno, neon glow e animações suaves
   - Aparece após rolagem maior que 300px
===================================================== */
const ButtonTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  /* ---------------------
     Mostrar botão ao rolar a página
  --------------------- */
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------------
     Scroll suave para o topo
  --------------------- */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-end px-4 pointer-events-none">
      <button
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`
          pointer-events-auto
          flex items-center justify-center
          w-12 h-12 md:w-14 md:h-14 rounded-full
          bg-gradient-to-r from-cyan-400 to-purple-500
          text-white text-xl md:text-2xl
          shadow-lg shadow-cyan-400/40
          transform transition-all duration-500 ease-in-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.7),0_0_30px_rgba(139,92,246,0.6)]
          active:scale-95 active:shadow-[0_0_15px_rgba(6,182,212,0.6),0_0_20px_rgba(139,92,246,0.5)]
          focus:outline-none focus:ring-4 focus:ring-cyan-300/50
          rounded-full
        `}
      >
        {/* Ícone animado com pulso suave e neon */}
        <FaArrowUp className="animate-bounce-slow md:animate-none text-lg md:text-xl" />
      </button>
    </div>
  );
};

export default ButtonTop;

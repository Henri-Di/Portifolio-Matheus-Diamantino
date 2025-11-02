// src/components/ButtonTop.tsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

/* =====================================================
   Componente ButtonTop
   - Botão "Voltar ao topo" fixo no canto inferior direito
   - Aparece após rolagem maior que 300px
   - Animação suave no aparecimento e clique
   - Uso de gradiente e efeitos de hover para melhor UX
===================================================== */
const ButtonTop: React.FC = () => {
  const [visible, setVisible] = useState(false); // Controla visibilidade do botão

  /* ---------------------
     Efeito: Mostrar botão ao rolar a página
     - Adiciona event listener no scroll
     - Remove listener quando componente desmonta
  --------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // Mostra botão após 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------------
     Função: Scroll suave para o topo
     - Comportamento "smooth" melhora experiência do usuário
  --------------------- */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`
        fixed inset-x-0 bottom-6 z-50 flex justify-end px-4
        pointer-events-none /* Para não bloquear interação de elementos abaixo */
      `}
    >
      <button
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`
          pointer-events-auto /* Permite clique no botão */
          flex items-center justify-center
          w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg
          text-white text-xl
          bg-gradient-to-r from-cyan-400 to-purple-500
          transform transition-all duration-500
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} /* Aparecimento suave */
          hover:scale-110 active:scale-95 /* Feedback visual no hover/click */
          focus:outline-none focus:ring-4 focus:ring-cyan-300/50 /* Acessibilidade e foco */
        `}
      >
        {/* Ícone com animação lenta para chamar atenção */}
        <FaArrowUp className="animate-bounce-slow md:animate-none" />
      </button>
    </div>
  );
};

export default ButtonTop;

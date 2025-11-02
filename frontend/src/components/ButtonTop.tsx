// src/components/ButtonTop.tsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ButtonTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`
        fixed inset-x-0 bottom-6 z-50 flex justify-end px-4
        pointer-events-none
      `}
    >
      <button
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`
          pointer-events-auto flex items-center justify-center
          w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg
          text-white text-xl
          bg-gradient-to-r from-cyan-400 to-purple-500
          transform transition-all duration-500
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          hover:scale-110 active:scale-95
          focus:outline-none focus:ring-4 focus:ring-cyan-300/50
        `}
      >
        <FaArrowUp className="animate-bounce-slow md:animate-none" />
      </button>
    </div>
  );
};

export default ButtonTop;

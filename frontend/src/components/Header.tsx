// src/components/Header.tsx
import React, { JSX, useState, useEffect } from "react";
import {
  FaCode,
  FaHome,
  FaBriefcase,
  FaUser,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaTools,
  FaDownload,
} from "react-icons/fa";

/* =====================================================
   Estrutura de navegação
===================================================== */
interface NavItem {
  name: string;
  icon: JSX.Element;
  sectionId: string;
}

const navItems: NavItem[] = [
  { name: "Home", icon: <FaHome />, sectionId: "home" },
  { name: "Sobre", icon: <FaUser />, sectionId: "about" },
  { name: "Tecnologias", icon: <FaTools />, sectionId: "tech" },
  { name: "Portfolio", icon: <FaBriefcase />, sectionId: "portfolio" },
  { name: "Currículo", icon: <FaDownload />, sectionId: "resume" },
  { name: "Contato", icon: <FaEnvelope />, sectionId: "contact" },
];

/* =====================================================
   Componente Header
===================================================== */
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      navItems.forEach((item) => {
        const section = document.getElementById(item.sectionId);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(item.sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const headerOffset = 80;
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const elementPosition = section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 backdrop-blur-md transition-shadow duration-500
        ${scrolled ? "shadow-lg bg-white/10 border-b border-gray-200/30" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center relative">

        {/* ========================
            Logo
        ======================== */}
        <div className="flex flex-col">
          <div
            className="flex items-center group cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <FaCode className="text-cyan-400 text-3xl mr-2 transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:scale-110" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wide transition-all duration-500 group-hover:from-purple-500 group-hover:to-cyan-400 group-hover:scale-105">
              Studio M&D
            </h1>
          </div>
          <span className="mt-1 text-gray-600 font-medium text-sm sm:text-base self-end transition-colors duration-300 group-hover:text-cyan-400">
            Desenvolvimento Web
          </span>
        </div>

        {/* ========================
            Botão hamburguer mobile
        ======================== */}
        <div className="md:hidden mt-4 self-end">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-200 hover:text-cyan-400 focus:outline-none text-2xl transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* ========================
            Overlay mobile
        ======================== */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* ========================
            Navegação principal
        ======================== */}
        <nav className="md:flex md:flex-row md:items-center md:space-x-8 w-full md:w-auto z-50 relative">
          <ul
            className={`
              flex flex-col md:flex-row md:space-x-8 font-medium text-base sm:text-lg
              md:static fixed md:bg-transparent bg-white top-0 left-0 md:top-auto md:left-auto w-full md:w-auto h-screen md:h-auto
              overflow-auto md:overflow-visible
              transform md:transform-none transition-transform duration-500 ease-in-out
              ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
              p-6 md:p-0
              md:border-0
            `}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => handleNavClick(item.sectionId)}
                className="group relative flex items-center space-x-2 cursor-pointer transition-all duration-300 py-3 md:py-0 hover:bg-transparent"
              >
                {/* Borda lateral animada */}
                <span
                  className={`
                    absolute left-0 bottom-0 w-1 rounded-r-md bg-gradient-to-b from-cyan-400 to-purple-500 transition-all duration-500 ease-in-out md:block hidden
                    ${activeSection === item.sectionId
                      ? "h-full opacity-100"
                      : "h-0 opacity-0 group-hover:h-full group-hover:opacity-100"
                    }`}
                />

                {/* Ícone da seção */}
                <span
                  className={`
                    text-lg sm:text-xl transition-all duration-500
                    ${activeSection === item.sectionId
                      ? "text-purple-500 drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]"
                      : "text-cyan-400 group-hover:text-purple-500 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                    }
                  `}
                >
                  {item.icon}
                </span>

                {/* Nome da seção */}
                <span
                  className={`
                    transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500
                    ${activeSection === item.sectionId ? "font-bold" : "font-medium"}
                    group-hover:from-purple-500 group-hover:to-cyan-400
                  `}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;

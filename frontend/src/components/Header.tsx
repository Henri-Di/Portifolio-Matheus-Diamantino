// src/components/Header.tsx
import React, { JSX, useState, useEffect } from "react";
import { FaCode, FaHome, FaBriefcase, FaUser, FaEnvelope, FaBars, FaTimes, FaTools, FaDownload } from "react-icons/fa";

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

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Atualiza sombra do header e seção ativa durante scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      navItems.forEach((item) => {
        const section = document.getElementById(item.sectionId);
        if (section) {
          const top = section.offsetTop - 120; // Ajuste para header fixo
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

  // Scroll suave ao clicar no menu
  const handleNavClick = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 backdrop-blur-md transition-shadow duration-500
        ${scrolled ? "shadow-lg bg-white/90 border-b border-gray-200" : "bg-white/0"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center">

        {/* Logo */}
        <div className="flex flex-col">
          <div className="flex items-center group cursor-pointer" onClick={() => handleNavClick("home")}>
            <FaCode className="text-cyan-400 text-3xl mr-2 transition-transform duration-500 ease-in-out group-hover:rotate-6 group-hover:scale-105" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wide transition-all duration-500 group-hover:from-purple-500 group-hover:to-cyan-400 group-hover:scale-105">
              Studio M&D
            </h1>
          </div>
          <span className="mt-1 text-gray-600 font-medium text-sm sm:text-base self-end transition-colors duration-300 group-hover:text-cyan-500">
            Desenvolvimento Web
          </span>
        </div>

        {/* Hamburger mobile */}
        <div className="md:hidden mt-4 self-end">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-cyan-500 focus:outline-none text-2xl transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu de navegação */}
        <nav className="md:flex md:flex-row md:items-center md:space-x-8 w-full md:w-auto transition-all duration-300 ease-in-out">
          <ul
            className={`
              flex flex-col md:flex-row md:space-x-8 font-medium text-base sm:text-lg
              md:static absolute top-full left-0 w-full md:w-auto
              bg-white/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-0
              overflow-hidden max-h-0 md:max-h-full
              ${menuOpen ? "max-h-screen py-4" : "py-0"}
              transition-all duration-500 ease-in-out
              border-t md:border-0 border-gray-200
            `}
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={() => handleNavClick(item.sectionId)}
                className="group relative flex items-center space-x-2 cursor-pointer transition-all duration-300 px-6 md:px-0 py-2 md:py-0 hover:bg-transparent"
              >
                {/* Borda lateral animada (cresce de baixo para cima) */}
                <span
                  className={`
                    absolute left-0 bottom-0 w-1 rounded-r-md
                    bg-gradient-to-b from-cyan-400 to-purple-500
                    transition-all duration-500 ease-in-out
                    md:block hidden
                    ${activeSection === item.sectionId ? "h-full opacity-100" : "h-0 opacity-0 group-hover:h-full group-hover:opacity-100"}
                  `}
                />

                {/* Ícone */}
                <span
                  className={`
                    text-lg sm:text-xl transition-colors duration-300
                    ${activeSection === item.sectionId ? "text-purple-500" : "text-cyan-400"} 
                    group-hover:text-purple-500
                  `}
                >
                  {item.icon}
                </span>

                {/* Texto */}
                <span
                  className={`
                    transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500
                    ${activeSection === item.sectionId ? "font-bold" : ""} group-hover:from-purple-500 group-hover:to-cyan-400
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

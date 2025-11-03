// src/components/TechSection.tsx
import React, { JSX } from "react";
import {
  FaPhp, FaLaravel, FaReact, FaJsSquare, FaGithub, FaDatabase,
  FaHtml5, FaCss3Alt, FaDocker
} from "react-icons/fa";
import {
  SiSymfony, SiTypescript, SiMysql, SiPostgresql, SiBootstrap, SiSass,
  SiNginx, SiNodedotjs, SiTailwindcss
} from "react-icons/si";

/* ============================================================
   FRONTEND: Tecnologias para experiências modernas e fluidas
============================================================ */
const frontendTech: { name: string; icon: JSX.Element; color?: string; description?: string }[] = [
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", description: "Framework CSS responsivo e rápido" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#2965F1", description: "Estilização e design de interfaces" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", description: "Estrutura semântica de páginas web" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E", description: "Interatividade e lógica de UI" },
  { name: "React", icon: <FaReact />, color: "#61DAFB", description: "Interfaces reativas e escaláveis" },
  { name: "SCSS", icon: <SiSass />, color: "#CC6699", description: "Pré-processador CSS avançado" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", description: "Framework utilitário moderno" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", description: "JavaScript tipado e seguro" },
];

/* ============================================================
   BACKEND: Stack sólida para performance e segurança
============================================================ */
const backendTech: { name: string; icon: JSX.Element; color?: string; description?: string }[] = [
  { name: "Docker", icon: <FaDocker />, color: "#2496ED", description: "Containerização e ambientes isolados" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717", description: "Controle de versão e colaboração" },
  { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20", description: "Framework PHP poderoso" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1", description: "Banco de dados relacional" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", description: "Execução JavaScript no backend" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4", description: "Linguagem backend consolidada" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", description: "Banco de dados robusto e moderno" },
  { name: "SQL Server", icon: <FaDatabase />, color: "#CC2927", description: "Banco de dados corporativo" },
  { name: "Symfony", icon: <SiSymfony />, color: "#000000", description: "Framework PHP elegante e modular" },
  { name: "NGINX", icon: <SiNginx />, color: "#009639", description: "Servidor web e proxy reverso" },
];

// Ordenação alfabética melhora a leitura visual da grade
frontendTech.sort((a, b) => a.name.localeCompare(b.name));
backendTech.sort((a, b) => a.name.localeCompare(b.name));

/* ============================================================
   COMPONENTE PRINCIPAL
============================================================ */
const TechSection: React.FC = () => {
  /**
   * Renderização dos cards tecnológicos:
   * - Animação fade + leve rotação
   * - Glow ciano/roxo em hover
   * - Tooltip com descrição contextual
   */
  const renderTech = (techArray: typeof frontendTech) =>
    techArray.map((tech, idx) => (
      <div
        key={idx}
        className={`
          group relative flex flex-col items-center justify-center p-5 bg-white rounded-2xl
          shadow-md transition-all duration-500 transform
          hover:scale-110 hover:-translate-y-1 hover:rotate-1
          hover:shadow-[0_0_18px_rgba(6,182,212,0.6),0_0_25px_rgba(139,92,246,0.4)]
          opacity-0 animate-fadeInUp
        `}
        style={{ animationDelay: `${idx * 0.05}s` }}
      >
        {/* Ícone visual */}
        <div
          className={`
            text-4xl sm:text-5xl mb-2 transition-all duration-500
            group-hover:drop-shadow-[0_0_20px_rgb(34,211,238)]
            group-hover:animate-pulse
          `}
          style={{ color: tech.color }}
          aria-label={tech.name}
        >
          {tech.icon}
        </div>

        {/* Nome + Tooltip */}
        <span
          className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-500 relative"
        >
          {tech.name}
          {tech.description && (
            <span
              className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
              px-2 py-1 bg-gray-900 text-white text-xs rounded-lg shadow-lg
              opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap
              transition-opacity duration-300 z-10"
            >
              {tech.description}
            </span>
          )}
        </span>
      </div>
    ));

  return (
    <section id="tech" className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
      {/* ===================== */}
      {/* Título e Subtítulo */}
      {/* ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Tecnologias
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Um conjunto moderno de ferramentas que une <span className="text-cyan-500 font-medium">performance</span>,
          <span className="text-purple-500 font-medium"> escalabilidade</span> e
          <span className="text-cyan-500 font-medium"> qualidade</span> — construindo experiências digitais marcantes.
        </p>
      </div>

      {/* ===================== */}
      {/* Grid Frontend */}
      {/* ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Frontend</h3>
        <p className="text-gray-500 text-sm mb-6">
          Tecnologias que trazem vida às interfaces e otimizam a experiência do usuário.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-6 sm:gap-8">
          {renderTech(frontendTech)}
        </div>
      </div>

      {/* ===================== */}
      {/* Grid Backend */}
      {/* ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Backend</h3>
        <p className="text-gray-500 text-sm mb-6">
          Ferramentas que garantem segurança, escalabilidade e integração perfeita.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-6 sm:gap-8">
          {renderTech(backendTech)}
        </div>
      </div>
    </section>
  );
};

export default TechSection;

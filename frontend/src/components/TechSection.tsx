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

// Frontend
const frontendTech: { name: string; icon: JSX.Element; color?: string; description?: string }[] = [
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", description: "Framework CSS responsivo e rápido" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#2965F1", description: "Estilização e design de interfaces" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", description: "Estrutura semântica de páginas web" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E", description: "Lógica, interatividade e dinamismo" },
  { name: "React", icon: <FaReact />, color: "#61DAFB", description: "Biblioteca moderna para interfaces" },
  { name: "SCSS", icon: <SiSass />, color: "#CC6699", description: "Pré-processador CSS avançado" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", description: "Framework utilitário CSS" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", description: "JavaScript tipado para segurança e escalabilidade" },
];

// Backend
const backendTech: { name: string; icon: JSX.Element; color?: string; description?: string }[] = [
  { name: "Docker", icon: <FaDocker />, color: "#2496ED", description: "Containerização e ambientes isolados" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717", description: "Controle de versão e colaboração" },
  { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20", description: "Framework PHP robusto" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1", description: "Banco de dados relacional" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", description: "Execução de JavaScript no backend" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4", description: "Linguagem de programação backend" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", description: "Banco de dados avançado" },
  { name: "SQL Server", icon: <FaDatabase />, color: "#CC2927", description: "Banco de dados corporativo" },
  { name: "Symfony", icon: <SiSymfony />, color: "#000000", description: "Framework PHP para aplicações robustas" },
  { name: "NGINX", icon: <SiNginx />, color: "#009639", description: "Servidor web e proxy reverso" },
];

// Ordenação
frontendTech.sort((a, b) => a.name.localeCompare(b.name));
backendTech.sort((a, b) => a.name.localeCompare(b.name));

const TechSection: React.FC = () => {
  const renderTech = (techArray: typeof frontendTech) =>
    techArray.map((tech, idx) => (
      <div
        key={idx}
        className={`
          group flex flex-col items-center justify-center p-4 bg-white rounded-2xl
          shadow-lg transition-all duration-500 transform
          hover:scale-110 hover:-translate-y-1 hover:rotate-1
          hover:shadow-[0_0_15px_rgba(6,182,212,0.6),0_0_30px_rgba(139,92,246,0.5)]
          opacity-0 animate-fadeInUp
        `}
        style={{ animationDelay: `${idx * 0.05}s` }}
      >
        <div
          className={`
            text-4xl sm:text-5xl mb-2 transition-all duration-500
            group-hover:drop-shadow-[0_0_20px_rgb(0,255,255)] 
            group-hover:animate-pulse
          `}
          style={{ color: tech.color }}
        >
          {tech.icon}
        </div>

        <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-500 relative">
          {tech.name}
          {/* Tooltip */}
          {tech.description && (
            <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.description}
            </span>
          )}
        </span>
      </div>
    ));

  return (
    <section id="tech" className="py-16 sm:py-20 bg-gray-50 relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Tecnologias
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Ferramentas e frameworks que utilizo para criar soluções digitais modernas e escaláveis, <br/>
          garantindo desempenho, qualidade de código e experiências excepcionais para os usuários.
        </p>
      </div>

      {/* Frontend */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Frontend</h3>
        <p className="text-gray-500 text-sm mb-4">
          Tecnologias que entregam interfaces modernas, rápidas e interativas.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-6 sm:gap-8">
          {renderTech(frontendTech)}
        </div>
      </div>

      {/* Backend */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Backend</h3>
        <p className="text-gray-500 text-sm mb-4">
          Ferramentas que garantem performance, segurança e escalabilidade.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-6 sm:gap-8">
          {renderTech(backendTech)}
        </div>
      </div>
    </section>
  );
};

export default TechSection;

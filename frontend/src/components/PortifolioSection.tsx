// src/components/PortfolioSection.tsx
import React, { JSX } from "react";
import { 
  FaExternalLinkAlt, FaDatabase, FaLaptopCode, FaMusic, FaCloud, 
  FaDocker, FaPhp, FaReact, FaJsSquare, FaLaravel, FaGit, FaTools 
} from "react-icons/fa";
import { SiSymfony, SiTailwindcss, SiTypescript, SiMysql, SiNginx } from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
  "Tailwind CSS": <SiTailwindcss />,
  "React": <FaReact />,
  "TypeScript": <SiTypescript />,
  "JavaScript": <FaJsSquare />,
  "Vite": <FaLaptopCode />,
  "Laravel": <FaLaravel />,
  "NGINX": <SiNginx />,
  "PHP": <FaPhp />,
  "Docker": <FaDocker />,
  "MySQL": <SiMysql />,
  "Git": <FaGit />,
  "Symfony": <SiSymfony />,
  "Node.js": <FaLaptopCode />,
  "Definindo...": <FaTools />,
};

const portfolioItems = [
  {
    title: "Sistema de Inventário - Caixa Econômica",
    description: "Sistema de gestão de estoque para datacenters da Caixa Econômica Federal.",
    video: "/video/project-view-1.mp4",
    link: "#",
    github: "#",
    scope: `Solução robusta para controle e monitoramento de inventário em datacenters estratégicos da Caixa Econômica, garantindo segurança, integridade dos dados e otimização das operações diárias.`,
    icons: [<FaDatabase key="db" />, <FaLaptopCode key="code" />],
    frontendTechnologies: ["Tailwind CSS", "React", "TypeScript", "JavaScript", "Vite", "Git"],
    backendTechnologies: ["Laravel", "NGINX", "PHP", "Docker", "MySQL", "Git"],
  },
  {
    title: "BandsCloud - Conexão Musical",
    description: "Plataforma web para conectar artistas independentes, estabelecimentos culturais e fãs.",
    video: "/video/project-view-2.mp4",
    link: "https://bandscloud-frontend.onrender.com/",
    github: "https://github.com/Henri-Di/BandsCloud",
    scope: `Plataforma que conecta artistas, espaços culturais e fãs, oferecendo divulgação, oportunidades de shows e parcerias estratégicas na música independente.`,
    icons: [<FaMusic key="music" />, <FaCloud key="cloud" />],
    frontendTechnologies: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "Git"],
    backendTechnologies: ["Symfony", "MySQL", "NGINX", "Docker", "PHP", "Git"],
  },
  {
    title: "Projeto em Construção",
    description: "Em breve: novo projeto inovador em desenvolvimento.",
    video: "", 
    link: "#",
    github: "#",
    scope: `Este projeto ainda está em desenvolvimento. Tecnologias e funcionalidades estão sendo definidas.`,
    icons: [<FaTools key="tools" />],
    frontendTechnologies: ["Definindo..."],
    backendTechnologies: ["Definindo..."],
  },
];

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tight">
          Meu Portfólio
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Alguns dos meus projetos recentes de desenvolvimento web
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => {
          const frontendTechSorted = [...item.frontendTechnologies].sort((a, b) => a.localeCompare(b));
          const backendTechSorted = [...item.backendTechnologies].sort((a, b) => a.localeCompare(b));

          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative group block rounded-2xl overflow-hidden bg-white
                border border-gray-200 hover:border-cyan-400 shadow-sm hover:shadow-lg
                transform transition-all duration-500 hover:-translate-y-1
                ${item.title === "Projeto em Construção" ? "opacity-90" : ""}
              `}
            >
              {/* Neon border (subtle glow) */}
              {!item.title.includes("Construção") && (
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-700 pointer-events-none"></div>
              )}

              {/* Preview (video or icon) */}
              <div className="flex items-center justify-center overflow-hidden h-52 sm:h-56 md:h-64 bg-gray-100">
                {item.video ? (
                  <video
                    src={item.video}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <span className="text-gray-400 text-6xl">{item.icons[0]}</span>
                )}
              </div>

              {/* Overlay hover */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none
                ${item.title === "Projeto em Construção" ? "bg-yellow-50/60" : "bg-black/0 group-hover:bg-black/5"}
              `}></div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:from-cyan-300 group-hover:to-purple-400 transition-all duration-500">
                    {item.title}
                  </h3>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>

                <p className="text-gray-600 text-sm sm:text-base mb-2 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                  {item.description}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mb-3 italic leading-snug">
                  {item.scope}
                </p>

                {/* Icons */}
                <div className="flex space-x-3 mb-3 flex-wrap">
                  {item.icons.map((icon, idx) => (
                    <span key={idx} className="text-gray-400 group-hover:text-purple-400 text-xl transition-transform duration-300 group-hover:scale-110">
                      {icon}
                    </span>
                  ))}
                </div>

                {/* Tech badges */}
                {frontendTechSorted.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-gray-500 text-xs font-semibold mb-1 uppercase tracking-wide">
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {frontendTechSorted.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-cyan-50 text-cyan-700 text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1 hover:bg-cyan-100 transition-all duration-300"
                        >
                          {techIcons[tech] && <span className="text-sm">{techIcons[tech]}</span>}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {backendTechSorted.length > 0 && (
                  <div>
                    <h4 className="text-gray-500 text-xs font-semibold mb-1 uppercase tracking-wide">
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {backendTechSorted.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1 hover:bg-gray-200 transition-all duration-300"
                        >
                          {techIcons[tech] && <span className="text-sm">{techIcons[tech]}</span>}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex space-x-4 mt-4">
                  {item.title === "Sistema de Inventário - Caixa Econômica" ? (
                    <>
                      <span className="flex items-center gap-1 text-gray-400 text-xs font-semibold">
                        <FaExternalLinkAlt /> Demo Indisponível
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 text-xs font-semibold">
                        <FaGit /> GitHub Indisponível
                      </span>
                    </>
                  ) : (
                    <>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-cyan-600 hover:text-cyan-400 text-xs font-semibold transition-all duration-300"
                      >
                        <FaExternalLinkAlt /> Ver Demo
                      </a>
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-purple-700 hover:text-purple-400 text-xs font-semibold transition-all duration-300"
                      >
                        <FaGit /> GitHub
                      </a>
                    </>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioSection;

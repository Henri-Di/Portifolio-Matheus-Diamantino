// src/components/PortfolioSection.tsx
import React, { JSX } from "react";
import { 
  FaExternalLinkAlt, FaDatabase, FaLaptopCode, FaMusic, FaCloud, 
  FaDocker, FaPhp, FaReact, FaJsSquare, FaLaravel, FaGit, FaTools 
} from "react-icons/fa";
import { SiSymfony, SiTailwindcss, SiTypescript, SiMysql, SiNginx } from "react-icons/si";

/* =====================================================
   Mapeamento de Tecnologias → Ícones
   - Facilita exibir ícones correspondentes para cada tech
===================================================== */
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

/* =====================================================
   Lista de projetos
   - Cada objeto contém título, descrição, vídeo, link, tecnologias
   - Frontend e Backend separados para melhor visualização
===================================================== */
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

/* =====================================================
   Componente PortfolioSection
   - Exibe cards de projetos com vídeos, ícones, tecnologias
   - Hover suave, gradientes, neon pulse e destaque de tecnologias
===================================================== */
const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-gray-50">
      {/* ---------------------
          Header
          - Gradiente no título
          - Descrição curta centralizada
      --------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Meu Portifólio
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Alguns dos meus projetos recentes de desenvolvimento web
        </p>
      </div>

      {/* ---------------------
          Grid de projetos
          - Responsivo: 1-3 colunas dependendo da tela
          - Cada card animado com hover e destaque neon
      --------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                relative group block rounded-2xl overflow-hidden bg-white transform transition-all duration-500 hover:-translate-y-1 hover:scale-102
                border-2 border-transparent
                ${item.title === "Projeto em Construção" ? "border-dashed border-gray-400" : ""}
              `}
            >
              {/* Neon Border simulada para cards ativos */}
              {!item.title.includes("Construção") && (
                <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.6),0_0_30px_rgba(139,92,246,0.5)] transition-all duration-500"></div>
              )}

              {/* Vídeo ou ícone do projeto */}
              <div className="flex items-center justify-center overflow-hidden h-48 sm:h-56 md:h-64 bg-gray-100">
                {item.video ? (
                  <video
                    src={item.video}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
              <div className={`absolute inset-0 transition-colors duration-500 rounded-2xl pointer-events-none
                ${item.title === "Projeto em Construção" ? "bg-yellow-50/60" : "bg-black/0 group-hover:bg-black/10"}`}
              ></div>

              {/* Conteúdo do card */}
              <div className="p-4 sm:p-6 relative z-10">
                {/* Título e ícone de link externo */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:scale-105">
                    {item.title}
                  </h3>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>

                {/* Descrição e escopo do projeto */}
                <p className="text-gray-600 text-sm sm:text-base mb-2 group-hover:text-gray-700 transition-colors duration-500">
                  {item.description}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mb-3 italic group-hover:text-gray-600 transition-colors duration-500">
                  {item.scope}
                </p>

                {/* Ícones principais do projeto */}
                <div className="flex space-x-3 mb-3 flex-wrap">
                  {item.icons.map((icon, idx) => (
                    <span
                      key={idx}
                      className="text-gray-400 group-hover:text-purple-400 transition-all duration-300 transform group-hover:scale-110 text-xl"
                    >
                      {icon}
                    </span>
                  ))}
                </div>

                {/* Tecnologias Frontend */}
                {frontendTechSorted.length > 0 && (
                  <div className="mb-2">
                    <h4 className="text-gray-500 text-xs sm:text-sm font-semibold mb-1 group-hover:text-gray-600 transition-colors duration-500">
                      Frontend:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {frontendTechSorted.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-cyan-100 text-cyan-700 text-xs sm:text-sm font-medium px-2 py-1 rounded-md flex items-center gap-1 transition-all duration-500 transform hover:scale-110 hover:bg-cyan-200 hover:text-cyan-900"
                        >
                          {techIcons[tech] && <span className="text-sm">{techIcons[tech]}</span>}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tecnologias Backend */}
                {backendTechSorted.length > 0 && (
                  <div>
                    <h4 className="text-gray-500 text-xs sm:text-sm font-semibold mb-1 group-hover:text-gray-600 transition-colors duration-500">
                      Backend:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {backendTechSorted.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-200 text-gray-800 text-xs sm:text-sm font-medium px-2 py-1 rounded-md flex items-center gap-1 transition-all duration-500 transform hover:scale-110 hover:bg-gray-300 hover:text-gray-900"
                        >
                          {techIcons[tech] && <span className="text-sm">{techIcons[tech]}</span>}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links de Demo e GitHub */}
                <div className="flex space-x-4 mt-3">
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
                        className="flex items-center gap-1 text-cyan-600 hover:text-cyan-400 text-xs font-semibold transition-all duration-300 neon-pulse"
                      >
                        <FaExternalLinkAlt /> Ver Demo
                      </a>
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-purple-700 hover:text-purple-400 text-xs font-semibold transition-all duration-300 neon-pulse"
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

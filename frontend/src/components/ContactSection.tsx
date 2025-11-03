// src/components/ContactSection.tsx
import React, { JSX } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

/* ============================================================
   LISTA DE CONTATOS
   - Ícone, nome, link e descrição (tooltip)
   - Paleta consistente com a identidade visual global
============================================================ */
const contactList: {
  name: string;
  icon: JSX.Element;
  link: string;
  color?: string;
  description?: string;
}[] = [
  {
    name: "Gmail",
    icon: <FaEnvelope />,
    link: "mailto:matheus.diamantino20@gmail.com",
    color: "#D44638",
    description: "Envie um e-mail para iniciar uma conversa profissional.",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/+5561999745671",
    color: "#25D366",
    description: "Converse diretamente comigo pelo WhatsApp.",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/matheus-diamantino-952b3121a/",
    color: "#0077B5",
    description: "Conecte-se comigo e acompanhe meu networking profissional.",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/Henri-Di",
    color: "#181717",
    description: "Explore meus projetos e contribuições open-source.",
  },
];

/* ============================================================
   COMPONENTE: ContactSection
   - Cartões interativos e animados
   - Hover fluido com brilho e sombra ciano-roxa
   - Tooltip acessível e elegante
============================================================ */
const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 bg-gray-50 overflow-hidden"
    >
      {/* ===================== */}
      {/* Cabeçalho da seção */}
      {/* ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Contato
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Quer discutir um projeto, parceria ou oportunidade? Entre em contato
          por qualquer uma das plataformas abaixo.
        </p>
      </div>

      {/* ===================== */}
      {/* Grid de Contatos */}
      {/* ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-6 sm:gap-8">
        {contactList.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl
              shadow-md transition-all duration-500 transform
              hover:-translate-y-2 hover:scale-110 hover:rotate-1
              hover:shadow-[0_0_20px_rgba(6,182,212,0.6),0_0_35px_rgba(139,92,246,0.5)]
              opacity-0 animate-fadeInUp
            `}
            style={{ animationDelay: `${idx * 0.1}s` }}
            aria-label={contact.name}
          >
            {/* Ícone principal */}
            <div
              className="text-4xl sm:text-5xl mb-2 transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgb(34,211,238)] group-hover:animate-pulse"
              style={{ color: contact.color }}
            >
              {contact.icon}
            </div>

            {/* Nome da plataforma */}
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-500">
              {contact.name}
            </span>

            {/* Tooltip descritivo */}
            {contact.description && (
              <span
                className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                px-3 py-1 bg-gray-900 text-white text-xs rounded-lg shadow-lg
                opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap
                transition-opacity duration-300 z-10"
              >
                {contact.description}
              </span>
            )}
          </a>
        ))}
      </div>

      {/* ===================== */}
      {/* Call to Action final */}
      {/* ===================== */}
      <div className="mt-14 text-center">
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Estou sempre aberto a novas ideias e desafios.
          <br />
          <span className="text-cyan-500 font-semibold">
            Vamos construir algo incrível juntos?
          </span>
        </p>
      </div>

      {/* ===================== */}
      {/* Efeito de fundo líquido */}
      {/* ===================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[300px] h-[300px] bg-cyan-300/30 rounded-full blur-3xl animate-pulse top-10 left-10" />
        <div className="absolute w-[400px] h-[400px] bg-purple-300/30 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite] bottom-0 right-0" />
      </div>
    </section>
  );
};

export default ContactSection;

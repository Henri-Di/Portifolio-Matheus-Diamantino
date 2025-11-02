// src/components/ContactSection.tsx
import React, { JSX } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const contactList: { 
  name: string; 
  icon: JSX.Element; 
  link: string; 
  color?: string; 
  description?: string 
}[] = [
  { 
    name: "Gmail", 
    icon: <FaEnvelope />, 
    link: "mailto:matheus.diamantino20@gmail.com", 
    color: "#D44638",
    description: "Envie um e-mail para iniciar uma conversa profissional"
  },
  { 
    name: "WhatsApp", 
    icon: <FaWhatsapp />, 
    link: "https://wa.me/+5561999745671", 
    color: "#25D366",
    description: "Converse diretamente comigo pelo WhatsApp"
  },
  { 
    name: "LinkedIn", 
    icon: <FaLinkedin />, 
    link: "https://www.linkedin.com/in/matheus-diamantino-952b3121a/", 
    color: "#0077B5",
    description: "Conecte-se comigo e acompanhe meu networking profissional"
  },
  { 
    name: "GitHub", 
    icon: <FaGithub />, 
    link: "https://github.com/Henri-Di", 
    color: "#181717",
    description: "Veja meus projetos e contribuições em código aberto"
  },
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50 relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Contato
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Entre em contato comigo através das plataformas abaixo para projetos, parcerias ou dúvidas.
        </p>
      </div>

      {/* Cards de contato */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-6 sm:gap-8">
        {contactList.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              relative group flex flex-col items-center justify-center p-6 bg-white rounded-2xl
              shadow-lg transition-all duration-500 transform
              hover:-translate-y-2 hover:scale-110 hover:rotate-1
              hover:shadow-[0_10px_25px_rgba(0,0,0,0.2),0_0_20px_rgba(6,182,212,0.5)]
            `}
          >
            {/* Ícone */}
            <div
              className="text-4xl sm:text-5xl mb-2 transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgb(6,182,212)] group-hover:animate-pulse"
              style={{ color: contact.color }}
            >
              {contact.icon}
            </div>

            {/* Nome */}
            <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-500">
              {contact.name}
            </span>

            {/* Tooltip / descrição */}
            {contact.description && (
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-max max-w-[200px]">
                {contact.description}
              </span>
            )}
          </a>
        ))}
      </div>

      {/* Call-to-action extra */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 text-sm sm:text-base">
          Estou sempre aberto a novas ideias e oportunidades. <span className="text-cyan-500 font-semibold">Vamos conversar!</span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

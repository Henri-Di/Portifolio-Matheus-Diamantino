// src/components/BackgroundIcons.tsx
import React from "react";
import { 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGit, FaDocker, FaPhp, FaLaravel 
} from "react-icons/fa";
import { 
  SiTypescript, SiTailwindcss, SiMysql, SiSymfony, SiNginx, SiPostgresql, SiBootstrap, SiSass 
} from "react-icons/si";

/* =====================================================
   Lista de ícones de tecnologias
   - Adiciona profundidade via opacity, blur e z-index
   - Cada ícone tem variações de movimento (float + sway)
   - Mantemos cores consistentes e contrastes suaves
===================================================== */
const icons = [
  { icon: <FaReact />, size: 60, top: "5%", left: "5%", color: "text-cyan-400", rotation: "-12deg", delay: 0 },
  { icon: <FaJsSquare />, size: 55, top: "15%", left: "75%", color: "text-yellow-400", rotation: "10deg", delay: 200 },
  { icon: <FaHtml5 />, size: 50, top: "25%", left: "20%", color: "text-orange-500", rotation: "-5deg", delay: 400 },
  { icon: <FaCss3Alt />, size: 45, top: "35%", left: "85%", color: "text-blue-600", rotation: "8deg", delay: 600 },
  { icon: <FaNodeJs />, size: 60, top: "45%", left: "50%", color: "text-green-500", rotation: "-10deg", delay: 800 },
  { icon: <FaGit />, size: 45, top: "55%", left: "10%", color: "text-red-500", rotation: "15deg", delay: 1000 },
  { icon: <FaDocker />, size: 50, top: "60%", left: "70%", color: "text-blue-300", rotation: "-8deg", delay: 1200 },
  { icon: <FaPhp />, size: 45, top: "70%", left: "25%", color: "text-indigo-500", rotation: "12deg", delay: 1400 },
  { icon: <SiTypescript />, size: 55, top: "75%", left: "80%", color: "text-blue-500", rotation: "-6deg", delay: 1600 },
  { icon: <SiTailwindcss />, size: 50, top: "85%", left: "40%", color: "text-teal-400", rotation: "10deg", delay: 1800 },
  { icon: <SiMysql />, size: 45, top: "20%", left: "40%", color: "text-blue-700", rotation: "-12deg", delay: 2000 },
  { icon: <SiSymfony />, size: 45, top: "10%", left: "60%", color: "text-gray-700", rotation: "6deg", delay: 2200 },
  { icon: <SiNginx />, size: 50, top: "65%", left: "15%", color: "text-green-600", rotation: "-8deg", delay: 2400 },
  { icon: <FaLaravel />, size: 50, top: "30%", left: "60%", color: "text-red-600", rotation: "10deg", delay: 2600 },
  { icon: <SiPostgresql />, size: 45, top: "40%", left: "30%", color: "text-blue-800", rotation: "-10deg", delay: 2800 },
  { icon: <SiBootstrap />, size: 50, top: "55%", left: "80%", color: "text-purple-500", rotation: "8deg", delay: 3000 },
  { icon: <SiSass />, size: 45, top: "75%", left: "20%", color: "text-pink-500", rotation: "-6deg", delay: 3200 },
];

/* =====================================================
   Componente BackgroundIcons aprimorado
===================================================== */
const BackgroundIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((item, idx) => (
        <div
          key={idx}
          className={`
            absolute ${item.color} opacity-30
            animate-float-sway hover:scale-125 hover:opacity-100
            transition-transform duration-700 ease-in-out
          `}
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.size,
            transform: `rotate(${item.rotation})`,
            animationDelay: `${item.delay}ms`,
            zIndex: 0,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Gradiente sutil no fundo para profundidade */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 via-purple-100 to-pink-100 opacity-10 pointer-events-none rounded-full" />
    </div>
  );
};

export default BackgroundIcons;

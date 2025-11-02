// src/components/BackgroundIcons.tsx
import React from "react";
import { 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGit, FaDocker, FaPhp, FaLaravel 
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMysql, SiSymfony, SiNginx, SiPostgresql, SiBootstrap, SiSass } from "react-icons/si";

const icons = [
  { icon: <FaReact />, size: 60, top: "5%", left: "5%", color: "text-cyan-400", rotation: "-12deg" },
  { icon: <FaJsSquare />, size: 55, top: "15%", left: "75%", color: "text-yellow-400", rotation: "10deg" },
  { icon: <FaHtml5 />, size: 50, top: "25%", left: "20%", color: "text-orange-500", rotation: "-5deg" },
  { icon: <FaCss3Alt />, size: 45, top: "35%", left: "85%", color: "text-blue-600", rotation: "8deg" },
  { icon: <FaNodeJs />, size: 60, top: "45%", left: "50%", color: "text-green-500", rotation: "-10deg" },
  { icon: <FaGit />, size: 45, top: "55%", left: "10%", color: "text-red-500", rotation: "15deg" },
  { icon: <FaDocker />, size: 50, top: "60%", left: "70%", color: "text-blue-300", rotation: "-8deg" },
  { icon: <FaPhp />, size: 45, top: "70%", left: "25%", color: "text-indigo-500", rotation: "12deg" },
  { icon: <SiTypescript />, size: 55, top: "75%", left: "80%", color: "text-blue-500", rotation: "-6deg" },
  { icon: <SiTailwindcss />, size: 50, top: "85%", left: "40%", color: "text-teal-400", rotation: "10deg" },
  { icon: <SiMysql />, size: 45, top: "20%", left: "40%", color: "text-blue-700", rotation: "-12deg" },
  { icon: <SiSymfony />, size: 45, top: "10%", left: "60%", color: "text-gray-700", rotation: "6deg" },
  { icon: <SiNginx />, size: 50, top: "65%", left: "15%", color: "text-green-600", rotation: "-8deg" },
  // Novos ícones
  { icon: <FaLaravel />, size: 50, top: "30%", left: "60%", color: "text-red-600", rotation: "10deg" },
  { icon: <SiPostgresql />, size: 45, top: "40%", left: "30%", color: "text-blue-800", rotation: "-10deg" },
  { icon: <SiBootstrap />, size: 50, top: "55%", left: "80%", color: "text-purple-500", rotation: "8deg" },
  { icon: <SiSass />, size: 45, top: "75%", left: "20%", color: "text-pink-500", rotation: "-6deg" },
];

const BackgroundIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((item, idx) => (
        <div
          key={idx}
          className={`absolute ${item.color} opacity-25 animate-float hover:scale-125 transition-transform duration-500`}
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.size,
            transform: `rotate(${item.rotation})`,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default BackgroundIcons;

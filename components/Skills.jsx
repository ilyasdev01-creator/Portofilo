import React, { useContext } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import ShopContext from "../contexts/context.jsx";

const Skills = () => {
  const { mode } = useContext(ShopContext);

  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <FaCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#3C873A" },
  ];

  return (
    <section
      id="skills"
      className={`mb-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16 transition-all duration-500 ${mode === "dark" ? "bg-[#212121] text-white" : "bg-[#f5f5f5] text-[#212121]"
        }`}
    >
      {/* --- Title --- */}
      <h1
        className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-colors duration-300 ${mode === "dark" ? "text-white" : "text-[#212121]"
          }`}
      >
        Technologies
      </h1>

      {/* --- Skill Cards --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${mode === "dark"
              ? "bg-[#2a2a2a] hover:shadow-cyan-400/20"
              : "bg-white hover:shadow-[#00acc1]/20"
              }`}
          >
            <div
              className="text-6xl mb-4 transition-transform duration-300 hover:scale-110"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <p
              className={`text-lg font-semibold ${mode === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React, { useContext } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import ShopContext from "../contexts/context.jsx";

const Projects = () => {
  const { mode } = useContext(ShopContext);

  const projects = [
    {
      title: "Forever",
      description:
        "Forever is a full-stack e-commerce application featuring an admin panel. Built with React, Node.js, Express, and MongoDB for a complete end-to-end experience.",
      link: "https://forever-frontend-zeta-one.vercel.app",
      img: "/assets/forever-img.png", // ✅ use public path
    },
    {
      title: "TV Time",
      description:
        "TV Time is a modern movie discovery and rating app built using React and a public movie API. Explore trending films and their ratings in a stylish UI.",
      link: "https://tv0-time1.vercel.app",
      img: "/assets/tvtime.png", // ✅ public path
    },
    {
      title: "OrderBoost",
      description:
        "OrderBoost is a portfolio-style order request platform with integrated Email.js functionality for quick and easy project inquiries.",
      link: "https://inkonuplu.github.io/OrderBoost/",
      img: "/assets/OrderBoost.png", // ✅ public path
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 transition-all duration-500 font-[Poppins] ${mode === "dark"
          ? "bg-[#212121] text-white"
          : "bg-[#f9f9f9] text-[#212121]"
        }`}
    >
      <h1
        className={`text-4xl md:text-5xl font-bold mb-16 text-center tracking-wide transition-all duration-500 ${mode === "dark" ? "text-white" : "text-[#212121]"
          }`}
      >
        My Recent Projects
      </h1>

      <div className="flex flex-col gap-20 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 items-center rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${mode === "dark"
                ? "bg-[#1e1e1e] hover:shadow-cyan-400/20"
                : "bg-white hover:shadow-[#00acc1]/20"
              }`}
          >
            {/* Left Text Section */}
            <div className="p-8 flex flex-col gap-4 order-2 md:order-1 transition-all duration-500">
              <h2
                className={`text-3xl font-semibold transition-all duration-500 ${mode === "dark" ? "text-cyan-400" : "text-[#0097a7]"
                  }`}
              >
                {project.title}
              </h2>

              <p
                className={`text-base leading-relaxed transition-all duration-500 ${mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                {project.description}
              </p>

              <div className="flex justify-start mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 font-medium transition-colors duration-300 ${mode === "dark"
                      ? "text-cyan-400 hover:text-cyan-300"
                      : "text-[#0097a7] hover:text-[#007c91]"
                    }`}
                >
                  Visit <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative group order-1 md:order-2 transition-all duration-500">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${mode === "dark"
                    ? "bg-black/50 group-hover:opacity-100 opacity-0"
                    : "bg-[#e0f7fa]/60 group-hover:opacity-100 opacity-0"
                  }`}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 font-medium px-4 py-2 rounded-full transition-all ${mode === "dark"
                      ? "bg-cyan-500 text-white hover:bg-cyan-400"
                      : "bg-[#00acc1] text-white hover:bg-[#0097a7]"
                    }`}
                >
                  Visit <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button
          disabled
          className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-500 cursor-not-allowed ${mode === "dark"
              ? "bg-[#2a2a2a] text-gray-400"
              : "bg-gray-200 text-gray-500"
            }`}
        >
          No more projects yet !
        </button>
      </div>
    </section>
  );
};

export default Projects;

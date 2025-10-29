import React, { useContext } from "react";
import ShopContext from "../contexts/context.jsx";

const About = () => {
  const { mode } = useContext(ShopContext);

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-16 gap-12 transition-all duration-500 ${mode === "dark" ? "bg-[#212121] text-white" : "bg-[#f5f5f5] text-[#212121]"
        }`}
    >
      {/* --- Text Section --- */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1
          className={`text-4xl md:text-6xl font-bold leading-tight ${mode === "dark" ? "text-white" : "text-[#212121]"
            }`}
        >
          Hello, I’m{" "}
          <span
            className={`${mode === "dark" ? "text-cyan-400" : "text-[#0097a7]"
              }`}
          >
            Ilyas
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl max-w-xl mx-auto md:mx-0 ${mode === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
        >
          A curious mind who loves to turn ideas into reality through{" "}
          <span
            className={`font-semibold ${mode === "dark" ? "text-cyan-400" : "text-[#0097a7]"
              }`}
          >
            code
          </span>.
        </p>

        <button
          onClick={() => { document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }}
          className={` cursor-pointer px-6 py-3 rounded-xl font-medium shadow-lg transition-all duration-300 ${mode === "dark"
            ? "bg-cyan-500 text-white hover:shadow-cyan-400/40 hover:bg-cyan-400"
            : "bg-[#0097a7] text-white hover:bg-[#00acc1] hover:shadow-[#00acc1]/30"
            }`}
        >
          View My Work
        </button>
      </div>

      {/* --- Image Section --- */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-60 h-60 md:w-80 md:h-80">
          <img
            src="../assets/pfp.png"
            alt="Ilyas profile"
            className={`rounded-2xl w-full h-full object-cover border-2 shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:scale-105 transition-transform duration-300 ${mode === "dark"
              ? "border-cyan-400"
              : "border-[#0097a7] shadow-[0_0_20px_rgba(0,150,167,0.2)]"
              }`}
          />
          <div
            className={`absolute -z-10 top-4 left-4 w-full h-full rounded-2xl blur-md ${mode === "dark" ? "border border-cyan-500/40" : "border border-[#0097a7]/40"
              }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;

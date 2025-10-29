import React, { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ShopContext from "../contexts/context.jsx";

const Contact = () => {
  const { mode } = useContext(ShopContext);

  return (
    <section
      id="contact"
      className={`min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 transition-all duration-500 font-[Poppins] ${mode === "dark"
        ? "bg-[#212121] text-white"
        : "bg-[#f9f9f9] text-black"
        }`}
    >
      {/* --- Title --- */}
      <h1
        className={`text-4xl md:text-5xl font-bold mb-6 text-center ${mode === "dark" ? "text-white" : "text-black"
          }`}
      >
        Contact Me
      </h1>

      {/* --- Subtitle --- */}
      <p
        className={`text-center max-w-xl text-base md:text-lg leading-relaxed mb-10 transition-all duration-500 ${mode === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
      >
        Have a project idea or want to collaborate? <br />
        Feel free to reach out — I’d love to work together!
      </p>

      {/* --- Image --- */}
      <div className="w-full flex justify-center mb-10">
        <img
          src="/assets/contact.png"
          alt="Contact illustration"
          className="w-64 md:w-80 rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* --- Social Links --- */}
      <div className="flex gap-8 mt-6">
        {/* GitHub */}
        <a
          href="https://github.com/ilyasdev01-creator"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-4xl transition-all duration-300 transform hover:scale-110 ${mode === "dark"
            ? "text-white hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#00bcd4]"
            : "text-[#212121] hover:text-[#00acc1] hover:drop-shadow-[0_0_8px_#00acc1]"
            }`}
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-4xl transition-all duration-300 transform hover:scale-110 ${mode === "dark"
            ? "text-white hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#00bcd4]"
            : "text-[#212121] hover:text-[#00acc1] hover:drop-shadow-[0_0_8px_#00acc1]"
            }`}
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;

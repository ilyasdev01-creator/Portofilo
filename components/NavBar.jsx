import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Moon, Sun, Code } from "lucide-react";
import ShopContext from '../contexts/context.jsx';

const Button = () => {
  const { mode, setMode } = useContext(ShopContext);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.style.backgroundColor = "#212121";
      document.body.style.backgroundColor = "#212121";
      document.body.style.color = "white";
    } else {
      document.documentElement.style.backgroundColor = "#f5f5f5";
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "#212121";
    }
  }, [mode]);

  return (
    <StyledWrapper mode={mode}>
      <nav className="navbar">
        {/* Left: Logo */}
        <div className="logo">
          <Code className="logo-icon" />
          <h1 className="logo-text">ILYAS</h1>
        </div>

        {/* Middle: Nav Buttons */}
        <div className="nav">
          <div className="container">
            <div onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="btn">About</div>
            <div onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} className="btn">Skills</div>
            <div onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="btn">Contact</div>
            <div onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="btn">Projects</div>
            <svg className="outline" overflow="visible" width={400} height={60} viewBox="0 0 400 60">
              <rect className="rect" pathLength={100} x={0} y={0} width={400} height={60} fill="transparent" strokeWidth={5} />
            </svg>
          </div>
        </div>

        {/* Right: Mode Toggle */}
        <div className="mode-toggle">
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className="toggle-btn"
          >
            {mode === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <span>{mode === "dark" ? "Dark" : "Light"}</span>
        </div>
      </nav>
    </StyledWrapper >
  );
};

const StyledWrapper = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .logo-icon {
    color: ${({ mode }) => (mode === "dark" ? "#00eaff" : "#0097a7")};
    width: 26px;
    height: 26px;
  }

  .logo-text {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ mode }) => (mode === "dark" ? "#ffffff" : "#212121")};
    font-family: 'Poppins', sans-serif;
  }

  .nav {
    position: relative;
    width: 400px;
    height: 60px;
    flex-shrink: 0;
  }

  .container {
    position: absolute;
    inset: 0;
    background: ${({ mode }) => (mode === "dark" ? "#2a2a2a" : "#ffffff")};
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 12px;
    box-shadow: ${({ mode }) =>
    mode === "dark" ? "0 0 10px #00eaff33" : "0 0 10px rgba(0, 150, 167, 0.2)"};
    border: ${({ mode }) =>
    mode === "dark" ? "none" : "1px solid rgba(0,0,0,0.05)"};
    padding: 0.5em;
    transition: 0.3s;
  }

  .btn {
    padding: 0.5em 1.3em;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.2s;
    color: ${({ mode }) => (mode === "dark" ? "#e0e0e0" : "#333")};

    &:hover {
      background: ${({ mode }) =>
    mode === "dark" ? "#00eaff22" : "rgba(0, 150, 167, 0.1)"};
      color: ${({ mode }) => (mode === "dark" ? "#fff" : "#0097a7")};
    }
  }

  .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .rect {
    stroke: ${({ mode }) => (mode === "dark" ? "#00eaff" : "#0097a7")};
    stroke-dashoffset: 5;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s;
  }

  /* Hover animation */
  .btn:nth-child(1):hover ~ svg .rect { stroke-dasharray: 0 2 8 73.3 8 10.7; }
  .btn:nth-child(2):hover ~ svg .rect { stroke-dasharray: 0 12.6 9.5 49.3 9.5 31.6; }
  .btn:nth-child(3):hover ~ svg .rect { stroke-dasharray: 0 24.5 8.5 27.5 8.5 55.5; }
  .btn:nth-child(4):hover ~ svg .rect { stroke-dasharray: 0 34.7 6.9 10.2 6.9 76; }

  .mode-toggle {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .toggle-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ mode }) => (mode === "dark" ? "#00eaff" : "#0097a7")};
    transition: 0.3s;
  }

  @media (max-width: 900px) {
    .navbar {
      justify-content: center;
    }

    .nav {
      width: 100%;
      height: auto;
    }

    .container {
      position: relative;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.7rem;
      padding: 0.75rem;
    }

    .btn {
      padding: 0.5em 1em;
      font-size: 0.95rem;
    }

    .outline {
      display: none;
    }
  }

  @media (max-width: 500px) {
    .logo-text {
      font-size: 1.2rem;
    }
    .btn {
      font-size: 0.9rem;
    }
  }
`;

export default Button;

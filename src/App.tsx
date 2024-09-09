import React, { useEffect, useState } from "react";
import About from "./about";
import Header from "./header";
import Hero from "./hero";
import Layout from "./layout";
import Projects from "./projects";
import Skills from "./skills";
import { FaSun, FaMoon } from "react-icons/fa";

const App: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(localStorage.getItem('theme') === 'light');

  // Apply the theme based on the toggle
  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className={`min-h-screen ${isLightMode ? 'light' : 'dark'}`}>
      {/* Header */}
      <Layout>
        <Header />
        {/* Theme toggle button */}
        <button 
          className="fixed top-4 right-4 p-2 bg-primary text-white rounded-full"
          onClick={toggleTheme}
        >
          {isLightMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
        </button>

        {/* Content */}
        <Hero />
        <About />
        <Skills />
        <Projects />
      </Layout>
    </div>
  );
};

export default App;

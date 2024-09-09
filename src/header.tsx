import React from "react";
import './Header.css'; // Import custom CSS file for animations


const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-purple-500">Portfolio</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="relative">
              <a href="#home" className="text-white hover:text-purple-500">Home</a>
              <div className="underline-animation"></div>
            </li>
            <li className="relative">
              <a href="#about" className="text-white hover:text-purple-500">About</a>
              <div className="underline-animation"></div>
            </li>
            <li className="relative">
              <a href="#skills" className="text-white hover:text-purple-500">Skills</a>
              <div className="underline-animation"></div>
            </li>
            <li className="relative">
              <a href="#projects" className="text-white hover:text-purple-500">Projects</a>
              <div className="underline-animation"></div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
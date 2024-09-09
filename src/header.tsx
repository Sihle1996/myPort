import React, { useState, useEffect } from "react";
import './Header.css'; // Import custom CSS file for animations



const Header: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a delay to showcase skeleton loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="bg-gray-900 p-6">
      <div className="container mx-auto flex justify-between items-center">
        {loading ? (
          <div className="animate-pulse h-8 bg-gray-700 rounded w-32"></div>
        ) : (
          <div className="text-xl font-bold text-purple-500">My Portfolio</div>
        )}
        <nav>
          <ul className="flex space-x-4">
            {loading ? (
              <>
                <li className="animate-pulse h-6 bg-gray-700 rounded w-16"></li>
                <li className="animate-pulse h-6 bg-gray-700 rounded w-16"></li>
                <li className="animate-pulse h-6 bg-gray-700 rounded w-16"></li>
                <li className="animate-pulse h-6 bg-gray-700 rounded w-16"></li>
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
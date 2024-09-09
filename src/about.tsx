import React from "react";


import './about.css'; // Import CSS file for animations
import { FaGithub, FaGraduationCap, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
    threshold: 0.1,     // Trigger when 10% of the element is in view
  });

  return (
    <section id="about" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row items-center md:items-start transition-transform duration-1000 ease-in-out ${inView ? 'animate-scale-fade-in' : 'transform -translate-y-20 opacity-0'}`}
        >
          <div className="md:w-1/4 mb-6 md:mb-0">
            <img
              src="/image.png" // Update this path
              alt="Sihle Mafokeng"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-300 mb-4">
              I am a Junior Full Stack Developer with a passion for creating dynamic and responsive web applications. With experience in both frontend and backend technologies, I enjoy solving complex problems and building seamless user experiences.
            </p>
            <ul className="text-lg text-gray-300 mb-4">
              <li className="mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-purple-500" /> City, Country
              </li>
              <li className="mb-2 flex items-center">
                <FaGraduationCap className="mr-2 text-purple-500" /> Degree/Institution
              </li>
              <li className="mb-2 flex items-center">
                <FaGithub className="mr-2 text-purple-500" /> <a href="https://github.com/Sihle1996" target="_blank" rel="noopener noreferrer">github.com/sihle1996</a>
              </li>
              <li className="mb-2 flex items-center">
                <FaLinkedin className="mr-2 text-purple-500" /> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
              </li>
              <li className="mb-2 flex items-center">
                <IoMdMail className="mr-2 text-purple-500" /> <a href="mailto:your-email@example.com">your-email@example.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
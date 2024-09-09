import React, { useState, useEffect, useRef } from "react";
import { FaAngular, FaBootstrap, FaFigma, FaGit, FaReact, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss } from 'react-icons/si';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Technologies data
const technologies = [
  { icon: <FaAngular />, title: 'Angular', description: 'A powerful framework for building web applications.', proficiency: 85 },
  { icon: <FaReact />, title: 'React', description: 'A JavaScript library for building user interfaces.', proficiency: 90 }, 
  { icon: <SiSpringboot />, title: 'Spring Boot', description: 'A framework that simplifies Java development.', proficiency: 80 },
  { icon: <FaBootstrap />, title: 'Bootstrap', description: 'A popular CSS framework for responsive design.', proficiency: 75 },
  { icon: <SiTailwindcss />, title: 'Tailwind CSS', description: 'A utility-first CSS framework for rapid UI development.', proficiency: 90 },
  { icon: <FaFigma />, title: 'Figma', description: 'A collaborative interface design tool.', proficiency: 70 },
  { icon: <FaGit />, title: 'Git', description: 'A version control system for tracking changes in source code.', proficiency: 85 },
  { icon: <FaDatabase />, title: 'PostgreSQL', description: 'A powerful, open-source object-relational database system.', proficiency: 80 },
];

const Skills: React.FC = () => {
  const [progress, setProgress] = useState<number[]>(Array(technologies.length).fill(0));
  const skillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          technologies.forEach((tech, index) => {
            let start = 0;
            const interval = setInterval(() => {
              if (start <= tech.proficiency) {
                setProgress((prev) => {
                  const newProgress = [...prev];
                  newProgress[index] = start;
                  return newProgress;
                });
                start++;
              } else {
                clearInterval(interval);
              }
            }, 10); 
          });
        }
      },
      { threshold: 0.5 } // Adjust this value based on when you want the animation to trigger
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="bg-gray-900 py-20" ref={skillsRef}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Technologies I Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center">
                <div className="text-purple-500 text-2xl mb-2">
                  {tech.icon}
                </div>
                <div style={{ width: 80, height: 80 }} className="mb-2">
                  <CircularProgressbar
                    value={progress[index]}
                    text={`${progress[index]}%`}
                    styles={buildStyles({
                      pathColor: `rgba(139, 92, 246, ${progress[index] / 100})`, // Purple color with varying opacity
                      textColor: '#fff',
                      trailColor: '#333',
                    })}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{tech.title}</h3>
                <p className="text-sm">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
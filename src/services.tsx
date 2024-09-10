import { useEffect, useState } from "react";
import { FaAngular, FaBootstrap, FaFigma, FaGit } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";
import './services.css';
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const technologies = [
  { icon: <FaAngular />, title: 'Angular', description: 'A powerful framework for building web applications.', proficiency: 85 },
  { icon: <SiSpringboot />, title: 'Spring Boot', description: 'A framework that simplifies Java development.', proficiency: 80 },
  { icon: <FaBootstrap />, title: 'Bootstrap', description: 'A popular CSS framework for responsive design.', proficiency: 75 },
  { icon: <SiTailwindcss />, title: 'Tailwind CSS', description: 'A utility-first CSS framework for rapid UI development.', proficiency: 90 },
  { icon: <FaFigma />, title: 'Figma', description: 'A collaborative interface design tool.', proficiency: 70 },
  { icon: <FaGit />, title: 'Git', description: 'A version control system for tracking changes in source code.', proficiency: 85 },
];

const Services: React.FC = () => {
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    const currentTimestamp = new Date().toLocaleString();
    setTimestamp(currentTimestamp); // Set timestamp when component loads
  }, []);

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">Technologies I Use</h2>
        <p className="text-gray-400 mb-10">Component loaded at: {timestamp}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center">
                <div className="text-purple-500 text-3xl mb-4">
                  {tech.icon}
                </div>
                <div style={{ width: 80, height: 80 }} className="mb-2">
                  <AnimatedProgressBar proficiency={tech.proficiency} />
                </div>
                <h3 className="text-xl font-semibold text-white">{tech.title}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedProgressBar: React.FC<{ proficiency: number }> = ({ proficiency }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = proficiency;
    const duration = 2000; // Duration in milliseconds
    const stepTime = 20; // Update interval in milliseconds

    const step = (_timestamp: number) => {
      start += (end - start) / (duration / stepTime);
      setValue(Math.min(start, end));
      if (start < end) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [proficiency]);

  return (
    <CircularProgressbar
      value={value}
      text={`${Math.round(value)}%`}
      styles={buildStyles({
        pathColor: `rgba(150, 100, 255, ${value / 100})`,
        textColor: 'white',
        trailColor: '#f4f4f4',
      })}
    />
  );
};

export default Services;

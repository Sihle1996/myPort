import React from "react";
import useVisibility from "./useVisibility";
import { Typewriter } from "react-simple-typewriter";


const Hero: React.FC = () => {
  const [ref, isVisible] = useVisibility();

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div ref={ref} className={`md:w-1/2 slide-fade-in ${isVisible ? 'visible' : ''}`}>
          <h1 className="text-5xl font-bold mb-4">
            <span style={{ color: 'white' }}>
              Hello, I'm{' '}
              <span style={{ color: 'purple' }}>
                <Typewriter
                  words={['Sihle Mofokeng']}
                  loop={1} // No looping
                  typeSpeed={50}
                  deleteSpeed={0}
                  cursor
                  cursorStyle="|"
                />
              </span>
            </span>
          </h1>
          <p className="text-lg mb-6">
            <Typewriter
              words={[
                'A Professional Web Designer.',
                'An Imaginative Developer.',
                'A Creative Problem Solver.',
              ]}
              loop={0} // Infinite looping
              typeSpeed={50}
              deleteSpeed={30}
              cursor
              cursorStyle="|"
            />
          </p>
          <a
            href="#"
            className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded"
          >
            Download CV
          </a>
        </div>
        <div className="md:w-1/5">
          <img
            src="/image.png"
            alt="Sihle Mofokeng"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
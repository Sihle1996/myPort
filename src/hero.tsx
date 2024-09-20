import { Typewriter } from "react-simple-typewriter";
import useVisibility from "./useVisibility";

const Hero: React.FC = () => {
  const [ref, isVisible] = useVisibility();

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div ref={ref} className={`md:w-1/2 slide-fade-in ${isVisible ? 'visible' : ''}`}>
          <h1 className="text-5xl font-bold mb-4">
            Hello, I'm <span className="text-purple-500">Sihle Mofokeng</span>
          </h1>
          <p className="text-lg mb-6">
            <Typewriter
              words={[
                'A Professional Web Designer.',
                'An Imaginative Developer.',
                'A Creative Problem Solver.',
              ]}
              loop={0}
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
        <div className="mt-8 md:mt-0 md:w-1/3 lg:w-1/4">
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
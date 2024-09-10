import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import './github.css';
import './projects.css';
import GitHubCalendar from "react-github-calendar";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
}

const projectImages: { [key: string]: string } = {
  'project-one': '/images/image_copy.png',
  'project-two': '/images/image_copy.png',
  'project-three': '/images/image3.jpg',
  'project-four': '/images/image4.jpg',
  'project-five': '/images/image5.jpg',
  'project-six': '/images/image6.jpg',
};

// Hardcoded projects array
const hardcodedProjects: GitHubRepo[] = [
  {
    id: 1,
    name: "project-one",
    description: "Description for project one",
    html_url: "https://github.com/sihle1996/project-one",
    homepage: "https://project-one.com",
  },
  {
    id: 2,
    name: "project-two",
    description: "Description for project two",
    html_url: "https://github.com/sihle1996/project-two",
    homepage: "https://project-two.com",
  },
  {
    id: 3,
    name: "project-three",
    description: "Description for project three",
    html_url: "https://github.com/sihle1996/project-three",
    homepage: "https://project-three.com",
  },
  {
    id: 4,
    name: "project-four",
    description: "Description for project four",
    html_url: "https://github.com/sihle1996/project-four",
    homepage: null, // No homepage for this project
  },
  {
    id: 5,
    name: "project-five",
    description: "Description for project five",
    html_url: "https://github.com/sihle1996/project-five",
    homepage: "https://project-five.com",
  },
  {
    id: 6,
    name: "project-six",
    description: "Description for project six",
    html_url: "https://github.com/sihle1996/project-six",
    homepage: null,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hardcodedProjects.map((repo) => (
            <div key={repo.id} className="bg-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img 
                src={projectImages[repo.name] || '/image_copy.png'} 
                alt={repo.name} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-xl font-semibold text-white mb-2">{repo.name}</h3>
              <p className="text-gray-400 mb-4">{repo.description}</p>
              <div className="flex justify-between">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-700 flex items-center">
                  <FaGithub className="mr-2" /> GitHub
                </a>
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-700 flex items-center">
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Contributions Section */}
        <div className="github-calendar mt-20 flex justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-10 text-white">GitHub Contributions</h2>
            <GitHubCalendar
              username="sihle1996"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

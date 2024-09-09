import About from "./about";
import Header from "./header";
import Hero from "./hero";
import Layout from "./layout";
import Projects from "./projects";
import Skills from "./skills";



const App: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
};

export default App;

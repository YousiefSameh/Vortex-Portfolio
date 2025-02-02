import Hero from "@components/portfolio/Hero";
import Contact from "@components/portfolio/Contact";
import Projects from "@components/portfolio/Projects";
import Services from "@components/portfolio/Services";
import About from "../components/portfolio/About";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;

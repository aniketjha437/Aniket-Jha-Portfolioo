import Hero from "../components/Hero";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Skill from "./Skill";

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
};

export default Home;

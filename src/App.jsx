import Hero from "./sections/Hero";
import Education from "./sections/Educations";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import GraphicDesign from "./sections/GraphicDesign";
import CreativeDivider from "./sections/CreativeDivider";
import Photography from "./sections/Photography";
import ParticlesBackground from "./ParticlesBackground";

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <ParticlesBackground />

      <div className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <CreativeDivider />
        <GraphicDesign />
        <Photography />
        
        {/* more sections */}
      </div>
    </div>
  );
}

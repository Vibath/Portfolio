import Hero from "./sections/Hero";
import Education from "./sections/Educations";
import Experience from "./sections/Experience";
import ParticlesBackground from "./ParticlesBackground";

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <ParticlesBackground />

      <div className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        {/* more sections */}
      </div>
    </div>
  );
}

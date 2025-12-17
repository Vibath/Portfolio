import Hero from "./sections/Hero";
import Education from "./sections/Educations";
import ParticlesBackground from "./ParticlesBackground";

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <ParticlesBackground />

      <div className="relative z-10">
        <Hero />
        <Education />
        {/* more sections */}
      </div>
    </div>
  );
}

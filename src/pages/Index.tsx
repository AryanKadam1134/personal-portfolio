import { Navbar } from "../components/Navbar";

import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/projects/Projects";
import { Educations } from "../components/Educations";
import { Experiences } from "../components/experiences/Experiences";
import { Certificates } from "../components/Certificates";
import { Achievements } from "../components/Achievements";

import { Particles } from "../components/ui/Particles";

export const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#121212] overflow-hidden">
      <div className="fixed inset-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className="relative z-10 overflow-hidden">
        <Navbar />

        <div className="px-6 mx-auto max-w-320">
          <About />

          <Projects />

          <Experiences />

          <Skills />

          <Certificates />

          <Achievements />

          <Educations />
        </div>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";

import { Navbar } from "../components/Navbar";

import { About } from "../components/About";
import { Skills } from "../components/skills/Skills";
import { Projects } from "../components/projects/Projects";
import { Educations } from "../components/educations/Educations";
import { Experiences } from "../components/experiences/Experiences";
import { Certificates } from "../components/certificates/Certificates";
import { Achievements } from "../components/achievements/Achievements";

import { Particles } from "../components/ui/Particles";

export const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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

      {loading && (
        <div className="fixed inset-0 z-50 h-screen w-full flex items-center justify-center text-white">
          . . . LOADING
        </div>
      )}

      <div
        className={`relative z-10 ${loading ? "opacity-0" : "opacity-100"} overflow-hidden transition-opacity duration-300`}
      >
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

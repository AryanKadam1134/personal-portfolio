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

import { cn } from "../utils/cn";

export const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#121212]">
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
        <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center text-white">
          . . . LOADING
        </div>
      )}

      <div
        className={cn(
          "relative z-10 overflow-hidden",
          "transition-opacity duration-300",
          loading ? "opacity-0" : "opacity-100",
        )}
      >
        <Navbar />

        <div className="mx-auto max-w-320 px-6">
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

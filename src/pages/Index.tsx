import { Navbar } from "../components/Navbar";

import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Educations } from "../components/Educations";
import { Experiences } from "../components/Experiences";
import { Certificates } from "../components/Certificates";
import { Achievements } from "../components/Achievements";

export const Index = () => {
  return (
    <div className="min-h-screen bg-[#09090f]">
      <Navbar />

      <About />

      <Projects />

      <Experiences />

      <Skills />

      <Certificates />

      <Achievements />

      <Educations />
    </div>
  );
};

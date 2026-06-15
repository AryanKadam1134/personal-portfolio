import { useState } from "react";

export const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("#about");

  return (
    <div className="fixed top-0 left-0 z-50 w-full backdrop-blur-md border-b border-white/10">
      <div className="mx-6 md:mx-30">
        <div className="h-16 flex items-center justify-between">
          <a href="#about" className="font-semibold text-2xl text-white">
            AK
          </a>

          {/* Nav Items */}
          <div className="flex items-center gap-6">
            {[
              { name: "About", hash: "#about" },
              { name: "Projects", hash: "#projects" },
              { name: "Experiences", hash: "#experiences" },
              { name: "Skills", hash: "#skills" },
              { name: "Certificates", hash: "#certificates" },
              { name: "Achievements", hash: "#acheivements" },
              { name: "Educations", hash: "#educations" },
            ].map(({ name, hash }, idx) => {
              const isCurrent = hash === currentSection;

              return (
                <a
                  href={hash}
                  onClick={() => setCurrentSection(hash)}
                  key={name || idx}
                  className={`${isCurrent ? "font-medium text-white" : "text-white/80"} text-sm`}
                >
                  {name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

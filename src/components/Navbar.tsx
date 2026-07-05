import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

import { apiEndpoints } from "../services/api";

import type { Summary } from "../types/types";

type NavButtonProps = React.ComponentProps<"a"> & {
  name: string;
  isCurrent: boolean;
};

const NavButton = ({ name, isCurrent, ...props }: NavButtonProps) => {
  return (
    <a
      {...props}
      className={`${isCurrent ? "font-medium text-white" : "text-white/80"} text-sm`}
    >
      {name}
    </a>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("#about");

  const [summary, setSummary] = useState<Summary | null>(null);

  const NAV_ITEMS = [
    { name: "About", hash: "#about", count: true },
    { name: "Projects", hash: "#projects", count: summary?.projects },
    { name: "Experiences", hash: "#experiences", count: summary?.experiences },
    { name: "Skills", hash: "#skills", count: summary?.skillCategories },
    {
      name: "Certificates",
      hash: "#certificates",
      count: summary?.certificates,
    },
    {
      name: "Achievements",
      hash: "#acheivements",
      count: summary?.achievements,
    },
    { name: "Educations", hash: "#educations", count: summary?.educations },
  ];

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await apiEndpoints.getSummary();

        setSummary(res.data);
      } catch (error) {
        console.error("Error fetching Summary: ", error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <>
      {/* BACKDROP (mobile only) */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`md:hidden fixed inset-0 z-40 bg-black/30 transition-opacity duration-300
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Side Menu (mobile only) */}
      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-[260px] bg-black text-white
        transform transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        shadow-lg`}
      >
        {/* Top Bar */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-white/10">
          <span className="text-sm font-medium">Menu</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Links (same spacing style as your dropdown) */}
        <div className="p-6 flex flex-col gap-6 text-sm">
          {NAV_ITEMS.map(({ name, hash, count }, idx) => {
            if (!count) return;

            return (
              <NavButton
                key={name || idx}
                href={hash}
                isCurrent={hash === currentSection}
                onClick={() => {
                  setCurrentSection(hash);
                  setIsMenuOpen(false);
                }}
                name={name}
              />
            );
          })}
        </div>
      </div>

      {/* Nav Menu (desktop only) */}
      <div className="fixed top-0 left-0 z-10 w-full backdrop-blur-md border-b border-white/10">
        <div className="px-6 mx-auto max-w-320">
          <div className="h-16 flex items-center justify-between">
            <a href="#about" className="font-semibold text-2xl text-white">
              AK
            </a>

            {/* Nav Items (Desktop Only) */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map(({ name, hash, count }, idx) => {
                if (!count) return;

                return (
                  <NavButton
                    key={name || idx}
                    href={hash}
                    isCurrent={hash === currentSection}
                    onClick={() => setCurrentSection(hash)}
                    name={name}
                  />
                );
              })}
            </div>

            {/* Nav Items (Mobile Only) */}
            <div className="block md:hidden">
              <Menu
                onClick={() => setIsMenuOpen(true)}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

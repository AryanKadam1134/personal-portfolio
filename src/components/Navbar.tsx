import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

import { cn } from "../utils/cn";

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
      className={cn(
        "text-sm",
        isCurrent ? "font-medium text-white" : "text-white/80",
      )}
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
    {
      name: "About",
      hash: "#about",
      count: true,
    },
    {
      name: "Projects",
      hash: "#projects",
      count: summary?.projects,
    },
    {
      name: "Experiences",
      hash: "#experiences",
      count: summary?.experiences,
    },
    {
      name: "Skills",
      hash: "#skills",
      count: summary?.skillCategories,
    },
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
    {
      name: "Educations",
      hash: "#educations",
      count: summary?.educations,
    },
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
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "bg-black/30 transition-opacity duration-300",
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      />

      {/* Side Menu (mobile only) */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[260px] md:hidden",
          "transform bg-black text-white shadow-lg transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
          <span className="text-sm font-medium">Menu</span>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Links (same spacing style as your dropdown) */}
        <div className="flex flex-col gap-6 p-6 text-sm">
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
      <div className="fixed top-0 left-0 z-10 w-full border-b border-white/10 backdrop-blur-md">
        <div className="mx-auto max-w-320 px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="#about" className="text-2xl font-semibold text-white">
              AK
            </a>

            {/* Nav Items (Desktop Only) */}
            <div className="hidden items-center gap-6 md:flex">
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

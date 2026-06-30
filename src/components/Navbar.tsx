import { useState } from "react";

import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Experiences", hash: "#experiences" },
  { name: "Skills", hash: "#skills" },
  { name: "Certificates", hash: "#certificates" },
  { name: "Achievements", hash: "#acheivements" },
  { name: "Educations", hash: "#educations" },
];

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
          {NAV_ITEMS.map(({ name, hash }, idx) => (
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
          ))}
        </div>
      </div>

      {/* NAv Menu (desktop only) */}
      <div className="fixed top-0 left-0 z-10 w-full backdrop-blur-md border-b border-white/10">
        <div className="px-6 mx-auto max-w-320">
          <div className="h-16 flex items-center justify-between">
            <a href="#about" className="font-semibold text-2xl text-white">
              AK
            </a>

            {/* Nav Items (Desktop Only) */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map(({ name, hash }, idx) => (
                <NavButton
                  key={name || idx}
                  href={hash}
                  isCurrent={hash === currentSection}
                  onClick={() => setCurrentSection(hash)}
                  name={name}
                />
              ))}
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

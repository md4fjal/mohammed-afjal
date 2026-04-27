"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Skills",
  "Experience",
  "Education",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const offset = 80;
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(element, { offset: -offset });
      } else {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-4 ${
        scrolled ? "translate-y-0" : "translate-y-0"
      }`}
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-500 rounded-full px-6 py-2 ${
          scrolled
            ? "glass-dark border-white/10 shadow-2xl shadow-black/50"
            : "bg-transparent border-transparent"
        } border`}
      >
        <div className="flex items-center justify-between h-12">
          <div className="flex-shrink-0">
            <h1
              className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => scrollToSection("Home")}
            >
              AFJAL<span className="text-primary">.</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-full hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-muted-foreground hover:text-foreground glass rounded-full"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 glass-dark rounded-3xl p-6 border border-white/10 animate-in fade-in zoom-in duration-300">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

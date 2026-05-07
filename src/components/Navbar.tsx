"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ThemeToggle } from "./ThemeToggle";

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
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, [isOpen]);

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
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-6 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-500 rounded-[2rem] px-6 py-2 ${
          scrolled
            ? "bg-card/70 backdrop-blur-xl border-border shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-transparent"
        } border`}
      >
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <h1
              className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity cursor-pointer group"
              onClick={() => scrollToSection("Home")}
            >
              AFJAL<span className="text-primary group-hover:animate-pulse">.</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-5 py-2.5 text-sm font-bold text-muted-foreground hover:text-foreground transition-all rounded-full hover:bg-white/5 active:scale-95"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => scrollToSection("Contact")}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all active:scale-95"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-foreground bg-secondary/50 backdrop-blur-md rounded-2xl hover:bg-secondary active:scale-90 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            ref={mobileMenuRef}
            className="lg:hidden absolute top-24 left-4 right-4 glass-dark rounded-[2.5rem] p-8 border border-border shadow-2xl z-50 overflow-hidden"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-2xl font-bold text-muted-foreground hover:text-primary transition-all duration-300 transform hover:translate-x-2"
                >
                  <span className="text-primary/20 mr-4 font-mono text-sm">0{i + 1}</span>
                  {item}
                </button>
              ))}
              <div className="pt-6 border-t border-border">
                <button 
                  onClick={() => scrollToSection("Contact")}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg"
                >
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

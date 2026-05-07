"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sparkles, ChevronRight, MousePointer2 } from "lucide-react";
import Stats from "@/components/Stats";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Set initial states
      gsap.set([textRef.current, subtextRef.current, buttonRef.current, statsRef.current], {
        opacity: 0,
        y: 50,
      });

      tl.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
      })
        .to(
          subtextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );

      // Parallax effect on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(".hero-parallax", {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Float animation for background blobs
      gsap.to(".blob", {
        y: "random(-40, 40)",
        x: "random(-40, 40)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 lg:py-32"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="blob absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="blob absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="blob absolute top-1/2 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]" />
      </div>

      <div ref={containerRef} className="section-container text-center z-10 hero-parallax">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 border-white/10 hover:border-primary/50 transition-colors cursor-default">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-primary tracking-wide">
            AVAILABLE FOR NEW PROJECTS
          </span>
        </div>

        <div className="overflow-hidden mb-6">
          <h1
            ref={textRef}
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-[1.1]"
          >
            Crafting Digital <br />
            <span className="text-gradient">Experiences</span>
          </h1>
        </div>

        <p
          ref={subtextRef}
          className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          I'm <span className="text-foreground font-semibold">Afjal</span>, a Full Stack Developer
          dedicated to building high-performance, beautiful, and user-centric web applications 
          that leave a lasting impression.
        </p>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-24"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all flex items-center justify-center gap-2 overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-8 py-4 glass text-foreground rounded-full font-semibold hover:bg-white/10 transition-all border border-white/10"
          >
            Let's Talk
          </button>
        </div>

        <div ref={statsRef} className="pt-8 border-t border-white/5">
          <Stats />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium">
          Scroll Down
        </span>
      </div>
    </section>
  );
}

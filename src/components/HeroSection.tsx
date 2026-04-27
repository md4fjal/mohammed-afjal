"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sparkles, ArrowDown, ChevronRight } from "lucide-react";
import Stats from "@/components/Stats";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 100, skewY: 7 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.2,
          ease: "power4.out",
        },
      )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4",
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4",
        );

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="blob absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
        <div className="blob absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="section-container text-center z-10">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Open for opportunities
          </span>
        </div>

        <div className="overflow-hidden">
          <h1
            ref={textRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            Hi, I'm <span className="text-gradient">Afjal</span>
          </h1>
        </div>

        <p
          ref={subtextRef}
          className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          A Full Stack Developer dedicated to building
          <span className="text-foreground"> high-performance</span>,
          <span className="text-foreground"> beautiful</span>, and
          <span className="text-foreground"> user-centric</span> web
          applications.
        </p>

        <div
          ref={buttonRef}
          className="flex gap-4 justify-center flex-wrap mb-12 md:mb-24"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all flex items-center gap-2"
          >
            View Projects
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 glass text-foreground rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            Get in touch
          </button>
        </div>

        <div ref={statsRef}>
          <Stats />
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-widest font-medium">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

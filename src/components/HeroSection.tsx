"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles, ChevronRight } from "lucide-react";
import Stats from "@/components/Stats";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Split text animation for a more premium feel
      const titleLines = textRef.current?.querySelectorAll(".title-line");
      
      gsap.set([subtextRef.current, buttonRef.current, statsRef.current], {
        opacity: 0,
        y: 30,
      });

      if (titleLines) {
        gsap.set(titleLines, { y: 100, opacity: 0 });
        tl.to(titleLines, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "expo.out",
        });
      }

      tl.to(
        subtextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8"
      )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );

      // Float animation for background blobs with more complex movement
      gsap.to(".blob-1", {
        x: "20%",
        y: "10%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".blob-2", {
        x: "-15%",
        y: "-20%",
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".blob-3", {
        x: "10%",
        y: "-15%",
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Parallax effect on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        setMousePos({ x: clientX, y: clientY });

        gsap.to(".hero-parallax", {
          x: xPos,
          y: yPos,
          duration: 1.5,
          ease: "power2.out",
        });

        // Spotlight movement
        if (spotlightRef.current) {
          gsap.to(spotlightRef.current, {
            left: clientX,
            top: clientY,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: heroRef }
  );

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 lg:py-32 bg-background"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Animated Blobs */}
        <div className="blob-1 absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="blob-2 absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[140px] mix-blend-screen" />
        <div className="blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
        
        {/* Interactive Spotlight */}
        <div 
          ref={spotlightRef}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-50"
        />
      </div>

      <div
        ref={containerRef}
        className="section-container text-center z-10 hero-parallax"
      >
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-10 border-border/50 hover:border-primary/50 transition-all duration-500 cursor-default group">
          <div className="relative">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <div className="absolute inset-0 text-primary blur-sm animate-pulse opacity-50">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <span className="text-xs md:text-sm font-semibold text-primary tracking-[0.2em] uppercase">
            Available for New Projects
          </span>
        </div>

        <div className="mb-8">
          <h1
            ref={textRef}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] flex flex-col items-center"
          >
            <span className="title-line block overflow-hidden py-2">
              Crafting Digital
            </span>
            <span className="title-line block text-gradient overflow-hidden py-2">
              Experiences
            </span>
          </h1>
        </div>

        <p
          ref={subtextRef}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed px-4 font-medium"
        >
          Building high-performance, <span className="text-foreground border-b-2 border-primary/30">user-centric</span> web applications with modern technologies and exceptional design.
        </p>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(var(--primary),0.2)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore My Work
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </button>

          <button 
            onClick={() => scrollToSection("contact")}
            className="group px-10 py-5 glass-dark text-foreground rounded-full font-bold text-lg border border-border/50 hover:border-primary/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            Let's Talk
            <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
          </button>
        </div>

        <div ref={statsRef} className="pt-12 border-t border-border/30">
          <Stats />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group hover:bottom-8 transition-all duration-300"
           onClick={() => scrollToSection("projects")}>
        <div className="relative w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground group-hover:text-primary transition-colors">
          Scroll
        </span>
      </div>
    </section>
  );
}


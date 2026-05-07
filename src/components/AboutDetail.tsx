"use client";

import { useRef } from "react";
import { User, Code, Globe, Palette, Cpu, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutDetail() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".about-item", {
      scrollTrigger: {
        trigger: ".about-item",
        start: "top bottom",
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <div id="about" ref={containerRef} className="scroll-mt-24 py-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-10 order-2 lg:order-1">
          <div className="about-item">
            <h2 className="text-center md:text-left text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Engineering <br />
              <span className="text-gradient">Digital Excellence</span>
            </h2>
            <p className="text-center md:text-left text-lg md:text-xl text-muted-foreground leading-relaxed">
              I am a passionate Full Stack Developer dedicated to crafting 
              elegant solutions to complex problems. With a focus on 
              <span className="text-foreground font-semibold"> performance</span>, 
              <span className="text-foreground font-semibold"> scalability</span>, and 
              <span className="text-foreground font-semibold"> user experience</span>, 
              I build applications that make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 about-item">
            <div className="group p-8 glass-dark rounded-3xl border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Clean Code</h4>
              <p className="text-muted-foreground leading-relaxed">
                Adhering to best practices for maintainable and efficient architectures.
              </p>
            </div>
            <div className="group p-8 glass-dark rounded-3xl border border-border hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                <Palette className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Modern UI</h4>
              <p className="text-muted-foreground leading-relaxed">
                Designing intuitive interfaces that engage and delight users.
              </p>
            </div>
          </div>

          <p className="about-item text-center md:text-left text-lg text-muted-foreground leading-relaxed">
            My journey is driven by a relentless curiosity and a commitment to 
            mastering the ever-evolving modern tech stack. I thrive on 
            challenges and constant improvement.
          </p>
        </div>

        <div className="relative order-1 lg:order-2 about-item">
          <div className="aspect-square glass-dark rounded-[3rem] border border-border overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-purple-500/30 group-hover:opacity-100 transition-opacity duration-1000 opacity-60" />
            
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="grid grid-cols-4 gap-4 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-white/20 rounded-xl flex items-center justify-center"
                  >
                    {i % 3 === 0 && (
                      <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-white/10 border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-[2rem] border border-border backdrop-blur-2xl shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-700">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
                  A
                </div>
                <div>
                  <h4 className="text-xl font-bold tracking-tight">Mohammed Afjal</h4>
                  <p className="text-sm text-primary font-medium tracking-wide">
                    Full Stack Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative badges */}
          <div className="absolute -top-8 -right-8 p-5 glass rounded-[1.5rem] border border-border shadow-2xl animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-green-500/20 rounded-xl">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              </div>
              <span className="text-sm font-bold tracking-wide">
                ACTIVE NOW
              </span>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 p-4 glass rounded-[1.25rem] border border-border shadow-2xl animate-float delay-1000">
            <Globe className="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

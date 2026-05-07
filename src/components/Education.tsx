"use client";

import { useRef } from "react";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const educationData = [
  {
    degree: "Master of Computer Application (MCA)",
    school: "Jaipur National University",
    period: "2022 - 2024",
    result: "CGPA: 8.8",
    description: "Specialized in Full Stack Web Development and Distributed Systems. Core focus on modern architectures and cloud computing.",
    color: "primary",
  },
  {
    degree: "Bachelor of Science (BSc)",
    school: "LBS Collage Jaipur",
    period: "2019 - 2022",
    result: "65%",
    description: "Foundation in Computer Science, Mathematics, and Physics. Developed strong analytical and problem-solving skills.",
    color: "purple-400",
  },
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Small delay to ensure everything is settled
    const timeout = setTimeout(() => {
      gsap.fromTo(".edu-card", 
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
          clearProps: "transform,opacity",
        }
      );
    }, 100);

    return () => clearTimeout(timeout);
  }, { scope: containerRef });

  return (
    <div id="education" ref={containerRef} className="scroll-mt-24 py-12">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-4xl md:text-6xl font-bold mb-6">
          Academic <span className="text-gradient">Foundation</span>
        </h2>
        <p className="text-center md:text-left text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          The educational journey that shaped my perspective and provided the 
          technical grounding for my career in software engineering.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((item, idx) => (
          <div
            key={idx}
            className="edu-card group p-10 glass-dark rounded-[2.5rem] border border-border hover:border-primary/30 transition-all duration-700 hover:shadow-2xl flex flex-col h-full"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="p-4 glass rounded-2xl text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 glass rounded-full border border-border text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                {item.period}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                {item.degree}
              </h3>
              <p className="text-primary/80 font-bold tracking-tight">
                {item.school}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                {item.description}
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-black">Performance</p>
                  <p className="text-sm font-bold text-foreground">{item.result}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <BookOpen className="w-4 h-4" />
                <span>Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

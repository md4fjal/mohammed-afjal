"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Briefcase,
  Code2,
  Rocket,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".exp-card");
      
      cards.forEach((card: any, i: number) => {
        const isEven = i % 2 === 0;
        
        // Setup a master timeline for each card
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // 1. Reveal the card with a dynamic slide & blur
        tl.fromTo(
          card,
          {
            opacity: 0,
            x: isEven ? -50 : 50,
            y: 30,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          }
        );

        // Child elements selection
        const icon = card.querySelector(".exp-icon");
        const header = card.querySelector(".exp-header");
        const listItems = card.querySelectorAll(".exp-list-item");
        const skills = card.querySelectorAll(".exp-skill");
        const dateBadge = card.querySelector(".exp-date");

        // 2. Animate icon pop-in
        if (icon) {
          tl.fromTo(
            icon,
            { scale: 0.5, opacity: 0, rotate: -45 },
            { scale: 1, opacity: 1, rotate: 0, duration: 0.5, ease: "back.out(1.5)" },
            "-=0.5"
          );
        }

        // 3. Slide in header & date
        if (header) {
          tl.fromTo(
            header,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.4 },
            "-=0.4"
          );
        }
        if (dateBadge) {
          tl.fromTo(
            dateBadge,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.2)" },
            "-=0.4"
          );
        }

        // 4. Stagger bullet points
        if (listItems.length) {
          tl.fromTo(
            listItems,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.15 },
            "-=0.2"
          );
        }

        // 5. Stagger skill tags
        if (skills.length) {
          tl.fromTo(
            skills,
            { opacity: 0, scale: 0.8, y: 10 },
            { opacity: 1, scale: 1, y: 0, duration: 0.3, stagger: 0.08, ease: "back.out(1.5)" },
            "-=0.1"
          );
        }
      });

      // Animate the main vertical timeline line
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );

      // Animate the traveling glow dot along the line
      gsap.fromTo(
        ".progress-dot",
        { top: "0%" },
        {
          top: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );
    },
    { scope: containerRef }
  );

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Zectagon Technology",
      period: "Dec 2023 - Present",
      description: [
        "Led a team of 5 Engineers to develop a scalable e-commerce platform using React and Node.js.",
        "Modernized legacy codebase using Next.js, resulting in 40% faster page loads and improved SEO.",
      ],
      icon: <Briefcase className="w-6 h-6" />,
      skills: ["Next.js", "Node.js", "PostgreSQL", "Team Leadership"],
    },
    {
      role: "Frontend Engineer",
      company: "Digital Solutions Inc.",
      period: "Jan 2022 - Nov 2023",
      description: [
        "Designed and implemented over 20+ responsive web components using Tailwind CSS and Framer Motion.",
        "Optimized application performance reducing First Contentful Paint by 0.5s through image optimization.",
      ],
      icon: <Rocket className="w-6 h-6" />,
      skills: ["React", "Tailwind CSS", "Framer Motion", "Web Vitals"],
    },
    {
      role: "Junior Web Developer",
      company: "StartUp Hub",
      period: "June 2021 - Dec 2021",
      description: [
        "Assisted in the migration of data from MySQL to MongoDB for improved performance and flexibility.",
        "Collaborated with senior developers to fix 50+ critical bugs across the platform during sprint cycles.",
      ],
      icon: <Code2 className="w-6 h-6" />,
      skills: ["JavaScript", "MongoDB", "Express.js", "Git"],
    },
  ];

  return (
    <div id="experience" ref={containerRef} className="scroll-mt-24 py-16 md:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mb-20 max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-center md:text-left text-4xl md:text-6xl font-bold mb-6">
          Work <span className="text-gradient">Journey</span>
        </h2>
        <p className="text-center md:text-left text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          A timeline of my professional growth, featuring impactful projects and
          contributions to the tech ecosystem.
        </p>
      </div>

      <div className="timeline-container relative max-w-7xl mx-auto px-6 space-y-16 md:space-y-32">
        {/* The Static Line */}
        <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2" />
        
        {/* The Animated Line */}
        <div className="timeline-line absolute left-[38px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-blue-500 origin-top -translate-x-1/2 z-10" />

        {/* Traveling Dot (Visible primarily on md+ or adjusted for mobile) */}
        <div 
          className="progress-dot absolute left-[38px] md:left-1/2 w-5 h-5 rounded-full bg-background border-[3px] border-primary -translate-x-1/2 z-30 shadow-[0_0_20px_rgba(var(--primary),1)]" 
          style={{ top: "0%" }}
        >
          <div className="absolute inset-[3px] rounded-full bg-primary animate-pulse" />
        </div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`exp-card relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
          >
            {/* Static Node Dot on the timeline */}
            <div className="absolute left-[38px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary -translate-x-1/2 z-20 group-hover:scale-150 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]" />

            {/* Content Card */}
            <div className="w-[calc(100%-60px)] md:w-[calc(50%-4rem)] ml-auto md:ml-0 p-6 md:p-10 glass-dark rounded-[2rem] border border-border hover:border-primary/40 transition-all duration-700 hover:shadow-[0_0_40px_-15px_rgba(var(--primary),0.2)] relative overflow-hidden bg-background/40 backdrop-blur-md">
              
              {/* Subtle hover gradient inside card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[60px] group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />
              
              <div className="flex flex-col gap-6 relative z-10">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-5">
                    <div className="exp-icon p-4 glass rounded-2xl text-primary group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <div className="relative z-10">{exp.icon}</div>
                    </div>
                    <div className="exp-header">
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-bold tracking-wider uppercase text-xs md:text-sm mt-1 opacity-90">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <span className="exp-date self-start md:self-auto px-4 py-1.5 text-[11px] md:text-xs font-bold glass rounded-full border border-white/10 text-muted-foreground whitespace-nowrap shadow-sm">
                    {exp.period}
                  </span>
                </div>

                {/* Description List */}
                <ul className="space-y-3 mt-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="exp-list-item flex items-start gap-3 md:gap-4 text-muted-foreground text-sm md:text-base leading-relaxed group-hover:text-foreground/90 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(var(--primary),0.8)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Row */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="exp-skill px-3 py-1 text-[10px] md:text-xs font-semibold uppercase tracking-wider glass rounded-lg border border-border text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 hover:bg-primary/10 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


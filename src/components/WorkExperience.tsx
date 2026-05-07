"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Briefcase,
  Users,
  Database,
  Code2,
  Rocket,
  Circle,
  Layout,
  Zap,
} from "lucide-react";

export default function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeout = setTimeout(() => {
      const cards = gsap.utils.toArray(".exp-card");
      cards.forEach((card: any, i: number) => {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            x: i % 2 === 0 ? -50 : 50,
            filter: "blur(10px)"
          },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              toggleActions: "play none none reverse",
            },
            clearProps: "all"
          }
        );
      });

      // Animate the timeline line
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }, 100);

    return () => clearTimeout(timeout);
  }, { scope: containerRef });

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
    <div id="experience" ref={containerRef} className="scroll-mt-24 py-12">
      <div className="mb-20">
        <h2 className="text-center md:text-left text-4xl md:text-6xl font-bold mb-6">
          Work <span className="text-gradient">Journey</span>
        </h2>
        <p className="text-center md:text-left text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          A timeline of my professional growth, featuring impactful projects 
          and contributions to the tech ecosystem.
        </p>
      </div>

      <div className="timeline-container relative space-y-12 md:space-y-32">
        {/* The Animated Line */}
        <div className="timeline-line absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-blue-500 origin-top hidden md:block" />
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 hidden md:block" />

        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`exp-card relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
          >
            {/* Timeline dot */}
            <div className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 z-20 group-hover:scale-150 group-hover:bg-primary transition-all duration-500 shadow-[0_0_15px_rgba(var(--primary),0.5)]" />

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] ml-auto md:ml-0 p-10 glass-dark rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-5">
                    <div className="p-4 glass rounded-2xl text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold tracking-wide uppercase text-xs mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 text-xs font-bold glass rounded-full border border-white/10 text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-[10px] font-black uppercase tracking-tighter glass rounded-lg border border-white/5 text-muted-foreground group-hover:text-primary transition-colors"
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

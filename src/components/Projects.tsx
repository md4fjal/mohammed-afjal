"use client";

import { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Zap,
  ShoppingCart,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { Skeleton } from "boneyard-js/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    title: "AI Image Generator",
    description:
      "A sophisticated AI-powered image generation tool using DALL-E API with a custom-built gallery and sharing features.",
    tech: ["Next.js", "OpenAI", "Cloudinary", "Prisma"],
    features: [
      "AI-driven image generation",
      "User-friendly image gallery",
      "Social sharing integration",
      "Optimized image delivery",
    ],
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    gradient: "from-yellow-500/20 to-orange-500/20",
    links: {
      github: "https://github.com/md4fjal",
      live: "https://ai-gen.example.com",
    },
  },
  {
    title: "Crypto Portfolio Tracker",
    description:
      "Real-time cryptocurrency tracking application with live price updates and historical data visualization.",
    tech: ["React", "Chart.js", "CoinGecko API", "Firebase"],
    features: [
      "Real-time price monitoring",
      "Interactive data visualizations",
      "Secure user portfolios",
      "Price alert system",
    ],
    icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
    gradient: "from-emerald-500/20 to-teal-500/20",
    links: {
      github: "https://github.com/md4fjal",
    },
  },
  {
    title: "StyleHub - E-Commerce",
    description:
      "Full-stack e-commerce platform with admin dashboard and role-based authorization. Features seamless payment integration.",
    tech: ["React", "Express.js", "MongoDB", "Redux"],
    features: [
      "Role-based authorization",
      "Scalable state management",
      "Feature-rich admin dashboard",
      "Order tracking system",
    ],
    icon: <ShoppingCart className="w-6 h-6 text-purple-400" />,
    gradient: "from-purple-500/20 to-pink-500/20",
    links: {
      live: "https://stylehub-plum.vercel.app",
      github: "https://github.com/md4fjal/sw-commerce",
    },
  },
  {
    title: "Online Survey App",
    description:
      "Full-stack survey platform with secure authentication and real-time analytics. Built for high performance.",
    tech: ["React", "Node.js", "JWT", "MongoDB"],
    features: [
      "Secure user Authentication",
      "Redux Toolkit state management",
      "Optimized database queries",
      "Real-time analytics dashboard",
    ],
    icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
    links: {
      github: "https://github.com/md4fjal",
    },
  },
];

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate initial loading for skeleton demonstration
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        const cards = gsap.utils.toArray(".project-card");
        cards.forEach((card: any, i: number) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                toggleActions: "play none none reverse",
              },
              delay: i * 0.1,
              clearProps: "all"
            }
          );
        });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, { dependencies: [isLoading], scope: containerRef });

  return (
    <div id="projects" ref={containerRef} className="scroll-mt-24 py-12">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-4xl md:text-6xl font-bold mb-6">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center md:text-left text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          A selection of my favorite works, blending technical excellence with
          thoughtful design and user experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <Skeleton
            key={index}
            name={`project-card-${index}`}
            loading={isLoading}
            fixture={
              <div className="h-[450px] w-full glass-dark rounded-3xl" />
            }
          >
            <div className="project-card group relative flex flex-col h-full glass-dark rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-700 overflow-hidden shadow-2xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}
              />
              
              <div className="relative p-10 flex flex-col h-full z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 glass rounded-[1.25rem] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
                        title="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
                        title="Live Preview"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-8 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-xs font-semibold glass rounded-full border border-white/10 text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-white/5">
                  <ul className="space-y-3 mb-8">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.links.live || project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link tracking-wide uppercase"
                  >
                    Explore Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </Skeleton>
        ))}
      </div>
    </div>
  );
}

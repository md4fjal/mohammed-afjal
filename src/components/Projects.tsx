"use client";

import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Zap,
  ShoppingCart,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { Skeleton } from "boneyard-js/react";

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

  useEffect(() => {
    // Simulate initial loading for skeleton demonstration
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="projects" className="scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center md:text-left text-lg max-w-2xl">
          A selection of my favorite works, blending technical excellence with
          thoughtful design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Skeleton
            key={index}
            name={`project-card-${index}`}
            loading={isLoading}
            fixture={
              <div className="h-[400px] w-full glass-dark rounded-3xl" />
            }
          >
            <div className="group relative flex flex-col h-full glass-dark rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative p-8 flex flex-col h-full z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 glass rounded-2xl">{project.icon}</div>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        className="p-2 glass rounded-full hover:bg-white/10 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        className="p-2 glass rounded-full hover:bg-white/10 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium glass rounded-full border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <ul className="space-y-2 mb-6">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Zap className="w-3 h-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.links.live || project.links.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                  >
                    View Project Details
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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

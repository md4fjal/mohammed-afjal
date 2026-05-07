"use client";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiRedis,
  SiJavascript,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
  SiReactquery,
  SiRedux,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layout,
  RefreshCcw,
  Server,
  Terminal,
  Wifi,
} from "lucide-react";
import { FaAws } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    description:
      "Building responsive, accessible, and performant user interfaces.",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="dark:text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
    ],
  },

  {
    title: "Backend & Systems",
    icon: <Terminal className="w-6 h-6" />,
    description: "Designing scalable server-side architectures and APIs.",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="dark:text-white" /> },
      { name: "REST API", icon: <Globe className="w-4 h-4 text-blue-400" /> },
      { name: "WebSocket", icon: <Wifi className="w-4 h-4 text-purple-400" /> },
      { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
      {
        name: "JWT Auth",
        icon: <SiJsonwebtokens className="text-black dark:text-white" />,
      },
    ],
  },

  {
    title: "Databases & ORMs",
    icon: <Database className="w-6 h-6" />,
    description: "Managing data with efficiency and integrity.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-[#4169E1]" />,
      },
      { name: "Prisma ORM", icon: <SiPrisma className="dark:text-white" /> },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
      {
        name: "TanStack Query",
        icon: <SiReactquery className="text-[#FF4154]" />,
      },
    ],
  },

  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    description: "Deploying and scaling applications in the cloud.",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
      {
        name: "VPS Hosting",
        icon: <Server className="w-4 h-4 text-gray-400" />,
      },
      {
        name: "CI/CD",
        icon: <GitBranch className="w-4 h-4 text-emerald-400" />,
      },
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="dark:text-white" /> },
    ],
  },
];

export default function Skills() {
  return (
    <div id="skills" className="scroll-mt-24 py-12">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-4xl md:text-6xl font-bold mb-6">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-center md:text-left text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          The tools and technologies I use to bring digital ideas to life.
          Constantly expanding my horizons in the ever-evolving tech landscape.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="skill-card stagger-item group p-10 glass-dark rounded-[2.5rem] border border-border hover:border-primary/30 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5"
          >
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 glass rounded-2xl text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                {category.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-3 px-5 py-2.5 glass rounded-full border border-border hover:border-primary/40 hover:bg-white/10 transition-all duration-300 group/skill cursor-default"
                >
                  <span className="text-xl group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground group-hover/skill:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

export default function WorkExperience() {
  useEffect(() => {
    const cards = gsap.utils.toArray(".exp-card");
    cards.forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <div id="experience" className="scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-center md:text-left text-3xl md:text-5xl font-bold mb-4">
          Work <span className="text-gradient">Journey</span>
        </h2>
        <p className="text-center md:text-left text-lg max-w-2xl">
          Professional experience where I've contributed to impactful projects
          and refined my craft.
        </p>
      </div>

      <div className="relative space-y-12 md:space-y-24 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {/* Experience 1 */}
        <div className="exp-card relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background group-hover:border-primary/50 transition-colors duration-500 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Circle className="w-2 h-2 fill-primary text-primary" />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 glass-dark rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-xl text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Full Stack Developer</h3>
                  <p className="text-sm text-primary font-medium">
                    Zectagon Technology
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-medium glass rounded-full text-muted-foreground">
                Dec 2023 - Present
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Led a team of 5 Engineers to develop a scalable e-commerce
                  platform using React and Node.js.
                </span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Code2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Modernized legacy codebase using Next.js, resulting in 40%
                  faster page loads.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="exp-card relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background group-hover:border-primary/50 transition-colors duration-500 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Circle className="w-2 h-2 fill-primary text-primary" />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 glass-dark rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-xl text-primary">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Frontend Engineer</h3>
                  <p className="text-sm text-primary font-medium">
                    Digital Solutions Inc.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-medium glass rounded-full text-muted-foreground">
                Jan 2022 - Nov 2023
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Layout className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Designed and implemented over 20+ responsive web components
                  using Tailwind CSS.
                </span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Optimized application performance reducing First Contentful
                  Paint by 0.5s.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="exp-card relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background group-hover:border-primary/50 transition-colors duration-500 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <Circle className="w-2 h-2 fill-primary text-primary" />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 glass-dark rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2 glass rounded-xl text-primary">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Junior Web Developer</h3>
                  <p className="text-sm text-primary font-medium">
                    StartUp Hub
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-medium glass rounded-full text-muted-foreground">
                June 2021 - Dec 2021
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Database className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Assisted in the migration of data from MySQL to MongoDB for
                  improved performance.
                </span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Collaborated with senior developers to fix 50+ critical bugs
                  across the platform.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

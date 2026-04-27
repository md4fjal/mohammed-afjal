"use client";

import { User, Code, Globe, Palette, Cpu, Sparkles } from "lucide-react";

export default function AboutDetail() {
  return (
    <div id="about" className="scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Engineering{" "}
              <span className="text-gradient">Digital Experiences</span>
            </h2>
            <p className="text-center md:text-left text-lg leading-relaxed">
              I am a passionate Full Stack Developer with a deep-seated love for
              creating elegant solutions to complex problems. With over 3 years
              of experience in the digital landscape, I specialize in building
              robust, scalable applications that prioritize user experience and
              performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 glass-dark rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="font-bold mb-1">Clean Code</h4>
              <p className="text-sm text-muted-foreground">
                Writing maintainable and efficient codebases.
              </p>
            </div>
            <div className="p-6 glass-dark rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h4 className="font-bold mb-1">Modern UI</h4>
              <p className="text-sm text-muted-foreground">
                Crafting beautiful and intuitive interfaces.
              </p>
            </div>
          </div>

          <p className="text-center md:text-left text-lg leading-relaxed">
            My journey started with a curiosity about how the web works, which
            evolved into a career dedicated to mastering the modern tech stack.
            I thrive in collaborative environments and am always eager to learn
            and adapt to emerging technologies.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-square glass-dark rounded-[2rem] border border-white/10 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-purple-500/20 group-hover:opacity-100 transition-opacity duration-700 opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              {/* Decorative grid or illustration */}
              <div className="grid grid-cols-3 gap-4 w-full h-full opacity-30">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-white/10 rounded-lg flex items-center justify-center"
                  >
                    {i % 2 === 0 && (
                      <Sparkles className="w-4 h-4 text-primary" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <h4 className="font-bold">Mohammed Afjal</h4>
                  <p className="text-xs text-muted-foreground">
                    Full Stack Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-6 -right-6 p-4 glass rounded-2xl border border-white/10 animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
              <span className="text-sm font-medium">
                Available for projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HeroSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import AboutDetail from "@/components/AboutDetail";
import Services from "@/components/Services";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingButtons from "@/components/FloatingButtons";
import CustomCursor from "@/components/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Reveal animations for sections with a scale and rotation effect
      const sections = gsap.utils.toArray(".gsap-reveal");
      sections.forEach((section: any) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 100,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // 3. Staggered reveal for children items - enhanced
      const staggerSections = gsap.utils.toArray(".stagger-reveal");
      staggerSections.forEach((section: any) => {
        const items = section.querySelectorAll(".stagger-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 60, scale: 0.8, rotationX: 15, transformPerspective: 1000 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              stagger: 0.15,
              duration: 1,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();

      // Delayed refresh to catch any late layout shifts (e.g. images loading, fonts, etc)
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1000);

      return () => clearTimeout(timer);
    },
    { scope: mainRef },
  );

  return (
    <SmoothScroll>
      <div
        ref={mainRef}
        className="relative overflow-x-hidden selection:bg-primary/30 selection:text-foreground"
      >
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <FloatingButtons />

        <main className="relative z-10">
          <HeroSection />

          <div className="section-container space-y-20 md:space-y-32 pb-20 md:pb-32">
            <section>
              <AboutDetail />
            </section>

            <section>
              <Services />
            </section>

            <section>
              <WorkExperience />
            </section>

            <section>
              <Projects />
            </section>

            <section className="stagger-reveal">
              <Skills />
            </section>

            <section>
              <Education />
            </section>

            <section className="gsap-reveal">
              <ContactSection />
            </section>
          </div>
        </main>

        <footer className="py-20 border-t border-border glass-dark text-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-10">
              <h2 className="text-3xl font-black tracking-tighter mb-4">
                AFJAL<span className="text-primary">.</span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Building digital products that combine technical excellence with
                exceptional user experience.
              </p>
            </div>

            <div className="flex justify-center gap-8 mb-12">
              <a
                href="https://www.linkedin.com/in/mohammed-afjal-70698a239"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/md4fjal"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/4fjal/"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                target="_blank"
              >
                Instagram
              </a>
            </div>

            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground/50">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          {/* Footer background glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/10 blur-[100px] rounded-full translate-y-1/2" />
        </footer>
      </div>
    </SmoothScroll>
  );
}

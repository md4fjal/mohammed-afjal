"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal animations for sections
      const sections = gsap.utils.toArray(".gsap-reveal");
      sections.forEach((section: any) => {
        gsap.fromTo(
          section,
          {
            autoAlpha: 0,
            y: 80,
            clipPath: "inset(20% 0% 20% 0%)",
          },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // 2. Parallax for background blobs
      gsap.to(".blob-parallax", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // 3. Staggered reveal for children of certain sections
      const staggerSections = gsap.utils.toArray(".stagger-reveal");
      staggerSections.forEach((section: any) => {
        const items = section.querySelectorAll(".stagger-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });

      // 4. Refresh ScrollTrigger to ensure all positions are correct
      ScrollTrigger.refresh();

      // 5. Delayed refresh to catch layout shifts from skeletons loading
      const timeoutId = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2500);

      return () => clearTimeout(timeoutId);
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <div ref={mainRef} className="relative overflow-x-hidden">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <FloatingButtons />

        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="blob-parallax absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="blob-parallax absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        </div>

        <main className="relative z-10">
          <HeroSection />

          <div className="section-container space-y-12 md:space-y-48 pb-12 md:pb-32">
            <section className="gsap-reveal">
              <AboutDetail />
            </section>

            <section className="gsap-reveal">
              <Services />
            </section>

            <section className="gsap-reveal">
              <WorkExperience />
            </section>

            <section className="gsap-reveal">
              <Projects />
            </section>

            <section className="stagger-reveal">
              <Skills />
            </section>

            <section className="gsap-reveal">
              <Education />
            </section>

            <section className="gsap-reveal">
              <ContactSection />
            </section>
          </div>
        </main>

        <footer className="py-12 border-t border-white/5 glass-dark text-center">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Afjal. Full Stack Developer
            </p>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}

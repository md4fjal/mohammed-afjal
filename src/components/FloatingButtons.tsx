"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { gsap } from "gsap";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const topBtnRef = useRef<HTMLButtonElement | null>(null);
  const whatsappRef = useRef<HTMLButtonElement | null>(null);

  // Optimized scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations
  useEffect(() => {
    // 1. Entrance animation for the container
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 1 },
    );

    // 2. Continuous floating animation for WhatsApp
    gsap.to(whatsappRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 3. Continuous floating animation for Top Button (with a slight offset)
    gsap.to(topBtnRef.current, {
      y: -8,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });
  }, []);

  // Animate Scroll-to-Top visibility
  useEffect(() => {
    if (!topBtnRef.current) return;

    gsap.to(topBtnRef.current, {
      opacity: isVisible ? 1 : 0,
      scale: isVisible ? 1 : 0.5,
      y: isVisible ? 0 : 20,
      pointerEvents: isVisible ? "auto" : "none",
      duration: 0.4,
      ease: "back.out(1.7)",
    });
  }, [isVisible]);

  const scrollToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "919140764560";
    const message = "Hi Afjal, I'm interested in your services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex gap-4 items-end pointer-events-none"
    >
      {/* Move to Top Button */}
      <button
        ref={topBtnRef}
        onClick={scrollToTop}
        aria-label="Move to top"
        style={{ opacity: 0, pointerEvents: "none" }}
        className="pointer-events-auto p-4 glass-dark border border-border text-white rounded-full shadow-2xl 
          hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
      {/* WhatsApp Button */}
      <div className="relative pointer-events-auto">
        {/* Pulse effect background */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />

        <button
          ref={whatsappRef}
          onClick={openWhatsApp}
          aria-label="Contact on WhatsApp"
          className="group relative p-4 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] 
            hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 
            flex items-center justify-center z-10"
        >
          <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" />

          <span className="hidden md:block absolute right-full mr-4 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-border">
            Chat on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}

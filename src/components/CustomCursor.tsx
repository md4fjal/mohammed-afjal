"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: "power3.out"
      });
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.closest("button, a, input, textarea, [role='button'], .group")
      ) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.closest("button, a, input, textarea, [role='button'], .group")
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  useEffect(() => {
    if (isHovering) {
      gsap.to(followerRef.current, {
        scale: 2,
        backgroundColor: "rgba(var(--primary), 0.1)",
        borderColor: "rgba(var(--primary), 0.5)",
        borderWidth: "1px",
        duration: 0.4,
        ease: "back.out(1.7)"
      });
      gsap.to(cursorRef.current, {
        scale: 0.5,
        duration: 0.4
      });
    } else {
      gsap.to(followerRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(var(--primary), 0.3)",
        borderWidth: "1px",
        duration: 0.4,
        ease: "power2.out"
      });
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.4
      });
    }
  }, [isHovering]);

  useEffect(() => {
    if (isClicking) {
      gsap.to([cursorRef.current, followerRef.current], {
        scale: 0.8,
        duration: 0.2
      });
    } else {
      gsap.to([cursorRef.current, followerRef.current], {
        scale: isHovering ? 2 : 1,
        duration: 0.2
      });
    }
  }, [isClicking, isHovering]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-primary/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block backdrop-blur-[2px]"
      />
    </>
  );
}

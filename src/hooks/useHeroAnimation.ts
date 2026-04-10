"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function useHeroAnimation() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".animate-title", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    })
    .from(".animate-subtitle", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.4")
    .from(".animate-cta", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
    }, "-=0.2");
  }, { scope: container });

  return { container };
}

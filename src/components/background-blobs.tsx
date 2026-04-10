"use client";

import { useScrollParallax } from "@/hooks/useScrollParallax";

export function BackgroundBlobs() {
  const { blob1, blob2 } = useScrollParallax();

  return (
    <>
      <div ref={blob1} className="blob top-0 left-[-10%]" />
      <div ref={blob2} className="blob bottom-0 right-[-10%]" />
    </>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -4]);

  return (
    <div ref={ref} className="hero-stage" aria-hidden>
      <div className="hero-stage-wash" />
      <div className="hero-stage-grid" />
      <div className="hero-stage-beam hero-stage-beam-a" />
      <div className="hero-stage-beam hero-stage-beam-b" />

      <motion.div className="hero-stage-orbitals" style={{ y, rotate }}>
        <span className="hero-ring hero-ring-lg" />
        <span className="hero-ring hero-ring-md" />
        <span className="hero-ring hero-ring-sm" />
        <span className="hero-core" />
        <span className="hero-spark hero-spark-1" />
        <span className="hero-spark hero-spark-2" />
        <span className="hero-spark hero-spark-3" />
      </motion.div>

      <div className="hero-stage-nodes">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={`hero-node hero-node-${i + 1}`} />
        ))}
      </div>

      <div className="hero-stage-veil" />
    </div>
  );
}

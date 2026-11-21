"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 right-0 left-0 z-[60] h-[3px] origin-left bg-accent rtl:origin-right"
      style={{ scaleX }}
    />
  );
}

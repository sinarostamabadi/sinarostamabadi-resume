"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav, profile } from "@/data/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b border-line bg-paper/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between gap-4 py-4">
        <a href="#top" className="font-display text-[0.95rem] font-semibold tracking-tight text-ink">
          {profile.firstName}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex max-w-[70%] items-center gap-3 overflow-x-auto md:max-w-none md:overflow-visible">
          <nav className="flex items-center gap-4 md:hidden" aria-label="Mobile">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link whitespace-nowrap text-[0.8rem]">
                {item.label}
              </a>
            ))}
          </nav>
          <a href={profile.resumeHref} download={profile.resumeFileName} className="btn-ghost !min-h-10 !px-3 !py-2 text-[0.8rem]">
            Resume
          </a>
        </div>
      </div>
    </motion.header>
  );
}

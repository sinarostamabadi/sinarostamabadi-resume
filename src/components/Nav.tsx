"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/content";
import { useApp } from "@/context/AppProviders";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav() {
  const { t, theme, toggleTheme } = useApp();
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
      <div className="container-wide py-3 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <a href="#top" className="font-display shrink-0 text-[0.95rem] font-semibold tracking-tight text-ink">
            {t.profile.firstName}
            <span className="text-accent">.</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {t.nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={toggleTheme}
              className="chrome-btn"
              aria-label={theme === "dark" ? t.chrome.themeLight : t.chrome.themeDark}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href={profile.resumeHref}
              download={profile.resumeFileName}
              className="btn-ghost !min-h-10 !px-3 !py-2 text-[0.8rem]"
            >
              {t.chrome.resume}
            </a>
          </div>
        </div>

        <nav
          className="mobile-nav-row mt-2.5 flex items-center justify-between gap-1 border-t border-line/70 pt-2.5 lg:hidden"
          aria-label="Mobile"
        >
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link mobile-nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

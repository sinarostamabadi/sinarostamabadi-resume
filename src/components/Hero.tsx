"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/content";
import { ResumeIcon } from "./ResumeIcon";
import { HeroBackdrop } from "./HeroBackdrop";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section
      ref={ref}
      id="top"
      className="hero-section relative overflow-hidden"
      aria-label="Introduction"
    >
      <HeroBackdrop />

      <motion.div style={{ y: contentY, opacity }} className="hero-content section-pad relative z-10">
        <div className="container-wide">
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, ease }}
              className="hero-portrait"
            >
              <div className="portrait-frame">
                <div className="portrait-frame-inner aspect-[4/5]">
                  <Image
                    src="/sina.jpg"
                    alt={profile.name}
                    width={480}
                    height={600}
                    priority
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                </div>
              </div>
            </motion.div>

            <div className="hero-copy min-w-0">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="eyebrow mb-3 sm:mb-5"
              >
                {profile.role} · {profile.location}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.18, ease }}
                className="hero-title font-display font-bold tracking-[-0.04em] text-ink"
              >
                <span className="block">{profile.firstName}</span>
                <span className="block text-ink-soft">
                  {profile.lastName}
                  <span className="text-accent">.</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.32, ease }}
                className="hero-support mt-4 text-ink-soft sm:mt-6"
              >
                {profile.headline}{" "}
                <span className="font-semibold text-accent">{profile.stackLine}</span>
                {" — "}
                {profile.support}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.45, ease }}
                className="hero-actions mt-7 sm:mt-9"
              >
                <a href="#work" className="btn-primary">
                  View selected work
                  <span aria-hidden>→</span>
                </a>
                <a href={profile.resumeHref} download={profile.resumeFileName} className="btn-ghost">
                  <ResumeIcon />
                  Download resume
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

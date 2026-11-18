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
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden" aria-label="Introduction">
      <HeroBackdrop />

      <motion.div
        style={{ y: contentY, opacity }}
        className="section-pad relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-20 md:pt-24"
      >
        <div className="container-wide">
          <div className="grid items-center gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, ease }}
              className="mx-auto w-[180px] sm:w-[200px] lg:mx-0 lg:w-full"
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

            <div className="min-w-0 text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="eyebrow mb-5"
              >
                {profile.role} · {profile.location}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.18, ease }}
                className="font-display text-[clamp(2.8rem,9vw,5.8rem)] leading-[0.9] font-bold tracking-[-0.04em] text-ink"
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
                className="mx-auto mt-6 max-w-xl text-[clamp(1.05rem,2.2vw,1.28rem)] leading-relaxed text-ink-soft lg:mx-0"
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
                className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="font-mono text-[0.62rem] tracking-[0.2em] uppercase">Scroll</span>
          <span className="block h-10 w-px origin-top bg-accent/70" />
        </div>
      </motion.div>
    </section>
  );
}

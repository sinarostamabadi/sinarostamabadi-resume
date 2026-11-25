"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/content";
import { useApp } from "@/context/AppProviders";
import { ResumeIcon } from "./ResumeIcon";
import { HeroBackdrop } from "./HeroBackdrop";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t, dir } = useApp();
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
                <div className="portrait-frame-inner aspect-square">
                  <Image
                    src="/sina.jpg"
                    alt={t.profile.name}
                    width={480}
                    height={480}
                    priority
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                </div>
              </div>
            </motion.div>

            <div className="hero-copy min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="hero-meta mb-3 sm:mb-5"
              >
                <span className="hero-meta-item">{t.profile.role}</span>
                <span className="hero-meta-dot" aria-hidden />
                <span className="hero-meta-item">{t.profile.city}</span>
                <span className="hero-meta-dot" aria-hidden />
                <span className="hero-meta-item">{t.profile.availability}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.18, ease }}
                className="hero-title font-display font-bold tracking-[-0.04em] text-ink"
              >
                <span className="block">{t.profile.firstName}</span>
                <span className="block text-ink-soft">
                  {t.profile.lastName}
                  <span className="text-accent">.</span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.32, ease }}
                className="hero-support mt-4 text-ink-soft sm:mt-6"
              >
                <p className="hero-headline">{t.profile.headline}</p>
                <p className="hero-lead">
                  <span className="font-semibold text-accent">{t.profile.stackLine}</span>
                  {" — "}
                  {t.profile.support}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.45, ease }}
                className="hero-actions mt-7 sm:mt-9"
              >
                <a href="#work" className="btn-primary">
                  {t.hero.viewWork}
                  <span aria-hidden>{dir === "rtl" ? "←" : "→"}</span>
                </a>
                <a href={profile.resumeHref} download={profile.resumeFileName} className="btn-ghost">
                  <ResumeIcon />
                  {t.hero.downloadResume}
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="hero-info-strip"
          >
            {[
              { label: t.contact.email, value: profile.email, href: profile.emailHref },
              { label: t.contact.phone, value: profile.phone, href: profile.phoneHref },
              {
                label: t.contact.linkedin,
                value: t.contact.linkedinName,
                href: profile.linkedin,
                external: true,
              },
              {
                label: t.contact.basedIn,
                value: `${t.profile.city} · ${t.profile.availability}`,
                href: "#contact",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="hero-info-cell"
              >
                <span className="hero-info-label">{item.label}</span>
                <span className="hero-info-value">{item.value}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

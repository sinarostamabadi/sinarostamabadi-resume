"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";
import { MotionReveal } from "./MotionReveal";
import { ResumeIcon } from "./ResumeIcon";

const links = [
  { label: "Email", value: profile.email, href: profile.emailHref },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "LinkedIn", value: "Sina Rostamabadi", href: profile.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative z-10 py-24 md:py-32">
      <div className="container-wide">
        <MotionReveal>
          <div className="panel relative overflow-hidden rounded-[1.75rem] px-6 py-12 md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-28 -left-10 h-72 w-72 rounded-full bg-spark/15 blur-3xl"
              aria-hidden
            />

            <p className="eyebrow mb-4">Contact</p>
            <h2 className="font-display max-w-2xl text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] font-bold tracking-tight">
              Let’s build the next production system.
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted">
              Open to remote full-stack roles and product collaborations — React, Next.js, NestJS, and beyond.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.emailHref} className="btn-primary">
                Email me
                <span aria-hidden>→</span>
              </a>
              <a href={profile.resumeHref} download={profile.resumeFileName} className="btn-ghost">
                <ResumeIcon />
                Resume PDF
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {links.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.55 }}
                  className="rounded-2xl border border-line bg-white/50 px-5 py-4 transition-colors hover:border-accent/40 hover:bg-white/80"
                >
                  <span className="font-mono text-[0.64rem] font-extrabold tracking-[0.14em] text-accent uppercase">
                    {item.label}
                  </span>
                  <span className="mt-2 block truncate text-sm font-semibold text-ink-soft">{item.value}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useApp } from "@/context/AppProviders";
import { MotionReveal } from "./MotionReveal";

export function Work() {
  const { t } = useApp();

  return (
    <section id="work" className="section-pad relative z-10 py-24 md:py-32">
      <div className="container-wide">
        <MotionReveal>
          <p className="eyebrow mb-3">{t.work.eyebrow}</p>
          <h2 className="font-display max-w-2xl text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] font-bold tracking-tight">
            {t.work.title}
          </h2>
        </MotionReveal>

        <div className="mt-14 space-y-4 md:mt-16">
          {t.work.projects.map((project, index) => (
            <MotionReveal key={project.id} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group panel overflow-hidden rounded-[1.4rem] px-5 py-6 md:px-8 md:py-8"
              >
                <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-start lg:gap-10">
                  <p className="font-display text-4xl font-bold text-accent/35 transition-colors group-hover:text-accent md:text-5xl">
                    {project.id}
                  </p>

                  <div className="min-w-0">
                    <p className="font-mono text-[0.68rem] font-bold tracking-[0.16em] text-muted uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.45rem,2.5vw,2rem)] font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-accent">{project.subtitle}</p>
                    <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-line bg-surface px-2.5 py-1 text-[0.72rem] font-bold text-ink-soft"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:pt-2 lg:text-end">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {project.urlLabel}
                        <span aria-hidden>↗</span>
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-muted">{t.work.privateDeployment}</span>
                    )}
                  </div>
                </div>
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

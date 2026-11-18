"use client";

import { experience } from "@/data/content";
import { MotionReveal } from "./MotionReveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative z-10 py-24 md:py-32">
      <div className="container-wide">
        <MotionReveal>
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="font-display max-w-xl text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-tight">
            Path through production teams.
          </h2>
        </MotionReveal>

        <div className="relative mt-14 md:mt-16">
          <div className="timeline-rail absolute top-2 bottom-2 left-[11px] w-px md:left-[15px]" aria-hidden />

          <ol className="space-y-10 md:space-y-14">
            {experience.map((job, index) => (
              <MotionReveal key={`${job.company}-${job.role}`} delay={index * 0.06}>
                <li className="relative grid gap-4 pl-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10 md:pl-12">
                  <span
                    className="absolute top-1.5 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-paper md:h-8 md:w-8"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>

                  <div>
                    <p className="font-mono text-[0.7rem] font-bold tracking-[0.14em] text-accent uppercase">
                      {job.period}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">{job.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-ink-soft">{job.company}</p>
                  </div>

                  <ul className="space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="relative pl-4 text-[1.02rem] leading-relaxed text-muted">
                        <span className="absolute top-[0.7em] left-0 h-1 w-1 rounded-full bg-accent/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              </MotionReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

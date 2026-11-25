"use client";

import { useApp } from "@/context/AppProviders";
import { MotionReveal } from "./MotionReveal";

export function Experience() {
  const { t } = useApp();

  return (
    <section id="experience" className="section-pad relative z-10 py-24 md:py-32">
      <div className="container-wide">
        <MotionReveal>
          <p className="experience-badge mb-5">02 {t.experience.eyebrow}</p>
          <div className="experience-header">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-tight">
              {t.experience.title}
            </h2>
            <p className="experience-lead text-[1.02rem] leading-relaxed">{t.experience.lead}</p>
          </div>
        </MotionReveal>

        <ol className="experience-list">
          {t.experience.jobs.map((job, index) => (
            <li key={`${job.company}-${job.role}`} className="experience-row">
              <MotionReveal delay={index * 0.05}>
                <div className="experience-row-inner">
                  <div className="experience-row-meta">
                    <p className="experience-row-period">{job.period}</p>
                    <h3 className="experience-row-role">{job.role}</h3>
                    <p className="experience-row-company">{job.company}</p>
                  </div>

                  <ul className="experience-row-points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </MotionReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

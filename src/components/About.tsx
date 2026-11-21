"use client";

import { useApp } from "@/context/AppProviders";
import { MotionReveal } from "./MotionReveal";

export function About() {
  const { t } = useApp();

  return (
    <section id="about" className="section-pad relative z-10 py-24 md:py-32">
      <div className="container-wide">
        <MotionReveal>
          <p className="eyebrow mb-3">{t.about.eyebrow}</p>
        </MotionReveal>

        <div className="mt-2 grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <MotionReveal delay={0.05}>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">
              {t.about.title}
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">{t.profile.summary}</p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{t.profile.focus}</p>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="panel overflow-hidden rounded-2xl">
              {t.about.highlights.map((item) => (
                <div key={item.label} className="border-b border-line px-5 py-4 last:border-b-0">
                  <p className="font-display text-base font-bold">{item.label}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </div>
              ))}
              <div className="border-t border-line bg-accent-soft px-5 py-4">
                <p className="font-display text-base font-bold">{t.about.educationDegree}</p>
                <p className="mt-1 text-sm text-accent">
                  {t.about.educationNote} · {t.about.educationLanguage}
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

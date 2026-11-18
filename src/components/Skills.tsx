"use client";

import { coreSkills, marqueeSkills, skillGroups } from "@/data/content";
import { MotionReveal } from "./MotionReveal";

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="skill-chip">
            <span />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-pad relative z-10 py-24 md:py-32">
      <div className="container-wide">
        <MotionReveal>
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="font-display max-w-xl text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-tight">
            One stack, end to end.
          </h2>
        </MotionReveal>

        <MotionReveal delay={0.08} className="mt-10 space-y-3">
          <MarqueeRow items={marqueeSkills} />
          <MarqueeRow items={[...marqueeSkills].reverse()} reverse />
        </MotionReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {coreSkills.map((skill, i) => (
            <MotionReveal key={skill.name} delay={0.05 * i}>
              <div className="panel rounded-2xl px-5 py-5">
                <p className="font-mono text-[0.65rem] font-bold tracking-[0.16em] text-accent uppercase">
                  {skill.level}
                </p>
                <p className="mt-3 font-display text-lg font-bold">{skill.name}</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/10">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: skill.level === "Expert" ? "94%" : "82%" }}
                  />
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <MotionReveal key={group.title} delay={0.04 * i}>
              <div>
                <h3 className="font-display text-base font-bold">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{group.items.join(" · ")}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

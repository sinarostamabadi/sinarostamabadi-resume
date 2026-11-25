"use client";

import { motion } from "framer-motion";
import { coreSkills, marqueeSkills } from "@/data/content";
import { useApp } from "@/context/AppProviders";
import { MotionReveal } from "./MotionReveal";

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" dir="ltr">
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
  const { t } = useApp();

  return (
    <section id="skills" className="section-pad relative z-10 py-24 md:py-32">
      <div className="container-wide">
        <MotionReveal>
          <p className="eyebrow mb-3">{t.skills.eyebrow}</p>
          <h2 className="font-display max-w-xl text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-tight">
            {t.skills.title}
          </h2>
        </MotionReveal>

        <MotionReveal delay={0.06} className="mt-10 space-y-3">
          <MarqueeRow items={marqueeSkills} />
          <MarqueeRow items={[...marqueeSkills].reverse()} reverse />
        </MotionReveal>

        <div className="skills-stack mt-12 md:mt-14">
          <MotionReveal delay={0.08}>
            <div className="skills-meter-grid">
              {coreSkills.map((skill, i) => {
                const levelLabel = skill.level === "Expert" ? t.skills.levelExpert : t.skills.levelAdvanced;
                const width = skill.level === "Expert" ? 94 : 82;
                return (
                  <div key={skill.name} className="skills-meter">
                    <div className="skills-meter-top">
                      <p className="skills-meter-name">{skill.name}</p>
                      <p className="skills-meter-level">{levelLabel}</p>
                    </div>
                    <div className="skills-meter-track" aria-hidden>
                      <motion.span
                        className="skills-meter-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${width}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.9, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </MotionReveal>

          <div className="skills-domain-grid mt-8 md:mt-10">
            {t.skills.groups.map((group, i) => (
              <MotionReveal key={group.title} delay={0.04 * i}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="skills-card"
                >
                  <div className="skills-card-glow" aria-hidden />
                  <div className="skills-card-inner">
                    <div className="skills-card-head">
                      <p className="skills-card-index">{String(i + 1).padStart(2, "0")}</p>
                      <h3 className="skills-card-title">{group.title}</h3>
                    </div>
                    <div className="skills-card-tags">
                      {group.items.map((item) => (
                        <span key={item} className="skills-card-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

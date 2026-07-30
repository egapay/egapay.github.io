import { GraduationCap } from "lucide-react";
import { education, experience } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import Tag from "@/components/Tag";

export default function Experience() {
  return (
    <Section
      id="work"
      index="02"
      eyebrow="Experience"
      title="Where I've worked"
      lede="Three roles across analytics, technical support engineering, and IT — each one leaning on automation to make the data usable."
    >
      <ol className="relative">
        <span
          aria-hidden
          className="absolute left-[5px] top-3 bottom-3 hidden w-px bg-line sm:block"
        />

        {experience.map((job, i) => (
          <li key={job.company} className="relative pb-14 sm:pl-10">
            <Reveal delay={i * 0.06}>
              <span
                aria-hidden
                className={[
                  "absolute left-0 top-[7px] hidden h-[11px] w-[11px] rounded-full ring-4 ring-canvas sm:block",
                  job.current ? "bg-signal" : "bg-ink-3",
                ].join(" ")}
              />

              <div className="grid gap-x-10 gap-y-4 lg:grid-cols-[190px_1fr]">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 lg:flex-col lg:items-start">
                  <span className="label-mono text-ink-3">
                    {job.start} — {job.end}
                  </span>
                  {job.current && (
                    <span className="label-mono rounded-full bg-signal-dim px-2 py-0.5 text-signal">
                      Current
                    </span>
                  )}
                </div>

                <div className="max-w-2xl">
                  <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-base text-ink-2">{job.title}</p>

                  <p className="mt-4 text-sm leading-relaxed text-ink-3">
                    {job.context}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-relaxed text-ink-2"
                      >
                        <span
                          aria-hidden
                          className="mt-[9px] h-px w-3 shrink-0 bg-signal/60"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        ))}

        <li className="relative sm:pl-10">
          <Reveal delay={0.06}>
            <span
              aria-hidden
              className="absolute left-0 top-[7px] hidden h-[11px] w-[11px] rounded-full bg-ink-3 ring-4 ring-canvas sm:block"
            />

            <div className="grid gap-x-10 gap-y-4 lg:grid-cols-[190px_1fr]">
              <span className="label-mono text-ink-3">
                {education.start} — {education.end}
              </span>

              <div className="flex max-w-2xl items-start gap-3">
                <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-ink-3" />
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {education.school}
                  </h3>
                  <p className="mt-1 text-base text-ink-2">
                    {education.degree},{" "}
                    <em className="text-signal not-italic">
                      {education.honors}
                    </em>
                  </p>
                  <p className="mt-2 text-sm text-ink-3">
                    Concentration: {education.concentration}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </li>
      </ol>
    </Section>
  );
}

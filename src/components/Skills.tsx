import { skillGroups } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="01"
      eyebrow="Toolkit"
      title="What I work with"
      lede="The stack I reach for day to day, from pulling the data to putting it in front of stakeholders."
    >
      <Reveal>
        <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-line bg-panel sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className={[
                "p-6",
                "border-line",
                "border-b sm:border-b-0",
                i % 2 === 0 ? "sm:border-r" : "",
                i < 2 ? "sm:border-b lg:border-b-0" : "",
                "lg:border-r lg:last:border-r-0",
                "last:border-b-0",
              ].join(" ")}
            >
              <h3 className="label-mono text-signal">{group.label}</h3>

              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-snug text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

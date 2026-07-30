import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { cn } from "@/lib/utils";

const filters = ["All", "Analytics", "Web"] as const;
type Filter = (typeof filters)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-line-strong hover:bg-panel-hi"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="label-mono text-ink-3">{project.category}</span>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-3 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">
        {project.title}
      </h3>

      <p className="mt-2.5 text-sm leading-relaxed text-ink-2">
        {project.blurb}
      </p>

      {project.detail.length > 0 && (
        <ul className="mt-4 space-y-2.5">
          {project.detail.map((line) => (
            <li
              key={line}
              className="flex gap-3 text-sm leading-relaxed text-ink-3"
            >
              <span
                aria-hidden
                className="mt-[9px] h-px w-3 shrink-0 bg-signal/50"
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        {project.metric && (
          <div className="mb-4 flex items-baseline gap-2 border-t border-line pt-4">
            <span className="text-2xl font-semibold tabular-nums tracking-tight text-ink">
              {project.metric.value}
            </span>
            <span className="label-mono text-signal">
              {project.metric.label}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const reduceMotion = useReducedMotion();

  const counts = useMemo(
    () => ({
      All: projects.length,
      Analytics: projects.filter((p) => p.category === "Analytics").length,
      Web: projects.filter((p) => p.category === "Web").length,
    }),
    [],
  );

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Things I've built"
      lede="Analytics pipelines and dashboards, plus a couple of production websites."
    >
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-8 flex flex-wrap gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
            className={cn(
              "label-mono inline-flex items-center gap-2 rounded-md border px-3 py-2 transition-colors",
              active === filter
                ? "border-signal/40 bg-signal-dim text-signal"
                : "border-line text-ink-3 hover:border-line-strong hover:text-ink",
            )}
          >
            {filter}
            <span className="tabular-nums opacity-60">{counts[filter]}</span>
          </button>
        ))}
      </div>

      <motion.div layout={!reduceMotion} className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.title}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

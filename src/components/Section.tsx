import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
};

export default function Section({
  id,
  index,
  eyebrow,
  title,
  lede,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <Reveal>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="label-mono text-signal">{index}</span>
          <span className="label-mono text-ink-3">{eyebrow}</span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="mt-6 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            {title}
          </h2>
          {lede && (
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-ink-2">
              {lede}
            </p>
          )}
        </div>
      </Reveal>

      <div className="mt-12">{children}</div>
    </section>
  );
}

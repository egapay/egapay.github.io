import { metrics } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Metrics() {
  return (
    <section className="pt-16 sm:pt-20">
      <Reveal>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="label-mono text-ink-3">
            Selected figures from shipped work
          </span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <dl className="mt-6 grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-panel lg:grid-cols-4">
          {metrics.map(({ value, unit, label, source }, i) => (
            <div
              key={label}
              className={[
                "p-5 sm:p-6",
                "border-line",
                i % 2 === 0 ? "border-r" : "",
                i < 2 ? "border-b lg:border-b-0" : "",
                "lg:border-r lg:last:border-r-0",
              ].join(" ")}
            >
              <dd className="flex items-baseline gap-1.5">
                <span className="text-3xl font-semibold tabular-nums tracking-tight text-ink sm:text-4xl">
                  {value}
                </span>
                <span className="label-mono text-signal">{unit}</span>
              </dd>
              <dt className="mt-3 text-sm leading-snug text-ink-2">{label}</dt>
              <p className="mt-2 font-mono text-[10px] leading-relaxed text-ink-3">
                {source}
              </p>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

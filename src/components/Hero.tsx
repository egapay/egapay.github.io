import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { education, profile, socials } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

const record = [
  { key: "Now", value: `${profile.currentTitle}, ${profile.currentCompany}` },
  { key: "Based", value: profile.location },
  { key: "School", value: `${education.shortSchool}, ${education.end}` },
];

export default function Hero() {
  return (
    <section id="top" className="pt-12 pb-4 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center lg:gap-14">
        <Reveal>
          <div>
            {profile.available && (
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel px-3.5 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
                <span className="label-mono text-ink-2">
                  {profile.availabilityNote}
                </span>
              </div>
            )}

            <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-snug text-ink sm:text-2xl">
              {profile.headline}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-2">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-85"
              >
                <FileText className="h-4 w-4" />
                View résumé
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
              {socials.map(({ label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-mono text-xs text-ink-3 transition-colors hover:text-ink"
                >
                  {handle}
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto max-w-[260px] overflow-hidden rounded-xl border border-line bg-panel lg:max-w-none">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={profile.photo}
                alt={`${profile.name}, ${profile.role}`}
                className="h-full w-full object-cover object-center"
                width={520}
                height={520}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-panel/90 via-transparent to-transparent" />
            </div>

            <dl className="divide-y divide-line border-t border-line">
              {record.map(({ key, value }) => (
                <div key={key} className="px-4 py-3">
                  <dt className="label-mono text-ink-3">{key}</dt>
                  <dd className="mt-1 text-sm leading-snug text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

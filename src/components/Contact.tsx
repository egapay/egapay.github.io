import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      index="04"
      eyebrow="Contact"
      title="Let's talk"
      lede={
        profile.available
          ? "I'm open to data analyst roles and happy to walk through any of the work above. The fastest way to reach me is email."
          : "Happy to walk through any of the work above. The fastest way to reach me is email."
      }
    >
      <Reveal>
        <div className="rounded-xl border border-line bg-panel p-6 sm:p-10">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 text-xl font-medium tracking-tight text-ink transition-colors hover:text-signal sm:text-3xl"
          >
            <Mail className="h-5 w-5 shrink-0 text-ink-3 transition-colors group-hover:text-signal sm:h-6 sm:w-6" />
            <span className="break-all">{profile.email}</span>
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-8">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-85"
            >
              <FileText className="h-4 w-4" />
              View résumé
            </a>

            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
              >
                {label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

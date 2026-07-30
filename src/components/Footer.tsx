import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-ink-3">
          © {new Date().getFullYear()} {profile.name} — {profile.location}
        </p>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-mono text-xs text-ink-3 transition-colors hover:text-ink"
        >
          Back to top
          <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}

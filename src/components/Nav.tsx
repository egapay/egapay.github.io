import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { profile, sections } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const lastSectionId = sections[sections.length - 1].id;

export default function Nav() {
  const [observed, setObserved] = useState("");
  const [atBottom, setAtBottom] = useState(false);
  const [inHero, setInHero] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // The observer only reports what it sees, so two positions need overriding:
  // the last section sits below max scroll and never reaches the centre band,
  // and scrolling back to the hero leaves the previous match stuck on.
  const active = atBottom ? lastSectionId : inHero ? "" : observed;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setAtBottom(
        window.innerHeight + y >= document.documentElement.scrollHeight - 48,
      );
      const first = document.getElementById(sections[0].id);
      setInHero(!first || y < first.offsetTop - window.innerHeight * 0.45);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]) setObserved(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-canvas/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 shrink-0"
          aria-label="Back to top"
        >
          <span className="h-2 w-2 rounded-[1px] bg-signal transition-transform duration-300 group-hover:scale-125" />
          <span className="label-mono text-ink transition-colors group-hover:text-signal">
            {profile.name}
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden items-center gap-1 sm:flex">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={cn(
                  "label-mono rounded px-3 py-2 transition-colors",
                  active === id
                    ? "text-signal"
                    : "text-ink-3 hover:text-ink",
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono inline-flex items-center gap-2 rounded-md border border-line-strong px-3 py-2 text-ink transition-colors hover:border-signal hover:text-signal"
          >
            <FileText className="h-3.5 w-3.5" />
            Résumé
          </a>
        </div>
      </div>
    </header>
  );
}

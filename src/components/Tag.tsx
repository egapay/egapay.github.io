import type { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-line bg-panel px-2 py-1 font-mono text-[11px] text-ink-2">
      {children}
    </span>
  );
}

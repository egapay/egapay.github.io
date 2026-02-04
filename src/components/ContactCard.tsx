import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactBar() {
  return (
    <div className="col-span-12 md:col-span-7 row-span-1 bg-gradient-to-r from-cyan-900/60 to-teal-900/60 rounded-3xl p-5 flex items-center justify-between border border-cyan-700 shadow-xl shadow-cyan-900/30">
      {/* Email */}
      <div className="flex items-center gap-4">
        <Mail className="w-5 h-5 text-cyan-300" />
        <span className="text-slate-200 font-medium">
          <a href="mailto:ethantgapay@gmail.com">ethantgapay@gmail.com</a>
        </span>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="rounded-xl text-slate-200 hover:bg-cyan-800/50"
        >
          <a
            href="https://www.linkedin.com/in/ethan-gapay/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          asChild
          className="rounded-xl text-slate-200 hover:bg-cyan-800/50"
        >
          <a
            href="https://github.com/egapay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}

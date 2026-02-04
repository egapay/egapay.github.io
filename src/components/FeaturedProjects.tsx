import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "Blackjack Game Analysis",
    description: "Understanding the odds and strategies of blackjack",
    tags: ["Python", "SQL", "Pandas", "PowerBI", "Database Design"],
    href: "https://egapay.github.io/blackjack-analysis/"
  },
  {
    title: "Omni-Goods Dashboard",
    description: "Regional sales dashboard for company stakeholders",
    tags: ["PowerBI", "Excel"],
    href: "https://egapay.github.io/omni-goods-dashboard/"
  },
  {
    title: "Top Steam Game Analysis",
    description: "Analysis on the top 100 games on Steam",
    tags: ["Python", "SQL", "Pandas", "PowerBI"],
    href: "https://egapay.github.io/steam-game-analysis/"
  },
  {
    title: "Margo's Dream Foundation",
    description: "Website for non-profit organization",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    href: "https://www.margosdreamfoundation.com/home"
  },
  {
    title: "RIT iSchool Website Redesign",
    description: "Rehauling the RIT iSchool student website",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    href: "https://people.rit.edu/~etg5588/ISTE340/iSchoolProject/"
  },
];

export default function FeaturedProjects() {
  return (
    <Card className="col-span-12 md:col-span-5 row-span-3 rounded-3xl">
      <CardHeader>
        <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Featured Projects
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3 overflow-y-auto px-2 sm:px-4 max-h-[420px] scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href ?? "#"}
            target={project.href ? "_blank" : undefined}
            rel={project.href ? "noopener noreferrer" : undefined}
            className="group"
          >
            <Card className="transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 border-cyan-300/50 hover:shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-slate-800 group-hover:text-cyan-700 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyan-600 transition-colors" />
                </div>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground
                                 group-hover:bg-cyan-100 group-hover:text-cyan-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </CardContent>
    </Card>
  );
}

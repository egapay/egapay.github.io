import {
  TrendingUp,
  Database,
  PieChart,
  BarChart3,
} from "lucide-react";

const skills = [
  {
    label: "Python",
    icon: TrendingUp,
  },
  {
    label: "SQL",
    icon: Database,
  },
  {
    label: "Pandas",
    icon: PieChart,
  },
  {
    label: "Excel",
    icon: BarChart3,
  },
];

export default function CoreSkills() {
  return (
    <div className="col-span-12 md:col-span-7 row-span-2 bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl shadow-slate-900/50">
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
        Core Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[calc(100%-2rem)]">
        {skills.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="bg-slate-700 rounded-2xl p-4 flex flex-col items-center justify-center gap-2
                       border border-slate-600 cursor-default group
                       transition-all duration-300
                       hover:bg-gradient-to-br hover:from-cyan-900/60 hover:to-teal-900/60
                       hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-101
                       hover:border-cyan-500/50"
          >
            <Icon className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
            <span className="font-medium text-slate-300 group-hover:text-cyan-300 transition-colors">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";

export default function ProfileCard() {
  return (
    <div className="col-span-12 md:col-span-5 row-span-3 bg-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden border border-slate-700 shadow-2xl shadow-cyan-900/20">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-38 md:w-64 h-40 md:h-64 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-30 md:w-48 h-32 md:h-48 bg-teal-500/20 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Profile image */}
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-500 mb-4 md:mb-6 overflow-hidden shadow-lg">
          <img
            src="egapay.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 rounded-full mb-3 md:mb-4">
          <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-400 text-xs md:text-sm font-medium">
            Currently Working
          </span>
        </div>

        {/* Text */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-3 tracking-tight">
          Ethan Gapay
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-slate-400 font-light">
          Data Analyst
        </p>

        <p className="text-slate-500 mt-2 md:mt-4 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
          Transforming complex data into actionable insights that drive business decisions.
        </p>

        {/* Resume button */}
        <Button
          asChild
          className="mt-4 md:mt-6 w-full md:w-fit rounded-xl bg-white text-slate-900 hover:bg-slate-300 p-3 md:p-4 border 
                     hover:shadow-xl 
                     transition-all duration-300 
                     shadow-lg shadow-slate-900/50"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            <span className="text-sm md:text-base">View Resume</span>
          </a>
        </Button>
      </div>
    </div>
  );
}

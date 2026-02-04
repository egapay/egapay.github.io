export function StatCard({ value, label }: { value: string; label: string }) {
    return (
        <div className="bg-slate-800 rounded-3xl p-6 border 
                        border-slate-700 flex flex-col items-center 
                        justify-center text-center hover:border-cyan-500 hover:shadow-xl 
                        hover:shadow-cyan-500/20 hover:scale-101 transition-all duration-300 
                        shadow-lg shadow-slate-900/50" style={{ opacity: 1, transform: 'none' }}>
            <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                {value}
            </span>
            <span className="text-slate-400 mt-2 text-sm">{label}</span>
        </div>
    );
}

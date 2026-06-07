const skills = [
  { name: "Rust",        color: "text-orange-400",   bg: "bg-orange-400/10",  border: "border-orange-400/20" },
  { name: "TypeScript",  color: "text-blue-400",     bg: "bg-blue-400/10",    border: "border-blue-400/20" },
  { name: "JavaScript",  color: "text-yellow-400",   bg: "bg-yellow-400/10",  border: "border-yellow-400/20" },
  { name: "Python",      color: "text-green-400",    bg: "bg-green-400/10",   border: "border-green-400/20" },
  { name: "React",       color: "text-sky-400",      bg: "bg-sky-400/10",     border: "border-sky-400/20" },
  { name: "Next.js",     color: "text-zinc-100",     bg: "bg-zinc-100/10",    border: "border-zinc-100/20" },

  { name: "Tauri",       color: "text-amber-400",    bg: "bg-amber-400/10",   border: "border-amber-400/20" },
  { name: "Electron",    color: "text-cyan-400",     bg: "bg-cyan-400/10",    border: "border-cyan-400/20" },
  { name: "MongoDB",     color: "text-emerald-400",  bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
  { name: "SQLite",      color: "text-indigo-400",   bg: "bg-indigo-400/10",  border: "border-indigo-400/20" },
];

export default function Skills() {
  return (
    <section className="animate-fade-in space-y-4">
      <h2 className="font-mono text-sm font-semibold text-fg">&gt; stack</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s.name}
            className={`font-mono text-xs border ${s.border} ${s.bg} ${s.color} rounded-full px-3 py-1 transition-all duration-300 hover:scale-105 hover:brightness-125`}
          >
            {s.name}
          </span>
        ))}
      </div>
    </section>
  );
}

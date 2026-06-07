const experience = [
  {
    role: "Freelance Developer",
    period: "2024 — present",
    desc: "Building desktop apps, backend services and AI tools",
  },
];

export default function Experience() {
  return (
    <section className="animate-fade-in space-y-4">
      <h2 className="font-mono text-sm font-semibold text-fg">&gt; experience</h2>
      <div className="space-y-4">
        {experience.map((e, i) => (
          <div key={e.role} className="relative pl-5 border-l border-border">
            <div className="timeline-dot absolute -left-[4.5px] top-1 size-2 rounded-full bg-accent" />
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-mono text-sm text-fg">{e.role}</span>
              <span className="font-mono text-xs text-muted/50">{e.period}</span>
            </div>
            <p className="font-mono text-xs text-muted mt-1">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

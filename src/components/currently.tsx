export default function Currently() {
  return (
    <section className="animate-fade-in space-y-4">
      <h2 className="font-mono text-sm font-semibold text-fg">&gt; now</h2>
      <div className="rounded-lg border border-border bg-surface p-4 space-y-2">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">focus:</span> learning rust, ai, backend
        </p>
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">status:</span> building skills, experimenting with side projects
        </p>
        <p className="font-mono text-xs text-muted/50 italic">
          no active projects in production — just learning
        </p>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="animate-fade-in flex flex-col items-center gap-6 py-8">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl animate-glow" />
        <img
          src="https://avatars.githubusercontent.com/u/182519272?v=4"
          alt="aitryhard"
          className="relative size-20 rounded-full border border-border"
        />
      </div>
      <div className="text-center space-y-3">
        <h1 className="font-mono text-2xl font-bold tracking-tight">
          <span className="text-accent">&gt;</span> aitryhard
        </h1>
        <p className="font-mono text-sm text-muted">
          <span className="typewriter">desktop apps · backend · ai</span>
        </p>
        <p className="font-mono text-xs text-muted/60">
          actively learning, building, practicing
        </p>
        <span className="inline-block font-mono text-[10px] uppercase tracking-wider border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 rounded-full px-3 py-1">
          open to work
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="https://github.com/aitryhard"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs border border-border rounded-full px-4 py-1.5 text-muted hover:text-fg hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
        >
          gh/aitryhard
        </a>
        <a
          href="https://t.me/aitryhard"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs border border-border rounded-full px-4 py-1.5 text-muted hover:text-fg hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
        >
          tg/@aitryhard
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=a1tryh4rd@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs border border-border rounded-full px-4 py-1.5 text-muted hover:text-fg hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
        >
          a1tryh4rd@gmail.com
        </a>
      </div>
    </section>
  );
}

const projects = [
  {
    name: "AIVEX",
    desc: "Desktop AI assistant built with Tauri, Electron and modern web technologies",
    tech: ["Tauri", "Electron", "React"],
    url: "https://github.com/aitryhard/AIVEX",
    repo: "aitryhard/AIVEX",
  },
  {
    name: "aivex-site",
    desc: "Landing page for the AIVEX AI desktop assistant",
    tech: ["HTML", "CSS"],
    url: "https://github.com/aitryhard/aivex-site",
    repo: "aitryhard/aivex-site",
  },
  {
    name: "taskmanager",
    desc: "Minimal task management application built with React and Node.js",
    tech: ["React", "Node.js"],
    url: "https://github.com/aitryhard/taskmanager",
    repo: "aitryhard/taskmanager",
  },
  {
    name: "tic-tac-toe",
    desc: "Classic tic-tac-toe game built with Rust + Yew — play against AI or a friend",
    tech: ["Rust", "Yew", "WASM"],
    url: "https://github.com/aitryhard/tic-tac-toe",
    repo: "aitryhard/tic-tac-toe",
  },
  {
    name: "follow-the-rabbit",
    desc: "Interactive rabbit trail game with modern UI — Next.js, TypeScript, Tailwind",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://github.com/aitryhard/follow-the-rabbit",
    repo: "aitryhard/follow-the-rabbit",
  },
  {
    name: "rss-digest",
    desc: "AI-powered RSS digest bot for Telegram — parses feeds, summarizes with Ollama",
    tech: ["Rust", "Ollama", "Telegram"],
    url: "https://github.com/aitryhard/rss-digest",
    repo: "aitryhard/rss-digest",
  },
];

export default function Projects() {
  return (
    <section className="animate-fade-in space-y-4">
      <h2 className="font-mono text-sm font-semibold text-fg">&gt; projects</h2>
      <div className="grid gap-3">
        {projects.map((p, i) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-border bg-surface p-4 transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.02] hover:shadow-[0_0_24px_rgba(59,130,246,0.06)]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-mono text-sm text-fg group-hover:text-accent transition-colors">
                &gt; {p.name}
              </h3>
              <img
                src={`https://img.shields.io/github/stars/${p.repo}?style=flat&logo=github&color=3b82f6&label=`}
                alt="stars"
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="font-mono text-xs text-muted mt-1.5 leading-relaxed">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] border border-border rounded px-1.5 py-0.5 text-muted/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

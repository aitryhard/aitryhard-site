'use client'

import { useEffect, useState } from "react"

type Repo = {
  name: string
  language: string | null
  stargazers_count: number
  fork: boolean
}

type UserData = {
  public_repos: number
  followers: number
}

function aggregateLanguages(repos: Repo[]): [string, number][] {
  const langs: Record<string, number> = {}
  for (const r of repos) {
    if (r.language) {
      langs[r.language] = (langs[r.language] || 0) + 1
    }
  }
  return Object.entries(langs)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
}

const langColors: Record<string, string> = {
  Rust: "bg-orange-400",
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-400",
  HTML: "bg-orange-500",
  CSS: "bg-purple-400",
}

export default function GithubStats() {
  const [user, setUser] = useState<UserData | null>(null)
  const [langs, setLangs] = useState<[string, number][]>([])
  const total = langs.reduce((s, [, c]) => s + c, 0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/aitryhard"),
          fetch("https://api.github.com/users/aitryhard/repos?per_page=100&sort=pushed"),
        ])
        const userData: UserData = await userRes.json()
        const repos: Repo[] = await reposRes.json()
        setUser(userData)
        setLangs(aggregateLanguages(repos.filter((r) => !r.fork)))
      } catch {
        // silently fail
      }
    }
    fetchData()
  }, [])

  return (
    <section className="animate-fade-in space-y-4">
      <h2 className="font-mono text-sm font-semibold text-fg">&gt; github</h2>
      {user && (
        <div className="flex gap-4 text-xs font-mono text-muted">
          <span>repos: {user.public_repos}</span>
          <span>followers: {user.followers}</span>
        </div>
      )}
      {langs.length > 0 && (
        <div className="space-y-2">
          <div className="flex h-2 w-full overflow-hidden rounded-full bg-border">
            {langs.map(([lang, count]) => (
              <div
                key={lang}
                className={`${langColors[lang] || "bg-zinc-500"} transition-all`}
                style={{ width: `${(count / total) * 100}%` }}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {langs.map(([lang, count]) => (
              <span key={lang} className="font-mono text-xs text-muted flex items-center gap-1.5">
                <span className={`inline-block size-2 rounded-full ${langColors[lang] || "bg-zinc-500"}`} />
                {lang} {Math.round((count / total) * 100)}%
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

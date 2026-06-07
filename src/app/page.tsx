import Hero from "@/components/hero";
import Skills from "@/components/skills";
import GithubStats from "@/components/github-stats";
import Projects from "@/components/projects";
import Currently from "@/components/currently";
import Experience from "@/components/experience";
import Contacts from "@/components/contacts";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto max-w-xl px-6 py-16 space-y-14">
        <Hero />
        <Skills />
        <GithubStats />
        <Projects />
        <Currently />
        <Experience />
        <Contacts />
        <footer className="font-mono text-xs text-muted/40 pt-8 border-t border-border text-center">
          <p>&gt; aitryhard / 2026</p>
        </footer>
      </div>
    </div>
  );
}

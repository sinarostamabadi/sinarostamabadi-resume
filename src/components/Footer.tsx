import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="section-pad relative z-10 border-t border-line py-8">
      <div className="container-wide flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-semibold">
          {profile.name}
          <span className="text-accent">.</span>
        </p>
        <p className="text-sm text-muted">Full Stack Developer · Built with intention · 2026</p>
      </div>
    </footer>
  );
}

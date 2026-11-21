"use client";

import { useApp } from "@/context/AppProviders";

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="section-pad relative z-10 border-t border-line py-8">
      <div className="container-wide flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-semibold">
          {t.profile.name}
          <span className="text-accent">.</span>
        </p>
        <p className="text-sm text-muted">{t.footer.line}</p>
      </div>
    </footer>
  );
}

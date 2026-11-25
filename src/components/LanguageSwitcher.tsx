"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { useApp } from "@/context/AppProviders";
import { locales, type Locale } from "@/data/translations";

const flags: Record<Locale, { label: string; Flag: () => ReactNode }> = {
  en: { label: "United Kingdom", Flag: FlagEN },
  fa: { label: "Iran", Flag: FlagFA },
  tr: { label: "Turkey", Flag: FlagTR },
};

export function LanguageSwitcher() {
  const { t, locale, setLocale } = useApp();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const CurrentFlag = flags[locale].Flag;

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const select = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div className="lang-switcher" ref={rootRef}>
      <button
        type="button"
        className="chrome-btn lang-switcher-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={t.chrome.language}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="lang-flag" aria-hidden>
          <CurrentFlag />
        </span>
        <span>{t.chrome.languages[locale]}</span>
        <ChevronIcon open={open} />
      </button>

      {open ? (
        <ul id={listId} role="listbox" className="lang-switcher-menu" aria-label={t.chrome.language}>
          {locales.map((code) => {
            const active = code === locale;
            const { Flag } = flags[code];
            return (
              <li key={code} role="option" aria-selected={active}>
                <button
                  type="button"
                  className={`lang-switcher-option ${active ? "is-active" : ""}`}
                  onClick={() => select(code)}
                >
                  <span className="lang-flag" aria-hidden>
                    <Flag />
                  </span>
                  <span>{t.chrome.languages[code]}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function FlagEN() {
  return (
    <svg viewBox="0 0 60 40" width="18" height="12" aria-hidden>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="5" />
      <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="13" />
      <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  );
}

function FlagFA() {
  return (
    <svg viewBox="0 0 60 40" width="18" height="12" aria-hidden>
      <rect width="60" height="13.33" y="0" fill="#239F40" />
      <rect width="60" height="13.34" y="13.33" fill="#fff" />
      <rect width="60" height="13.33" y="26.67" fill="#DA0000" />
      <circle cx="30" cy="20" r="4.2" fill="none" stroke="#DA0000" strokeWidth="1.2" />
    </svg>
  );
}

function FlagTR() {
  return (
    <svg viewBox="0 0 60 40" width="18" height="12" aria-hidden>
      <rect width="60" height="40" fill="#E30A17" />
      <circle cx="25" cy="20" r="9" fill="#fff" />
      <circle cx="28" cy="20" r="7.2" fill="#E30A17" />
      <path
        fill="#fff"
        d="M34.8 20l3.4-1.1-2.1 2.9.1-3.6 2.8 2.2-3.6-.1 2.1-2.9z"
        transform="translate(-1 0)"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`lang-switcher-chevron ${open ? "is-open" : ""}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

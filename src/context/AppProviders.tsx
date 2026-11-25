"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { locales, translations, type Locale, type Translation } from "@/data/translations";

type Theme = "light" | "dark";

type AppContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
  dir: "ltr" | "rtl";
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value !== null && (locales as string[]).includes(value);
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("sig-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("sig-locale");
  if (isLocale(stored)) return stored;
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("fa")) return "fa";
  if (lang.startsWith("tr")) return "tr";
  return "en";
}

export function AppProviders({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setThemeState(getInitialTheme());
    setLocaleState(getInitialLocale());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    window.localStorage.setItem("sig-theme", theme);
  }, [theme, ready]);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    const dir = locale === "fa" ? "rtl" : "ltr";
    root.lang = locale;
    root.dir = dir;
    root.dataset.locale = locale;
    window.localStorage.setItem("sig-locale", locale);
  }, [locale, ready]);

  const setTheme = useCallback((next: Theme) => setThemeState(next), []);
  const toggleTheme = useCallback(
    () => setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
    [],
  );
  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);

  const value = useMemo<AppContextValue>(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
      dir: locale === "fa" ? "rtl" : "ltr",
      theme,
      setTheme,
      toggleTheme,
    }),
    [locale, setLocale, theme, setTheme, toggleTheme],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProviders");
  return ctx;
}

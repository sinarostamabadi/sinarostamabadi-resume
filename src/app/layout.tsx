import type { Metadata } from "next";
import { Figtree, Unbounded, IBM_Plex_Mono, Vazirmatn } from "next/font/google";
import { AppProviders } from "@/context/AppProviders";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sina Rostamabadi — Kinetic Studio",
  description:
    "Creative portfolio of Sina Rostamabadi — Full Stack Developer specializing in React, Next.js and NestJS.",
  keywords: ["Sina Rostamabadi", "Full Stack Developer", "React", "Next.js", "NestJS"],
  authors: [{ name: "Sina Rostamabadi" }],
  openGraph: {
    title: "Sina Rostamabadi — Kinetic Studio",
    description: "Systems that feel inevitable — React, Next.js and NestJS.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${figtree.variable} ${unbounded.variable} ${ibm.variable} ${vazirmatn.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("ks-theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");document.documentElement.dataset.theme="dark";}var l=localStorage.getItem("ks-locale");var nav=navigator.language.toLowerCase();var locale=(l==="en"||l==="fa"||l==="tr")?l:(nav.indexOf("fa")===0?"fa":nav.indexOf("tr")===0?"tr":"en");document.documentElement.lang=locale;document.documentElement.dataset.locale=locale;document.documentElement.dir=locale==="fa"?"rtl":"ltr";}catch(e){}})();`,
          }}
        />
      </head>
      <body className="relative flex min-h-full flex-col bg-paper font-sans text-ink">
        <div className="grain" aria-hidden />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

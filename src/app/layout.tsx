import type { Metadata } from "next";
import { Figtree, Unbounded, IBM_Plex_Mono } from "next/font/google";
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
      className={`${figtree.variable} ${unbounded.variable} ${ibm.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-paper font-sans text-ink">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}

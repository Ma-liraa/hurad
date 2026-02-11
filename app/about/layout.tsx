import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Hurad (Mohammad Ali Liravi) — Frontend Engineer focused on React, Next.js, TypeScript, UI architecture, and performance-driven web applications.",

  openGraph: {
    title: "About Hurad — Frontend Engineer",
    description:
      "Learn more about Hurad’s background, frontend expertise, and technical philosophy.",
    url: "https://hurad.dev/about",
  },

  twitter: {
    title: "About Hurad",
    description: "Frontend engineer specialized in modern React stack.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

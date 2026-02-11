import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hurad.dev"), // بعداً دامینت رو بگذار

  title: {
    default:
      "Hurad Dev Portfolio — Frontend Engineer | Next.js & React Specialist",
    template: "%s | Hurad Dev Portfolio",
  },

  description:
    "Hurad (Mohammad Ali Liravi) — Frontend Engineer specialized in React, Next.js, and TypeScript. Building modern, high-performance, and user-focused web applications.",

  keywords: [
    "Hurad",
    "Mohammad Ali Liravi",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "TailwindCSS",
    "UI Engineer",
    "Web Performance",
    "Frontend Portfolio",
  ],

  authors: [{ name: "Mohammad Ali Liravi (Hurad)" }],
  creator: "Hurad",
  publisher: "Hurad",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Hurad Dev Portfolio",
    description:
      "Modern frontend portfolio built with Next.js, TypeScript, and Tailwind. Clean UI, smooth motion, and scalable architecture.",
    url: "https://hurad.dev",
    siteName: "Hurad Dev Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Hurad Dev Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hurad — Frontend Engineer",
    description: "React & Next.js specialist building modern web experiences.",
    images: ["/banner.png"],
    creator: "@ma__lira",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`dark ${inter.className}`}>
      <body className="h-screen bg-zinc-50 dark:bg-black">
        <div className="mx-auto flex w-full max-w-7xl flex-col bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
          <div className="p-4 lg:px-8">
            <Navbar />
          </div>
          <div className="lg:px-8">{children}</div>
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

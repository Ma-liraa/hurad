"use client";
import EmailIcon from "@/components/EmailIcon";
import SocialLinks from "@/components/SocialLinks";
import { GithubIcon } from "@/icons/GithubIcon";
import { LinkedinIcon } from "@/icons/LinkdinIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";

import SocialLinksProps from "@/type/SocialLinksProps";
import Image from "next/image";

const socialLinks: SocialLinksProps[] = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammad-ali-liravi?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    color: "#0077B5",
    icon: <LinkedinIcon />,
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/Ma-liraa",
    color: "#ffffff",
    icon: <GithubIcon />,
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://x.com/ma__lira",
    color: "#1DA1F2",
    icon: <TwitterIcon />,
  },
];

export default function About() {
  return (
    <main className="my-16 px-4 sm:mt-32 lg:px-0">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="mx-auto max-w-xs px-2.5 lg:mx-0 lg:max-w-none">
            <div className="group relative aspect-square rotate-3 overflow-hidden rounded-2xl bg-zinc-100 shadow-xl transition-all duration-500 hover:rotate-0 dark:bg-zinc-800">
              <Image
                src="/img.png"
                alt="hurad Liravi"
                fill
                sizes="1000px"
                className="object-cover object-top transition-all duration-500"
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {socialLinks.map((item) => (
              <SocialLinks key={item.id} {...item} />
            ))}

            <EmailIcon />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Hurad (Mohammad Ali Liravi) — a frontend engineer based in Iran,
            designing and building the future of the web.
          </h1>

          <div className="mt-6 space-y-7 text-justify text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve been passionate about creating things for as long as I can
              remember. My journey into software development started with a
              simple question:
              <span className="mr-2 ml-1 font-medium text-zinc-800 italic dark:text-zinc-200">
                “How do these pixels actually work?”
              </span>
              That curiosity quickly grew into a deep interest in building
              interfaces that are not only visually refined, but also reliable
              and performant in real-world scenarios.
            </p>

            <p>
              Today, I specialize in the
              <strong> React ecosystem</strong>, building modern web
              applications with
              <strong> Next.js</strong> and <strong> TypeScript</strong>. I’ve
              worked on complex production platforms — including
              <span className="mx-1 font-medium text-teal-600 dark:text-teal-400">
                financial and accounting systems
              </span>
              — where data accuracy, scalability, and performance are critical.
              My focus goes beyond writing code; I design structured,
              maintainable frontend solutions that support real business needs.
            </p>

            <p>
              My philosophy is simple:
              <strong> user experience comes first.</strong> From large
              dashboards to small micro-interactions, I aim for clarity,
              accessibility, speed, and clean architecture. I believe the best
              software feels invisible — powerful under the hood, effortless on
              the surface.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

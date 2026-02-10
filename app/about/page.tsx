"use client";
import SocialLinks from "@/components/SocialLinks";
import { AtSignIcon } from "@/icons/AtSignIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import { LinkedinIcon } from "@/icons/LinkdinIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";
import SocialLinksProps from "@/type/SocialLinksProps";
import Image from "next/image";

const socialLinks: SocialLinksProps[] = [
  {
    id: 1,
    name: "LinkedIn",
    url: "#",
    color: "#0077B5",
    icon: <LinkedinIcon />,
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/hurad-dev",
    color: "#ffffff",
    icon: <GithubIcon />,
  },
  {
    id: 3,
    name: "Twitter",
    url: "#",
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
                className="object-cover object-top transition-all duration-500"
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {socialLinks.map((item) => (
              <SocialLinks key={item.id} {...item} />
            ))}

            <a
              href="mailto:hurad@example.com"
              className="group col-span-3 flex w-full items-center gap-x-3 rounded-xl border border-zinc-200 px-4 py-3 transition-all hover:bg-zinc-50 dark:border-zinc-700/50 dark:hover:bg-zinc-800/50"
            >
              <AtSignIcon />
              <span className="text-sm font-medium text-zinc-600 group-hover:text-teal-500 dark:text-zinc-400">
                hurad@example.com
              </span>
            </a>
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl leading-tight font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m hurad Liravi. I live in Iran, where I design the future of the
            web.
          </h1>

          <div className="mt-6 space-y-7 text-justify text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things for as long as I can remember. My journey
              into software engineering started with a simple curiosity:
              <span className="font-medium text-zinc-800 italic dark:text-zinc-200">
                "How do these pixels actually work?"
              </span>
              . That curiosity quickly turned into a passion for building
              interfaces that not only look sleek but function flawlessly under
              pressure.
            </p>

            <p>
              Today, I’m a frontend engineer specialized in the
              <strong>React ecosystem</strong>. I’ve had the privilege of
              architecting complex platforms, including comprehensive
              <span className="font-medium text-teal-600 dark:text-teal-400">
                financial accounting systems
              </span>
              where data accuracy and performance are paramount. I don't just
              write code; I build scalable solutions using
              <strong>Next.js</strong> and <strong>TypeScript</strong> that
              solve real-world business problems.
            </p>

            <p>
              My philosophy is simple:
              <strong>User experience is everything.</strong> Whether I'm
              optimizing a heavy dashboard or crafting a micro-interaction, I
              strive for clean code, accessibility, and speed. I believe that
              the best software feels invisible—it just works.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

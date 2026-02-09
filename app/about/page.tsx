"use client";
import { AtSignIcon } from "@/icons/AtSignIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import { LinkedinIcon } from "@/icons/LinkdinIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";
import Image from "next/image";

// 1. تعریف آرایه شبکه‌های اجتماعی با رنگ‌های دقیق برند
const socialLinks = [
  {
    name: "LinkedIn",
    url: "#",
    color: "#0077B5", // آبی لینکدین
    icon: <LinkedinIcon />,
  },
  {
    name: "GitHub",
    url: "https://github.com/hoorad-dev", // لینک خودت را بگذار
    color: "#ffffff", // سفید برای کنتراست در دارک مود
    icon: <GithubIcon />,
  },

  {
    name: "Twitter",
    url: "#",
    color: "#1DA1F2", // آبی روشن توییتر (برای دیده شدن بهتر در دارک مود) یا سفید #FFFFFF
    icon: <TwitterIcon />,
  },
];

export default function About() {
  return (
    <main className="my-16 px-4 sm:mt-32 md:px-0">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        {/* === ستون سمت راست: عکس و لینک‌ها (Sidebar) === */}
        <div className="lg:pl-20">
          <div className="mx-auto max-w-xs px-2.5 lg:mx-0 lg:max-w-none">
            {/* عکس پروفایل */}
            <div className="group relative aspect-square rotate-3 overflow-hidden rounded-2xl bg-zinc-100 shadow-xl transition-all duration-500 hover:rotate-0 dark:bg-zinc-800">
              <Image
                src="/img.png" // آدرس عکس خودت
                alt="Hoorad Liravi"
                fill
                className="object-cover object-top transition-all duration-500"
              />
            </div>
          </div>

          {/* لیست شبکه‌های اجتماعی با استایل درخواستی شما */}
          <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="group relative flex items-center justify-center gap-x-2 rounded-xl border px-4 py-2.5 transition-all duration-300 ease-in-out hover:scale-105"
                style={{
                  backgroundColor: `${item.color}0D`, // شفافیت 5% برای بک‌گراند
                  borderColor: `${item.color}33`, // شفافیت 20% برای بوردر
                }}
                // اضافه کردن استایل‌های هاور به صورت داینامیک
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}80`;
                  e.currentTarget.style.backgroundColor = `${item.color}1A`;
                  e.currentTarget.style.boxShadow = `0 0 15px ${item.color}30`; // درخشش همرنگ
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}33`;
                  e.currentTarget.style.backgroundColor = `${item.color}0D`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* آیکون با رنگ اصلی */}
                <span style={{ color: item.color }}>{item.icon}</span>

                {/* نام شبکه اجتماعی */}
                <span className="text-sm font-semibold text-zinc-400 transition-colors group-hover:text-zinc-100">
                  {item.name}
                </span>
              </a>
            ))}

            {/* ایمیل به عنوان دکمه جداگانه */}
            <a
              href="mailto:hoorad@example.com"
              className="group col-span-3 flex w-full items-center gap-x-3 rounded-xl border border-zinc-200 px-4 py-3 transition-all hover:bg-zinc-50 dark:border-zinc-700/50 dark:hover:bg-zinc-800/50"
            >
              <AtSignIcon />
              <span className="text-sm font-medium text-zinc-600 group-hover:text-teal-500 dark:text-zinc-400">
                hoorad@example.com
              </span>
            </a>
          </div>
        </div>

        {/* === ستون سمت چپ: متن بیوگرافی (About Content) === */}
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl leading-tight font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Hoorad Liravi. I live in Iran, where I design the future of the
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

"use client";

import { ProjectItem } from "@/components/ProjectItme";
import { GithubIcon } from "@/icons/GithubIcon";
import { LinkedinIcon } from "@/icons/LinkdinIcon";
import { LinkIcon } from "@/icons/LinkIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";

export default function Home() {
  const skills = [
    // --- Core & Languages ---
    { name: "HTML5", color: "#E34F26", category: "Core" },
    { name: "CSS3", color: "#1572B6", category: "Core" },
    { name: "JavaScript", color: "#F7DF1E", category: "Language" },
    { name: "TypeScript", color: "#3178C6", category: "Language" },
    { name: "Python", color: "#3776AB", category: "Language" },

    // --- Frontend Frameworks & Libraries ---
    { name: "React", color: "#61DAFB", category: "Library" },
    { name: "Next.js", color: "#FFFFFF", category: "Framework" },
    { name: "React Query", color: "#FF4154", category: "Library" },
    { name: "React Router", color: "#CA4245", category: "Library" },
    { name: "React Hook Form", color: "#EC5990", category: "Library" },

    // --- Styling ---
    { name: "Tailwind CSS", color: "#38B2AC", category: "Design" },
    { name: "Bootstrap", color: "#7952B3", category: "Design" },

    // --- Backend ---
    { name: "Node.js", color: "#339933", category: "Backend" }, // اگر خواستی فعال کن
    { name: "Express.js", color: "#FFFFFF", category: "Backend" },
    { name: "Nodemon", color: "#76D04B", category: "Tool" },

    // --- Tools & DevOps ---
    { name: "Git", color: "#F05032", category: "Tools" },
    { name: "GitHub", color: "#FFFFFF", category: "Tools" },
    { name: "Postman", color: "#FF6C37", category: "Tools" },
    { name: "Swagger", color: "#85EA2D", category: "Tools" },
    { name: "VS Code", color: "#007ACC", category: "Tools" },
    { name: "NPM", color: "#CB3837", category: "Tools" },
  ];
  const projects = [
    {
      id: 1,
      name: "Hoorad Acc",
      description:
        "Creating technology to empower civilians to explore space on their own terms.",
      link: "github.com/hoorad/acc",
      color: "#10b981", // سبز زمردی برای حس مالی
      gallery: ["/img2.jpg", "/img.png"],
    },
    {
      id: 2,
      name: "Admin Panel",
      description:
        "Creating technology to empower civilians to explore space on their own terms.",
      link: "github.com/hoorad/admin",
      color: "#3b82f6", // آبی متالیک
    },
    {
      id: 3,
      name: "Crypto Tracker",
      description:
        "Creating technology to empower civilians to explore space on their own terms.",
      link: "github.com/hoorad/crypto",
      color: "#f59e0b", // نارنجی طلایی
    },
  ];
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

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center p-4 pt-6 lg:max-w-5xl lg:p-0">
      {/* info section */}
      <section className="relative mt-16">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          {/* بخش متن معرفی */}
          <div className="lg:order-1 lg:row-span-2">
            {/* بخش سلام و خوشامدگویی */}
            <div className="animate-bounce-slow mb-4 flex items-center gap-2">
              <span className="text-2xl">👋</span>
              <span className="text-sm font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
                Hello, I’m
              </span>
            </div>

            <h1 className="text-4xl leading-tight font-bold tracking-tight text-zinc-800 sm:text-5xl lg:text-6xl dark:text-zinc-100">
              Frontend developer, <br className="hidden md:block" />
              <span className="text-teal-500">React specialist</span>, and UI
              enthusiast.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I’m
              <span className="decoration ml-1 font-semibold text-zinc-800 underline decoration-teal-500/30 underline-offset-4 dark:text-zinc-100">
                Hoorad
              </span>
              , a frontend engineer based in Iran. I specialize in building
              high-performance web applications with a focus on clean code and
              exceptional user experiences.
            </p>

            {/* آیکون‌های شبکه‌های اجتماعی */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
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
                  <span
                    style={{ color: item.color }}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                  >
                    {item.icon}
                  </span>

                  {/* نام شبکه اجتماعی با رنگ‌بندی بهینه شده برای لایت و دارک */}
                  <span className="text-sm font-semibold text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* skils */}
      <section className="relative mt-12 flex min-h-100 w-full items-center justify-center overflow-hidden py-10 md:mt-24">
        {/* Skills Text - Responsive Size */}
        <h2
          className="pointer-events-none absolute top-0 text-[22vw] leading-none font-black tracking-tighter text-transparent opacity-20 select-none"
          style={{
            WebkitTextStroke: "1.5px rgba(244, 244, 245, 0.3)",
            maskImage: "linear-gradient(to bottom, black 60%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 90%)",
          }}
        >
          SKILLS
        </h2>

        {/* Skills Container - Responsive Grid/Flex */}
        <div className="relative flex h-full w-full max-w-4xl flex-wrap items-center justify-center gap-3 px-4 md:gap-4 md:px-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex cursor-pointer items-center gap-x-2 rounded-full border px-3 py-1.5 transition-all duration-300 hover:scale-105 active:scale-95 md:gap-x-3 md:px-5 md:py-2.5"
              style={{
                backgroundColor: `${skill.color}0D`,
                borderColor: `${skill.color}33`,
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth > 768) {
                  // فقط در دسکتاپ افکت هاور فعال شود
                  e.currentTarget.style.borderColor = `${skill.color}80`;
                  e.currentTarget.style.backgroundColor = `${skill.color}1A`;
                  e.currentTarget.style.boxShadow = `0 0 25px ${skill.color}20`;
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${skill.color}33`;
                e.currentTarget.style.backgroundColor = `${skill.color}0D`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Glow Dot */}
              <span
                className="h-2 w-2 rounded-full md:h-2.5 md:w-2.5"
                style={{
                  backgroundColor: skill.color,
                  boxShadow: `0 0 10px ${skill.color}`,
                }}
              ></span>

              {/* Text - Smaller on Mobile */}
              <span
                className="transition-color text-xs font-bold tracking-wide md:text-sm"
                style={{ color: skill.color }}
              >
                {skill.name}
              </span>

              {/* Dynamic Glow Background */}
              <div
                className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: `${skill.color}1A` }}
              ></div>
            </div>
          ))}
        </div>
      </section>
      {/* ptojects*/}
      <section className="relative mt-16 w-full lg:px-0">
        {/* عنوان بخش با خطوط نئونی */}
        <div className="mb-12 flex items-center gap-x-6">
          <h2 className="min-w-fit text-2xl font-bold tracking-tight text-zinc-100">
            Featured Projects
          </h2>
          <div className="h-px w-full bg-linear-to-r from-zinc-700/50 to-transparent"></div>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              name={project.name}
              description={project.description}
              color={project.color}
              link={project.link}
              gallery={project.gallery}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

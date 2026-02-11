"use client";

import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import SocialLinksSection from "@/components/SocialLinksSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center p-4 pt-6 lg:p-0">
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
              Frontend Developer, <br className="hidden md:block" />
              <span className="text-teal-500">React Specialist</span>, and UI
              Enthusiast.
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I’m
              <span className=" ml-1 animate-pulse font-semibold text-teal-400">
                Hurad
              </span>
              , a frontend engineer based in Iran. I specialize in building
              high-performance web applications with a focus on clean code and
              exceptional user experiences.
            </p>

            {/* social media icons */}
            <SocialLinksSection />
          </div>
        </div>
      </section>
      {/* skils */}
      <SkillsSection />
      {/* projects*/}
      <ProjectsSection />
    </div>
  );
}

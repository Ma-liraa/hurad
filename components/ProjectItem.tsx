import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import { ExternalLink } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";
import { LinkIcon } from "@/icons/LinkIcon";
import ProjectProps from "@/types/ProjectProps";
import SkillItem from "./SkillItem";

export function ProjectItem({ project }: { project: ProjectProps }) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <Trigger {...project} />
      <DialogContainer {...project} />
    </MorphingDialog>
  );
}

export function Trigger({ name, shortDescription, link, color }: ProjectProps) {
  return (
    <MorphingDialogTrigger
      style={{ borderRadius: "24px" }}
      className="group relative flex h-80 cursor-pointer flex-col items-start overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition-all duration-500 hover:border-zinc-300 hover:bg-white hover:shadow-lg dark:border-zinc-800/50 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
    >
      <div
        className="absolute -inset-px z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at center, ${color}15, transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border-transparent bg-white shadow-sm ring-1 ring-zinc-200 transition-all duration-500 dark:bg-zinc-900 dark:ring-zinc-800">
        <div
          className="h-3 w-3 animate-pulse rounded-full transition-all duration-500 group-hover:scale-125"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 15px ${color}`,
          }}
        />
      </div>

      <div className="relative z-10 mt-6 flex flex-1 flex-col justify-between">
        <div className="flex flex-col items-start">
          <MorphingDialogTitle
            className="text-xl font-bold text-zinc-100 transition-colors group-hover:text-(--hover-color)"
            style={
              {
                "--hover-color": color,
              } as React.CSSProperties
            }
          >
            {name}
          </MorphingDialogTitle>

          <MorphingDialogSubtitle className="mt-2 flex text-start text-sm leading-relaxed text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-300">
            {shortDescription.length > 100
              ? shortDescription.slice(0, 200) + "..."
              : shortDescription}
          </MorphingDialogSubtitle>
        </div>
        <div className="mt-6 flex items-center gap-x-2 text-sm font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
          <LinkIcon />
          <span className="max-w-50 truncate">
            {link.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    </MorphingDialogTrigger>
  );
}

export function DialogContainer({
  name,
  longDescription,
  link,
  skills,
  gallery,
}: ProjectProps) {
  return (
    <MorphingDialogContainer>
      <MorphingDialogContent
        className="relative flex h-auto w-[90%] max-w-3xl flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl"
        style={{ borderRadius: "24px" }}
      >
        <div className="flex h-[85vh] flex-col overflow-y-auto">
          <div className="relative w-full">
            {gallery && gallery.length > 0 && (
              <ImageCarousel images={gallery} />
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <MorphingDialogTitle className="text-2xl font-bold text-zinc-900 md:text-3xl dark:text-zinc-100">
                  {name}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="mt-1 font-medium text-teal-600 dark:text-teal-400">
                  Frontend Development
                </MorphingDialogSubtitle>
              </div>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition-transform hover:scale-105 hover:bg-zinc-50 sm:flex dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                Visit Project <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="relative flex w-full flex-wrap items-center justify-center gap-3 px-4 py-10 md:gap-4 md:px-6">
              {skills?.map((skill) => (
                <SkillItem
                  key={skill.name}
                  color={skill.color}
                  name={skill.name}
                />
              ))}
            </div>

            <div className="mt-6 space-y-4 text-justify text-base leading-7 text-zinc-300">
              {longDescription}
            </div>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-800 px-4 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-700 sm:hidden"
            >
              Visit Project <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <MorphingDialogClose className="fixed top-4 right-4 z-50 rounded-full bg-zinc-900/50 p-2 text-zinc-400 backdrop-blur-sm hover:text-zinc-100" />
      </MorphingDialogContent>
    </MorphingDialogContainer>
  );
}

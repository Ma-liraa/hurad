import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import { LinkIcon, ExternalLink } from "lucide-react";
import { ImageCarousel } from "./ImageCarousel";

// پراپ gallery را هم اضافه کردم که اگر چندین عکس داشتی بتوانی پاس بدهی
export function ProjectItem({
  name,
  description,
  color,
  link,
  image,
  gallery = [],
}) {
  // ترکیب عکس اصلی و گالری برای ساخت لیست اسلایدها
  // اگر گالری خالی بود، فقط عکس اصلی را در آرایه می‌گذارد
  const carouselImages = gallery.length > 0 ? gallery : image ? [image] : [];

  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      {/* --- Trigger Card (همان کارت کوچک) --- */}
      <MorphingDialogTrigger
        style={{ borderRadius: "24px" }}
        className="group relative flex cursor-pointer flex-col items-start overflow-hidden rounded-3xl border border-transparent p-6 transition-all duration-500 hover:border-zinc-800 hover:bg-zinc-800/20"
      >
        <div
          className="absolute -inset-px z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at center, ${color}10, transparent 40%)`,
          }}
        />

        <div
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 shadow-md ring-1 transition-all duration-500"
          style={{
            boxShadow: `inset 0 0 10px ${color}10`,
            borderColor: `${color}20`,
          }}
        >
          <div
            className="h-3 w-3 animate-pulse rounded-full transition-all duration-500 group-hover:scale-125"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 15px ${color}`,
            }}
          />
        </div>

        <div className="relative z-10 mt-6 flex flex-col items-start">
          <MorphingDialogTitle className="text-xl font-bold text-zinc-100">
            {name}
          </MorphingDialogTitle>

          <MorphingDialogSubtitle className="mt-2 line-clamp-2 flex text-start text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
            {description}
          </MorphingDialogSubtitle>

          <div
            className="mt-6 flex items-center gap-x-2 text-sm font-medium transition-colors"
            style={{ color: "#a1a1aa" }}
          >
            <LinkIcon className="h-4 w-4" />
            <span className="max-w-50 truncate">
              {link.replace(/^https?:\/\//, "")}
            </span>
          </div>
        </div>
      </MorphingDialogTrigger>

      {/* --- Expanded Content (مودال باز شده) --- */}
      <MorphingDialogContainer>
        <MorphingDialogContent
          className="relative flex h-auto w-[90%] max-w-3xl flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl"
          style={{ borderRadius: "24px" }}
        >
          <div className="flex h-[85vh] flex-col overflow-y-auto md:h-auto bg-zinc-950">
            {/* بخش تصویر: اینجا کاروسل را قرار می‌دهیم */}
            <div className="relative w-full ">
              {carouselImages.length > 0 && (
                // اگر تصویری وجود داشت، کاروسل را نمایش بده
                <ImageCarousel images={carouselImages} />
              )}
            </div>

            {/* محتوای متنی */}
            <div className="p-6 md:p-8 ">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <MorphingDialogTitle className="text-2xl font-bold text-zinc-100 md:text-3xl">
                    {name}
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className="mt-1 font-medium text-teal-400">
                    Frontend Development
                  </MorphingDialogSubtitle>
                </div>

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 transition-transform hover:scale-105 hover:bg-white sm:flex"
                >
                  Visit Project <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 space-y-4 text-justify text-base leading-7 text-zinc-400">
                <p>{description}</p>
                <p>
                  This project demonstrates advanced usage of React and Next.js.
                  It includes responsive design, optimized performance, and
                  modern UI/UX principles.
                </p>
              </div>

              {/* دکمه موبایل */}
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
    </MorphingDialog>
  );
}

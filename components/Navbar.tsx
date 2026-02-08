import { MoonIcon } from "@/icons/MoonIcon";
import Image from "next/image";

function Navbar() {
  return (
    <header className="mx-auto w-full max-w-5xl lg:mt-4">
      <nav className="relative flex w-full items-center justify-between gap-x-4">
        {/* user img */}
        <div>
          <Image
            alt="Hurad Image"
            src="/img.png"
            width={1000}
            height={1000}
            className="aspect-square size-11 rounded-full object-cover object-top ring-2 ring-zinc-900/5 ring-offset-2 ring-offset-zinc-900 dark:ring-white/10"
          />
        </div>
        {/* navbar */}
        <div className="hidden rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm lg:flex dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <ul className="flex items-center justify-evenly">
            <li className="cursor-pointer px-3 py-3 transition-all hover:text-teal-500 hover:text-shadow-[0_0_20px_#00d5be] dark:hover:text-teal-400">
              Home
            </li>
            <li className="cursor-pointer px-3 py-3 transition-all hover:text-teal-500 hover:text-shadow-[0_0_20px_#00d5be] dark:hover:text-teal-400">
              About
            </li>
          </ul>
        </div>
        {/* dark mode */}
        <button className="flex cursor-pointer rounded-full bg-white/90 fill-zinc-500 p-3 text-sm font-medium text-zinc-800 shadow-lg ring-2 shadow-zinc-800/5 ring-zinc-900/5 ring-offset-2 ring-offset-zinc-900 backdrop-blur-sm transition group-hover:fill-zinc-600 hover:text-teal-500 dark:bg-zinc-800/90 dark:fill-zinc-400 dark:text-zinc-300 dark:ring-white/10 dark:group-hover:fill-zinc-300 dark:hover:text-teal-400">
          <MoonIcon />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;

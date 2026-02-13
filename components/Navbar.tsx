"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full md:pt-4">
      <nav className="relative flex w-full items-center justify-center gap-x-4">
        {/* user img */}
        <div className="absolute left-1 sm:left-0">
          <Image
            alt="Hurad Image"
            src="/img.png"
            width={1000}
            height={1000}
            className="aspect-square size-9 rounded-full object-cover object-top ring-2 ring-zinc-900/5 ring-offset-2 ring-offset-zinc-900 dark:ring-white/10"
          />
        </div>
        {/* navbar */}
        <div className="rounded-full bg-white/90 px-3 py-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm sm:flex sm:self-center dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <ul className="flex items-center justify-evenly">
            <li>
              <Link
                href="/"
                className={`cursor-pointer px-3 py-3 transition-all hover:text-teal-500 hover:text-shadow-[0_0_20px_#00d5be] dark:hover:text-teal-400 ${pathname === "/" ? "text-teal-400 text-shadow-[0_0_20px_#00d5be]" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`cursor-pointer px-3 py-3 transition-all hover:text-teal-500 hover:text-shadow-[0_0_20px_#00d5be] dark:hover:text-teal-400 ${pathname === "/about" ? "text-teal-400 text-shadow-[0_0_20px_#00d5be]" : ""}`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

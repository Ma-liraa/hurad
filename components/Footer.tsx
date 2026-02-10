"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="mt-16">
      <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
        <div className="w-full px-4">
          <div className="flex flex-col items-center justify-center gap-y-4 px-2 lg:flex-row lg:justify-between lg:gap-x-6">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <ul className="flex items-center justify-start gap-x-8">
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
            <p className="text-center text-sm font-medium text-zinc-400 dark:text-zinc-500">
              Designed by Tailwind Labs, Built with ❤️ by Hurad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

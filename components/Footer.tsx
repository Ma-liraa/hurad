const Footer = () => {
  return (
    <div className="mt-16">
      <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex flex-col items-center px-2 justify-center lg:justify-between gap-y-4 lg:flex-row lg:gap-x-6">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <ul className="flex items-center justify-start gap-x-8">
                <li className="cursor-pointer px-3 py-3 transition-all hover:text-teal-500 hover:text-shadow-[0_0_20px_#00d5be] dark:hover:text-teal-400">
                  Home
                </li>
                <li className="cursor-pointer px-3 py-3 transition-all hover:text-teal-500 hover:text-shadow-[0_0_20px_#00d5be] dark:hover:text-teal-400">
                  About
                </li>
              </ul>
            </div>
            <p className="text-sm font-medium text-center text-zinc-400 dark:text-zinc-500">
              Designed by Tailwind Labs, Built with ❤️ by Hurad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

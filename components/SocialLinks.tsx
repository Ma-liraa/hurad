import SocialLinksProps from "@/type/SocialLinksProps";

export default function SocialLinks({
  color,
  name,
  url,
  icon,
}: SocialLinksProps) {
  return (
    <a
      key={name}
      href={url}
      className="group relative col-span-3 flex items-center justify-center gap-x-2 rounded-xl border px-4 py-2.5 transition-all duration-300 ease-in-out hover:scale-105 md:col-span-1"
      style={{
        backgroundColor: `${color}0D`,
        borderColor: `${color}33`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}80`;
        e.currentTarget.style.backgroundColor = `${color}1A`;
        e.currentTarget.style.boxShadow = `0 0 15px ${color}30`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${color}33`;
        e.currentTarget.style.backgroundColor = `${color}0D`;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        style={{ color: color }}
        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
      >
        {icon}
      </span>

      <span className="text-sm font-semibold text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100">
        {name}
      </span>
      <div
        className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: `${color}1A` }}
      ></div>
    </a>
  );
}

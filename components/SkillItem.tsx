import SkillsProps from "@/types/SkillsProps";

function SkillItem({ color, name }: SkillsProps) {
  return (
    <div
      className="group relative flex cursor-pointer items-center gap-x-2 rounded-full border px-3 py-1.5 transition-all duration-300 hover:scale-105 active:scale-95 md:gap-x-3 md:px-5 md:py-2.5"
      style={{
        backgroundColor: `${color}0D`,
        borderColor: `${color}33`,
      }}
      onMouseEnter={(e) => {
        if (window.innerWidth > 768) {
          e.currentTarget.style.borderColor = `${color}80`;
          e.currentTarget.style.backgroundColor = `${color}1A`;
          e.currentTarget.style.boxShadow = `0 0 25px ${color}20`;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${color}33`;
        e.currentTarget.style.backgroundColor = `${color}0D`;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Glow Dot */}
      <span
        className="h-2 w-2 rounded-full md:h-2.5 md:w-2.5"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      ></span>

      {/* Name lan */}
      <span
        className="transition-color text-xs font-bold tracking-wide md:text-sm"
        style={{ color: color }}
      >
        {name}
      </span>

      {/* Dynamic Glow Background */}
      <div
        className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: `${color}1A` }}
      ></div>
    </div>
  );
}

export default SkillItem;

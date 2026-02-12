import SkillsProps from "@/types/SkillsProps";
import SkillItem from "./SkillItem";

const skills: SkillsProps[] = [
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
function SkillsSection() {
  return (
    <section className="relative mt-12 flex min-h-100 w-full items-center justify-center overflow-hidden py-10 md:mt-24">
      {/* Skills Text */}
      <h2
        className="pointer-events-none absolute top-0 px-2 text-[20vw] leading-none font-black tracking-tighter text-transparent opacity-20 select-none"
        style={{
          WebkitTextStroke: "1.5px rgba(244, 244, 245, 0.3)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 90%)",
        }}
      >
        SKILLS
      </h2>

      {/* Skills Container */}
      <div className="relative flex h-full w-full flex-wrap items-center justify-center gap-3 px-4 md:gap-4 md:px-6">
        {skills.map((skill) => (
          <SkillItem key={skill.name} color={skill.color} name={skill.name} />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;

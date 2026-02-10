import ProjectProps from "@/type/ProjectProps";
import { ProjectItem } from "./ProjectItem";
const projects: (ProjectProps & { id: number })[] = [
  {
    id: 1,
    name: "hurad Acc",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
    link: "github.com/hurad/acc",
    color: "#10b981", // سبز زمردی برای حس مالی
    gallery: ["/img2.jpg", "/img.png"],
  },
  {
    id: 2,
    name: "Admin Panel",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
    link: "github.com/hurad/admin",
    color: "#3b82f6", // آبی متالیک
  },
  {
    id: 3,
    name: "Crypto Tracker",
    description:
      "Creating technology to empower civilians to explore space on their own terms.",
    link: "github.com/hurad/crypto",
    color: "#f59e0b", // نارنجی طلایی
  },
];
function ProjectsSection() {
  return (
    <section className="relative mt-16 w-full lg:px-0">
      <div className="mb-12 flex items-center gap-x-6">
        <h2 className="min-w-fit text-2xl font-bold tracking-tight text-zinc-100">
          Featured Projects
        </h2>
        <div className="h-px w-full bg-linear-to-r from-zinc-700/50 to-transparent"></div>
      </div>

      <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;

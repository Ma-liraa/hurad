import ProjectProps from "@/types/ProjectProps";
import { ProjectItem } from "./ProjectItem";
const projects: (ProjectProps & { id: number })[] = [
  {
    id: 1,
    name: "Hurad Dev Portfolio",
    shortDescription:
      "A modern personal developer portfolio built with Next.js and TypeScript, focused on clean UI, smooth animations, and high-performance user experience to showcase frontend skills and projects 🚀",
    longDescription: (
      <div className="space-y-4 leading-7">
        <p>
          🚀 Hurad Dev Portfolio is a modern personal resume and portfolio
          website built using
          <strong>Next.js, TypeScript, and TailwindCSS</strong>, designed to
          professionally showcase frontend skills, technologies, and selected
          projects.
        </p>
        <p>
          🎨 The project focuses on clean dark UI, strong typography, smooth
          motion, and interactive components to deliver a fast, engaging, and
          visually polished experience for recruiters and visitors.
        </p>
        <h3 className="mt-4 font-semibold">✨ Key Features:</h3>
        <ul className="space-y-2 pl-3">
          <li>
            📱 Fully responsive across mobile, tablet, and desktop devices
          </li>
          <li>
            🌙 Modern dark UI built with TailwindCSS v4 and shadcn/ui components
          </li>
          <li>🧩 Scalable component-based architecture</li>
          <li>
            ⚡ Built with Next.js App Router for high performance and clean
            structure
          </li>
          <li>🔷 Fully type-safe codebase with TypeScript</li>
          <li>🎞️ Smooth UI animations using Motion and motion-primitives</li>
          <li>🧭 Simple navigation with Home and About pages</li>
          <li>🪟 Interactive project detail modal without page navigation</li>
          <li>🖼️ Image slider/gallery inside project modal</li>
          <li>🏷️ Technology stack badges for each project</li>
          <li>🖱️ Subtle hover and shadow interaction effects</li>
          <li>🎯 Animated icons powered by lucide-react</li>
          <li>🧱 Accessible UI primitives via Radix UI</li>
          <li>
            🧼 Utility class management with clsx, tailwind-merge, and CVA
          </li>
          <li>🔍 SEO-ready meta tag configuration</li>
          <li>📦 Static structured project data (no database dependency)</li>
          <li>☁️ Ready for deployment on Vercel</li>
        </ul>
        <p className="mt-4">
          💼 This portfolio works as an interactive resume and technical
          showcase, highlighting modern frontend architecture, UI craftsmanship,
          and performance-oriented implementation.
        </p>
      </div>
    ),
    link: "https://github.com/Ma-liraa/hurad",
    color: "#10b981",
    skills: [
      { name: "TypeScript", color: "#3178C6", category: "Language" },
      { name: "Next.js", color: "#FFFFFF", category: "Framework" },
      { name: "React", color: "#61DAFB", category: "Library" },
      { name: "Lucide React", color: "#CA4245", category: "Library" },
      { name: "Tailwind CSS", color: "#38B2AC", category: "Design" },
      { name: "Motion Primitives", color: "#FFFFFF", category: "Library" },
      { name: "Git", color: "#F05032", category: "Tools" },
      { name: "Prettier", color: "#38B2AC", category: "Core" },
      { name: "CSS3", color: "#1572B6", category: "Core" },
      { name: "HTML5", color: "#E34F26", category: "Core" },
    ],
    gallery: [
      "/HuradDevPortfolioImg/HuradDevPortfolioImg_1.png",
      "/HuradDevPortfolioImg/HuradDevPortfolioImg_2.png",
      "/HuradDevPortfolioImg/HuradDevPortfolioImg_3.png",
      "/HuradDevPortfolioImg/HuradDevPortfolioImg_4.png",
      "/HuradDevPortfolioImg/HuradDevPortfolioImg_7.png",
      "/HuradDevPortfolioImg/HuradDevPortfolioImg_8.png",
    ],
  },
  {
    id: 2,
    name: "Hesabam (Financial Dashboard)",
    shortDescription:
      "A high-performance, modern accounting and financial management dashboard built with the bleeding-edge stack of Next.js 15 and React 19. Designed to streamline business operations with client-side reporting and a seamless mobile experience.",
    longDescription: (
      <div
        className="space-y-6 leading-relaxed text-gray-800 dark:text-gray-200"
        dir="ltr"
      >
        {/* Comprehensive Overview */}
        <div>
          <h3 className="mb-2 text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Comprehensive Overview:
          </h3>
          <p>
            "Hesabam" is a robust frontend solution designed for financial teams
            to manage orders, track sales, and generate reports efficiently. The
            project leverages the latest advancements in the React ecosystem to
            ensure <span className="font-semibold">speed</span>,{" "}
            <span className="font-semibold">scalability</span>, and{" "}
            <span className="font-semibold">maintainability</span>.
          </p>
        </div>

        {/* Features List */}
        <ul className="list-none space-y-4 pl-0">
          <li>
            <strong className="mb-1 block text-lg">
              📱 Fully Responsive & Mobile-First Design:
            </strong>
            <p className="opacity-90">
              The UI is crafted using Tailwind CSS with a sleek Dark Mode
              aesthetic. Special attention was given to the mobile experience:{" "}
              <br />
              <span className="font-semibold">Mobile Layout:</span> Featuring a
              custom Bottom Navigation Bar for primary actions and a Hamburger
              Menu for secondary settings, providing a native app-like
              experience on web browsers.
            </p>
          </li>

          <li>
            <strong className="mb-1 block text-lg">
              📊 Advanced Data Visualization & Management:
            </strong>
            <p className="opacity-90">
              Utilizing Recharts, complex financial data is transformed into
              interactive and easy-to-read charts. TanStack Query is employed
              for efficient server state management, ensuring that data is
              always fresh, cached correctly, and loading states are handled
              gracefully without blocking the UI.
            </p>
          </li>

          <li>
            <strong className="mb-1 block text-lg">
              ⚡ Technical Highlight: Client-Side Reporting:
            </strong>
            <p className="opacity-90">
              A key technical challenge addressed in this project was the
              generation of reports purely on the frontend. Using libraries like
              XLSX and jsPDF, users can generate and download comprehensive
              Excel sheets and PDF invoices instantly. This approach minimizes
              server load and provides immediate feedback to the user.
            </p>
          </li>

          <li>
            <strong className="mb-1 block text-lg">
              📝 Robust Form Handling:
            </strong>
            <p className="opacity-90">
              Complex forms for order entry and settings are managed via React
              Hook Form paired with Yup schemas. This ensures real-time
              validation, optimal performance by minimizing re-renders, and a
              smooth typing experience.
            </p>
          </li>

          <li>
            <strong className="mb-1 block text-lg">✨ Polished UX:</strong>
            <p className="opacity-90">
              The application features smooth CSS transitions and
              micro-interactions, making navigation intuitive and visually
              appealing across all devices.
            </p>
          </li>
        </ul>

        {/* Demo Access Section - Added Here */}
        <div className="mt-6 rounded-lg border border-gray-200 bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-800/50">
          <h4 className="mb-2 flex items-center gap-2 font-bold text-gray-900 dark:text-white">
            🔐 Live Demo Access
          </h4>
          <p className="mb-3 text-sm opacity-80">
            Feel free to test the dashboard features using the guest credentials
            below:
          </p>
          <div className="flex flex-col gap-4 font-mono text-sm sm:flex-row">
            <div className="rounded border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-900">
              <span className="mr-2 text-gray-500">Username:</span>
              <span className="font-bold text-indigo-600 select-all dark:text-indigo-400">
                123456789
              </span>
            </div>
            <div className="rounded border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-900">
              <span className="mr-2 text-gray-500">Password:</span>
              <span className="font-bold text-indigo-600 select-all dark:text-indigo-400">
                123456789
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    link: "https://hesabamapp.vercel.app/",
    color: "#3b82f6",
    skills: [
      { name: "HTML5", color: "#E34F26", category: "Core" },
      { name: "CSS3", color: "#1572B6", category: "Core" },
      { name: "JavaScript", color: "#F7DF1E", category: "Language" },
      { name: "React", color: "#61DAFB", category: "Library" },
      { name: "Next.js", color: "#FFFFFF", category: "Framework" },
      { name: "React Query", color: "#FF4154", category: "Library" },
      { name: "React Router", color: "#CA4245", category: "Library" },
      { name: "React Hook Form", color: "#EC5990", category: "Library" },
      { name: "Tailwind CSS", color: "#38B2AC", category: "Design" },
      { name: "Git", color: "#F05032", category: "Tools" },
      { name: "GitHub", color: "#FFFFFF", category: "Tools" },
      { name: "Postman", color: "#FF6C37", category: "Tools" },
      { name: "Swagger", color: "#85EA2D", category: "Tools" },
    ],
    gallery: [
      "/HesabamImg/Hesabam-1.png",
      "/HesabamImg/Hesabam-2.png",
      "/HesabamImg/Hesabam-5.png",
      "/HesabamImg/Hesabam-6.png",
      "/HesabamImg/Hesabam-10.png",
      "/HesabamImg/Hesabam-11.png",
    ],
  },
  // {
  //   id: 3,
  //   name: "Crypto Tracker",
  //   shortDescription:
  //     "Creating technology to empower civilians to explore space on their own terms.",
  //   longDescription: <div></div>,
  //   link: "github.com/hurad/crypto",
  //   color: "#f59e0b",
  // },
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

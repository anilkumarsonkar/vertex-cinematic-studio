"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ZoomIn, X } from "lucide-react";
import zanifest from "../../assets/zanifest.png";
import hrms from "../../assets/hrms.png";
import inventory from "../../assets/inventory.png";
import vdc from "../../assets/vdc.png";
type Category = "All" | "Website" | "Application";
interface Project {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}
const projects: Project[] = [
 {
  title: "Zanifest",
  category: "Application",
  description:
    "A logistics manifest platform with real-time shipment tracking and automated documentation.",
  tags: ["React", "TypeScript", "Node.js"],
  image: zanifest,
  liveUrl: "#",
  repoUrl: "#",
},
  {
    title: "HRMS",
    category: "Application",
    description: "A comprehensive HR management system for employee records, payroll, and performance tracking.",
    tags: ["React", "Tailwind", "PostgreSQL"],
    image: hrms,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Inventory",
    category: "Application",
    description: "An inventory management dashboard with stock alerts, supplier tracking, and warehouse analytics.",
    tags: ["Next.js", "Prisma", "Recharts"],
    image: inventory,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Extention",
    category: "Application",
    description: "A browser extension manager with permission control, usage analytics, and one-click install.",
    tags: ["Chrome API", "React", "IndexedDB"],
    image: vdc,
    liveUrl: "#",
    repoUrl: "#",
  },
];
const categories: Category[] = ["All", "Website", "Application"];
function ProjectThumb({
  project,
  onZoom,
}: {
  project: Project;
  onZoom: (project: Project) => void;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl glass">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
       <div className="relative h-full w-full overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    loading="lazy"
    className="
      w-full
      transition-all
      duration-[4000ms]
      ease-linear
      group-hover:-translate-y-[55%]
    "
  />
</div>
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={() => onZoom(project)}
            aria-label={`Preview ${project.title}`}
            className="grid h-11 w-11 -translate-y-2 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 hover:bg-white/20 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              aria-label={`Open ${project.title} live site`}
              className="grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all delay-75 duration-300 hover:bg-white/20 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-sm font-semibold text-white">
            {project.title}
          </h3>
          <span className="text-xs uppercase tracking-wide text-white/60">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
}
function Lightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl glass"
      >
        <button
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white hover:bg-black/70"
        >
          <X className="h-4 w-4" />
        </button>
        <img src={project.image} alt={project.title} className="w-full" />
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {project.category}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-1 text-sm font-medium text-gradient"
              >
                Live site <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export function Process() {
  const [active, setActive] = useState<Category>("All");
  const [zoomed, setZoomed] = useState<Project | null>(null);
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);
  return (
    <section id="process" className="relative py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center">
          <div className="mb-3 text-xs tracking-[0.3em] text-gold">— WORK DONE FOR CLIENTS</div>
          <h2 className="text-4xl font-bold md:text-6xl">
            Websites &amp; <span className="text-gradient italic">applications</span>.
          </h2>
        </div>
        <div className="mb-10 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "glass text-gradient"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProjectThumb project={project} onZoom={setZoomed} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {zoomed && <Lightbox project={zoomed} onClose={() => setZoomed(null)} />}
      </AnimatePresence>
    </section>
  );
}
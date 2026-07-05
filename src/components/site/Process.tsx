import { useState } from "react";
import { ZoomIn, X } from "lucide-react";

/**
 * Projects section with an hourglass-shaped, gradient-bordered frame.
 *
 * Notes for integration into your own codebase:
 * - Swap the `image` values for your real imports (zanifest, hrms, inventory, vdc)
 *   just like in your original Process.tsx.
 * - This build uses plain CSS transitions instead of Framer Motion, since the
 *   sandbox this was authored in doesn't have framer-motion available. The
 *   easing/durations mirror what Framer Motion would give you — drop your
 *   <motion.div>/<AnimatePresence> back in if you want, the className structure
 *   is unchanged so it's a drop-in swap.
 */

const categories = ["All", "Website", "Application"];

const projects = [
  {
    title: "Zanifest",
    category: "Application",
    description:
      "A logistics manifest platform with real-time shipment tracking and automated documentation.",
    tags: ["React", "TypeScript", "Node.js"],
    image: "https://picsum.photos/seed/zanifest/700/900",
  },
  {
    title: "HRMS",
    category: "Application",
    description:
      "A comprehensive HR management system for employee records, payroll, and performance tracking.",
    tags: ["React", "Tailwind", "PostgreSQL"],
    image: "https://picsum.photos/seed/hrms/700/900",
  },
  {
    title: "Inventory",
    category: "Application",
    description:
      "An inventory management dashboard with stock alerts, supplier tracking, and warehouse analytics.",
    tags: ["Next.js", "Prisma", "Recharts"],
    image: "https://picsum.photos/seed/inventory/700/900",
  },
  {
    title: "Extension",
    category: "Application",
    description:
      "A browser extension manager with permission control, usage analytics, and one-click install.",
    tags: ["Chrome API", "React", "IndexedDB"],
    image: "https://picsum.photos/seed/extension/700/900",
  },
];

function ProjectCard({ project, onZoom }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-[400ms] ease-out hover:border-white/20">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-110"
      />

      {/* base gradient so the title is always legible */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/95 to-transparent" />

      {/* hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/70 opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100">
        <button
          onClick={() => onZoom(project)}
          aria-label={`Preview ${project.title}`}
          className="grid h-11 w-11 -translate-y-2 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 hover:bg-white/20 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-sm font-semibold text-white">{project.title}</h3>
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
          {project.category}
        </span>
      </div>
    </div>
  );
}

function Lightbox({ project, onClose }) {
  if (!project) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm animate-[fadeIn_0.25s_ease-out]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a0a] animate-[scaleIn_0.25s_ease-out]"
      >
        <button
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          <X className="h-4 w-4" />
        </button>
        <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
              {project.category}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [active, setActive] = useState("All");
  const [zoomed, setZoomed] = useState(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="relative bg-transparent py-24 px-5">
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95) } to { opacity: 1; transform: scale(1) } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mb-3 text-xs tracking-[0.3em] text-[#ec4899]">
            — WORK DONE FOR CLIENTS
          </div>
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Websites &amp; <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#f87171]">applications</span>.
          </h2>
        </div>

        <div className="mb-10 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${active === cat
                ? "border border-white/10 bg-white/[0.06] text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#f87171]"
                : "text-white/50 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== Desktop: cards clipped to fit the hourglass curve exactly ===== */}
        <div className="relative hidden h-[460px] w-full lg:block">
          <svg viewBox="0 0 1200 460" className="h-full w-full">
            <defs>
              <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f87171" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* one clip path per card, each an exact slice of the hourglass silhouette */}
              <clipPath id="cardClip0">
                <path d="M0,0 C150,0 225,25 300,50 L300,410 C225,435 150,460 0,460 Z" />
              </clipPath>
              <clipPath id="cardClip1">
                <path d="M300,50 C375,75 450,100 600,100 L600,360 C450,360 375,385 300,410 Z" />
              </clipPath>
              <clipPath id="cardClip2">
                <path d="M600,100 C750,100 825,75 900,50 L900,410 C825,385 750,360 600,360 Z" />
              </clipPath>
              <clipPath id="cardClip3">
                <path d="M900,50 C975,25 1050,0 1200,0 L1200,460 C1050,460 975,435 900,410 Z" />
              </clipPath>
            </defs>

            {/* glow duplicate of outer silhouette */}
            <path
              d="M0,0 C300,0 300,100 600,100 C900,100 900,0 1200,0 L1200,460 C900,460 900,360 600,360 C300,360 300,460 0,460 Z"
              fill="none"
              stroke="url(#borderGrad)"
              strokeWidth="6"
              opacity="0.35"
              filter="url(#glow)"
            />

            {/* base fill so any hairline gaps between slices never show white */}
            <path
              d="M0,0 C300,0 300,100 600,100 C900,100 900,0 1200,0 L1200,460 C900,460 900,360 600,360 C300,360 300,460 0,460 Z"
              fill="#050505"
            />

            {/* each project rendered as HTML, clipped to that slice of the curve */}
            {filtered.map((project, i) => {
              const cutX = [0, 300, 600, 900, 1200];
              const clipIds = ["cardClip0", "cardClip1", "cardClip2", "cardClip3"];
              // map filtered index back to a stable slot 0-3 so slices/clip ids line up
              const slot = i % 4;
              return (
                <foreignObject
                  key={project.title}
                  x={cutX[slot] + 4}
                  y="0"
                  width={cutX[slot + 1] - cutX[slot]}
                  height="460"
                  clipPath={`url(#${clipIds[slot]})`}
                >
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    className="group relative h-full w-full"
                    style={{ animation: `fadeIn 0.6s ease-out ${i * 0.1}s both` }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 text-center opacity-0 transition-opacity duration-[400ms] ease-out group-hover:opacity-100">
                      <button
                        onClick={() => setZoomed(project)}
                        aria-label={`Preview ${project.title}`}
                        className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </button>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    {/* always-visible label, centered so it stays inside the curve at every column */}
                    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                      <h3 className="text-sm font-semibold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                        {project.title}
                      </h3>
                      <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/70 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </foreignObject>
                
              );
            })}

            {/* thin divider strokes on top, matching the reference sketch */}
            <line x1="300" y1="50" x2="300" y2="410" stroke="url(#borderGrad)" strokeWidth="1" opacity="0.35" />
            <line x1="600" y1="100" x2="600" y2="360" stroke="url(#borderGrad)" strokeWidth="1" opacity="0.35" />
            <line x1="900" y1="50" x2="900" y2="410" stroke="url(#borderGrad)" strokeWidth="1" opacity="0.35" />

            {/* outer border on top so it stays crisp over the clipped images */}
            <path
              d="M0,0 C300,0 300,100 600,100 C900,100 900,0 1200,0 L1200,460 C900,460 900,360 600,360 C300,360 300,460 0,460 Z"
              fill="none"
              stroke="url(#borderGrad)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* ===== Tablet / mobile: simple gradient-bordered box ===== */}
        <div className="lg:hidden">
          <div className="rounded-[32px] bg-gradient-to-r from-[#8b5cf6] via-[#ec4899] to-[#f87171] p-[2px]">
            <div className="rounded-[32px] bg-[#050505] p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {filtered.map((project, i) => (
                  <div
                    key={project.title}
                    className="aspect-[4/3]"
                    style={{ animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both` }}
                  >
                    <ProjectCard project={project} onZoom={setZoomed} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Lightbox project={zoomed} onClose={() => setZoomed(null)} />
    </section>
  );
}

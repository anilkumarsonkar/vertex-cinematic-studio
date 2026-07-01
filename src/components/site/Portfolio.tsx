import { motion } from "framer-motion";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";

const works = [
  { src: w1, title: "Aurora — Brand Film", tag: "Video Production", span: "md:col-span-2 md:row-span-2" },
  { src: w2, title: "Noir No. 7 — Product CGI", tag: "3D & CGI", span: "" },
  { src: w3, title: "Strata — Identity System", tag: "Graphics Design", span: "" },
  { src: w4, title: "Helix Tower — ArchViz", tag: "3D & CGI", span: "md:col-span-2" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-xs tracking-[0.3em] text-electric">— SELECTED WORK</div>
            <h2 className="font-display text-4xl font-bold md:text-6xl">
              Frames worth <span className="text-gradient italic">rewinding</span>.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden text-sm text-muted-foreground hover:text-foreground md:inline"
          >
            View full reel →
          </a>
        </div>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-4">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/10 ${w.span}`}
            >
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[11px] uppercase tracking-widest text-cinema">{w.tag}</div>
                <div className="mt-1 font-display text-xl font-semibold">{w.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

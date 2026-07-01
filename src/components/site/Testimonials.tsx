import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  {
    quote:
      "Vertex turned our launch into an event. The film traveled, the metrics moved, and the brand felt larger overnight.",
    name: "Aisha Rahman",
    role: "VP Marketing, Strata Goods",
    rating: 5,
  },
  {
    quote:
      "Every frame felt considered. Crew, edit, and color were Hollywood-grade — and the team made the process easy.",
    name: "Marco Velasquez",
    role: "Founder, Aurora Spirits",
    rating: 5,
  },
  {
    quote:
      "They don't just make beautiful things — they make beautiful things that perform. ROI on our campaign tripled.",
    name: "Lena Park",
    role: "Head of Brand, Helix Tower",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs tracking-[0.3em] text-cinema">— TESTIMONIALS</div>
          <h2 className="font-display text-4xl font-bold md:text-6xl">
            Trusted by brands that <span className="text-gradient italic">demand more</span>.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass relative flex flex-col rounded-2xl p-7"
            >
              <div className="mb-5 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" className="text-gold" />
                ))}
              </div>
              <p className="text-balance text-lg leading-relaxed text-foreground/90">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/5 pt-5">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full font-display text-sm font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-vertex)" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

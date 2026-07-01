import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Film, Scissors, Palette, TrendingUp, Code2, Box } from "lucide-react";
import { services } from "@/lib/services-data";

const icons = { Film, Scissors, Palette, TrendingUp, Code2, Box };
const accentMap: Record<string, string> = {
  electric: "from-electric/30 to-electric/0",
  cinema: "from-cinema/30 to-cinema/0",
  neon: "from-neon/30 to-neon/0",
  gold: "from-gold/30 to-gold/0",
};
const accentRing: Record<string, string> = {
  electric: "shadow-[0_0_60px_-10px_oklch(0.72_0.2_250/0.6)]",
  cinema: "shadow-[0_0_60px_-10px_oklch(0.72_0.2_40/0.6)]",
  neon: "shadow-[0_0_60px_-10px_oklch(0.65_0.25_305/0.6)]",
  gold: "shadow-[0_0_60px_-10px_oklch(0.82_0.16_85/0.6)]",
};

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 text-xs tracking-[0.3em] text-cinema">— WHAT WE DO</div>
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Which Service Are You <span className="text-gradient italic">Looking For?</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Six disciplines, one studio. Every service is delivered with cinematic craft and
            measurable impact for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className={`group relative block h-full overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-2 hover:${accentRing[s.accent]}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-radial opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                    style={{
                      background: `radial-gradient(circle, var(--color-${s.accent}), transparent 70%)`,
                    }}
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-8 flex items-center justify-between">
                      <div
                        className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accentMap[s.accent]} ring-1 ring-white/10`}
                      >
                        <Icon size={24} className="text-foreground" />
                      </div>
                      <span className="text-xs tracking-widest text-muted-foreground">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {s.offerings.slice(0, 4).map((o) => (
                        <li
                          key={o}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          {o}
                        </li>
                      ))}
                      {s.offerings.length > 4 && (
                        <li className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground">
                          +{s.offerings.length - 4} more
                        </li>
                      )}
                    </ul>

                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground">
                      Explore service
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:rotate-45"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

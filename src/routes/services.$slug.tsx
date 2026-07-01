import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Toaster } from "@/components/ui/sonner";
import { getService, services, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): Service => {
    const s = getService(params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Service"} — Vertex Productions` },
      { name: "description", content: loaderData?.description ?? "" },
      { property: "og:title", content: `${loaderData?.title} — Vertex Productions` },
      { property: "og:description", content: loaderData?.description ?? "" },
    ],
  }),
  component: ServicePage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center text-center">
      <div>
        <h1 className="font-display text-3xl font-bold">Service not found</h1>
        <Link to="/" className="mt-4 inline-block text-electric">← Back home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="grid min-h-screen place-items-center text-center">
      <div className="max-w-md">
        <h1 className="font-display text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      </div>
    </div>
  ),
});

const accentMap: Record<string, string> = {
  electric: "oklch(0.72 0.2 250)",
  cinema: "oklch(0.72 0.2 40)",
  neon: "oklch(0.65 0.25 305)",
  gold: "oklch(0.82 0.16 85)",
};

function ServicePage() {
  const service = Route.useLoaderData() as Service;
  const accent = accentMap[service.accent];
  const idx = services.findIndex((s) => s.slug === service.slug);
  const next = services[(idx + 1) % services.length];

  return (
    <main className="relative overflow-hidden">
      <CursorGlow />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-50"
          style={{
            background: `radial-gradient(ellipse at top, ${accent}, transparent 60%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.98 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.98 0 0) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-5">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={14} /> All services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 text-xs tracking-[0.3em]" style={{ color: accent }}>
              — VERTEX SERVICE / 0{idx + 1}
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] md:text-7xl">
              {service.title}.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{service.tagline}</p>
            <p className="mt-3 max-w-2xl text-muted-foreground">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              What's <span className="text-gradient italic">included</span>.
            </h2>
            <div className="hidden text-sm text-muted-foreground md:block">
              {service.offerings.length} deliverables
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((o, i) => (
              <motion.div
                key={o}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="glass group relative flex items-start gap-4 overflow-hidden rounded-2xl p-5"
              >
                <div
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
                  style={{ background: accent }}
                />
                <div
                  className="relative grid h-9 w-9 shrink-0 place-items-center rounded-lg ring-1 ring-white/10"
                  style={{ background: `${accent.replace(")", " / 0.15)")}` }}
                >
                  <Check size={15} style={{ color: accent }} />
                </div>
                <div className="relative">
                  <div className="font-medium">{o}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Crafted by Vertex specialists
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Testimonials />

      {/* Next service */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Link
            to="/services/$slug"
            params={{ slug: next.slug }}
            className="group glass-strong flex items-center justify-between gap-6 rounded-3xl p-8 transition hover:bg-white/5"
          >
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Next service
              </div>
              <div className="mt-1 font-display text-2xl font-bold md:text-3xl">{next.title}</div>
            </div>
            <ArrowRight size={28} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}

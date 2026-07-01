import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useEffect } from "react";
import heroImg from "@/assets/hero-chrome.jpg";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "100+", label: "Happy Clients" },
  { value: "15M+", label: "Views Generated" },
  { value: "98%", label: "Client Satisfaction" },
];

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => v * 30);
  const ty = useTransform(sy, (v) => v * 30);
  const rotX = useTransform(sy, (v) => v * -6);
  const rotY = useTransform(sx, (v) => v * 6);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      {/* Background layer */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ x: tx, y: ty, scale: 1.15 }}
      >
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover opacity-70"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent,var(--background)_70%)]" />
      </motion.div>

      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.98 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.98 0 0) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        style={{ x: tx, y: ty }}
        className="pointer-events-none absolute left-[10%] top-[30%] -z-10 h-72 w-72 rounded-full opacity-50 blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-electric/40" />
      </motion.div>
      <motion.div
        style={{ x: useTransform(sx, (v) => v * -40), y: useTransform(sy, (v) => v * -40) }}
        className="pointer-events-none absolute right-[8%] top-[20%] -z-10 h-96 w-96 rounded-full opacity-40 blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-neon/40" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cinema" />
            CINEMATIC PRODUCTION • EST. 2019
          </div>

          <motion.h1
            style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1200 }}
            className="max-w-5xl font-display text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.95]"
          >
            Transforming Ideas Into{" "}
            <span className="text-gradient italic">Cinematic</span> Experiences
          </motion.h1>

          <p className="mt-7 max-w-2xl text-base text-muted-foreground sm:text-lg">
            From world-class video production to CGI, branding, marketing, and digital experiences
            — we create stories that captivate, convert, and inspire.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground"
              style={{ background: "var(--gradient-vertex)" }}
            >
              Explore Our Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-white/10"
            >
              <PlayCircle size={18} /> Book Your Session
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass relative overflow-hidden rounded-2xl p-5 text-left"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric/10 blur-2xl" />
              <div className="font-display text-3xl font-bold text-shimmer md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

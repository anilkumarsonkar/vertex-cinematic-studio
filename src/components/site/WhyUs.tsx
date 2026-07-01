import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function WhyUs() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] glass-strong p-10 md:p-16"
        >
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-electric/30 blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-neon/30 blur-[120px]" />
          <div className="relative">
            <div className="mb-4 text-xs tracking-[0.3em] text-gold">— WHY VERTEX</div>
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Why brands choose <span className="text-gradient italic">Vertex Productions</span>.
            </h2>
            <p className="mt-6 max-w-3xl text-base text-muted-foreground md:text-lg">
              At Vertex Productions, we blend creativity, technology, and strategy to craft
              unforgettable brand experiences. Whether it's producing cinematic visuals, building
              powerful digital platforms, scaling brands through marketing, or creating stunning
              CGI experiences, our mission is simple — help brands stand out, connect deeply, and
              grow exponentially. Every frame, every design, and every interaction is engineered
              to leave a lasting impression.
            </p>

            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="font-display text-2xl md:text-3xl">
                Let's build something <span className="text-gradient italic">extraordinary</span> together.
              </div>
              <a
                href="#contact"
                className="group inline-flex w-fit items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground"
                style={{ background: "var(--gradient-vertex)" }}
              >
                Start Your Project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

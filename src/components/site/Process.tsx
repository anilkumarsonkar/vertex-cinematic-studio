import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discovery", text: "Understand the brand, the audience, and the outcome." },
  { n: "02", title: "Concept", text: "Develop the creative direction, treatment, and storyboard." },
  { n: "03", title: "Shoot", text: "Execute production with cinematic craft and precision." },
  { n: "04", title: "Editing", text: "Cut, color, sound design, motion — every frame intentional." },
  { n: "05", title: "Delivery", text: "Ship assets formatted for every platform and use case." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center">
          <div className="mb-3 text-xs tracking-[0.3em] text-gold">— HOW WE WORK</div>
          <h2 className="font-display text-4xl font-bold md:text-6xl">
            A workflow built for <span className="text-gradient italic">results</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full glass">
                  <span className="font-display text-2xl font-bold text-gradient">{s.n}</span>
                </div>
                <div className="text-center">
                  <div className="font-display text-lg font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

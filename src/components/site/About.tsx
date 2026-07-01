import { motion } from "framer-motion";
import { Compass, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Mission",
    text: "Help ambitious brands tell stories that move audiences and grow business.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "To be the most beloved cinematic production studio of the next decade.",
  },
  {
    icon: Heart,
    title: "Values",
    text: "Craft over volume. Strategy over noise. Honesty over polish.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-3 text-xs tracking-[0.3em] text-neon">— ABOUT VERTEX</div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              A studio engineered for <span className="text-gradient italic">brands that move.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Vertex Productions is a full-service creative production house specializing in
              cinematic storytelling, digital experiences, branding, and immersive visual content.
            </p>
            <p className="mt-4 max-w-xl text-muted-foreground">
              We partner with ambitious brands to create content that not only looks exceptional
              but also delivers measurable business growth.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass flex items-start gap-5 rounded-2xl p-6"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric/20 to-neon/20 ring-1 ring-white/10">
                  <p.icon size={20} />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold">{p.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

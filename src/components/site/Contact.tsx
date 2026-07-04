import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send } from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-3 text-xs tracking-[0.3em] text-electric">— BOOK A SESSION</div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl">
              Tell us about <span className="text-gradient italic">the vision</span>.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Share a few details and our producers will get back to you within 24 hours with a
              tailored proposal and next steps.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="mt-1 font-medium">princecode911@gmail.com</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Studio</div>
                <div className="mt-1 font-medium">Delhi  · Noida</div>
              </div>
              <div>
                {/* <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                <div className="mt-1 font-medium">Mon — Sat · 10:00 — 19:00</div> */}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-strong relative overflow-hidden rounded-3xl p-7 md:p-9"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neon/20 blur-3xl" />
            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              {/* <Field label="Company Name" name="company" /> */}
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone Number" name="phone" />
              <Select label="Service Required" name="service" options={[
                "Video Production",
                "Video Editing",
                "Graphics Designing",
                "Social Media Marketing",
                "Website Development",
                "3D & CGI",
              ]} />
              {/* <Select label="Budget Range" name="budget" options={[
                "Under $5,000",
                "$5k – $15k",
                "$15k – $50k",
                "$50k+",
              ]} /> */}
              {/* <Field label="Preferred Shoot Date" name="date" type="date" className="sm:col-span-2" /> */}
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                  Project Details
                </label>
                <textarea
                  name="details"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition focus:border-electric/60 focus:bg-white/[0.05]"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground disabled:opacity-60"
              style={{ background: "var(--gradient-vertex)" }}
            >
              {loading ? "Sending…" : "Book Your Session Today"}
              <Send size={15} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition focus:border-electric/60 focus:bg-white/[0.05]"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition focus:border-electric/60 focus:bg-white/[0.05]"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-card">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

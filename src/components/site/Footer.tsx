import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/vertex-logo.asset.json";
import { services } from "@/lib/services-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-20 pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-64"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.72 0.2 250 / 0.35), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo.url} alt="Vertex Productions" className="h-10 w-10 rounded-lg ring-1 ring-white/10" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-sm font-bold tracking-[0.18em]">VERTEX</span>
                <span className="font-display text-[10px] tracking-[0.32em] text-muted-foreground">
                  PRODUCTIONS
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              A cinematic production studio building stories, brands, and digital experiences for
              ambitious teams worldwide.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Youtube, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-9 w-9 place-items-center rounded-full glass transition hover:bg-white/10"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-sm">
              {["Home", "About", "Portfolio", "Process", "Testimonials", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={l === "Home" ? "/" : `/#${l.toLowerCase()}`}
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
              Services
            </div>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-muted-foreground transition hover:text-foreground"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
              Newsletter
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Get our latest work, behind-the-scenes, and creative essays — once a month.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex overflow-hidden rounded-full glass"
            >
              <input
                type="email"
                placeholder="you@brand.com"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="px-5 text-xs font-medium text-primary-foreground"
                style={{ background: "var(--gradient-vertex)" }}
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 text-xs text-muted-foreground">
              hello@vertexproductions.studio
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Vertex Productions. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

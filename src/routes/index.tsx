import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import ProjectsSection from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vertex Productions — Cinematic Production, CGI & Digital Studio" },
      {
        name: "description",
        content:
          "Vertex Productions is a cinematic production house crafting world-class video, CGI, branding, marketing and digital experiences for ambitious brands.",
      },
      { property: "og:title", content: "Vertex Productions — Cinematic Creative Studio" },
      {
        property: "og:description",
        content:
          "From cinematic film to CGI and digital — Vertex Productions builds work that captivates, converts, and inspires.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative overflow-hidden">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <ProjectsSection />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}

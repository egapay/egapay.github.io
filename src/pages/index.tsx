import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-canvas">
      <div
        aria-hidden
        className="grid-field pointer-events-none fixed inset-0 [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_25%,transparent_85%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_55%_45%_at_50%_-5%,rgba(245,183,61,0.08),transparent_70%)]"
      />

      <div className="relative">
        <Nav />

        <main className="mx-auto max-w-6xl px-6">
          <Hero />
          <Metrics />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

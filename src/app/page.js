import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Experience } from "@/components/experience";
import { Project } from "@/components/project";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="isolate mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
      >
        Skip to Content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-[52%] lg:py-24">
          <About />
          <Experience />
          <Project />
          <Footer />
        </main>
      </div>
    </div>
  );
}

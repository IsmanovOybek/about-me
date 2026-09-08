import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Hero } from "@/components/home/Hero/Hero";
import { AskAi } from "@/components/home/AskAi/AskAi";
import { Experience } from "@/components/home/Experience/Experience";
import { Skills } from "@/components/home/Skills/Skills";
import { Projects } from "@/components/home/Projects/Projects";
import { Contact } from "@/components/home/Contact/Contact";
import { ScrollToTop } from "@/components/ui/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AskAi />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}

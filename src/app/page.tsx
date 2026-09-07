import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Hero } from "@/components/home/Hero/Hero";
import { AskAi } from "@/components/home/AskAi/AskAi";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AskAi />
      </main>
    </>
  );
}

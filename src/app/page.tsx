import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Hero } from "@/components/home/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}

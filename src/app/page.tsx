import BentoGrid from "@/components/bento-grid";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BentoGrid />
      <Projects />
    </div>
  );
}

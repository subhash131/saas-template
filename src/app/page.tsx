import BentoGrid from "@/components/bento-grid";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Carousel from "@/components/projects/carousel";

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

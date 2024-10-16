import BentoGrid from "@/components/bento-grid";
import Footer from "@/components/footer";
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
      <Footer />
    </div>
  );
}

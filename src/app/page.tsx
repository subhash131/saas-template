import BentoGrid from "@/components/bento-grid";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <div className="lg:hidden w-screen h-screen flex items-center justify-center">
        You're using a small device📱. Please access the website on a laptop or
        desktop.
      </div>
      <div className="max-lg:hidden">
        <Navbar />
        <Hero />
        <BentoGrid />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

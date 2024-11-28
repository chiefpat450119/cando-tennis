import Reviews from "@/components/Testimonials";
import Classes from "@/components/Classes";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <About />
      <Classes />
      <Reviews />
      <Contact />
    </>
  );
}

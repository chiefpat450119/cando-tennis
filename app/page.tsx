import Reviews from "@/components/Testimonials";
import Classes from "@/components/Classes";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Guide from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Reviews />
      <Guide />
      <Classes />
      <Contact />
    </>
  );
}

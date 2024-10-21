import Reviews from "@/components/Review";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Reviews />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}

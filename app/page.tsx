import Carousel from "@/components/hero-section/Carousel";
import Hero from "@/components/hero-section/Hero";
import Navbar from "@/components/navbar/Navbar";
import SecondSection from "@/components/second-section/SecondSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Carousel />
      <SecondSection />
    </div>
  );
}

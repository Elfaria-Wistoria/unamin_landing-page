import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Faculties } from "@/components/sections/Faculties";
import { ImageSlider } from "@/components/sections/ImageSlider";
import { News } from "@/components/sections/News";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Faculties />
      <ImageSlider />
      <Features />
      <About />
      <News />
      <CTA />
      <Contact />
    </main>
  );
}

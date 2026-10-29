import { Classes } from "@/components/Classes";
import { Courts } from "@/components/Courts";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Infra } from "@/components/Infra";
import { Locations } from "@/components/Locations";
import { Method } from "@/components/Method";
import { MotionRoot } from "@/components/MotionRoot";
import { Partners } from "@/components/Partners";
import { RuiStory } from "@/components/RuiStory";
import { StatsBand } from "@/components/StatsBand";
import { Testimonials } from "@/components/Testimonials";
import { Videos } from "@/components/Videos";
import { WhatsFloat } from "@/components/WhatsFloat";

export default function Home() {
  return (
    <MotionRoot>
      <Header />
      <main id="conteudo">
        <Hero />
        <StatsBand />
        <Courts />
        <Method />
        <Classes />
        <RuiStory />
        <Infra />
        <Partners />
        <Testimonials />
        <Videos />
        <FAQ />
        <Locations />
        <FinalCta />
      </main>
      <Footer />
      <WhatsFloat />
    </MotionRoot>
  );
}

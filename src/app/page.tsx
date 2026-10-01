import { TopBar } from "@/components/Header/TopBar";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { TrustBar } from "@/components/TrustBar/TrustBar";
import { About } from "@/components/About/About";
import { Treatments } from "@/components/Treatments/Treatments";
import { WhyChooseUs } from "@/components/WhyChooseUs/WhyChooseUs";
import { Team } from "@/components/Team/Team";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Gallery } from "@/components/Gallery/Gallery";
import { FAQ } from "@/components/FAQ/FAQ";
import { Location } from "@/components/Location/Location";
import { CTA } from "@/components/CTA/CTA";
import { Footer } from "@/components/Footer/Footer";
import { FloatingWhatsAppButton } from "@/components/WhatsAppButton/FloatingWhatsAppButton";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Treatments />
        <WhyChooseUs />
        <Team />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Location />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

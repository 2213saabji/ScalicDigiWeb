import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import Pricing from "@/components/home/Pricing";
import Faq from "@/components/home/Faq";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Industries />
        <Services />
        <Work />
        <Process />
        <WhyUs />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

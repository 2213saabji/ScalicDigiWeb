import PageHero from "@/components/PageHero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import Skills from "@/components/about/Skills";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Scalic Digital",
  description:
    "A small team helping restaurants, cafés, salons and local shops win online with websites, marketing and local SEO.",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <PageHero
          current="/about"
          eyebrow="About us"
          title={
            <>
              A small team helping local businesses <span className="text-orange">win online.</span>
            </>
          }
          text="We started Scalic Digital because great local businesses deserve to be found — not buried under big chains and outdated listings."
        />
        <Story />
        <Values />
        <Skills />
        <Cta title="Let's grow your business together." label="Get in touch" className="pb-26" />
      </main>
      <Footer />
    </>
  );
}

import PageHero from "@/components/PageHero";
import Projects from "@/components/work/Projects";
import CaseStudy from "@/components/work/CaseStudy";
import Testimonial from "@/components/work/Testimonial";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Work — Scalic Digital",
  description:
    "Websites, marketing and local SEO we've built for restaurants, cafés, salons, shops and clinics.",
};

export default function WorkPage() {
  return (
    <>
      <main>
        <PageHero
          current="/work"
          eyebrow="Our Work"
          title={
            <>
              Websites that bring <span className="text-orange">customers in.</span>
            </>
          }
          text="A look at the restaurants, cafés, salons and shops we've helped take online — and what we built for each of them."
        />
        <Projects />
        <CaseStudy />
        <Testimonial />
        <Cta title="Your business could be next." label="Start your project" className="pb-26" />
      </main>
      <Footer />
    </>
  );
}

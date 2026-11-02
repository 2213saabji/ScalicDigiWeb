import Hero from "@/components/pricing/Hero";
import Compare from "@/components/pricing/Compare";
import AddOns from "@/components/pricing/AddOns";
import FaqList from "@/components/FaqList";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pricing — Scalic Digital",
  description:
    "Simple website, marketing and local SEO plans for local businesses — compare Starter, Growth and Scale, plus add-ons.",
};

const faqs = [
  { q: "Is the website a one-time payment?", a: "[Your answer about one-time vs monthly fees.]" },
  { q: "Can I switch plans later?", a: "[Your answer about upgrading or downgrading.]" },
  { q: "Is ad spend included?", a: "[Your answer about ad budgets vs management fees.]" },
  { q: "What payment methods do you accept?", a: "[UPI, bank transfer, card — your accepted methods.]" },
];

export default function PricingPage() {
  return (
    <>
      <main>
        <Hero />
        <Compare />
        <AddOns />
        <section className="mx-auto max-w-[900px] px-6 pt-26 pb-24">
          <h2 className="mt-0 mb-10 text-center font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] lg:text-[44px]">
            Pricing questions
          </h2>
          <FaqList items={faqs} />
        </section>
        <Cta title="Need a custom package?" label="Talk to us" className="pb-26" />
      </main>
      <Footer />
    </>
  );
}

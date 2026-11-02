import FaqList from "@/components/FaqList";
import { Eyebrow } from "./SectionHeading";

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most websites are ready in [X] weeks, depending on the number of pages and features you need.",
  },
  {
    q: "Do I need to provide photos and text?",
    a: "[Your answer about content, photography and copywriting support.]",
  },
  {
    q: "Can I update the menu or prices myself?",
    a: "[Your answer about editing the menu, prices and content after launch.]",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-[900px] px-6 pt-22 pb-16">
      <div className="mb-12 text-center">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3.5 mb-0 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] sm:text-5xl">
          Questions owners ask us
        </h2>
      </div>
      <FaqList items={faqs} />
    </section>
  );
}

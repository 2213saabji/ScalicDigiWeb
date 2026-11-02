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
      <div className="flex flex-col gap-3">
        {faqs.map((item, i) => (
          <details key={item.q} open={i === 0} className="group rounded-[18px] border border-line bg-white px-6.5 py-5.5">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold sm:text-xl [&::-webkit-details-marker]:hidden">
              {item.q}
              <span aria-hidden="true" className="text-[26px] text-teal">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
            </summary>
            <p className="mt-3 mb-0 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

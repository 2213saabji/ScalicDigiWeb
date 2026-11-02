import { Eyebrow, SectionTitle } from "./SectionHeading";

const steps = [
  { title: "Discover", text: "A free call to learn your business, customers and goals." },
  { title: "Design", text: "A custom design you review and refine before we build." },
  { title: "Launch", text: "We go live — domain, hosting and Google listing included." },
  { title: "Grow", text: "Marketing and SEO bring steady new customers every month.", highlight: true },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1200px] px-6 py-22">
      <div className="mx-auto mb-14 max-w-[720px] text-center">
        <Eyebrow>How it works</Eyebrow>
        <SectionTitle>From first call to first customer.</SectionTitle>
      </div>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-[6%] top-9 hidden border-t-2 border-dashed border-line-2 lg:block"
        />
        <ol className="relative m-0 grid list-none grid-cols-1 gap-8 p-0 text-center sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col items-center gap-3.5">
              <span
                className={`flex size-18 items-center justify-center rounded-full font-display text-2xl font-bold shadow-[0_0_0_10px_var(--color-paper)] ${
                  step.highlight ? "bg-orange text-navy" : "bg-navy text-white"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1.5 mb-0 font-display text-2xl font-bold">{step.title}</h3>
              <p className="m-0 max-w-60 text-[15px] text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

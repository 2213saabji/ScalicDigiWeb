import { Eyebrow, SectionTitle } from "@/components/home/SectionHeading";

const steps = [
  { title: "Discover", text: "A free call to understand your business, customers, competitors and goals." },
  { title: "Design", text: "We design your site and campaign plan. You review, we refine until it's right." },
  { title: "Launch", text: "We build, test and go live — domain, hosting and Google listing all set up." },
  { title: "Grow", text: "Ongoing marketing and SEO, with a clear report every month.", highlight: true },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1200px] px-6 pt-30 pb-26">
      <div className="mx-auto mb-14 max-w-[720px] text-center">
        <Eyebrow>How it works</Eyebrow>
        <SectionTitle>From first call to first customer.</SectionTitle>
      </div>
      <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 p-0">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className={`flex flex-col gap-2.5 rounded-[22px] p-7 ${
              step.highlight ? "bg-navy text-white" : "border border-line bg-white"
            }`}
          >
            <span
              className={`font-display text-[44px] leading-none font-bold ${step.highlight ? "text-orange" : "text-teal"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 mb-0 font-display text-[22px] font-bold">{step.title}</h3>
            <p className={`m-0 text-[15px] ${step.highlight ? "text-muted-dark" : "text-muted"}`}>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

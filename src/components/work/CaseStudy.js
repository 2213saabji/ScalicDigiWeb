import { Eyebrow } from "@/components/home/SectionHeading";

const tags = ["Website", "Online menu", "Local SEO"];

const story = [
  { title: "The challenge", text: "[What problem the client had before working with us.]" },
  { title: "What we did", text: "[The website, marketing and SEO work we delivered.]" },
  {
    title: "The result",
    text: "[A real result, e.g. more bookings or Google ranking — add once measured.]",
    highlight: true,
  },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-26">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="text-teal-light">Case study · Restaurant</Eyebrow>
            <h2 className="mt-3.5 mb-0 font-display text-4xl leading-[1.02] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[52px]">
              [Client name]
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-navy-line px-3.5 py-1.5 text-[13px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-10 flex h-64 items-center justify-center rounded-3xl border border-navy-line bg-navy-2 px-6 text-center text-[15px] text-muted-dark sm:h-[420px]">
          [Large project screenshot / mockup]
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5">
          {story.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col gap-2.5 rounded-[22px] p-7 ${
                item.highlight ? "bg-orange text-navy" : "border border-navy-line bg-navy-2"
              }`}
            >
              <span className={`font-display text-[15px] font-semibold ${item.highlight ? "" : "text-orange"}`}>
                {item.title}
              </span>
              <p className={`m-0 ${item.highlight ? "" : "text-mist"}`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

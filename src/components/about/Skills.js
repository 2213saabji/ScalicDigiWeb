import { Eyebrow } from "@/components/home/SectionHeading";

const skills = [
  { title: "Design", text: "Brand-fit layouts & visuals" },
  { title: "Development", text: "Fast, secure websites" },
  { title: "Marketing", text: "Social media & ads" },
  { title: "Local SEO", text: "Google Search & Maps", highlight: true },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-26">
      <div className="flex flex-wrap items-center gap-12 rounded-[32px] bg-navy p-7 text-white sm:p-14">
        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
          <Eyebrow className="text-teal-light">Our skills</Eyebrow>
          <h2 className="m-0 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] lg:text-[44px]">
            Every skill your online growth needs
          </h2>
          <p className="m-0 text-[17px] text-muted-dark">
            Design, development, marketing and SEO work side by side — so your website and your campaigns tell one
            story.
          </p>
        </div>
        <div className="grid min-w-0 flex-[1_1_420px] grid-cols-1 gap-3.5 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`rounded-[20px] p-5.5 ${skill.highlight ? "bg-orange text-navy" : "border border-navy-line bg-navy-2"}`}
            >
              <strong className="block font-display text-xl">{skill.title}</strong>
              <span className={`text-sm ${skill.highlight ? "" : "text-muted-dark"}`}>{skill.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

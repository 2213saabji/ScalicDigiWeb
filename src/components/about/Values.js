import { Icon } from "@/components/icons";
import { Eyebrow } from "@/components/home/SectionHeading";

const values = [
  {
    title: "Local first",
    text: "We focus on what makes neighbourhood businesses special.",
    icon: <path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 16.6 6.5 19.5l1-6.3L3 8.9 9 8z" />,
  },
  {
    title: "Honest pricing",
    text: "Clear packages, no hidden fees, no lock-in surprises.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Results you can see",
    text: "Simple monthly reports in plain language.",
    icon: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
  },
  {
    title: "Real people",
    text: "You talk directly to the people doing the work.",
    icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  },
];

export default function Values() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-26">
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="mt-3.5 mb-0 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] lg:text-5xl">
            How we work with every client
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-5">
          {values.map((value) => (
            <div key={value.title} className="flex flex-col gap-3 rounded-[22px] bg-paper p-7">
              <span className="flex size-12 items-center justify-center rounded-[14px] bg-navy">
                <Icon size={24} stroke="#FF5A1F">
                  {value.icon}
                </Icon>
              </span>
              <h3 className="m-0 font-display text-[21px] font-bold">{value.title}</h3>
              <p className="m-0 text-[15px] text-muted">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

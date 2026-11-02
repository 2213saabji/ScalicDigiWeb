import { ArrowRight } from "@/components/icons";

const phases = [
  {
    title: "Discover",
    when: "[Week 1]",
    className: "flex-[1_1_140px] rounded-[14px_6px_6px_14px] bg-navy text-white",
    whenTone: "text-muted-dark",
  },
  {
    title: "Plan & Design",
    when: "[Weeks 2–3]",
    className: "flex-[2_1_220px] rounded-md bg-teal text-white",
    whenTone: "text-mint",
  },
  {
    title: "Build & Launch",
    when: "[Week 4]",
    className: "flex-[1_1_160px] rounded-md bg-navy-2 text-white",
    whenTone: "text-muted-dark",
  },
];

export default function Timeline() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-18 pb-26">
      <div className="flex flex-col gap-6 rounded-[28px] border border-line bg-white p-6 sm:p-10">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="m-0 font-display text-[32px] font-bold tracking-[-0.02em]">Typical timeline</h2>
          <span className="text-sm text-muted">Depends on number of pages and features</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {phases.map((phase) => (
            <div key={phase.title} className={`px-4.5 py-4 ${phase.className}`}>
              <strong className="block font-display">{phase.title}</strong>
              <span className={`text-[13px] ${phase.whenTone}`}>{phase.when}</span>
            </div>
          ))}
          <div className="flex flex-[2_1_220px] items-center justify-between gap-3 rounded-[6px_14px_14px_6px] bg-orange px-4.5 py-4 text-navy">
            <span>
              <strong className="block font-display">Grow</strong>
              <span className="text-[13px]">Every month after launch</span>
            </span>
            <ArrowRight size={22} />
          </div>
        </div>
      </div>
    </section>
  );
}

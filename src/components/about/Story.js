import { Eyebrow } from "@/components/home/SectionHeading";

export default function Story() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-6 py-26">
      <div className="flex h-72 min-w-0 flex-[1_1_460px] items-center justify-center rounded-[28px] bg-peach text-[15px] font-medium text-rust sm:h-[440px]">
        [Team photo]
      </div>
      <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-4.5">
        <Eyebrow>Our story</Eyebrow>
        <h2 className="m-0 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] lg:text-[44px]">
          Built for the shop down the street
        </h2>
        <p className="m-0 text-[17px] text-muted">
          [Tell your story here — how Scalic Digital started, who founded it, and why you focus on restaurants, cafés,
          salons and local shops.]
        </p>
        <p className="m-0 text-[17px] text-muted">
          Today we design websites, run marketing and handle local SEO for businesses in [City / Region] — as one team,
          under one roof.
        </p>
      </div>
    </section>
  );
}

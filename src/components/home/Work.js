import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Eyebrow, SectionTitle } from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="border-y border-line bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-22">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <SectionTitle>Websites we&apos;ve launched</SectionTitle>
          </div>
          <Link href="/work" className="inline-flex min-h-11 items-center gap-2 font-semibold underline">
            View all projects <ArrowRight />
          </Link>
        </div>

        {/* Featured project */}
        <article className="mb-6 flex flex-wrap items-center gap-10 rounded-[28px] bg-peach p-7 sm:p-12">
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3.5">
            <span className="self-start rounded-full bg-navy px-3 py-1.5 text-xs font-semibold tracking-[0.06em] text-white uppercase">
              Featured · Restaurant
            </span>
            <h3 className="m-0 font-display text-[32px] leading-[1.05] font-bold sm:text-[40px]">[Client name]</h3>
            <p className="m-0 text-[17px] text-peach-ink">
              [One line about the project — what we built and the result for the client.]
            </p>
            <div className="flex flex-wrap gap-2">
              {["Website", "Online menu", "Local SEO"].map((tag) => (
                <span key={tag} className="rounded-full bg-white px-3 py-1.5 text-[13px]">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/work#case-study" className="inline-flex min-h-11 items-center gap-2 font-semibold text-navy underline">
              Read case study <ArrowRight />
            </Link>
          </div>
          <div className="min-w-0 flex-[1.4_1_420px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(74,36,18,0.18)]">
            <div className="flex gap-1.5 border-b border-line px-3.5 py-3">
              <span className="size-[9px] rounded-full bg-line" />
              <span className="size-[9px] rounded-full bg-line" />
              <span className="size-[9px] rounded-full bg-line" />
            </div>
            <div className="flex h-[300px] items-center justify-center bg-paper text-sm text-muted">
              [Project screenshot]
            </div>
          </div>
        </article>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
          <article className="flex flex-col gap-3.5 rounded-[28px] bg-mint p-8">
            <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-white text-sm text-teal-deep">
              [Project screenshot]
            </div>
            <div className="flex items-center justify-between gap-3">
              <h3 className="m-0 font-display text-2xl font-bold">[Client name]</h3>
              <span className="text-[13px] font-semibold text-teal-deep">Salon &amp; Spa</span>
            </div>
            <p className="m-0 text-[15px] text-teal-deep">Website · Bookings · Instagram marketing</p>
          </article>
          <article className="flex flex-col gap-3.5 rounded-[28px] bg-navy p-8 text-white">
            <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-navy-2 text-sm text-muted-dark">
              [Project screenshot]
            </div>
            <div className="flex items-center justify-between gap-3">
              <h3 className="m-0 font-display text-2xl font-bold">[Client name]</h3>
              <span className="text-[13px] font-semibold text-orange">Retail Shop</span>
            </div>
            <p className="m-0 text-[15px] text-muted-dark">Website · Product catalogue · Google Ads</p>
          </article>
        </div>
      </div>
    </section>
  );
}

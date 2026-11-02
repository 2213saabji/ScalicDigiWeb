import { Icon } from "@/components/icons";
import { Eyebrow, SectionTitle } from "./SectionHeading";

const websiteTags = ["Custom design", "Online menu", "Bookings", "Hosting & care"];
const menuSwatches = ["bg-peach", "bg-mint", "bg-fog"];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1200px] px-6 py-22">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[700px]">
          <Eyebrow>What we do</Eyebrow>
          <SectionTitle>
            Get found. Get chosen. <span className="text-teal">Get busy.</span>
          </SectionTitle>
        </div>
        <p className="m-0 max-w-[360px] text-[17px] text-muted">
          One team for your website, your marketing and your Google ranking — so you can focus on running the
          business.
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        {/* 01 — Websites */}
        <article className="flex min-w-0 flex-[2_1_600px] flex-wrap gap-8 overflow-hidden rounded-[28px] bg-navy p-7 text-white sm:p-10">
          <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-4">
            <span className="font-display text-[15px] font-semibold text-orange">01 — Websites</span>
            <h3 className="m-0 font-display text-[28px] leading-[1.1] font-bold sm:text-[34px]">
              Portfolio websites that sell for you
            </h3>
            <p className="m-0 text-muted-dark">
              Custom, mobile-first sites with your menu, products or services — plus bookings, online orders and
              WhatsApp built right in.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {websiteTags.map((tag) => (
                <span key={tag} className="rounded-full border border-navy-line px-3 py-1.5 text-[13px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-3 rounded-[18px] border border-navy-line bg-navy-2 p-4.5">
            <div className="flex items-center justify-between">
              <strong className="font-display">Today&apos;s Menu</strong>
              <span className="text-xs text-muted-dark">[Café Name]</span>
            </div>
            {menuSwatches.map((swatch) => (
              <div key={swatch} className="flex items-center gap-3 rounded-xl bg-navy p-2.5">
                <span className={`size-11 rounded-[10px] ${swatch}`} />
                <span className="flex-1 text-sm">[Dish name]</span>
                <span className="text-sm font-semibold">[₹ —]</span>
              </div>
            ))}
            <span className="rounded-full bg-orange p-2.5 text-center text-sm font-semibold text-navy">Order now</span>
          </div>
        </article>

        {/* 02 — Marketing */}
        <article className="flex min-w-0 flex-[1_1_320px] flex-col gap-4 rounded-[28px] bg-orange p-7 text-navy sm:p-10">
          <span className="font-display text-[15px] font-semibold">02 — Marketing</span>
          <h3 className="m-0 font-display text-[28px] leading-[1.1] font-bold sm:text-[34px]">
            Turn scrollers into walk-ins
          </h3>
          <p className="m-0">
            Instagram &amp; Facebook management, Google &amp; Meta ads, and campaigns for your launches and
            festivals.
          </p>
          <div className="mt-auto flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5 rounded-[14px] bg-white px-3.5 py-3 text-sm">
              <Icon size={20} stroke="#0F1B2D">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" />
              </Icon>
              Weekend offer post · Scheduled
            </div>
            <div className="flex items-center gap-2.5 rounded-[14px] bg-white px-3.5 py-3 text-sm">
              <Icon size={20} stroke="#0F1B2D">
                <path d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1z" />
                <path d="M16 9a4 4 0 0 1 0 6" />
              </Icon>
              Local ad campaign · Live
            </div>
          </div>
        </article>

        {/* 03 — Local SEO */}
        <article className="flex min-w-0 flex-[1_1_320px] flex-col gap-4 rounded-[28px] border border-line bg-white p-7 sm:p-10">
          <span className="font-display text-[15px] font-semibold text-teal">03 — Local SEO</span>
          <h3 className="m-0 font-display text-[28px] leading-[1.1] font-bold sm:text-[34px]">Show up first on Google</h3>
          <p className="m-0 text-muted">
            Google Business Profile, Maps, reviews and on-page SEO — so nearby customers find you, not your
            competitor.
          </p>
          <div className="mt-auto flex flex-col gap-2.5 rounded-2xl border border-line bg-paper p-3.5">
            <div className="flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm text-muted">
              <Icon size={16} stroke="#5A6472">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.5-4.5" />
              </Icon>
              best café near me
            </div>
            <div className="rounded-xl border-[1.5px] border-teal bg-white px-3 py-2.5 text-sm">
              <strong className="block">[Your Business]</strong>
              <span className="font-medium text-teal">Open now · 1st result</span>
            </div>
            <div className="rounded-xl bg-white px-3 py-2.5 text-sm text-muted">Another business</div>
          </div>
        </article>

        {/* Extras */}
        <article className="flex min-w-0 flex-[2_1_600px] flex-col items-start justify-center gap-6 rounded-[28px] bg-mint p-7 sm:p-10">
          <div className="flex max-w-[520px] flex-col gap-2">
            <h3 className="m-0 font-display text-[26px] font-bold">Plus: hosting, updates &amp; monthly reports</h3>
            <p className="m-0 text-teal-deep">
              We keep your site fast, secure and up to date — and show you what&apos;s working every month.
            </p>
          </div>
          <a
            href="#pricing"
            className="inline-flex min-h-11 items-center rounded-full bg-navy px-6 py-3.5 font-semibold text-white"
          >
            See packages
          </a>
        </article>
      </div>
    </section>
  );
}

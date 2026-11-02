import Link from "next/link";
import { Check, Icon } from "@/components/icons";

const menuSwatches = ["bg-peach", "bg-mint", "bg-fog"];

function WebsiteMockup() {
  return (
    <div className="min-w-0 flex-[1_1_440px] rounded-[28px] bg-navy p-5 text-white sm:p-8">
      <div className="flex flex-col gap-3 rounded-[18px] border border-navy-line bg-navy-2 p-5">
        <div className="flex items-center justify-between">
          <strong className="font-display text-lg">Today&apos;s Menu</strong>
          <span className="text-xs text-muted-dark">[Café Name]</span>
        </div>
        {menuSwatches.map((swatch) => (
          <div key={swatch} className="flex items-center gap-3 rounded-xl bg-navy p-2.5">
            <span className={`size-13 shrink-0 rounded-[10px] ${swatch}`} />
            <span className="flex-1 text-sm">[Dish name]</span>
            <span className="text-sm font-semibold">[₹ —]</span>
          </div>
        ))}
        <div className="grid grid-cols-2 gap-2.5">
          <span className="rounded-full bg-orange p-3 text-center text-sm font-semibold text-navy">Order now</span>
          <span className="rounded-full border border-white p-3 text-center text-sm font-semibold">Book a table</span>
        </div>
      </div>
    </div>
  );
}

function MarketingMockup() {
  return (
    <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-3.5 rounded-[28px] bg-orange p-5 sm:p-8">
      <div className="overflow-hidden rounded-[18px] bg-white">
        <div className="flex items-center gap-2.5 px-3.5 py-3">
          <span className="size-8 rounded-full bg-mint" />
          <strong className="text-sm">[yourbusiness]</strong>
          <span className="ml-auto text-xs text-muted">Sponsored</span>
        </div>
        <div className="flex h-50 items-center justify-center bg-peach text-sm text-rust">[Post image]</div>
        <div className="px-3.5 py-3 text-sm">Weekend special — [your offer here]. Book now!</div>
      </div>
      <div className="flex items-center gap-2.5 rounded-[14px] bg-white px-3.5 py-3 text-sm">
        <Icon size={20} stroke="#0F1B2D">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18" />
        </Icon>
        Content calendar · [Month]
      </div>
    </div>
  );
}

function SeoMockup() {
  return (
    <div className="min-w-0 flex-[1_1_440px] rounded-[28px] bg-mint p-5 sm:p-8">
      <div className="flex flex-col gap-3 rounded-[18px] bg-white p-4.5">
        <div className="flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[15px] text-muted">
          <Icon size={18} stroke="#5A6472">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.5-4.5" />
          </Icon>
          best café near me
        </div>
        <div className="flex h-30 items-center justify-center rounded-xl bg-fog text-[13px] text-[#3e4753]">[Map]</div>
        <div className="rounded-xl border-[1.5px] border-teal px-3.5 py-3 text-sm">
          <strong className="block text-[15px]">[Your Business]</strong>
          <span className="font-medium text-teal">Open now · Top result</span>
        </div>
        <div className="rounded-xl border border-line px-3.5 py-3 text-sm text-muted">Another business</div>
        <div className="rounded-xl border border-line px-3.5 py-3 text-sm text-muted">Another business</div>
      </div>
    </div>
  );
}

const offerings = [
  {
    id: "websites",
    label: "01 — Websites",
    title: "Portfolio websites that sell for you",
    text: "A custom website designed around your business — your menu, products or services, your photos and your story. Fast on every phone, easy to update, and built to turn visitors into bookings and orders.",
    features: [
      "Custom design",
      "Mobile-first layout",
      "Online menu / catalogue",
      "Bookings & orders",
      "WhatsApp & call buttons",
      "Domain, hosting & SSL",
    ],
    cta: "Start a website",
    Mockup: WebsiteMockup,
  },
  {
    id: "marketing",
    label: "02 — Digital Marketing",
    title: "Turn local scrollers into walk-in customers",
    text: "We plan, design and post your social content, run targeted ads to people near you, and promote your offers, launches and festival specials — then report back on what worked.",
    features: [
      "Instagram & Facebook",
      "Post & reel design",
      "Google Ads",
      "Meta (Facebook/Instagram) Ads",
      "Offer & festival campaigns",
      "Monthly reports",
    ],
    cta: "Grow my audience",
    Mockup: MarketingMockup,
    mockupFirst: true,
  },
  {
    id: "seo",
    label: "03 — Local SEO",
    title: "Show up first when people search nearby",
    text: "When someone searches “best café near me,” you should be the answer. We optimise your Google Business Profile, your website and your local listings so you rank on Google Search and Maps.",
    features: [
      "Google Business Profile",
      "Google Maps ranking",
      "Keyword research",
      "On-page & technical SEO",
      "Review management",
      "Local directory listings",
    ],
    cta: "Get a free SEO audit",
    Mockup: SeoMockup,
  },
];

export default function Offerings() {
  return offerings.map(({ id, label, title, text, features, cta, Mockup, mockupFirst }) => (
    <section
      key={id}
      id={id}
      className={`mx-auto flex max-w-[1200px] items-center gap-14 px-6 pt-26 ${
        mockupFirst ? "flex-wrap-reverse" : "flex-wrap"
      }`}
    >
      {mockupFirst && <Mockup />}
      <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-4.5">
        <span className="font-display text-[15px] font-semibold text-teal">{label}</span>
        <h2 className="m-0 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] lg:text-5xl">{title}</h2>
        <p className="m-0 text-[17px] text-muted">{text}</p>
        <ul className="m-0 grid list-none grid-cols-1 gap-x-5 gap-y-3 p-0 text-[15px] sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <Check stroke="#0B6E69" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-1.5 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="inline-flex min-h-11 items-center rounded-full bg-navy px-6 py-3.5 font-semibold text-white"
          >
            {cta}
          </Link>
          <Link href="/#pricing" className="inline-flex min-h-11 items-center px-2 font-semibold underline">
            See pricing →
          </Link>
        </div>
      </div>
      {!mockupFirst && <Mockup />}
    </section>
  ));
}

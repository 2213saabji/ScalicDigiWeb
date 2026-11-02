import { Check } from "@/components/icons";

function AuditMockup() {
  const rows = [
    { label: "Website", status: "Needs work", bar: "w-[35%] bg-orange", tone: "text-rust" },
    { label: "Google listing", status: "Incomplete", bar: "w-[50%] bg-orange", tone: "text-rust" },
    { label: "Social media", status: "Good start", bar: "w-[70%] bg-teal", tone: "text-teal" },
  ];
  return (
    <div className="min-w-0 flex-[1_1_400px] rounded-[28px] bg-mint p-5 sm:p-8">
      <div className="flex flex-col gap-4 rounded-[18px] bg-white p-6 shadow-[0_20px_50px_rgba(15,27,45,0.1)]">
        <div className="flex items-center justify-between gap-3">
          <strong className="font-display text-lg">Online presence audit</strong>
          <span className="text-xs text-muted">[Business name]</span>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-1.5">
            <div className="flex justify-between text-sm">
              <span>{row.label}</span>
              <span className={`font-semibold ${row.tone}`}>{row.status}</span>
            </div>
            <div className="h-2.5 rounded-full bg-paper">
              <div className={`h-2.5 rounded-full ${row.bar}`} />
            </div>
          </div>
        ))}
        <div className="border-t border-line pt-3.5 text-sm text-muted">
          Example audit — your report is based on your business.
        </div>
      </div>
    </div>
  );
}

function DesignMockup() {
  return (
    <div className="relative min-w-0 flex-[1_1_400px] rounded-[28px] bg-peach p-5 pb-24 sm:p-8 sm:pb-8">
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(74,36,18,0.12)]">
        <div className="flex gap-1.5 border-b border-line px-3.5 py-3">
          <span className="size-[9px] rounded-full bg-line" />
          <span className="size-[9px] rounded-full bg-line" />
          <span className="size-[9px] rounded-full bg-line" />
        </div>
        <div className="flex flex-col gap-2.5 p-4.5">
          <div className="h-3.5 w-2/5 rounded-md bg-navy" />
          <div className="h-[110px] rounded-xl border-2 border-dashed border-line-2 bg-paper" />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-15 rounded-[10px] bg-paper" />
            <div className="h-15 rounded-[10px] bg-paper outline-2 outline-orange" />
            <div className="h-15 rounded-[10px] bg-paper" />
          </div>
        </div>
      </div>
      <div className="absolute right-4 bottom-4 max-w-[220px] rounded-[14px_14px_4px_14px] bg-navy px-4 py-3 text-sm text-white shadow-[0_16px_40px_rgba(15,27,45,0.3)]">
        <strong className="block text-xs font-medium text-muted-dark">You · feedback</strong>
        Can we make the menu section bigger?
      </div>
    </div>
  );
}

function LaunchMockup() {
  const checklist = [
    "Domain connected",
    "SSL secure (https)",
    "Tested on mobile & desktop",
    "Google Business Profile live",
    "Contact & WhatsApp buttons working",
  ];
  return (
    <div className="min-w-0 flex-[1_1_400px] rounded-[28px] bg-navy p-5 sm:p-8">
      <div className="flex flex-col gap-3.5 rounded-[18px] border border-navy-line bg-navy-2 p-6 text-white">
        <div className="flex items-center justify-between">
          <strong className="font-display text-lg">Launch checklist</strong>
          <span className="rounded-full bg-orange px-3 py-1 text-xs font-semibold text-navy">Live</span>
        </div>
        {checklist.map((item) => (
          <div key={item} className="flex items-center gap-3 text-[15px]">
            <Check stroke="#7FD3CC" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportMockup() {
  const bars = ["h-[30%] bg-line", "h-[42%] bg-line", "h-[55%] bg-line", "h-[68%] bg-line", "h-[90%] bg-navy"];
  const stats = ["Posts published", "Website visits", "Google calls", "New reviews"];
  return (
    <div className="min-w-0 flex-[1_1_400px] rounded-[28px] bg-orange p-5 sm:p-8">
      <div className="flex flex-col gap-4 rounded-[18px] bg-white p-6 shadow-[0_20px_50px_rgba(15,27,45,0.18)]">
        <div className="flex items-center justify-between">
          <strong className="font-display text-lg">Monthly report</strong>
          <span className="text-xs text-muted">[Month]</span>
        </div>
        <div aria-hidden="true" className="flex h-30 items-end gap-2.5 border-b border-line pb-1">
          {bars.map((bar, i) => (
            <div key={i} className={`flex-1 rounded-t-md ${bar}`} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2.5 text-sm">
          {stats.map((stat) => (
            <div key={stat} className="rounded-xl bg-paper p-3">
              <span className="block text-muted">{stat}</span>
              <strong className="font-display text-xl">[X]</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const steps = [
  {
    id: "step-1",
    title: "Discover",
    when: "[Week 1]",
    badge: "[Week 1] · Free",
    text: "We start with a free call to understand your business, your customers and your goals. Then we review your current website, Google listing and social pages — and your nearby competitors.",
    does: ["Consultation call", "Online presence audit", "Competitor check"],
    gets: ["Free audit report", "Recommended plan", "Clear quote"],
    needs: ["Business details", "Your goals", "30 minutes"],
    Mockup: AuditMockup,
  },
  {
    id: "step-2",
    title: "Plan & Design",
    when: "[Weeks 2–3]",
    badge: "[Weeks 2–3]",
    text: "We plan your pages and content, then design how your website will look. You review the designs, share feedback, and we refine them until you're happy — before a single line of code is written.",
    does: ["Page & content plan", "Custom design", "Marketing & SEO plan"],
    gets: ["Design to review", "[X] rounds of changes", "Final approved design"],
    needs: ["Logo", "Photos", "Menu / products", "Feedback"],
    Mockup: DesignMockup,
    mockupFirst: true,
  },
  {
    id: "step-3",
    title: "Build & Launch",
    when: "[Week 4]",
    badge: "[Week 4]",
    text: "We build your website, test it on every phone and browser, and set up SEO from day one. Then we connect your domain, publish your Google Business Profile and go live.",
    does: ["Website development", "Mobile & speed testing", "SEO & Google setup"],
    gets: ["Live website", "Google listing live", "Quick how-to training"],
    needs: ["Final approval", "Domain access"],
    Mockup: LaunchMockup,
  },
  {
    id: "step-4",
    title: "Grow",
    when: "Ongoing, every month",
    badge: "Ongoing",
    text: "Launch is just the start. Every month we post on your social media, run your ads, improve your Google ranking and send you a simple report showing what's working.",
    does: ["Social media posts", "Google & Meta ads", "Ongoing local SEO"],
    gets: ["Monthly report", "Review call", "Website updates"],
    needs: ["Offers & news", "Quick approvals"],
    Mockup: ReportMockup,
    mockupFirst: true,
  },
];

function ListCard({ title, items }) {
  return (
    <div className="rounded-[18px] border border-line bg-white p-5">
      <strong className="font-display">{title}</strong>
      <ul className="mt-2.5 mb-0 flex flex-col gap-1 pl-4.5 text-[15px] text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Steps() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col gap-24 px-6 pt-26 pb-10">
      {steps.map(({ id, title, badge, text, does, gets, needs, Mockup, mockupFirst }, i) => (
        <article
          key={id}
          id={id}
          className={`flex scroll-mt-6 items-center gap-14 ${mockupFirst ? "flex-wrap-reverse" : "flex-wrap"}`}
        >
          {mockupFirst && <Mockup />}
          <div className="flex min-w-0 flex-[1.2_1_480px] flex-col gap-4.5">
            <div className="flex items-center gap-3.5">
              <span className="font-display text-6xl leading-none font-bold text-teal sm:text-[72px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full bg-mint px-3 py-1.5 text-[13px] font-semibold text-teal-deep">{badge}</span>
            </div>
            <h2 className="m-0 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] lg:text-[44px]">{title}</h2>
            <p className="m-0 text-[17px] text-muted">{text}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ListCard title="What we do" items={does} />
              <ListCard title="What you get" items={gets} />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <strong className="mr-1 font-semibold">We need from you:</strong>
              {needs.map((need) => (
                <span key={need} className="rounded-full border border-line-2 px-3 py-1">
                  {need}
                </span>
              ))}
            </div>
          </div>
          {!mockupFirst && <Mockup />}
        </article>
      ))}
    </section>
  );
}

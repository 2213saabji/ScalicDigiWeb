import { Icon } from "@/components/icons";
import { Eyebrow } from "./SectionHeading";

const reasons = [
  {
    title: "One team, everything",
    text: "Website, marketing and SEO under one roof.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20a6 6 0 0 1 12 0M14 20a5 5 0 0 1 7-4.5" />
      </>
    ),
  },
  {
    title: "Mobile-first",
    text: "Designed for the phones your customers use.",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    title: "You own it",
    text: "Your domain, your website, your content.",
    icon: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
  },
  {
    title: "Clear reports",
    text: "Simple monthly updates on what's working.",
    icon: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-22">
      <div className="flex flex-wrap gap-12 rounded-[32px] border border-line bg-white p-7 sm:p-14">
        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4.5">
          <Eyebrow>Why Scalic</Eyebrow>
          <h2 className="m-0 font-display text-[34px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[44px]">
            A small, dedicated team that treats your business like our own.
          </h2>
          <p className="m-0 text-[17px] text-muted">
            You talk to the people actually building your website and running your campaigns — no middlemen, no
            confusing jargon.
          </p>
        </div>
        <div className="grid min-w-0 flex-[1_1_420px] grid-cols-1 gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col gap-2.5 rounded-[20px] bg-paper p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-navy">
                <Icon size={22} stroke="#FF5A1F">
                  {reason.icon}
                </Icon>
              </span>
              <strong className="font-display text-[19px]">{reason.title}</strong>
              <span className="text-[15px] text-muted">{reason.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

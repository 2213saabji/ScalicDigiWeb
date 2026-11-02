import { Icon } from "@/components/icons";
import { Eyebrow } from "@/components/home/SectionHeading";

const channels = [
  {
    title: "WhatsApp updates",
    text: "Quick progress updates on the app you already use.",
    icon: <path d="M4 20l1.4-4A8 8 0 1 1 8 18.6z" />,
  },
  {
    title: "Review calls",
    text: "A short call at every key step to show you the work.",
    icon: (
      <>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="M16 10l5-3v10l-5-3z" />
      </>
    ),
  },
  {
    title: "One shared folder",
    text: "Designs, reports and files — all in one place.",
    icon: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
  },
];

export default function InTheLoop() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-26">
        <div className="mb-12 max-w-[680px]">
          <Eyebrow className="text-teal-light">Always in the loop</Eyebrow>
          <h2 className="mt-3.5 mb-0 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] lg:text-5xl">
            You&apos;ll never wonder what&apos;s happening.
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-5">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="flex flex-col gap-3 rounded-[22px] border border-navy-line bg-navy-2 p-7"
            >
              <span className="flex size-12 items-center justify-center rounded-[14px] bg-orange">
                <Icon size={24} stroke="#0F1B2D">
                  {channel.icon}
                </Icon>
              </span>
              <h3 className="m-0 font-display text-[21px] font-bold">{channel.title}</h3>
              <p className="m-0 text-[15px] text-muted-dark">{channel.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

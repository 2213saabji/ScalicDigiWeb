import Link from "next/link";
import { Icon } from "@/components/icons";
import { Eyebrow } from "@/components/home/SectionHeading";

const addOns = [
  {
    title: "Domain & hosting",
    text: "Your own .com or .in, fast hosting and SSL.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
  },
  {
    title: "Website care",
    text: "Updates, backups and small changes every month.",
    icon: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z" />,
  },
  {
    title: "Online ordering",
    text: "Take orders and payments directly on your site.",
    icon: (
      <>
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
        <path d="M2 3h3l2.5 12h12l2-8H6.2" />
      </>
    ),
  },
  {
    title: "Booking system",
    text: "Table, appointment or class bookings, 24/7.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 11h18" />
      </>
    ),
  },
  {
    title: "WhatsApp integration",
    text: "Chat and order buttons that open WhatsApp.",
    icon: <path d="M4 20l1.4-4A8 8 0 1 1 8 18.6z" />,
  },
  {
    title: "Photos & content",
    text: "Product, food and space photos, plus written copy.",
    icon: (
      <>
        <path d="M4 7h3l2-3h6l2 3h3v13H4z" />
        <circle cx="12" cy="13" r="4" />
      </>
    ),
  },
];

export default function AddOns() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Add-ons</Eyebrow>
            <h2 className="mt-3.5 mb-0 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] lg:text-[44px]">
              Extras when you need them
            </h2>
          </div>
          <Link href="/#pricing" className="inline-flex min-h-11 items-center font-semibold underline">
            Add-on pricing →
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {addOns.map((addOn) => (
            <div key={addOn.title} className="flex items-start gap-4 rounded-[20px] bg-paper p-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy">
                <Icon size={22} stroke="#FF5A1F">
                  {addOn.icon}
                </Icon>
              </span>
              <div>
                <strong className="font-display text-lg">{addOn.title}</strong>
                <p className="mt-1 mb-0 text-[15px] text-muted">{addOn.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

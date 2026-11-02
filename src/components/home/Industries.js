import { Icon } from "@/components/icons";

const industries = [
  { label: "Restaurants", icon: <path d="M7 2v20M4 2v6a3 3 0 0 0 6 0V2M17 2c-2 0-3 3-3 7h3v13" /> },
  {
    label: "Cafés & Bakeries",
    icon: <path d="M4 9h13v5a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V9zM17 11h1a3 3 0 0 1 0 6h-1M8 2v3M12 2v3" />,
  },
  {
    label: "Salons & Spas",
    icon: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12" />
      </>
    ),
  },
  { label: "Retail Shops", icon: <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" /> },
  {
    label: "Clinics",
    icon: (
      <>
        <path d="M12 5v14M5 12h14" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </>
    ),
  },
  { label: "Gyms", icon: <path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12" /> },
];

export default function Industries() {
  return (
    <section id="industries" className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-3.5 px-6 py-9">
        <span className="mr-3 text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">We build for</span>
        {industries.map((item) => (
          <span
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4.5 py-2.5 font-display text-[17px] font-medium"
          >
            <Icon size={18} stroke="#0B6E69">
              {item.icon}
            </Icon>
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}

import { Icon } from "@/components/icons";
import { contact, contactLinks } from "@/lib/contact";

const channels = [
  {
    label: "Email",
    value: contact.email,
    href: contactLinks.email,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    label: "Phone",
    value: contact.phone,
    href: contactLinks.phone,
    icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  },
  {
    label: "WhatsApp",
    value: contact.whatsapp,
    href: contactLinks.whatsapp,
    icon: <path d="M4 20l1.4-4A8 8 0 1 1 8 18.6z" />,
  },
  {
    label: "Hours",
    value: contact.hours,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

function Channel({ label, value, icon }) {
  return (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-2">
        <Icon size={20} stroke="#FF5A1F">
          {icon}
        </Icon>
      </span>
      <span>
        <span className="block text-[13px] text-muted-dark">{label}</span>
        {value}
      </span>
    </>
  );
}

export default function ContactDetails() {
  return (
    <aside className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
      <div className="flex flex-col gap-5 rounded-[28px] bg-navy p-8 text-white">
        <h2 className="m-0 font-display text-2xl font-bold">Reach us directly</h2>
        {channels.map((channel) =>
          channel.href ? (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.label === "WhatsApp" ? "_blank" : undefined}
              rel={channel.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="flex min-h-11 items-center gap-3.5 text-white hover:text-orange"
            >
              <Channel {...channel} />
            </a>
          ) : (
            <div key={channel.label} className="flex items-center gap-3.5">
              <Channel {...channel} />
            </div>
          ),
        )}
      </div>
      <div className="overflow-hidden rounded-[28px] border border-line bg-white">
        <div className="flex h-50 items-center justify-center bg-fog text-sm text-[#3e4753]">[Google Map]</div>
        <div className="flex items-start gap-3 px-6 py-5">
          <Icon size={20} stroke="#0B6E69" className="mt-0.5 shrink-0">
            <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </Icon>
          <span className="text-[15px]">{contact.address}</span>
        </div>
      </div>
    </aside>
  );
}

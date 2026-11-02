import { ArrowRight, Icon, Logo } from "@/components/icons";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function Navbar() {
  return (
    <nav
      aria-label="Main"
      className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-4 rounded-full border border-navy-line bg-navy-2 py-2.5 pr-2.5 pl-5.5"
    >
      <a href="#top" className="flex items-center gap-2.5 text-white">
        <Logo />
        <span className="font-display text-xl font-bold tracking-[-0.02em]">Scalic Digital</span>
      </a>

      <div className="flex items-center gap-x-6.5 text-[15px] font-medium">
        <div className="hidden items-center gap-x-6.5 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-orange">
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-orange px-5.5 py-3 font-semibold text-navy sm:inline-flex"
        >
          Free audit <ArrowRight />
        </a>

        {/* Mobile menu — no JS needed */}
        <details className="group lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full bg-orange text-navy [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <Icon size={20} strokeWidth={2.2}>
              <path d="M4 7h16M4 12h16M4 17h16" className="group-open:hidden" />
              <path d="M6 6l12 12M18 6L6 18" className="hidden group-open:block" />
            </Icon>
          </summary>
          <div className="absolute inset-x-0 top-full z-20 mt-2 flex flex-col gap-1 rounded-3xl border border-navy-line bg-navy-2 p-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-xl px-4 py-3 text-white hover:bg-navy">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="mt-1 rounded-full bg-orange px-4 py-3 text-center font-semibold text-navy">
              Free audit
            </a>
          </div>
        </details>
      </div>
    </nav>
  );
}

function SiteMockup() {
  return (
    <div className="relative mx-auto mt-14 h-[380px] max-w-[1100px] sm:h-[500px]">
      {/* Browser window */}
      <div className="absolute inset-0 overflow-hidden rounded-t-[20px] bg-white text-navy shadow-[0_-20px_80px_rgba(0,0,0,0.35)] md:right-30">
        <div className="flex items-center gap-2 border-b border-line bg-paper px-4.5 py-3.5">
          <span className="size-[11px] rounded-full bg-orange" />
          <span className="size-[11px] rounded-full bg-amber" />
          <span className="size-[11px] rounded-full bg-teal-bright" />
          <span className="mx-auto w-[46%] rounded-lg border border-line bg-white px-3 py-1 text-center text-[13px] text-muted">
            yourrestaurant.com
          </span>
        </div>
        <div className="flex items-center justify-between px-5 py-4.5 text-sm sm:px-8">
          <strong className="font-display text-lg sm:text-xl">[Restaurant Name]</strong>
          <span className="hidden gap-5.5 text-muted md:flex">
            <span>Menu</span>
            <span>About</span>
            <span>Gallery</span>
            <span>Contact</span>
          </span>
          <span className="rounded-full bg-navy px-4 py-2 font-semibold whitespace-nowrap text-white">
            Book a table
          </span>
        </div>
        <div className="relative mx-5 flex h-[230px] items-end rounded-2xl bg-peach p-7 sm:mx-8">
          <span className="absolute top-4 left-7 text-[13px] text-rust">[Client hero photo]</span>
          <div className="max-w-[420px] text-left font-display text-3xl leading-[1.05] font-bold sm:text-[40px]">
            Fresh flavours, made every day.
          </div>
        </div>
        <div className="mx-5 mt-5 grid grid-cols-3 gap-3.5 sm:mx-8">
          <div className="h-30 rounded-[14px] bg-mint" />
          <div className="h-30 rounded-[14px] bg-fog" />
          <div className="h-30 rounded-[14px] bg-peach" />
        </div>
      </div>

      {/* Phone */}
      <div className="absolute top-[110px] right-0 hidden h-[390px] w-[230px] flex-col overflow-hidden rounded-[36px] border-8 border-navy-line bg-navy shadow-[0_30px_70px_rgba(0,0,0,0.45)] md:flex">
        <div className="flex h-35 items-end bg-mint p-4 text-xs text-teal-deep">[Salon photo]</div>
        <div className="flex flex-1 flex-col gap-2.5 bg-white p-4 text-left text-navy">
          <strong className="font-display text-lg leading-[1.2]">[Salon Name]</strong>
          <span className="text-xs text-muted">Hair · Skin · Nails</span>
          <div className="flex gap-1.5">
            <span className="rounded-full bg-paper px-2.5 py-1 text-[11px]">Haircut</span>
            <span className="rounded-full bg-paper px-2.5 py-1 text-[11px]">Facial</span>
          </div>
          <span className="mt-auto rounded-full bg-orange p-2.5 text-center text-[13px] font-semibold text-navy">
            Book appointment
          </span>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute top-30 -left-9 hidden items-center gap-3 rounded-2xl bg-white px-4.5 py-3.5 text-left text-navy shadow-[0_18px_44px_rgba(15,27,45,0.3)] xl:flex">
        <span className="flex size-10 items-center justify-center rounded-xl bg-mint">
          <Icon size={20} stroke="#084F4B">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 11h18M9 16l2 2 4-4" />
          </Icon>
        </span>
        <span className="text-[13px] leading-[1.35]">
          <strong className="block font-semibold">New table booking</strong>
          <span className="text-muted">Tonight · 8:00 PM · 4 guests</span>
        </span>
      </div>
      <div className="absolute bottom-14 left-10 hidden items-center gap-3 rounded-2xl border border-navy-line bg-navy px-4.5 py-3.5 text-left text-white shadow-[0_18px_44px_rgba(0,0,0,0.35)] md:flex">
        <Icon size={22} stroke="#FF5A1F">
          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </Icon>
        <span className="text-[13px] leading-[1.35]">
          <strong className="block font-semibold">Listed on Google Maps</strong>
          <span className="text-muted-dark">Business profile verified</span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="bg-grid px-4 pt-6 text-white sm:px-6">
      <Navbar />
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-7 pt-18 text-center">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-navy-line bg-navy-2 py-2 pr-4 pl-2.5 text-sm font-medium text-mist">
          <span className="size-2 shrink-0 rounded-full bg-orange shadow-[0_0_0_4px_rgba(255,90,31,0.25)]" />
          Websites · Marketing · Local SEO for local businesses
        </span>
        <h1 className="m-0 max-w-[1000px] font-display text-5xl leading-[0.98] font-bold tracking-[-0.04em] sm:text-7xl lg:text-[88px]">
          Your business, <span className="text-orange">online</span> &amp;{" "}
          <span className="border-b-[6px] border-orange pb-0.5 italic">growing.</span>
        </h1>
        <p className="m-0 max-w-[640px] text-lg text-muted-dark sm:text-xl">
          We design websites for restaurants, cafés, salons and shops — then bring real customers through
          the door with digital marketing and local SEO.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center gap-2.5 rounded-full bg-orange px-8 py-4.5 text-[17px] font-semibold text-navy"
          >
            Start your website <ArrowRight size={18} />
          </a>
          <a
            href="#work"
            className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-white px-8 py-4.5 text-[17px] font-semibold text-white hover:bg-white hover:text-navy"
          >
            See our work
          </a>
        </div>
      </div>
      <SiteMockup />
    </section>
  );
}

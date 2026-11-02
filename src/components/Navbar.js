import Link from "next/link";
import { ArrowRight, Icon, Logo } from "@/components/icons";

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/#process", label: "Process" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar({ current }) {
  return (
    <nav
      aria-label="Main"
      className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-4 rounded-full border border-navy-line bg-navy-2 py-2.5 pr-2.5 pl-5.5"
    >
      <Link href="/" className="flex items-center gap-2.5 text-white">
        <Logo />
        <span className="font-display text-xl font-bold tracking-[-0.02em]">Scalic Digital</span>
      </Link>

      <div className="flex items-center gap-x-6.5 text-[15px] font-medium">
        <div className="hidden items-center gap-x-6.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.href === current ? "page" : undefined}
              className={link.href === current ? "font-semibold text-orange" : "text-white hover:text-orange"}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/#contact"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-orange px-5.5 py-3 font-semibold text-navy sm:inline-flex"
        >
          Free audit <ArrowRight />
        </Link>

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
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.href === current ? "page" : undefined}
                className={`rounded-xl px-4 py-3 hover:bg-navy ${link.href === current ? "text-orange" : "text-white"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="mt-1 rounded-full bg-orange px-4 py-3 text-center font-semibold text-navy">
              Free audit
            </Link>
          </div>
        </details>
      </div>
    </nav>
  );
}

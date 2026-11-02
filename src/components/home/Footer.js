import { Logo } from "@/components/icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-6 py-10">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-display text-xl font-bold tracking-[-0.02em]">Scalic Digital</span>
        </a>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-muted-dark">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="m-0 text-sm text-muted-dark">© 2026 Scalic Digital</p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { navLinks } from "@/components/Navbar";
import { Logo } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-6 py-10">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-display text-xl font-bold tracking-[-0.02em]">Scalic Digital</span>
        </Link>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-muted-dark">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="m-0 text-sm text-muted-dark">© 2026 Scalic Digital</p>
      </div>
    </footer>
  );
}

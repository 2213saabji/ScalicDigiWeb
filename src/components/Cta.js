import Link from "next/link";

export default function Cta({ title, label, className = "py-24" }) {
  return (
    <section className={`px-6 ${className}`}>
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-7 rounded-[32px] bg-orange p-7 sm:p-14">
        <h2 className="m-0 max-w-[640px] font-display text-4xl leading-none font-bold tracking-[-0.03em] lg:text-5xl">
          {title}
        </h2>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center rounded-full bg-navy px-7.5 py-4.5 text-[17px] font-semibold text-white"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}

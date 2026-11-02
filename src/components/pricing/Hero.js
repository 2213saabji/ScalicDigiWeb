import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Eyebrow } from "@/components/home/SectionHeading";

const plans = [
  { name: "Starter", blurb: "Get online with a professional website." },
  { name: "Growth", blurb: "Website plus marketing to bring in customers.", popular: true },
  { name: "Scale", blurb: "Full-service growth for busy owners." },
];

export default function Hero() {
  return (
    <section id="top" className="bg-grid px-4 pt-6 pb-26 text-white sm:px-6">
      <Navbar current="/pricing" />
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-5 pt-22 text-center">
        <Eyebrow className="text-teal-light">Pricing</Eyebrow>
        <h1 className="m-0 font-display text-5xl leading-none font-bold tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
          Simple plans. <span className="text-orange">No surprises.</span>
        </h1>
        <p className="m-0 text-lg text-muted-dark sm:text-[19px]">
          Start with a website, add marketing and SEO when you&apos;re ready. Every plan includes a free consultation.
        </p>
      </div>
      <div className="mx-auto mt-18 grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(290px,100%),1fr))] items-center gap-6">
        {plans.map(({ name, blurb, popular }) => (
          <div
            key={name}
            className={`relative flex flex-col gap-5 rounded-[28px] ${
              popular
                ? "border-[3px] border-orange bg-white px-7 py-12 text-navy shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:px-10"
                : "border border-navy-line bg-navy-2 p-7 sm:p-10"
            }`}
          >
            {popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1.5 text-[13px] font-semibold whitespace-nowrap text-navy">
                Most popular
              </span>
            )}
            <h2 className="m-0 font-display text-[22px] font-semibold">{name}</h2>
            <div className="font-display text-4xl leading-[1.1] font-bold whitespace-nowrap">[YOUR PRICE]</div>
            <p className={`m-0 text-[15px] ${popular ? "text-muted" : "text-muted-dark"}`}>{blurb}</p>
            <Link
              href="/contact"
              className={`min-h-11 rounded-full p-3.5 text-center font-semibold ${
                popular ? "bg-orange text-navy" : "border-[1.5px] border-white text-white hover:bg-white hover:text-navy"
              }`}
            >
              Choose {name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

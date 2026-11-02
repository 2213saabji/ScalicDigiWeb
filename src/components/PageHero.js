import Navbar from "@/components/Navbar";
import { Eyebrow } from "@/components/home/SectionHeading";

export default function PageHero({ current, eyebrow, title, text, children }) {
  return (
    <section id="top" className="bg-grid px-4 pt-6 pb-24 text-white sm:px-6">
      <Navbar current={current} />
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 pt-22">
        <Eyebrow className="text-teal-light">{eyebrow}</Eyebrow>
        <h1 className="m-0 max-w-[900px] font-display text-5xl leading-none font-bold tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
          {title}
        </h1>
        <p className="m-0 max-w-[640px] text-lg text-muted-dark sm:text-[19px]">{text}</p>
        {children}
      </div>
    </section>
  );
}

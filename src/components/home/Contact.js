import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { contact, contactLinks } from "@/lib/contact";
import { Eyebrow } from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-6 pb-22">
      <div className="bg-grid flex flex-wrap items-center justify-between gap-10 rounded-[32px] p-7 text-white sm:p-14">
        <div className="flex max-w-[620px] flex-col gap-4">
          <Eyebrow className="text-teal-light">Free audit</Eyebrow>
          <h2 className="m-0 font-display text-4xl leading-[1.02] font-bold tracking-[-0.03em] sm:text-5xl">
            Ready to get more <span className="text-orange">customers?</span>
          </h2>
          <p className="m-0 text-[17px] text-muted-dark">
            Tell us about your business and we&apos;ll send a free review of your website, Google listing and
            social pages — with clear next steps.
          </p>
        </div>
        <div className="flex flex-col gap-3.5">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full bg-orange px-8 py-4.5 text-[17px] font-semibold text-navy"
          >
            Get my free audit <ArrowRight size={18} />
          </Link>
          <a
            href={contactLinks.phone}
            className="inline-flex min-h-11 items-center justify-center rounded-full border-[1.5px] border-white px-8 py-4.5 text-[17px] font-semibold text-white hover:bg-white hover:text-navy"
          >
            Call {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

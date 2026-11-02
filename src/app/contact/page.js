import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
import Footer from "@/components/Footer";
import { contact } from "@/lib/contact";

export const metadata = {
  title: "Contact — Scalic Digital",
  description:
    "Tell us about your business and get a free website & SEO audit from Scalic Digital.",
};

const steps = [
  { title: "We review your business", text: "We look at your current website, Google listing and social pages." },
  { title: "You get a free audit", text: "A short report on what's working and what to fix first." },
  { title: "We plan together", text: "A quick call to agree on the right plan — no pressure.", highlight: true },
];

export default function ContactPage() {
  return (
    <>
      <main>
        <PageHero
          current="/contact"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s get your business <span className="text-orange">online.</span>
            </>
          }
          text={`Tell us about your business and we'll get back to you within ${contact.responseTime} with a free website & SEO audit.`}
          className="pb-50"
        />

        <section className="mx-auto -mt-34 flex max-w-[1200px] flex-wrap items-start gap-6 px-6">
          <ContactForm />
          <ContactDetails />
        </section>

        <section className="mx-auto max-w-[1200px] px-6 py-26">
          <h2 className="mt-0 mb-10 text-center font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] lg:text-[44px]">
            What happens next
          </h2>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-5 p-0">
            {steps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-2.5 rounded-[22px] border border-line bg-white p-7">
                <span
                  className={`flex size-12 items-center justify-center rounded-full font-display font-bold ${
                    step.highlight ? "bg-orange text-navy" : "bg-navy text-white"
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className="mt-1.5 mb-0 font-display text-[21px] font-bold">{step.title}</h3>
                <p className="m-0 text-[15px] text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}

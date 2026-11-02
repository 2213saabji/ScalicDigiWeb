import PageHero from "@/components/PageHero";
import Steps, { steps } from "@/components/process/Steps";
import Timeline from "@/components/process/Timeline";
import InTheLoop from "@/components/process/InTheLoop";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Process — Scalic Digital",
  description:
    "Our four-step process — Discover, Plan & Design, Build & Launch, Grow — so you always know what's happening and what's next.",
};

export default function ProcessPage() {
  return (
    <>
      <main>
        <PageHero
          current="/process"
          eyebrow="How it works"
          title={
            <>
              From first call to <span className="text-orange">first customer.</span>
            </>
          }
          text="A clear, four-step process — so you always know what's happening, what's next, and what we need from you."
        >
          <ol className="m-0 mt-10 grid list-none grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-4 p-0">
            {steps.map((step, i) => {
              const last = i === steps.length - 1;
              return (
                <li key={step.id}>
                  <a
                    href={`#${step.id}`}
                    className={`flex min-h-11 items-center gap-4 rounded-[20px] p-5.5 ${
                      last ? "bg-orange text-navy" : "border border-navy-line bg-navy-2 text-white hover:border-orange"
                    }`}
                  >
                    <span
                      className={`flex size-12 shrink-0 items-center justify-center rounded-full font-display font-bold ${
                        last ? "bg-navy text-white" : "border-2 border-orange text-orange"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <strong className="block font-display text-[19px]">{step.title}</strong>
                      <span className={`text-[13px] ${last ? "" : "text-muted-dark"}`}>{step.when}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </PageHero>
        <Steps />
        <Timeline />
        <InTheLoop />
        <Cta title="Ready for step one?" label="Book a free call" className="py-26" />
      </main>
      <Footer />
    </>
  );
}

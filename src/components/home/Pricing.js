import { Check } from "@/components/icons";
import { Eyebrow, SectionTitle } from "./SectionHeading";

const plans = [
  {
    name: "Starter",
    blurb: "Get online with a professional website.",
    features: ["Up to 5-page website", "Mobile-friendly design", "Google Business Profile setup"],
  },
  {
    name: "Growth",
    blurb: "Website plus marketing to bring in customers.",
    features: ["Everything in Starter", "Social media management", "Local SEO & monthly report"],
    popular: true,
  },
  {
    name: "Scale",
    blurb: "Full-service growth for busy owners.",
    features: ["Everything in Growth", "Google & Meta ad campaigns", "Online ordering / booking system"],
  },
];

function PlanCard({ plan }) {
  const { popular } = plan;
  return (
    <div
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
      <h3 className="m-0 font-display text-[22px] font-semibold">{plan.name}</h3>
      <div className="font-display text-4xl leading-[1.1] font-bold whitespace-nowrap">[YOUR PRICE]</div>
      <p className={`m-0 text-[15px] ${popular ? "text-muted" : "text-muted-dark"}`}>{plan.blurb}</p>
      <ul
        className={`m-0 flex list-none flex-col gap-3 border-t px-0 pt-5 pb-0 text-[15px] ${
          popular ? "border-line" : "border-navy-line"
        }`}
      >
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5">
            <Check stroke={popular ? "#0B6E69" : "#7FD3CC"} />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`min-h-11 rounded-full p-3.5 text-center font-semibold ${
          popular ? "bg-orange text-navy" : "border-[1.5px] border-white text-white hover:bg-white hover:text-navy"
        }`}
      >
        Choose {plan.name}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-grid text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-22">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <Eyebrow className="text-teal-light">Packages</Eyebrow>
          <SectionTitle className="mb-3.5">Simple plans. No surprises.</SectionTitle>
          <p className="m-0 text-[17px] text-muted-dark">Start with a website, add growth when you&apos;re ready.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(290px,100%),1fr))] items-center gap-6">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

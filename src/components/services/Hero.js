import PageHero from "@/components/PageHero";

const jumpLinks = [
  { href: "#websites", label: "01 · Websites" },
  { href: "#marketing", label: "02 · Digital Marketing" },
  { href: "#seo", label: "03 · Local SEO" },
];

export default function Hero() {
  return (
    <PageHero
      current="/services"
      eyebrow="Services"
      title={
        <>
          Everything your business needs to <span className="text-orange">grow online.</span>
        </>
      }
      text="Pick one service or let us handle all three. Every plan is built around one goal: more customers walking through your door."
    >
      <div className="mt-2 flex flex-wrap gap-3">
        {jumpLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex min-h-11 items-center rounded-full border border-navy-line bg-navy-2 px-5 py-3 font-medium text-white hover:border-orange"
          >
            {link.label}
          </a>
        ))}
      </div>
    </PageHero>
  );
}

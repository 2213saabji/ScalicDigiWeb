const addOns = [
  { title: "Domain & hosting", unit: "Per year" },
  { title: "Website care", unit: "Per month" },
  { title: "Online ordering", unit: "One-time setup" },
  { title: "Booking system", unit: "One-time setup" },
  { title: "Extra pages", unit: "Per page" },
  { title: "Photos & content", unit: "Per shoot" },
];

export default function AddOns() {
  return (
    <section id="add-ons" className="mx-auto max-w-[1200px] px-6 pt-26">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
        <h2 className="m-0 font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] lg:text-[44px]">Add-ons</h2>
        <p className="m-0 max-w-[420px] text-muted">Add any of these to a plan, or buy them on their own.</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4">
        {addOns.map((addOn) => (
          <div
            key={addOn.title}
            className="flex items-center justify-between gap-4 rounded-[20px] border border-line bg-white p-6"
          >
            <div>
              <strong className="font-display text-lg">{addOn.title}</strong>
              <p className="mt-0.5 mb-0 text-sm text-muted">{addOn.unit}</p>
            </div>
            <span className="font-display font-bold whitespace-nowrap">[PRICE]</span>
          </div>
        ))}
      </div>
    </section>
  );
}

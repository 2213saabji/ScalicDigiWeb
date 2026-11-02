const Y = "✓";
const N = "—";

const rows = [
  ["Custom website design", Y, Y, Y],
  ["Number of pages", "Up to 5", "Up to 8", "[X]"],
  ["Mobile-friendly layout", Y, Y, Y],
  ["Google Business Profile setup", Y, Y, Y],
  ["WhatsApp & call buttons", Y, Y, Y],
  ["Social media management", N, Y, Y],
  ["Local SEO", N, Y, Y],
  ["Monthly performance report", N, Y, Y],
  ["Google & Meta ad campaigns", N, N, Y],
  ["Online ordering / booking system", N, N, Y],
  ["Priority support", N, N, Y],
];

function Cell({ value, highlight }) {
  return (
    <td
      className={`p-4 text-center font-semibold ${value === N ? "text-muted" : "text-teal"} ${
        highlight ? "bg-paper" : ""
      }`}
    >
      {value === Y || value === N ? (
        <>
          <span aria-hidden="true">{value}</span>
          <span className="sr-only">{value === Y ? "Included" : "Not included"}</span>
        </>
      ) : (
        value
      )}
    </td>
  );
}

export default function Compare() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-26">
      <h2 className="mt-0 mb-10 text-center font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] lg:text-[44px]">
        Compare plans
      </h2>
      <div className="overflow-x-auto rounded-3xl border border-line bg-white">
        <table className="w-full min-w-[720px] border-collapse text-[15px]">
          <thead>
            <tr className="bg-paper text-left">
              <th scope="col" className="px-7 py-5 text-[13px] font-semibold tracking-[0.06em] text-muted uppercase">
                Feature
              </th>
              <th scope="col" className="px-4 py-5 text-center font-display text-lg">
                Starter
              </th>
              <th scope="col" className="bg-peach px-4 py-5 text-center font-display text-lg">
                Growth
              </th>
              <th scope="col" className="px-4 py-5 text-center font-display text-lg">
                Scale
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, starter, growth, scale]) => (
              <tr key={label} className="border-t border-line">
                <th scope="row" className="px-7 py-4 text-left font-medium">
                  {label}
                </th>
                <Cell value={starter} />
                <Cell value={growth} highlight />
                <Cell value={scale} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function FaqList({ items }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <details key={item.q} open={i === 0} className="group rounded-[18px] border border-line bg-white px-6.5 py-5.5">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold sm:text-xl [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden="true" className="text-[26px] text-teal">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="mt-3 mb-0 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

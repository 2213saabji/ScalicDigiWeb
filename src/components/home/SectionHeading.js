export function Eyebrow({ children, className = "text-teal" }) {
  return (
    <span className={`text-[13px] font-semibold tracking-[0.08em] uppercase ${className}`}>{children}</span>
  );
}

export function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`mt-3.5 mb-0 font-display text-4xl leading-[1.02] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[56px] ${className}`}
    >
      {children}
    </h2>
  );
}

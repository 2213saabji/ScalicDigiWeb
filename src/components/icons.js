function Icon({ size = 24, stroke = "currentColor", strokeWidth = 2, children, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function ArrowRight({ size = 16 }) {
  return (
    <Icon size={size} strokeWidth={2.2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  );
}

export function Check({ stroke }) {
  return (
    <Icon size={18} stroke={stroke} strokeWidth={2.4} className="shrink-0">
      <path d="M5 12l5 5 9-10" />
    </Icon>
  );
}

export function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#FF5A1F" />
      <rect x="7" y="18" width="4" height="7" rx="1" fill="#0F1B2D" />
      <rect x="14" y="13" width="4" height="12" rx="1" fill="#0F1B2D" />
      <rect x="21" y="7" width="4" height="18" rx="1" fill="#0F1B2D" />
    </svg>
  );
}

export { Icon };

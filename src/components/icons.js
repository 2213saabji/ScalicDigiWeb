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

// "SD" monogram — same artwork as src/app/icon.svg.
export function Logo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="-45 -40 280 280" aria-hidden="true" className="shrink-0">
      <rect x="-45" y="-40" width="280" height="280" rx="64" fill="#0F1B2D" />
      <g transform="translate(95 100) scale(1.04) translate(-92 -88)">
        <path
          fill="#FFFFFF"
          d="M68.9 172V154.6H82.7V84.4H68.9V67H112.1Q133.25 67 144.275 77.725Q155.3 88.45 155.3 109.6V129.4Q155.3 150.55 144.275 161.275Q133.25 172 112.1 172ZM102.5 154H112.4Q124.4 154 129.95 147.7Q135.5 141.4 135.5 130V109Q135.5 97.45 129.95 91.225Q124.4 85 112.4 85H102.5Z"
        />
        <path
          fill="#FF5A1F"
          stroke="#0F1B2D"
          strokeWidth="9"
          strokeLinejoin="round"
          paintOrder="stroke"
          d="M46.35 114.1Q34.2 114.1 24.9 109.75Q15.6 105.4 10.35 97.3Q5.1 89.2 5.1 77.8V73.6H24.6V77.8Q24.6 87.25 30.45 91.975Q36.3 96.7 46.35 96.7Q56.55 96.7 61.575 92.65Q66.6 88.6 66.6 82.3Q66.6 77.95 64.125 75.25Q61.65 72.55 56.925 70.825Q52.2 69.1 45.45 67.6L42 66.85Q31.2 64.45 23.475 60.775Q15.75 57.1 11.625 51.1Q7.5 45.1 7.5 35.5Q7.5 25.9 12.075 19.075Q16.65 12.25 24.975 8.575Q33.3 4.9 44.55 4.9Q55.8 4.9 64.575 8.725Q73.35 12.55 78.375 20.125Q83.4 27.7 83.4 39.1V43.6H63.9V39.1Q63.9 33.1 61.575 29.425Q59.25 25.75 54.9 24.025Q50.55 22.3 44.55 22.3Q35.55 22.3 31.275 25.675Q27 29.05 27 34.9Q27 38.8 29.025 41.5Q31.05 44.2 35.1 46Q39.15 47.8 45.45 49.15L48.9 49.9Q60.15 52.3 68.475 56.05Q76.8 59.8 81.45 65.95Q86.1 72.1 86.1 81.7Q86.1 91.3 81.225 98.575Q76.35 105.85 67.425 109.975Q58.5 114.1 46.35 114.1Z"
        />
        {/* Navy gap around the slash, then the slash itself */}
        <line x1="24" y1="174" x2="182" y2="16" stroke="#0F1B2D" strokeWidth="14" strokeLinecap="round" />
        <line x1="24" y1="174" x2="182" y2="16" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export { Icon };

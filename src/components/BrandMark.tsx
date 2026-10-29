export function BrandMark({
  invert = false,
  compact = false,
}: {
  invert?: boolean;
  compact?: boolean;
}) {
  const ink = invert ? "#F4EFE6" : "#141711";
  const sun = "#E3B13A";

  return (
    <span className="inline-flex items-center gap-3">
      <svg
        width={compact ? 28 : 36}
        height={compact ? 28 : 36}
        viewBox="0 0 36 36"
        aria-hidden="true"
      >
        <rect x="6" y="4" width="2" height="24" fill={ink} />
        <rect x="28" y="4" width="2" height="24" fill={ink} />
        <rect x="6" y="8" width="24" height="1.5" fill={ink} />
        <circle cx="18" cy="24" r="5" fill={sun} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display tracking-tight"
          style={{ color: ink, fontSize: compact ? "1.05rem" : "1.2rem" }}
        >
          RUI PAI
        </span>
        {!compact && (
          <span className="kicker mt-1" style={{ color: ink, opacity: 0.55 }}>
            CT Futevôlei
          </span>
        )}
      </span>
    </span>
  );
}

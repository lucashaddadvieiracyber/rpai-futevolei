type IconProps = {
  className?: string;
};

const sun = "currentColor";
const wash = "currentColor";

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.86 9.86 0 0 0 4.77 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01Zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.55-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29Z"
      />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke={sun}
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke={sun} strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill={sun} />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z"
        fill={wash}
        opacity="0.28"
      />
      <path
        d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z"
        fill="none"
        stroke={sun}
        strokeWidth="1.6"
      />
      <circle cx="12" cy="9.8" r="2.2" fill={sun} />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.6 14.7 8.4l6.3.9-4.5 4.4 1.1 6.3L12 17.1 6.4 20l1.1-6.3L3 9.3l6.3-.9L12 2.6Z"
      />
    </svg>
  );
}

export function IconGoogle({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.6 12.23c0-.74-.07-1.45-.19-2.13H12v4.03h5.95a5.08 5.08 0 0 1-2.2 3.34v2.77h3.56c2.08-1.92 3.29-4.75 3.29-8.01Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.77c-.99.66-2.26 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A10.99 10.99 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.1A6.61 6.61 0 0 1 5.5 12c0-.73.13-1.43.34-2.1V7.05H2.18A11 11 0 0 0 1 12c0 1.78.43 3.45 1.18 4.95l3.66-2.85Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.07.56 4.21 1.64l3.16-3.16C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.85C6.71 7.31 9.14 5.38 12 5.38Z" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M5 12h12M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
      />
    </svg>
  );
}

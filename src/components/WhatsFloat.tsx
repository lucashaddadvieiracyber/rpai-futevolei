import { WA } from "@/lib/site";
import { IconWhatsApp } from "./Icons";

export function WhatsFloat() {
  return (
    <a
      href={WA.trial}
      aria-label="Chamar no WhatsApp"
      className="whats-float fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#20bd5a] md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <IconWhatsApp className="h-8 w-8 md:h-9 md:w-9" />
    </a>
  );
}

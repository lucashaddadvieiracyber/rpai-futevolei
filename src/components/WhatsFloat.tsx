import { WA } from "@/lib/site";
import { IconWhatsApp } from "./Icons";

export function WhatsFloat() {
  return (
    <a
      href={WA.trial}
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 bg-sun px-4 py-3 text-xs font-bold tracking-wider text-ink uppercase shadow-[0_12px_40px_rgba(20,23,17,0.28)] md:bottom-8 md:right-8"
      data-magnetic="0.1"
    >
      <IconWhatsApp className="h-5 w-5" />
      WhatsApp
    </a>
  );
}

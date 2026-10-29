import { BrandMark } from "./BrandMark";
import { IconInstagram, IconWhatsApp } from "./Icons";
import {
  EMAIL,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  NAV,
  PHONE_DISPLAY,
  PLACES,
  WA,
} from "@/lib/site";

export function Footer() {
  return (
    <footer id="contato" className="bg-salt pb-10 pt-16 text-ink">
      <div className="wrap grid gap-12 border-t border-ink/10 pt-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <BrandMark />
          <p className="mt-6 max-w-sm text-ink/60">
            CT de futevôlei no Recreio dos Bandeirantes. Treine certo, jogue
            melhor — do iniciante ao profissional.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="kicker text-olive">Navega</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ink/75 hover:text-net">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="kicker text-olive">Fala com a gente</p>
          <ul className="mt-4 space-y-3 text-ink/80">
            <li>
              <a href={WA.trial} className="inline-flex items-center gap-2 hover:text-net">
                <IconWhatsApp className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-net">
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-net"
              >
                <IconInstagram className="h-4 w-4" />
                {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
          <ul className="mt-6 space-y-2 text-sm text-ink/55">
            {PLACES.map((place) => (
              <li key={place.name}>{place.name} — {place.address}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="wrap mt-14 text-xs tracking-wide text-ink/40">
        © 2026 Rui Pai Futevôlei Personal. Recreio dos
        Bandeirantes · RJ.
      </p>
    </footer>
  );
}

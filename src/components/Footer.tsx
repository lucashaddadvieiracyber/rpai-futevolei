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
    <footer id="contato" className="bg-ink pb-10 pt-16 text-foam">
      <div className="wrap grid gap-12 border-t border-foam/10 pt-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <BrandMark invert />
          <p className="mt-6 max-w-sm text-foam/60">
            CT de futevôlei no Recreio dos Bandeirantes. Treine certo, jogue
            melhor — do iniciante ao profissional.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="kicker text-sand">Navega</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-foam/75 hover:text-sun">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="kicker text-sand">Fala com a gente</p>
          <ul className="mt-4 space-y-3 text-foam/80">
            <li>
              <a href={WA.trial} className="inline-flex items-center gap-2 hover:text-sun">
                <IconWhatsApp className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-sun">
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-sun"
              >
                <IconInstagram className="h-4 w-4" />
                {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
          <ul className="mt-6 space-y-2 text-sm text-foam/55">
            {PLACES.map((place) => (
              <li key={place.name}>{place.name} — {place.address}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="wrap mt-14 text-xs tracking-wide text-foam/40">
        © 2026 Rui Pai Futevôlei Personal. Recreio dos
        Bandeirantes · RJ.
      </p>
    </footer>
  );
}

import Image from "next/image";
import { PLACES } from "@/lib/site";
import { IconArrow, IconPin } from "./Icons";

export function Locations() {
  return (
    <section id="onde" className="relative isolate overflow-hidden bg-ink py-24 text-foam md:py-32">
      <div className="absolute inset-0 opacity-35" data-parallax-section>
        <Image
          src="/media/athletes-back.jpg"
          alt=""
          fill
          className="object-cover"
          data-parallax-image
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>
      <div className="wrap relative">
        <p className="kicker text-sun" data-reveal>
          Onde
        </p>
        <h2
          className="font-display mt-4 max-w-[14ch] text-[12vw] md:text-7xl"
          data-motion-text="lines"
          aria-label="Dois pontos. O Recreio inteiro."
        >
          <span className="motion-line-mask">
            <span className="motion-line">Dois pontos.</span>
          </span>
          <span className="motion-line-mask">
            <span className="motion-line">O Recreio inteiro.</span>
          </span>
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-2" data-reveal-group>
          {PLACES.map((place) => (
            <article key={place.name} data-reveal-item>
              <IconPin className="h-8 w-8 text-sun" />
              <h3 className="font-display mt-5 text-4xl">{place.name}</h3>
              <p className="mt-3 text-sand">{place.address}</p>
              <p className="mt-3 max-w-md text-foam/70">{place.detail}</p>
              <a
                href={place.map}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-sun"
              >
                Abrir no mapa
                <IconArrow className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

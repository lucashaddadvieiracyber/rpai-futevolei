import Image from "next/image";
import { WA } from "@/lib/site";
import { IconArrow } from "./Icons";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-28 text-foam md:py-36">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/media/team-stand.jpg"
          alt=""
          fill
          className="object-cover object-[center_22%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      </div>
      <div className="wrap relative text-center">
        <p className="kicker text-sun" data-reveal>
          Próximo passo
        </p>
        <h2
          className="font-display mx-auto mt-5 max-w-[16ch] text-[14vw] md:text-8xl"
          data-motion-text="lines"
          aria-label="Entra na areia."
        >
          <span className="motion-line-mask">
            <span className="motion-line">Entra</span>
          </span>
          <span className="motion-line-mask">
            <span className="motion-line">na areia.</span>
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-lg text-foam/80" data-reveal>
          Aula experimental em qualquer modalidade. A maioria nunca tinha jogado.
          O primeiro toque resolve mais do que qualquer texto.
        </p>
        <a
          href={WA.trial}
          className="btn btn-sun mx-auto mt-10"
          data-magnetic="0.14"
          data-reveal
        >
          Agendar no WhatsApp
          <IconArrow className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

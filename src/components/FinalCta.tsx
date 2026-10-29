import Image from "next/image";
import { WA } from "@/lib/site";
import { IconArrow } from "./Icons";

export function FinalCta() {
  return (
    <section className="bg-salt py-24 text-ink md:py-32">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="kicker text-olive" data-reveal>
            Próximo passo
          </p>
          <h2
            className="font-display mt-5 max-w-[12ch] text-[14vw] md:text-7xl"
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
          <p className="mt-8 max-w-lg text-lg text-ink/75" data-reveal>
            Aula experimental em qualquer modalidade. A maioria nunca tinha jogado.
            O primeiro toque resolve mais do que qualquer texto.
          </p>
          <a
            href={WA.trial}
            className="btn btn-sun mt-10"
            data-magnetic="0.14"
            data-reveal
          >
            Agendar no WhatsApp
            <IconArrow className="h-4 w-4" />
          </a>
        </div>
        <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] lg:col-span-6 lg:aspect-[5/4]">
          <Image
            src="/media/team.jpg"
            alt="Equipe do CT Rui Pai na quadra de areia do Recreio."
            fill
            className="object-cover object-[center_22%]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </figure>
      </div>
    </section>
  );
}

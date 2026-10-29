import Image from "next/image";
import { WA } from "@/lib/site";
import { IconArrow } from "./Icons";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate min-h-dvh overflow-hidden bg-ink text-foam"
      data-parallax-section
    >
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0" data-parallax-image data-parallax-speed="0.12">
        <Image
          src="/media/team-stand.jpg"
          alt="Equipe do CT Rui Pai na quadra de areia do Recreio, uniformizada, com a rede ao fundo."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_22%] md:object-[78%_18%]"
        />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/45 to-ink/10 md:via-ink/35 md:to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/55 to-transparent" />
      </div>
      <div className="wrap relative flex min-h-dvh flex-col justify-end pb-28 pt-32 md:justify-center md:pb-24 md:pt-28">
        <p className="kicker text-sun" data-reveal>
          CT Rui Pai · Recreio dos Bandeirantes
        </p>
        <h1
          className="font-display mt-5 max-w-[14ch] text-[13vw] leading-[0.88] md:text-[5.6vw]"
          data-motion-text="lines"
          aria-label="O CT mais completo de futevôlei do Recreio."
        >
          <span className="motion-line-mask">
            <span className="motion-line">O CT mais completo</span>
          </span>
          <span className="motion-line-mask">
            <span className="motion-line">de futevôlei</span>
          </span>
          <span className="motion-line-mask">
            <span className="motion-line">do Recreio.</span>
          </span>
        </h1>
        <p
          className="mt-7 max-w-lg text-lg text-foam/90 md:text-xl"
          data-reveal
          data-reveal-delay="0.08"
        >
          São 07 quadras na praia Posto 11 e 04 quadras na Praça Mozart Firmeza.
          Todos os níveis, do iniciante ao profissional.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4" data-reveal data-reveal-delay="0.14">
          <a href={WA.trial} className="btn btn-sun" data-magnetic="0.14">
            Quero fazer uma aula experimental
            <IconArrow className="h-4 w-4" />
          </a>
          <a href="#aulas" className="btn btn-ghost">
            Ver aulas e valores
          </a>
        </div>
      </div>
    </section>
  );
}

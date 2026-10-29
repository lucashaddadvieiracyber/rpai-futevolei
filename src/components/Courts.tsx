import Image from "next/image";
import { WA } from "@/lib/site";

export function Courts() {
  return (
    <section id="ct" className="bg-foam py-24 text-ink md:py-32">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker text-olive" data-reveal>
            O CT
          </p>
          <h2
            className="font-display mt-4 text-[11vw] md:text-6xl"
            data-motion-text="lines"
            aria-label="Referência da Zona Oeste."
          >
            <span className="motion-line-mask block">
              <span className="motion-line">Referência da</span>
            </span>
            <span className="motion-line-mask block">
              <span className="motion-line">Zona Oeste.</span>
            </span>
          </h2>
          <div className="mt-8 space-y-5 text-ink/80" data-reveal>
            <p>
              Nossos professores têm mais de 12 anos de experiência. Aqui treinam
              profissionais de futevôlei e de futebol — e o personal atende do
              iniciante ao avançado.
            </p>
            <p>
              Venha fazer parte do CT mais antigo do RJ e referência da Zona
              Oeste. Horário livre, todo dia: você escolhe a hora e o local, na
              praia ou na praça.
            </p>
          </div>
          <a href={WA.trial} className="btn btn-sun mt-10 w-fit" data-magnetic="0.12">
            Quero agendar uma aula
          </a>
        </div>

        <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] sm:aspect-[4/3] lg:col-span-7 lg:aspect-[5/6]">
          <Image
            src="/media/court-play.jpg"
            alt="Alunos e professores do CT reunidos na quadra de areia ao entardecer, bolas de futevôlei no chão."
            fill
            className="object-cover object-[center_30%]"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </figure>
      </div>
    </section>
  );
}

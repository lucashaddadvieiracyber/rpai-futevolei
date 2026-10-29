import Image from "next/image";
import { WA } from "@/lib/site";

export function Courts() {
  return (
    <section id="ct" className="bg-foam py-24 text-ink md:py-32">
      <div className="wrap grid items-start gap-12 lg:grid-cols-12">
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
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8" data-reveal-group>
            <div data-reveal-item>
              <dt className="font-display text-5xl text-sun">07</dt>
              <dd className="mt-2 text-sm text-ink/70">Quadras na praia · Posto 11 · 17.600</dd>
            </div>
            <div data-reveal-item>
              <dt className="font-display text-5xl text-sun">04</dt>
              <dd className="mt-2 text-sm text-ink/70">Quadras na Praça Mozart Firmeza</dd>
            </div>
            <div data-reveal-item>
              <dt className="font-display text-5xl text-sun">12+</dt>
              <dd className="mt-2 text-sm text-ink/70">Anos ensinando futevôlei no Recreio</dd>
            </div>
            <div data-reveal-item>
              <dt className="font-display text-5xl text-sun">7d</dt>
              <dd className="mt-2 text-sm text-ink/70">Todos os dias, no horário que você pode</dd>
            </div>
          </dl>
          <a href={WA.trial} className="btn btn-sun mt-10 w-fit" data-magnetic="0.12">
            Quero agendar uma aula
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:col-span-7">
          <figure className="relative col-span-2 aspect-[16/10] overflow-hidden">
            <Image
              src="/media/team.jpg"
              alt="Time do CT Rui Pai reunido na areia, uniformizado, com a bola e a rede."
              fill
              className="object-cover object-top"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </figure>
          <figure className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/media/athletes-side.jpg"
              alt="Duas atletas do CT com bola de futevôlei na praia do Recreio."
              fill
              className="object-cover object-[center_20%]"
              sizes="(min-width: 1024px) 27vw, 50vw"
            />
          </figure>
          <figure className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/media/court-play.jpg"
              alt="Grupo de alunos na quadra ao entardecer, bolas de futevôlei na areia."
              fill
              className="object-cover object-[center_20%]"
              sizes="(min-width: 1024px) 27vw, 50vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

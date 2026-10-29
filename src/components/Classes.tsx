import Image from "next/image";
import { OFFERS, WA } from "@/lib/site";
import { IconArrow } from "./Icons";

export function Classes() {
  const [main, ...rest] = OFFERS;

  return (
    <section id="aulas" className="bg-ink py-24 text-foam md:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker text-sun" data-reveal>
              Aulas
            </p>
            <h2
              className="font-display mt-4 max-w-[10ch] text-[12vw] md:text-7xl"
              data-motion-text="lines"
              aria-label="Escolhe o ritmo."
            >
              <span className="motion-line-mask">
                <span className="motion-line">Escolhe</span>
              </span>
              <span className="motion-line-mask">
                <span className="motion-line">o ritmo.</span>
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-foam/70" data-reveal>
            Veja as atividades que você pode fazer no CT Rui Pai. Turmas por
            nível, personal e Clubinho no fim de semana. A grade sai no WhatsApp.
          </p>
        </div>

        <article
          className="mt-16 grid gap-8 border-t border-foam/10 pt-12 lg:grid-cols-12"
          data-reveal
        >
          <figure className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <Image
              src="/media/athletes-side.jpg"
              alt="Duas alunas do CT Rui Pai na areia do Recreio, cada uma com uma bola de futevôlei."
              fill
              className="object-cover object-[center_20%]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </figure>
          <div className="flex flex-col justify-between lg:col-span-7 lg:pl-10">
            <div>
              <p className="kicker text-sun">{main.kicker}</p>
              <h3 className="font-display mt-4 text-6xl md:text-8xl">{main.title}</h3>
              <p className="mt-6 max-w-lg text-lg text-foam/75">{main.blurb}</p>
              <p className="mt-8 font-accent text-3xl text-sand">
                a partir de R$ {main.price}
              </p>
              <p className="mt-3 text-sm tracking-wide text-foam/55">
                {main.freqs.join("  ·  ")}
              </p>
            </div>
            <a href={main.href} className="btn btn-sun mt-10 w-fit" data-magnetic="0.12">
              Agendar futevôlei
              <IconArrow className="h-4 w-4" />
            </a>
          </div>
        </article>

        <div className="mt-4 grid gap-px bg-foam/10 md:grid-cols-2" data-reveal-group>
          {rest.map((offer) => (
            <article key={offer.id} className="bg-ink py-12 md:pr-10 md:even:pl-10" data-reveal-item>
              <p className="kicker text-sun">{offer.kicker}</p>
              <h3 className="font-display mt-3 text-5xl">{offer.title}</h3>
              <p className="mt-4 max-w-md text-foam/70">{offer.blurb}</p>
              <p className="mt-6 font-accent text-2xl text-sand">
                a partir de R$ {offer.price}
              </p>
              <p className="mt-2 text-sm text-foam/50">{offer.freqs.join("  ·  ")}</p>
              <a href={offer.href} className="btn btn-ghost mt-8 w-fit">
                Quero este
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-foam/10 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-foam/75">
            Day use aos sábados: <strong className="text-foam">R$ 10</strong> para
            aluno e não aluno. Gympass / Wellhub a partir do plano Silver+.
          </p>
          <a href={WA.gympass} className="btn btn-ghost w-fit">
            Treinar com Gympass
          </a>
        </div>
      </div>
    </section>
  );
}

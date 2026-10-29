import Image from "next/image";
import { INFRA } from "@/lib/site";

export function Infra() {
  return (
    <section className="bg-foam pb-24 text-ink md:pb-32">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker text-olive" data-reveal>
            Infra
          </p>
          <h2
            className="font-display mt-4 text-[12vw] md:text-6xl"
            data-motion-text="lines"
            aria-label="O que tem além da rede."
          >
            <span className="motion-line-mask">
              <span className="motion-line">O que tem</span>
            </span>
            <span className="motion-line-mask">
              <span className="motion-line">além da rede.</span>
            </span>
          </h2>
          <figure className="relative mt-10 aspect-[4/5] overflow-hidden">
            <Image
              src="/media/athletes-back.jpg"
              alt="Alunas do CT de frente para a quadra e o mar do Recreio, com a rede ao fundo."
              fill
              className="object-cover object-[center_30%]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </figure>
        </div>
        <dl className="grid content-start gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7 lg:pt-16" data-reveal-group>
          {INFRA.map((item) => (
            <div key={item.title} data-reveal-item>
              <dt className="font-display text-2xl">{item.title}</dt>
              <dd className="mt-2 text-ink/65">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

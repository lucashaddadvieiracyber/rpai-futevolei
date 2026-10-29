import Image from "next/image";
import { REVIEWS } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-ink py-24 text-foam md:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker text-sun" data-reveal>
              Google · 19 avaliações
            </p>
            <h2
              className="font-display mt-4 max-w-[12ch] text-[12vw] md:text-7xl"
              data-motion-text="lines"
              aria-label="Quem treina, volta."
            >
              <span className="motion-line-mask">
                <span className="motion-line">Quem treina,</span>
              </span>
              <span className="motion-line-mask">
                <span className="motion-line">volta.</span>
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-foam/60" data-reveal>
            Textos reais das avaliações. Sem retrato inventado — o nome é o que o
            Google publicou.
          </p>
        </div>
        <div className="mt-16 grid gap-px bg-foam/10 md:grid-cols-2" data-reveal-group>
          {REVIEWS.map((review) => (
            <blockquote key={review.name} className="bg-ink p-8 md:p-10" data-reveal-item>
              <p className="font-accent text-2xl leading-snug text-foam">
                “{review.text}”
              </p>
              <footer className="mt-8 text-sm text-foam/50">
                <cite className="not-italic text-sand">{review.name}</cite>
                <span className="mx-2">·</span>
                {review.date}
              </footer>
            </blockquote>
          ))}
        </div>
        <figure className="relative mt-16 aspect-[16/9] overflow-hidden">
          <Image
            src="/media/team-stand.jpg"
            alt="Equipe do CT Rui Pai reunida na quadra de areia do Recreio, com a rede ao fundo."
            fill
            className="object-cover object-top"
            sizes="(min-width: 1180px) 1180px, 100vw"
          />
        </figure>
      </div>
    </section>
  );
}

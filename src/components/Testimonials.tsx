import { GOOGLE_RATING, GOOGLE_REVIEWS_URL, REVIEWS } from "@/lib/site";
import { IconArrow, IconGoogle, IconStar } from "./Icons";

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-[#F8BB06]" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className={className} />
      ))}
    </span>
  );
}

const AVATAR = ["bg-sun text-ink", "bg-net text-white", "bg-ink text-white"];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-salt py-24 text-ink md:py-32">
      <div className="wrap">
        <p className="kicker text-olive">Depoimentos dos nossos alunos</p>
        <div className="mt-4 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="font-display max-w-[12ch] text-[12vw] md:text-7xl">
            Quem treina,
            <br />
            volta.
          </h2>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="card flex w-full max-w-sm items-center gap-5 p-6 transition-transform hover:-translate-y-0.5"
          >
            <IconGoogle className="h-10 w-10 shrink-0" />
            <span>
              <span className="flex flex-wrap items-center gap-2">
                <strong className="font-display text-2xl">{GOOGLE_RATING.label}</strong>
                <Stars className="h-5 w-5" />
              </span>
              <span className="mt-1 block text-sm text-ink/55">
                {GOOGLE_RATING.value} · com base em {GOOGLE_RATING.count} avaliações no Google
              </span>
              <span className="mt-2 inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-olive">
                Ver no Google
                <IconArrow className="h-3.5 w-3.5" />
              </span>
            </span>
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, i) => (
            <blockquote
              key={review.name}
              className="card flex flex-col p-7"
            >
              <header className="flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm tracking-normal ${AVATAR[i % AVATAR.length]}`}
                  aria-hidden="true"
                >
                  {initials(review.name)}
                </span>
                <span>
                  <cite className="block text-sm font-bold not-italic">{review.name}</cite>
                  <span className="text-xs text-ink/45">{review.date}</span>
                </span>
              </header>
              <span className="mt-4 inline-flex">
                <Stars className="h-4 w-4" />
              </span>
              <p className="mt-4 flex-1 text-[1rem] leading-relaxed text-ink/80">
                “{review.text}”
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-ink/40">
                <IconGoogle className="h-3.5 w-3.5" />
                Postado no Google
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FAQ as ITEMS, WA } from "@/lib/site";

export function FAQ() {
  return (
    <section id="faq" className="bg-foam pb-24 text-ink md:pb-32">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="kicker text-olive" data-reveal>
            Dúvidas
          </p>
          <h2
            className="font-display mt-4 text-[12vw] md:text-6xl"
            data-motion-text="lines"
            aria-label="Antes de entrar na areia."
          >
            <span className="motion-line-mask">
              <span className="motion-line">Antes de</span>
            </span>
            <span className="motion-line-mask">
              <span className="motion-line">entrar na</span>
            </span>
            <span className="motion-line-mask">
              <span className="motion-line">areia.</span>
            </span>
          </h2>
          <p className="mt-6 text-ink/65" data-reveal>
            Não achou o horário ou o valor da sua frequência?{" "}
            <a href={WA.hours} className="underline decoration-sun decoration-2 underline-offset-4">
              Chama no WhatsApp
            </a>
            .
          </p>
        </div>
        <div className="lg:col-span-8" data-reveal>
          {ITEMS.map((item) => (
            <details key={item.q} className="faq border-t border-ink/10">
              <summary className="flex items-start justify-between gap-6 py-6">
                <span className="font-display text-2xl leading-tight md:text-3xl">
                  {item.q}
                </span>
                <span aria-hidden="true" className="mt-2 text-sun">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-ink/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export function RuiStory() {
  return (
    <section id="rui" className="bg-foam py-24 text-ink md:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="kicker text-olive" data-reveal>
            O professor
          </p>
          <h2
            className="font-display mt-4 text-[12vw] md:text-7xl"
            data-motion-text="lines"
            aria-label="Rui Pai."
          >
            <span className="motion-line-mask">
              <span className="motion-line">Rui Pai.</span>
            </span>
          </h2>
          <figure className="relative mt-10 aspect-[4/5] overflow-hidden">
            <Image
              src="/media/rui.jpg"
              alt="Rui Nogueira, o Rui Pai, ensinando fundamento de futevôlei a uma criança na areia do Recreio."
              fill
              className="object-cover object-[center_20%]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </figure>
        </div>
        <div className="lg:col-span-7 lg:pt-16">
          <p className="font-accent text-2xl leading-snug text-ink md:text-3xl" data-reveal>
            Rui Nogueira — educação física, mais de uma década de futevôlei, e o
            apelido que o Recreio já adotou.
          </p>
          <div className="mt-10 space-y-6 text-ink/75" data-reveal>
            <p>
              Foi o primeiro professor a ensinar futevôlei pela prefeitura no
              Parque de Madureira. Quando começou, o esporte ainda se ensinava no
              improviso: sem plano para lesão, sem fundamento para situação de
              jogo, sem caminho de crescimento.
            </p>
            <p>
              O método que ele montou — previsão de lesão, dinâmica de game,
              nivelamento de verdade — virou referência. No Posto 11 ele formou
              professores e abriu a modalidade para quem nunca tinha tocado na bola
              e para quem quer competir.
            </p>
            <p>
              Um marco: campeão em um torneio inclusivo ao lado de Benigno Ribeiro,
              jogador com uma perna amputada. A final foi ao ar na SporTV. Não é
              discurso de vitrine — é o jeito que o CT treina: todo mundo na quadra.
            </p>
          </div>
          <p className="mt-10 font-display text-3xl leading-tight md:text-4xl" data-reveal>
            Mentor na areia. Saúde, lazer e o pé no lugar certo.
          </p>
        </div>
      </div>
    </section>
  );
}

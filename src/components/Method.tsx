import Image from "next/image";

const STEPS = [
  {
    n: "01",
    title: "Nivelamento",
    text: "Você chega, a gente vê o toque. Iniciante treina com iniciante — ninguém é jogado no fundo da quadra.",
    src: "/media/rui.jpg",
    alt: "Rui Pai nivelando uma criança no fundamento, na areia do Recreio.",
  },
  {
    n: "02",
    title: "Fundamento",
    text: "Chapa, peito, ombro, recepção. O gesto certo reduz lesão. É técnica, não “vai batendo”.",
    src: "/media/play2.jpg",
    alt: "Treino funcional e de fundamento com o Rui Pai, na areia, rede ao fundo.",
  },
  {
    n: "03",
    title: "Jogo real",
    text: "A aula vira game: cobertura, tempo de bola, ponto. O fundamento tem que aparecer na hora do jogo.",
    src: "/media/athletes-back.jpg",
    alt: "Alunas do CT de frente para a quadra e o mar, prontas para o game.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="bg-ink py-24 text-foam md:py-32">
      <div className="wrap">
        <p className="kicker text-sun" data-reveal>
          Método
        </p>
        <h2
          className="font-display mt-4 max-w-[14ch] text-[12vw] md:text-7xl"
          data-motion-text="lines"
          aria-label="Chegou. Nivela. Joga."
        >
          <span className="motion-line-mask block">
            <span className="motion-line">Chegou.</span>
          </span>
          <span className="motion-line-mask block">
            <span className="motion-line">Nivela. Joga.</span>
          </span>
        </h2>
        <p className="mt-6 max-w-xl text-foam/70" data-reveal>
          Do primeiro toque ao game. Turmas por nível, aula para meninas e
          crianças, personal no seu ritmo.
        </p>
        <ol className="mt-14 grid gap-8 md:grid-cols-3" data-reveal-group>
          {STEPS.map((step) => (
            <li key={step.n} data-reveal-item>
              <figure className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={step.src}
                  alt={step.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </figure>
              <p className="kicker mt-6 text-sun">{step.n}</p>
              <h3 className="font-display mt-2 text-4xl">{step.title}</h3>
              <p className="mt-3 text-foam/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

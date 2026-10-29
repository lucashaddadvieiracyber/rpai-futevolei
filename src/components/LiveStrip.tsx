import Image from "next/image";

const SIDE = [
  {
    src: "/media/rui.jpg",
    alt: "Rui Pai ensinando fundamento de futevôlei a uma criança na praia.",
  },
  {
    src: "/media/play2.jpg",
    alt: "Rui Pai aplicando treino funcional em atleta, na areia, com a rede ao fundo.",
  },
  {
    src: "/media/athlete.jpg",
    alt: "Alunas do CT Rui Pai na areia do Recreio, cada uma com uma bola de futevôlei.",
  },
  {
    src: "/media/court-play.jpg",
    alt: "Alunos e professores após o treino na quadra de areia, com o sol baixo.",
  },
];

export function LiveStrip() {
  return (
    <section aria-label="O CT acontecendo" className="bg-ink text-foam">
      <div className="grid md:grid-cols-12">
        <figure className="relative aspect-[4/5] overflow-hidden md:col-span-6 md:aspect-auto md:min-h-[720px]">
          <Image
            src="/media/athletes-back.jpg"
            alt="Duas alunas do CT de costas para a câmera, bolas na mão, olhando a quadra e o mar do Recreio."
            fill
            className="object-cover object-[center_20%]"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </figure>
        <div className="grid grid-cols-2 md:col-span-6">
          {SIDE.map((shot) => (
            <figure key={shot.src} className="relative aspect-square overflow-hidden md:aspect-auto md:min-h-[360px]">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </figure>
          ))}
        </div>
      </div>
      <div className="wrap flex flex-col gap-3 py-8 md:flex-row md:items-end md:justify-between md:py-10">
        <div>
          <p className="kicker text-sun">O CT acontecendo</p>
          <p className="mt-3 max-w-xl text-lg text-foam/85">
            Turma na areia, fundamento na faixa, game no fim da aula. É isso que
            você encontra no Posto 11 e na Praça Mozart Firmeza.
          </p>
        </div>
        <p className="max-w-xs text-sm text-foam/55">
          Todos os níveis, do iniciante ao profissional.
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";

const PARTNERS: {
  src: string;
  name: string;
  note: string;
  dark?: boolean;
}[] = [
  {
    src: "/media/partners/alfa.jpg",
    name: "Alfa Belle",
    note: "Padaria e restaurante em frente à praça",
  },
  {
    src: "/media/partners/atual.webp",
    name: "Atual Clube",
    note: "Proteção veicular",
    dark: true,
  },
  {
    src: "/media/partners/churras.png",
    name: "Churrasco Express",
    note: "Parceiro do CT",
  },
  {
    src: "/media/partners/p4.jpg",
    name: "Vrauu Energy Drink",
    note: "Parceiro do CT",
  },
];

export function Partners() {
  return (
    <section id="parceiros" className="bg-foam py-24 text-ink">
      <div className="wrap">
        <p className="kicker text-olive" data-reveal>
          Parceiros
        </p>
        <h2
          className="font-display mt-4 max-w-[16ch] text-[11vw] md:text-6xl"
          data-motion-text="lines"
          aria-label="Quem anda com o CT."
        >
          <span className="motion-line-mask block">
            <span className="motion-line">Quem anda</span>
          </span>
          <span className="motion-line-mask block">
            <span className="motion-line">com o CT.</span>
          </span>
        </h2>
        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4" data-reveal-group>
          {PARTNERS.map((partner) => (
            <li
              key={partner.name}
              className="card flex flex-col items-center px-6 py-10 text-center"
              data-reveal-item
            >
              <span
                className={`relative flex h-24 w-40 items-center justify-center overflow-hidden rounded-2xl ${
                  partner.dark ? "bg-ink" : "bg-white"
                }`}
              >
                <Image
                  src={partner.src}
                  alt={`Logo ${partner.name}`}
                  fill
                  className="object-contain p-3"
                  sizes="160px"
                />
              </span>
              <p className="mt-5 font-display text-xl">{partner.name}</p>
              <p className="mt-1 text-sm text-ink/55">{partner.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

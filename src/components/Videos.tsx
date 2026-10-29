import Image from "next/image";
import { INSTAGRAM, VIDEOS } from "@/lib/site";
import { IconArrow } from "./Icons";

export function Videos() {
  return (
    <section className="bg-foam py-24 text-ink md:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker text-olive" data-reveal>
              Dicas
            </p>
            <h2
              className="font-display mt-4 max-w-[11ch] text-[12vw] md:text-7xl"
              data-motion-text="lines"
              aria-label="O fundamento no YouTube."
            >
              <span className="motion-line-mask">
                <span className="motion-line">O fundamento</span>
              </span>
              <span className="motion-line-mask">
                <span className="motion-line">no YouTube.</span>
              </span>
            </h2>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost w-fit"
          >
            Segue lá, pai
            <IconArrow className="h-4 w-4" />
          </a>
        </div>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2" data-reveal-group>
          {VIDEOS.map((video) => (
            <li key={video.id} data-reveal-item>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <span className="relative block aspect-video overflow-hidden rounded-[1.25rem] bg-ink">
                  <Image
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-sun px-3 py-1 text-xs font-bold tracking-wider text-ink">
                    {video.duration}
                  </span>
                </span>
                <span className="mt-4 block font-display text-2xl group-hover:text-olive">
                  {video.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

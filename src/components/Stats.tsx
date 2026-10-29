import { STATS } from "@/lib/site";

export function Stats() {
  return (
    <section className="bg-ink text-foam" aria-label="Números do CT">
      <div className="wrap grid grid-cols-2 border-t border-foam/10 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <article
            key={stat.label}
            className={`py-10 pr-6 ${i > 0 ? "md:pl-8" : ""} ${
              i % 2 === 1 ? "pl-6 md:pl-8" : ""
            } ${i > 1 ? "border-t border-foam/10 md:border-t-0" : ""} ${
              i > 0 ? "md:border-l md:border-foam/10" : ""
            }`}
            data-reveal-item
          >
            <p className="font-display text-6xl text-sun md:text-7xl">{stat.value}</p>
            <p className="mt-3 font-display text-2xl">{stat.label}</p>
            <p className="mt-1 text-sm text-foam/60">{stat.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

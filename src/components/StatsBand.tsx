import { GOOGLE_RATING } from "@/lib/site";

const ITEMS = [
  { value: "11", label: "quadras", detail: "7 na praia · 4 na praça" },
  { value: "12+", label: "anos", detail: "ensinando futevôlei" },
  { value: "7", label: "dias", detail: "horário livre, tipo academia" },
  { value: GOOGLE_RATING.value, label: "no Google", detail: `Excelente · ${GOOGLE_RATING.count} avaliações` },
];

export function StatsBand() {
  return (
    <section aria-label="O CT em números" className="bg-sun text-ink">
      <div className="wrap grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4 md:py-20" data-reveal-group>
        {ITEMS.map((item, i) => (
          <div
            key={item.label}
            className={`pr-4 ${i % 2 === 1 ? "pl-6 md:pl-8" : ""} ${i > 1 ? "md:pl-8" : ""} ${
              i > 0 ? "md:border-l md:border-ink/15" : ""
            } ${i % 2 === 1 ? "border-l border-ink/15" : ""}`}
            data-reveal-item
          >
            <p className="font-display text-6xl md:text-7xl lg:text-8xl">{item.value}</p>
            <p className="mt-3 font-display text-xl tracking-tight md:text-2xl">{item.label}</p>
            <p className="mt-1 text-sm text-ink/65">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

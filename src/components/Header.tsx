"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";
import { IconInstagram } from "./Icons";
import { INSTAGRAM, NAV, WA } from "@/lib/site";

type LenisLike = {
  stop: () => void;
  start: () => void;
  scrollTo: (target: number, options?: { immediate?: boolean; force?: boolean }) => void;
};

function getLenis() {
  return (window as unknown as { __lenis?: LenisLike }).__lenis;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const lenis = getLenis();
    html.classList.add("menu-open");
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    lenis?.stop();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      html.classList.remove("menu-open");
      html.style.overflow = "";
      document.body.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // Fecha o menu primeiro e só depois rola até a seção,
  // senão a rolagem acontece com a página ainda travada.
  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      setOpen(false);
      return;
    }
    event.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const target = document.querySelector<HTMLElement>(href);
        if (!target) return;
        const header = document.querySelector("header")?.getBoundingClientRect().height ?? 80;
        const y = target.getBoundingClientRect().top + window.scrollY - header;
        const lenis = getLenis();
        if (lenis) {
          lenis.scrollTo(y, { immediate: true, force: true });
        } else {
          window.scrollTo({ top: y });
        }
        history.replaceState(null, "", href);
      });
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-ink">
      <div
        className={`relative z-20 transition-all duration-400 ${
          solid || open
            ? "border-b border-ink/10 bg-salt/95 backdrop-blur-md"
            : "bg-salt/80 backdrop-blur-sm"
        }`}
      >
        <div className="wrap flex h-[5rem] items-center justify-between gap-6">
          <a href="#topo" className="relative z-20" aria-label="Rui Pai CT Futevôlei, início">
            <BrandMark />
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Seções">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.78rem] font-semibold tracking-[0.14em] uppercase opacity-70 transition-opacity hover:opacity-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do CT Rui Pai"
              className="opacity-70 hover:opacity-100"
            >
              <IconInstagram className="h-5 w-5" />
            </a>
            <a href={WA.trial} className="btn btn-sun" data-magnetic="0.12">
              Aula experimental
            </a>
          </div>
          <button
            type="button"
            className="relative z-20 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Fundo escurecido: clicar fora fecha o menu */}
      <button
        type="button"
        tabIndex={-1}
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-0 bg-ink/25 transition-opacity duration-200 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Menu suspenso no canto, abaixo do botão */}
      <div
        id="menu-mobile"
        data-lenis-prevent
        aria-hidden={!open}
        className={`absolute right-4 top-[calc(5rem-0.25rem)] z-30 w-[min(17rem,calc(100vw-2rem))] origin-top-right rounded-3xl bg-salt p-2 text-ink shadow-[0_24px_60px_-20px_rgba(15,17,21,0.45)] ring-1 ring-ink/10 transition duration-200 ease-out lg:hidden ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col" aria-label="Menu">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              onClick={(event) => goTo(event, item.href)}
              className="font-accent rounded-2xl px-4 py-3 text-xl leading-tight transition-colors hover:bg-foam active:bg-sand"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA.trial}
            tabIndex={open ? 0 : -1}
            className="btn btn-sun mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Aula experimental
          </a>
        </nav>
      </div>
    </header>
  );
}

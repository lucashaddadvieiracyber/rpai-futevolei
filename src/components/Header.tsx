"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";
import { IconInstagram } from "./Icons";
import { INSTAGRAM, NAV, WA } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 text-foam transition-colors duration-500 ${
        solid || open ? "bg-ink" : "bg-gradient-to-b from-ink/90 to-transparent"
      }`}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#topo" className="relative z-50" aria-label="Rui Pai CT Futevôlei, início">
          <BrandMark invert />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Seções">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.78rem] font-semibold tracking-[0.14em] uppercase opacity-80 transition-opacity hover:opacity-100"
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
            className="opacity-80 hover:opacity-100"
          >
            <IconInstagram className="h-5 w-5" />
          </a>
          <a href={WA.trial} className="btn btn-sun" data-magnetic="0.12">
            Aula experimental
          </a>
        </div>
        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-px w-6 bg-current transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-0 z-40 bg-ink text-foam lg:hidden"
      >
        <nav className="flex h-dvh flex-col justify-end gap-2 px-6 pb-10 pt-24" aria-label="Menu">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-[12vw] leading-none"
            >
              {item.label}
            </a>
          ))}
          <a href={WA.trial} className="btn btn-sun mt-8 w-fit" onClick={() => setOpen(false)}>
            Aula experimental
          </a>
        </nav>
      </div>
    </header>
  );
}

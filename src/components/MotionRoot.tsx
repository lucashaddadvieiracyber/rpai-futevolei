"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MotionRoot({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const coarse = window.matchMedia("(pointer: coarse)").matches;

      const reveal = () => {
        gsap.set(
          "[data-motion-text], [data-reveal], [data-reveal-item], [data-image-reveal]",
          { autoAlpha: 1, clearProps: "transform,filter" }
        );
      };

      if (reduce) {
        reveal();
        return;
      }

      document.documentElement.classList.add("has-motion");

      const lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        anchors: false,
        autoRaf: false,
      });

      lenis.on("scroll", ScrollTrigger.update);
      const ticker = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);

      initText();
      initReveals();
      initImages();
      initParallax();
      if (!coarse) initMagnetic();

      const safety = window.setTimeout(() => {
        document
          .querySelectorAll<HTMLElement>(
            "[data-motion-text], [data-reveal], [data-reveal-item], [data-image-reveal]"
          )
          .forEach((el) => {
            el.style.visibility = "visible";
            el.style.opacity = "1";
          });
      }, 1800);

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      return () => {
        document.documentElement.classList.remove("has-motion");
        window.clearTimeout(safety);
        window.removeEventListener("load", onLoad);
        gsap.ticker.remove(ticker);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: root }
  );

  return (
    <div ref={root} className="min-h-dvh">
      {children}
    </div>
  );
}

function splitWords(element: HTMLElement) {
  if (element.dataset.motionSplit === "true") return;
  const text = element.textContent || "";
  const parts = text.split(/(\s+)/);
  element.textContent = "";
  element.setAttribute("aria-label", text.trim());
  parts.forEach((part) => {
    if (!part.trim()) {
      element.appendChild(document.createTextNode(part));
      return;
    }
    const mask = document.createElement("span");
    const word = document.createElement("span");
    mask.className = "motion-word-mask";
    mask.setAttribute("aria-hidden", "true");
    word.className = "motion-word";
    word.textContent = part;
    mask.appendChild(word);
    element.appendChild(mask);
  });
  element.dataset.motionSplit = "true";
}

function inView(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.96 && rect.bottom > 40;
}

function scrollOnce(el: HTMLElement) {
  if (inView(el)) return undefined;
  return { trigger: el, start: "top 90%", once: true };
}

function initText() {
  gsap.utils.toArray<HTMLElement>("[data-motion-text='words']").forEach((el) => {
    splitWords(el);
    const words = el.querySelectorAll(".motion-word");
    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(
      words,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.05,
        delay: inView(el) ? 0.15 : 0,
        scrollTrigger: scrollOnce(el),
      }
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-motion-text='lines']").forEach((el) => {
    const lines = el.querySelectorAll(".motion-line");
    const targets = lines.length ? lines : el.children;
    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(
      targets,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.11,
        delay: inView(el) ? 0.12 : 0,
        scrollTrigger: scrollOnce(el),
      }
    );
  });
}

function initReveals() {
  gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
    const items = group.querySelectorAll("[data-reveal-item]");
    gsap.set(group, { autoAlpha: 1 });
    gsap.fromTo(
      items,
      { y: 36, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.95,
        ease: "power4.out",
        stagger: 0.08,
        delay: inView(group) ? 0.2 : 0,
        scrollTrigger: scrollOnce(group),
      }
    );
  });

  gsap.utils.toArray<HTMLElement>("[data-reveal]:not([data-reveal-item])").forEach((el) => {
    gsap.set(el, { autoAlpha: 1 });
    gsap.fromTo(
      el,
      { y: 28, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
        ease: "power4.out",
        delay: Number(el.dataset.revealDelay || 0) + (inView(el) ? 0.18 : 0),
        scrollTrigger: scrollOnce(el),
      }
    );
  });
}

function initImages() {
  gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((figure) => {
    const image = figure.querySelector("img");
    gsap.set(figure, { autoAlpha: 1 });
    const tl = gsap.timeline({
      scrollTrigger: inView(figure) ? undefined : { trigger: figure, start: "top 90%", once: true },
    });
    tl.fromTo(
      figure,
      { clipPath: "inset(100% 0 0 0)" },
      { clipPath: "inset(0% 0 0 0)", duration: 1.1, ease: "power4.out" }
    );
    if (image) {
      tl.fromTo(
        image,
        { scale: 1.08 },
        { scale: 1, duration: 1.2, ease: "power4.out" },
        0
      );
    }
  });
}

function initParallax() {
  gsap.utils.toArray<HTMLElement>("[data-parallax-image]").forEach((layer) => {
    const speed = Number(layer.dataset.parallaxSpeed || 0.18);
    const section = layer.closest("[data-parallax-section]") || layer;
    gsap.to(layer, {
      y: () => window.innerHeight * speed * -1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });
  });
}

function initMagnetic() {
  gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
    const strength = Number(el.dataset.magnetic || 0.18);
    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });
    el.addEventListener("pointermove", (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * strength;
      const y = (event.clientY - rect.top - rect.height / 2) * strength;
      xTo(x);
      yTo(y);
    });
    el.addEventListener("pointerleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

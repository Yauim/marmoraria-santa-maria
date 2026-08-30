"use client";

import { useEffect } from "react";

type ParallaxLayer = HTMLElement & {
  dataset: DOMStringMap & {
    parallaxSpeed?: string;
    parallaxLimit?: string;
  };
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ParallaxEngine() {
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const layers = Array.from(
      document.querySelectorAll<ParallaxLayer>("[data-parallax]"),
    );

    if (!layers.length || motionPreference.matches) return;

    const visibleLayers = new Set<ParallaxLayer>();
    let animationFrame = 0;

    const render = () => {
      const viewportCenter = window.innerHeight / 2;

      visibleLayers.forEach((layer) => {
        const section =
          layer.closest<HTMLElement>("[data-parallax-container]") ?? layer;
        const rect = section.getBoundingClientRect();
        const speed = Number(layer.dataset.parallaxSpeed ?? 0.16);
        const limit = Number(layer.dataset.parallaxLimit ?? 120);
        const sectionCenter = rect.top + rect.height / 2;
        const offset = clamp(
          -(sectionCenter - viewportCenter) * speed,
          -limit,
          limit,
        );

        layer.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });

      animationFrame = 0;
    };

    const scheduleRender = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const layer = entry.target as ParallaxLayer;
          if (entry.isIntersecting) visibleLayers.add(layer);
          else visibleLayers.delete(layer);
        });
        scheduleRender();
      },
      { rootMargin: "20% 0px 20% 0px" },
    );

    layers.forEach((layer) => observer.observe(layer));
    window.addEventListener("scroll", scheduleRender, { passive: true });
    window.addEventListener("resize", scheduleRender);
    scheduleRender();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("resize", scheduleRender);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return null;
}

"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToTopButton() {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <Button
      type="button"
      variant="link"
      className="text-link back-to-top"
      onClick={scrollToTop}
      aria-label="Voltar ao início da página"
    >
      Voltar ao topo <ArrowUp aria-hidden="true" />
    </Button>
  );
}

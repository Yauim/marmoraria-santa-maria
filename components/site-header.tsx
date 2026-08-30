"use client";

import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader,
  SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "#sobre", label: "Sobre nós" },
  { href: "#pedras", label: "Tipos de pedra" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#topo" aria-label="Marmoraria Santa Maria — início">
          <span className="brand-mark">SM</span>
          <span className="brand-copy"><strong>Santa Maria</strong><small>Marmoraria</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>

        <Button className="header-cta" asChild>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" /> Fale conosco
          </a>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="mobile-menu-trigger" variant="outline" size="icon" aria-label="Abrir menu">
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent className="mobile-menu" side="right">
            <SheetHeader>
              <SheetTitle className="mobile-menu-title">Santa Maria</SheetTitle>
              <SheetDescription>Marmoraria · desde 2011</SheetDescription>
            </SheetHeader>
            <nav aria-label="Navegação para celular">
              {navItems.map((item, index) => (
                <SheetClose asChild key={item.href}>
                  <a href={item.href}><span>0{index + 1}</span>{item.label}</a>
                </SheetClose>
              ))}
            </nav>
            <Button className="mobile-whatsapp" asChild>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> Pedir orçamento
              </a>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

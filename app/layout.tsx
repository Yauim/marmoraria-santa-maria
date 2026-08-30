import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Marmoraria Santa Maria", template: "%s | Marmoraria Santa Maria" },
  description:
    "Mármore, granito, quartzo e quartzito com corte preciso, acabamento cuidadoso e instalação em todo o Espírito Santo.",
  keywords: ["marmoraria", "mármore", "granito", "quartzo", "quartzito", "Colatina", "Espírito Santo"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

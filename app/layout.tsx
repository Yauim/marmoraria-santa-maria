import type { Metadata } from "next";
import "./globals.css";

const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "marmoraria-santa-maria";
const basePath = process.env.GITHUB_PAGES === "true" ? `/${repositoryName}` : "";

export const metadata: Metadata = {
  title: { default: "Marmoraria Santa Maria", template: "%s | Marmoraria Santa Maria" },
  description:
    "Mármore, granito, quartzo e quartzito com corte preciso, acabamento cuidadoso e instalação em todo o Espírito Santo.",
  keywords: ["marmoraria", "mármore", "granito", "quartzo", "quartzito", "Colatina", "Espírito Santo"],
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

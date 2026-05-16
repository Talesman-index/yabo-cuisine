import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yabo Cuisine — Inspirée par l'amour de la bonne cuisine ♡",
  description: "Cuisine béninoise & africaine faite maison, livrée ou à emporter depuis Cergy Préfecture. Découvrez notre menu : Dokor, Shawarma et plats authentiques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}



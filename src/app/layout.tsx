import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BiciVueltaCuba | Rutas en bicicleta por Cuba",
  description: "Descubre rutas ciclistas por Cuba, explora destinos locales y planea tu próxima vuelta en bicicleta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

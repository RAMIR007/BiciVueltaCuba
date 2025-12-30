import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BiciVueltaCuba - Turismo en Bicicleta",
  description: "Descubre Cuba en bicicleta. Rutas, destinos y experiencias únicas.",
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

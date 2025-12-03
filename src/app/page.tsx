import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center text-center text-white bg-gray-900">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-90" />

          <div className="relative z-20 container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Descubre Cuba en Bicicleta
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100">
              Explora rutas inolvidables, desde las playas de Habana del Este hasta las montañas de Pinar del Río.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rutas">
                <Button size="lg" variant="primary" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 border-none">
                  Ver Rutas
                </Button>
              </Link>
              <Link href="/destinos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white">
                  Explorar Destinos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Tu Estilo de Viaje</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Aventura", desc: "Rutas desafiantes y MTB", icon: "🏔️" },
                { title: "Cultural", desc: "Historia y tradiciones", icon: "🏛️" },
                { title: "Ecoturismo", desc: "Naturaleza pura", icon: "🌿" },
                { title: "Familiar", desc: "Paseos relajados", icon: "👨‍👩‍👧‍👦" },
              ].map((cat) => (
                <Card key={cat.title} className="hover:shadow-lg transition-shadow cursor-pointer border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{cat.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{cat.title}</h3>
                    <p className="text-gray-600">{cat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Routes (Placeholder) */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Rutas Destacadas</h2>
                <p className="text-gray-600">Las favoritas de nuestra comunidad en Habana del Este</p>
              </div>
              <Link href="/rutas" className="text-primary font-medium hover:underline hidden md:block">
                Ver todas las rutas &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Placeholder Route Cards */}
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden border-gray-100 shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200 w-full relative">
                    {/* Image placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                      Imagen Ruta {i}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Fácil</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">Playa</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Ruta Costera {i}</h3>
                    <p className="text-gray-600 text-sm mb-4">Un recorrido escénico por la costa norte con vistas al mar...</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4 mt-4">
                      <span className="flex items-center gap-1">⏱️ 2h 30m</span>
                      <span className="flex items-center gap-1">🚴 15 km</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Link href="/rutas" className="text-primary font-medium hover:underline">
                Ver todas las rutas &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

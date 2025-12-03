import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RouteCard } from "@/components/routes/RouteCard";
import { routes } from "@/lib/data";

export default function RoutesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Explora Rutas Ciclistas</h1>
                    <p className="text-gray-600 max-w-2xl">
                        Encuentra la ruta perfecta para tu próxima aventura. Filtra por dificultad, ubicación o tipo de experiencia.
                    </p>
                </div>

                {/* Placeholder for FilterBar */}
                <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500 text-center">Barra de Filtros (Próximamente)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {routes.map((route) => (
                        <RouteCard key={route.id} route={route} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

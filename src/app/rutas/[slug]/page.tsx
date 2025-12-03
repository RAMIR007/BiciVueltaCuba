import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Map } from "@/components/ui/Map";
import { Gallery } from "@/components/ui/Gallery";
import { routes } from "@/lib/data";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function RouteDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const route = routes.find((r) => r.slug === slug);

    if (!route) {
        notFound();
    }

    // Mock coordinates for the map (centered on Havana for now)
    // In a real app, these would come from the route data
    const mapCenter: [number, number] = [23.1136, -82.3666];
    const mapMarkers = [{ position: mapCenter, title: route.title }];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Hero Banner */}
                <div className="relative h-[400px] bg-gray-900">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    {/* In real app, use Image component with route.mainImage */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl font-bold">
                        Imagen Principal: {route.title}
                    </div>

                    <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
                        <div className="flex gap-2 mb-4">
                            {route.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{route.title}</h1>
                        <div className="flex flex-wrap gap-6 text-white/90 font-medium">
                            <span className="flex items-center gap-2">📍 {route.municipality}, {route.province}</span>
                            <span className="flex items-center gap-2">⏱️ {route.duration}</span>
                            <span className="flex items-center gap-2">🚴 {route.distance}</span>
                            <span className="flex items-center gap-2">
                                📊 Dificultad: <span className={
                                    route.difficulty === 'Fácil' ? 'text-green-400' :
                                        route.difficulty === 'Moderada' ? 'text-yellow-400' : 'text-red-400'
                                }>{route.difficulty}</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {route.description}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Galería</h2>
                            <Gallery images={route.images} title={`Galería de ${route.title}`} />
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mapa</h2>
                            <div className="aspect-video bg-gray-100 rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                                <Map center={mapCenter} markers={mapMarkers as any} />
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Detalles Técnicos</h3>
                            <ul className="space-y-4 text-sm text-gray-700">
                                <li className="flex justify-between border-b pb-2">
                                    <span>Distancia</span>
                                    <span className="font-semibold">{route.distance}</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span>Duración Estimada</span>
                                    <span className="font-semibold">{route.duration}</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span>Tipo de Terreno</span>
                                    <span className="font-semibold">Mixto (Asfalto/Tierra)</span>
                                </li>
                                <li className="flex justify-between border-b pb-2">
                                    <span>Mejor época</span>
                                    <span className="font-semibold">Todo el año</span>
                                </li>
                            </ul>

                            <div className="mt-8 space-y-3">
                                <Button className="w-full">Descargar GPX</Button>
                                <Button variant="outline" className="w-full">Compartir Ruta</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    return routes.map((route) => ({
        slug: route.slug,
    }));
}

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Gallery } from "@/components/ui/Gallery";
import { RouteArtwork } from "@/components/routes/RouteArtwork";
import { routes } from "@/lib/data";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const route = routes.find((r) => r.slug === slug);

    if (!route) {
        return {
            title: "Ruta no encontrada | BiciVueltaCuba",
        };
    }

    return {
        title: `${route.title} - Rutas en ${route.municipality} | BiciVueltaCuba`,
        description: route.shortDescription,
    };
}

export default async function RouteDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const route = routes.find((r) => r.slug === slug);

    if (!route) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                <section className="relative isolate min-h-[420px] overflow-hidden bg-[#173d30] sm:min-h-[470px]">
                    <div aria-hidden="true" className="absolute inset-0 opacity-70">
                        <RouteArtwork className="h-full w-full" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173d30]/95 via-[#173d30]/30 to-transparent" />
                    <div className="relative mx-auto flex min-h-[420px] max-w-7xl flex-col justify-end px-5 pb-10 pt-20 sm:min-h-[470px] sm:px-8 sm:pb-14 lg:px-10">
                        <div className="mb-4 flex flex-wrap gap-2">
                            {route.tags.map(tag => (
                                <span key={tag} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="mb-5 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">{route.title}</h1>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/90">
                            <span>{route.municipality}, {route.province}</span>
                            <span>Duración: {route.duration}</span>
                            <span>Distancia: {route.distance}</span>
                            <span>Dificultad: {route.difficulty}</span>
                        </div>
                    </div>
                </section>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1.8fr)_minmax(280px,0.8fr)] lg:gap-14 lg:px-10">
                    <div className="space-y-10">
                        <section>
                            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#202b25]">Sobre este recorrido</h2>
                            <p className="text-base leading-8 text-[#59675f]">
                                {route.description}
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold tracking-tight text-[#202b25]">El recorrido</h2>
                            <Gallery />
                        </section>
                    </div>

                    <aside className="space-y-6">
                        <div className="rounded-2xl border border-[#e7e8df] bg-white p-6 lg:sticky lg:top-24">
                            <h2 className="mb-5 text-xl font-bold text-[#202b25]">Detalles de la ruta</h2>
                            <ul className="space-y-4 text-sm text-[#59675f]">
                                <li className="flex justify-between border-b border-[#e7e8df] pb-3">
                                    <span>Distancia</span>
                                    <span className="font-semibold text-[#202b25]">{route.distance}</span>
                                </li>
                                <li className="flex justify-between border-b border-[#e7e8df] pb-3">
                                    <span>Duración estimada</span>
                                    <span className="font-semibold text-[#202b25]">{route.duration}</span>
                                </li>
                                <li className="flex justify-between border-b border-[#e7e8df] pb-3">
                                    <span>Dificultad</span>
                                    <span className="font-semibold text-[#202b25]">{route.difficulty}</span>
                                </li>
                                <li className="flex justify-between pb-1">
                                    <span>Localidad</span>
                                    <span className="font-semibold text-[#202b25]">{route.municipality}</span>
                                </li>
                            </ul>

                            <div className="mt-8">
                                <p className="text-xs leading-5 text-[#65736b]">Consulta los detalles del recorrido antes de salir y adapta el trayecto a tus condiciones.</p>
                            </div>
                        </div>
                    </aside>
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

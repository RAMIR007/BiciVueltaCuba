import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RouteCard } from "@/components/routes/RouteCard";
import { provinces, routes } from "@/lib/data";

interface PageProps {
    params: Promise<{ province: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { province: provinceSlug } = await params;
    const provinceData = provinces.find((p) => p.slug === provinceSlug);

    if (!provinceData) {
        return {
            title: "Provincia no encontrada | BiciVueltaCuba",
        };
    }

    return {
        title: `Ciclismo en ${provinceData.name} | BiciVueltaCuba`,
        description: `Descubre las mejores rutas de ciclismo y turismo en ${provinceData.name}. ${provinceData.description}`,
    };
}

export default async function ProvincePage({ params }: PageProps) {
    const { province: provinceSlug } = await params;
    const provinceData = provinces.find((p) => p.slug === provinceSlug);

    if (!provinceData) {
        notFound();
    }

    // Filter routes for this province
    const provinceRoutes = routes.filter(r => r.province === provinceData.name);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                <div className="bg-primary/10 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{provinceData.name}</h1>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto">{provinceData.description}</p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Municipios</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                        {provinceData.municipalities.map(muni => (
                            <Link key={muni.id} href={`/provincias/${provinceSlug}/${muni.slug}`}>
                                <div className="group cursor-pointer">
                                    <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                            Imagen {muni.name}
                                        </div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{muni.name}</h3>
                                    <p className="text-sm text-gray-600">{muni.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Rutas en {provinceData.name}</h2>
                    {provinceRoutes.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {provinceRoutes.map((route) => (
                                <RouteCard key={route.id} route={route} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No hay rutas registradas en esta provincia aún.</p>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    return provinces.map((province) => ({
        province: province.slug,
    }));
}

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RouteCard } from "@/components/routes/RouteCard";
import { provinces, routes } from "@/lib/data";

interface PageProps {
    params: Promise<{ province: string; municipality: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { province: provinceSlug, municipality: municipalitySlug } = await params;

    const provinceData = provinces.find((p) => p.slug === provinceSlug);
    const municipalityData = provinceData?.municipalities.find(m => m.slug === municipalitySlug);

    if (!municipalityData || !provinceData) {
        return {
            title: "Municipio no encontrado | BiciVueltaCuba",
        };
    }

    return {
        title: `Rutas en ${municipalityData.name}, ${provinceData.name} | BiciVueltaCuba`,
        description: `Explora ${municipalityData.name} en bicicleta. ${municipalityData.description}`,
    };
}

export default async function MunicipalityPage({ params }: PageProps) {
    const { province: provinceSlug, municipality: municipalitySlug } = await params;

    const provinceData = provinces.find((p) => p.slug === provinceSlug);
    if (!provinceData) notFound();

    const municipalityData = provinceData.municipalities.find(m => m.slug === municipalitySlug);
    if (!municipalityData) notFound();

    // Filter routes for this municipality
    const municipalityRoutes = routes.filter(r =>
        r.province === provinceData.name && r.municipality === municipalityData.name
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                <div className="bg-gray-900 text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    {/* Placeholder for municipality image */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-9xl font-bold select-none z-0">
                        {municipalityData.name}
                    </div>

                    <div className="container mx-auto px-4 relative z-20 text-center">
                        <span className="text-primary font-medium mb-2 block uppercase tracking-wider">{provinceData.name}</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{municipalityData.name}</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">{municipalityData.description}</p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Rutas en {municipalityData.name}</h2>

                    {municipalityRoutes.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {municipalityRoutes.map((route) => (
                                <RouteCard key={route.id} route={route} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                            <p className="text-gray-500 mb-2">No hemos encontrado rutas en este municipio todavía.</p>
                            <p className="text-sm text-gray-400">¡Sé el primero en explorar esta zona!</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    const params = [];
    for (const province of provinces) {
        for (const muni of province.municipalities) {
            params.push({
                province: province.slug,
                municipality: muni.slug,
            });
        }
    }
    return params;
}

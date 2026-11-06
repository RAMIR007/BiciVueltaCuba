import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RouteCard } from "@/components/routes/RouteCard";
import { RouteArtwork } from "@/components/routes/RouteArtwork";
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
                <div className="relative isolate overflow-hidden bg-[#173d30] py-16 text-white sm:py-20">
                    <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-35">
                        <RouteArtwork className="h-full w-full" />
                    </div>
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.17em] text-white/70">{provinceData.name}</p>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{municipalityData.name}</h1>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">{municipalityData.description}</p>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-7xl flex-1 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
                    <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#202b25]">Rutas en {municipalityData.name}</h2>

                    {municipalityRoutes.length > 0 ? (
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {municipalityRoutes.map((route) => (
                                <RouteCard key={route.id} route={route} />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-[#d5ded5] bg-white px-6 py-12 text-center">
                            <p className="mb-2 text-[#65736b]">No hemos encontrado rutas en este municipio todavía.</p>
                            <p className="text-sm text-[#65736b]">Pronto compartiremos nuevas ideas para explorar esta zona.</p>
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

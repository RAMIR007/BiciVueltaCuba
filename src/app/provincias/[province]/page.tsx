import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RouteCard } from "@/components/routes/RouteCard";
import { RouteArtwork } from "@/components/routes/RouteArtwork";
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
        description: `Explora rutas de ciclismo en ${provinceData.name}. ${provinceData.description}`,
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
                <div className="relative isolate overflow-hidden bg-[#173d30] py-16 text-white sm:py-20">
                    <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-35">
                        <RouteArtwork className="h-full w-full" />
                    </div>
                    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.17em] text-white/70">Destino</p>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{provinceData.name}</h1>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">{provinceData.description}</p>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-7xl flex-1 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
                    <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#202b25]">Explora sus municipios</h2>
                    <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {provinceData.municipalities.map(muni => (
                            <Link key={muni.id} href={`/provincias/${provinceSlug}/${muni.slug}`} className="group overflow-hidden rounded-2xl border border-[#e7e8df] bg-white transition hover:-translate-y-1 hover:shadow-[0_16px_40px_-24px_rgba(27,61,46,.42)]">
                                <RouteArtwork className="aspect-[1.7] w-full transition-transform duration-500 group-hover:scale-[1.02]" />
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-[#202b25] group-hover:text-primary">{muni.name}</h3>
                                    <p className="mt-2 text-sm leading-6 text-[#65736b]">{muni.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#202b25]">Rutas en {provinceData.name}</h2>
                    {provinceRoutes.length > 0 ? (
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {provinceRoutes.map((route) => (
                                <RouteCard key={route.id} route={route} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-[#65736b]">No hay rutas registradas en esta provincia aún.</p>
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

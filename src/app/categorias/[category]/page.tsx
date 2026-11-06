import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RouteCard } from "@/components/routes/RouteCard";
import { RouteArtwork } from "@/components/routes/RouteArtwork";
import { categories, routes } from "@/lib/data";

interface PageProps {
    params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category: categorySlug } = await params;
    const categoryData = categories.find((c) => c.slug === categorySlug);

    if (!categoryData) {
        return {
            title: "Categoría no encontrada | BiciVueltaCuba",
        };
    }

    return {
        title: `Turismo ${categoryData.name} en Cuba | BiciVueltaCuba`,
        description: categoryData.description,
    };
}

export default async function CategoryPage({ params }: PageProps) {
    const { category: categorySlug } = await params;
    const categoryData = categories.find((c) => c.slug === categorySlug);

    if (!categoryData) {
        notFound();
    }

    // Filter routes that have a tag matching the category name (case insensitive)
    // Note: In a real app, you might want a more robust mapping between slugs and tags
    const categoryRoutes = routes.filter(r =>
        r.tags.some(tag => tag.toLowerCase() === categoryData.name.toLowerCase())
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
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.17em] text-white/70">Estilos de viaje</p>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{categoryData.name}</h1>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">{categoryData.description}</p>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-7xl flex-1 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
                    <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#202b25]">Rutas de {categoryData.name}</h2>
                    {categoryRoutes.length > 0 ? (
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {categoryRoutes.map((route) => (
                                <RouteCard key={route.id} route={route} />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed border-[#d5ded5] bg-white px-6 py-12 text-center">
                            <p className="text-[#65736b]">Pronto agregaremos rutas para esta categoría.</p>
                            <Link href="/rutas" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-[#125740]">
                                Explorar todas las rutas
                            </Link>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    return categories.map((cat) => ({
        category: cat.slug,
    }));
}

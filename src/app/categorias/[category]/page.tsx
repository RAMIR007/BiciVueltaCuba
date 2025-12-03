import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RouteCard } from "@/components/routes/RouteCard";
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
                <div className="bg-teal-600 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <div className="text-6xl mb-4">{categoryData.icon}</div>
                        <h1 className="text-4xl font-bold mb-4">{categoryData.name}</h1>
                        <p className="text-xl text-teal-100 max-w-2xl mx-auto">{categoryData.description}</p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Rutas de {categoryData.name}</h2>
                    {categoryRoutes.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categoryRoutes.map((route) => (
                                <RouteCard key={route.id} route={route} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500">Pronto agregaremos rutas para esta categoría.</p>
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

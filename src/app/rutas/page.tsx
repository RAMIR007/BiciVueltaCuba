'use client';

import { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RouteCard } from "@/components/routes/RouteCard";
import { FilterBar } from "@/components/routes/FilterBar";
import { Button } from "@/components/ui/Button";
import { routes as initialRoutes } from "@/lib/data";

export default function RoutesPage() {
    const [filteredRoutes, setFilteredRoutes] = useState(initialRoutes);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState<{ difficulty?: string }>({});

    const applyFilters = (query: string, currentFilters: { difficulty?: string }) => {
        let result = initialRoutes;

        if (query) {
            const lowerQuery = query.toLowerCase();
            result = result.filter(r =>
                r.title.toLowerCase().includes(lowerQuery) ||
                r.description.toLowerCase().includes(lowerQuery) ||
                r.province.toLowerCase().includes(lowerQuery) ||
                r.municipality.toLowerCase().includes(lowerQuery) ||
                r.tags.some(t => t.toLowerCase().includes(lowerQuery))
            );
        }

        if (currentFilters.difficulty) {
            result = result.filter(r => r.difficulty === currentFilters.difficulty);
        }

        setFilteredRoutes(result);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        applyFilters(query, filters);
    };

    const handleFilterChange = (newFilters: { difficulty?: string }) => {
        const updatedFilters = { ...filters, ...newFilters };
        setFilters(updatedFilters);
        applyFilters(searchQuery, updatedFilters);
    };

    const handleClear = () => {
        setSearchQuery('');
        setFilters({});
        setFilteredRoutes(initialRoutes);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
                <div className="mb-8">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.17em] text-primary">Planea tu próxima vuelta</p>
                    <h1 className="text-3xl font-bold tracking-tight text-[#202b25] sm:text-4xl">Explora las rutas</h1>
                    <p className="mt-3 max-w-2xl leading-7 text-[#65736b]">
                            Encuentra tu próxima salida. Busca por nombre, localidad o tipo de experiencia y filtra por dificultad.
                    </p>
                </div>

                <FilterBar
                    query={searchQuery}
                    difficulty={filters.difficulty ?? ''}
                    onSearch={handleSearch}
                    onFilterChange={handleFilterChange}
                    onClear={handleClear}
                />

                <p className="mb-5 text-sm text-[#65736b]" aria-live="polite">
                    {filteredRoutes.length} {filteredRoutes.length === 1 ? "ruta encontrada" : "rutas encontradas"}
                </p>
                {filteredRoutes.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {filteredRoutes.map((route) => (
                            <RouteCard key={route.id} route={route} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed border-[#d5ded5] bg-white px-6 py-12 text-center">
                        <p className="font-semibold text-[#33483b]">No encontramos rutas con esos filtros.</p>
                        <p className="mt-2 text-sm text-[#65736b]">Prueba con otro término o limpia los filtros para ver todas las opciones.</p>
                        <Button className="mt-5" onClick={handleClear}>
                            Ver todas las rutas
                        </Button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

'use client';

import { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RouteCard } from "@/components/routes/RouteCard";
import { FilterBar } from "@/components/routes/FilterBar";
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

                <FilterBar onSearch={handleSearch} onFilterChange={handleFilterChange} />

                {filteredRoutes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredRoutes.map((route) => (
                            <RouteCard key={route.id} route={route} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No se encontraron rutas que coincidan con tu búsqueda.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

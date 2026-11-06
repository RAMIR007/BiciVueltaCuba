'use client';

import { Button } from '@/components/ui/Button';

interface FilterBarProps {
    query: string;
    difficulty: string;
    onSearch: (query: string) => void;
    onFilterChange: (filters: { difficulty?: string; type?: string }) => void;
    onClear: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ query, difficulty, onSearch, onFilterChange, onClear }) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange({ difficulty: e.target.value });
    };

    return (
        <div className="mb-8 rounded-2xl border border-[#e7e8df] bg-white p-4 sm:p-5">
            <div className="flex flex-col gap-3 md:flex-row">
                <div className="flex-1">
                    <label htmlFor="route-search" className="mb-2 block text-xs font-semibold text-[#48564e]">Busca por ruta o experiencia</label>
                    <input
                        id="route-search"
                        type="search"
                        placeholder="Ej. playa, Cojímar..."
                        className="min-h-12 w-full rounded-xl border border-[#dce2d8] bg-[#fafbf8] px-4 text-sm text-[#202b25] placeholder:text-[#65736b] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        value={query}
                        onChange={handleSearch}
                    />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
                    <label htmlFor="route-difficulty" className="text-xs font-semibold text-[#48564e] sm:sr-only">Dificultad</label>
                    <select
                        id="route-difficulty"
                        className="min-h-12 min-w-52 rounded-xl border border-[#dce2d8] bg-[#fafbf8] px-4 text-sm text-[#33483b] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        value={difficulty}
                        onChange={handleDifficultyChange}
                    >
                        <option value="">Todas las dificultades</option>
                        <option value="Fácil">Fácil</option>
                        <option value="Moderada">Moderada</option>
                        <option value="Difícil">Difícil</option>
                    </select>

                    <Button className="w-full sm:w-auto" onClick={onClear} variant="ghost">
                        Limpiar filtros
                    </Button>
                </div>
            </div>
        </div>
    );
};

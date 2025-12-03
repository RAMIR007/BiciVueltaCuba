'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface FilterBarProps {
    onSearch: (query: string) => void;
    onFilterChange: (filters: { difficulty?: string; type?: string }) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onSearch, onFilterChange }) => {
    const [query, setQuery] = useState('');
    const [difficulty, setDifficulty] = useState<string>('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setQuery(val);
        onSearch(val);
    };

    const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setDifficulty(val);
        onFilterChange({ difficulty: val });
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Buscar rutas..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        value={query}
                        onChange={handleSearch}
                    />
                </div>
                <div className="flex gap-4">
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        value={difficulty}
                        onChange={handleDifficultyChange}
                    >
                        <option value="">Todas las dificultades</option>
                        <option value="Fácil">Fácil</option>
                        <option value="Moderada">Moderada</option>
                        <option value="Difícil">Difícil</option>
                    </select>

                    <Button onClick={() => { setQuery(''); setDifficulty(''); onSearch(''); onFilterChange({ difficulty: '' }); }} variant="ghost">
                        Limpiar
                    </Button>
                </div>
            </div>
        </div>
    );
};

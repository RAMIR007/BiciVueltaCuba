import { Route, Province, Category } from '@/types';

export const categories: Category[] = [
    { id: '1', name: 'Aventura', slug: 'aventura', icon: '🏔️', description: 'Rutas desafiantes y MTB' },
    { id: '2', name: 'Cultural', slug: 'cultural', icon: '🏛️', description: 'Historia y tradiciones' },
    { id: '3', name: 'Ecoturismo', slug: 'ecoturismo', icon: '🌿', description: 'Naturaleza pura' },
    { id: '4', name: 'Familiar', slug: 'familiar', icon: '👨‍👩‍👧‍👦', description: 'Paseos relajados' },
];

export const provinces: Province[] = [
    {
        id: 'hav',
        name: 'La Habana',
        slug: 'la-habana',
        description: 'La capital de todos los cubanos, mezcla de historia y modernidad.',
        image: '/images/havana.jpg',
        municipalities: [
            {
                id: 'hab-este',
                name: 'Habana del Este',
                slug: 'habana-del-este',
                description: 'Playas hermosas y rutas costeras ideales para el ciclismo.',
                image: '/images/habana-este.jpg'
            },
            {
                id: 'centro-hab',
                name: 'Centro Habana',
                slug: 'centro-habana',
                description: 'El corazón bullicioso de la ciudad.',
                image: '/images/centro-habana.jpg'
            }
        ]
    }
];

export const routes: Route[] = [
    {
        id: '1',
        title: 'Ruta Costera de Cojímar',
        slug: 'ruta-costera-cojimar',
        description: 'Un recorrido histórico por el pueblo de pescadores que inspiró a Hemingway. Visita el Torreón de Cojímar y disfruta de la brisa marina.',
        shortDescription: 'Recorrido histórico por el pueblo de Hemingway.',
        province: 'La Habana',
        municipality: 'Habana del Este',
        difficulty: 'Fácil',
        duration: '1h 30m',
        distance: '10 km',
        tags: ['Cultural', 'Costero', 'Historia'],
        images: ['/images/cojimar1.jpg', '/images/cojimar2.jpg'],
        mainImage: '/images/cojimar-main.jpg',
        rating: 4.5
    },
    {
        id: '2',
        title: 'Sendero Ecológico Playas del Este',
        slug: 'sendero-ecologico-playas',
        description: 'Conecta con la naturaleza recorriendo los senderos entre manglares y dunas de arena en las playas del este de La Habana.',
        shortDescription: 'Naturaleza y playa en un solo recorrido.',
        province: 'La Habana',
        municipality: 'Habana del Este',
        difficulty: 'Moderada',
        duration: '3h',
        distance: '25 km',
        tags: ['Ecoturismo', 'Playa', 'Naturaleza'],
        images: ['/images/playas1.jpg'],
        mainImage: '/images/playas-main.jpg',
        rating: 4.8
    },
    {
        id: '3',
        title: 'Vuelta a Guanabo',
        slug: 'vuelta-guanabo',
        description: 'Explora la vibrante localidad de Guanabo, sus colinas circundantes y termina con un refrescante baño en el mar.',
        shortDescription: 'Colinas y mar en Guanabo.',
        province: 'La Habana',
        municipality: 'Habana del Este',
        difficulty: 'Moderada',
        duration: '2h',
        distance: '18 km',
        tags: ['Urbano', 'Playa', 'Gastronomía'],
        images: ['/images/guanabo1.jpg'],
        mainImage: '/images/guanabo-main.jpg',
        rating: 4.2
    }
];

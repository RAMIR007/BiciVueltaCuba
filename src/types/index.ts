export interface Route {
    id: string;
    title: string;
    slug: string;
    description: string;
    shortDescription: string;
    province: string;
    municipality: string;
    difficulty: 'Fácil' | 'Moderada' | 'Difícil' | 'Extrema';
    duration: string; // e.g., "2h 30m"
    distance: string; // e.g., "15 km"
    tags: string[];
    images: string[];
    mainImage: string;
    mapUrl?: string; // URL to embed map or coordinates
    rating: number;
}

export interface Province {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    municipalities: Municipality[];
}

export interface Municipality {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    icon: string;
    description: string;
}

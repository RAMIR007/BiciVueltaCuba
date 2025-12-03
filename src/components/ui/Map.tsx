'use client';

import dynamic from 'next/dynamic';

const MapInner = dynamic(() => import('./MapInner'), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full bg-gray-100 animate-pulse rounded-lg flex items-center justify-center text-gray-400">
            Cargando mapa...
        </div>
    ),
});

interface MapProps {
    center: [number, number];
    zoom?: number;
    markers?: Array<{
        position: [number, number];
        title: string;
    }>;
    className?: string;
}

export const Map = (props: MapProps) => {
    return <MapInner {...props} />;
};

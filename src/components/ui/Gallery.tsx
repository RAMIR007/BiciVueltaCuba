'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryProps {
    images: string[];
    title?: string;
}

export const Gallery: React.FC<GalleryProps> = ({ images, title = 'Galería' }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="relative aspect-video cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage(img)}
                    >
                        {/* In a real scenario, these would be real URLs. For now we use placeholders if they start with /images/ but don't exist, 
                or we can just render a div placeholder if it's a mock path */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
                            Imagen {idx + 1}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full max-h-[90vh] aspect-video bg-black rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                            Vista ampliada: {selectedImage}
                        </div>
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

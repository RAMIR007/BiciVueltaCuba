import { Metadata, Route } from 'next';
import { routes, provinces, categories } from '@/lib/data';

export default function sitemap(): Metadata {
    const baseUrl = 'https://bicivueltacuba.com'; // Replace with actual domain

    const routeUrls = routes.map((route) => ({
        url: `${baseUrl}/rutas/${route.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const provinceUrls = provinces.map((province) => ({
        url: `${baseUrl}/provincias/${province.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const categoryUrls = categories.map((category) => ({
        url: `${baseUrl}/categorias/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/rutas`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        ...routeUrls,
        ...provinceUrls,
        ...categoryUrls,
    ];
}

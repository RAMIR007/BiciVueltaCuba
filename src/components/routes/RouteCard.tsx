import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { Route } from '@/types';

interface RouteCardProps {
    route: Route;
}

export const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
    return (
        <Link href={`/rutas/${route.slug}`}>
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                    {/* Placeholder for actual image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                        {route.mainImage ? (
                            // In a real app, use Next.js Image component here
                            <span className="text-sm">Imagen: {route.title}</span>
                        ) : (
                            <span>Sin imagen</span>
                        )}
                    </div>
                    <div className="absolute top-2 right-2 flex gap-1">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${route.difficulty === 'Fácil' ? 'bg-green-100 text-green-700' :
                                route.difficulty === 'Moderada' ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-red-100 text-red-700'
                            }`}>
                            {route.difficulty}
                        </span>
                    </div>
                </div>

                <CardContent className="p-5">
                    <div className="flex gap-2 mb-2 flex-wrap">
                        {route.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                        {route.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {route.shortDescription}
                    </p>
                </CardContent>

                <CardFooter className="border-t border-gray-100 p-4 bg-gray-50 flex justify-between text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                        ⏱️ {route.duration}
                    </span>
                    <span className="flex items-center gap-1">
                        🚴 {route.distance}
                    </span>
                    <span className="flex items-center gap-1">
                        📍 {route.municipality}
                    </span>
                </CardFooter>
            </Card>
        </Link>
    );
};

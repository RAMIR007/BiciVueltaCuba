import Link from 'next/link';
import { RouteArtwork } from '@/components/routes/RouteArtwork';
import { Route } from '@/types';

interface RouteCardProps {
    route: Route;
}

export const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
    return (
        <Link
            href={`/rutas/${route.slug}`}
            className="group block h-full overflow-hidden rounded-2xl border border-[#e7e8df] bg-white transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_-24px_rgba(27,61,46,.42)]"
        >
            <div className="relative aspect-[1.7] overflow-hidden">
                <RouteArtwork className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#294a3b] backdrop-blur">
                    {route.municipality}
                </span>
                <span className="absolute bottom-4 left-4 text-sm font-medium text-white">Imagen ilustrativa</span>
            </div>
            <div className="p-5">
                    <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#eef4ef] px-3 py-1 text-xs font-semibold text-[#315d49]">
                            {route.difficulty}
                        </span>
                        {route.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="rounded-full bg-[#f7f5ef] px-3 py-1 text-xs font-medium text-[#68746d]">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-[#202b25] transition-colors group-hover:text-primary">
                        {route.title}
                    </h3>
                    <p className="mb-5 text-sm leading-6 text-[#65736b]">
                        {route.shortDescription}
                    </p>
                    <div className="flex items-center gap-4 border-t border-[#eef0ea] pt-4 text-sm text-[#65736b]">
                        <span>{route.distance}</span>
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#d4d9d2]" />
                        <span>{route.duration}</span>
                        <span className="ml-auto font-semibold text-primary">Ver ruta <span aria-hidden="true">→</span></span>
                    </div>
            </div>
        </Link>
    );
};

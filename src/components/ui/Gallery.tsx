import { RouteArtwork } from "@/components/routes/RouteArtwork";

export const Gallery = () => (
    <figure className="overflow-hidden rounded-2xl border border-[#e7e8df] bg-white">
        <RouteArtwork className="aspect-[1.8] w-full" />
        <figcaption className="px-5 py-4 text-sm leading-6 text-[#65736b]">
            Imagen ilustrativa; esta ruta aún no tiene fotografías.
        </figcaption>
    </figure>
);

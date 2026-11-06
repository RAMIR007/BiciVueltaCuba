import Link from "next/link";

const footerLinks = [
    { href: "/rutas", label: "Todas las rutas" },
    { href: "/provincias/la-habana", label: "La Habana" },
    { href: "/categorias/ecoturismo", label: "Ecoturismo" },
    { href: "/categorias/cultural", label: "Cultura e historia" },
];

export const Footer = () => (
    <footer className="bg-[#173d30] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10 lg:py-14">
            <div className="max-w-sm">
                <Link href="/" className="text-xl font-bold tracking-tight text-white">BiciVueltaCuba</Link>
                <p className="mt-4 text-sm leading-6 text-white/70">
                    Cuba se descubre mejor a tu ritmo. Encuentra rutas y explora la isla sobre dos ruedas.
                </p>
            </div>
            <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">Explora</h2>
                <ul className="mt-4 space-y-3">
                    {footerLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">Desde Cuba</h2>
                <p className="mt-4 text-sm text-white/80">La Habana, Cuba</p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">Recorridos locales, historias y caminos para seguir pedaleando.</p>
            </div>
        </div>
        <div className="border-t border-white/15">
            <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-white/55 sm:px-8 lg:px-10">
                © {new Date().getFullYear()} BiciVueltaCuba
            </div>
        </div>
    </footer>
);

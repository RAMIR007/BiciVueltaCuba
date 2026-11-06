import Image from "next/image";
import Link from "next/link";

const links = [
    { href: "/rutas", label: "Rutas" },
    { href: "/provincias/la-habana", label: "Destinos" },
    { href: "/categorias/cultural", label: "Cultura" },
];

const linkClass = "rounded-full px-3 py-2 text-sm font-medium text-[#48564e] transition-colors hover:bg-[#f1f4ef] hover:text-primary";

export const Navbar = () => (
    <header className="sticky top-0 z-50 border-b border-[#e7e8df] bg-[#faf9f5]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
            <Link href="/" className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="BiciVueltaCuba, inicio">
                <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white ring-1 ring-[#e7e8df]">
                    <Image src="/logo.jpg" alt="" fill sizes="40px" className="object-cover" priority />
                </span>
                <span className="text-[17px] font-bold tracking-tight text-[#234535] sm:text-lg">BiciVueltaCuba</span>
            </Link>

            <nav aria-label="Navegación principal" className="hidden items-center gap-1 md:flex">
                {links.map((link) => (
                    <Link key={link.href} href={link.href} className={linkClass}>{link.label}</Link>
                ))}
            </nav>

            <Link href="/rutas" className="hidden min-h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-[#125740] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:inline-flex">
                Planear una salida
            </Link>

            <details className="group relative md:hidden">
                <summary aria-label="Menú de navegación" className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#dce2d8] bg-white text-[#294a3b] transition hover:bg-[#f1f4ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
                    <svg aria-hidden="true" className="h-5 w-5 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                    </svg>
                    <svg aria-hidden="true" className="hidden h-5 w-5 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
                    </svg>
                </summary>
                <nav aria-label="Navegación móvil" className="absolute right-0 top-[calc(100%+12px)] w-[min(88vw,340px)] rounded-2xl border border-[#e7e8df] bg-white p-3 shadow-[0_20px_50px_-25px_rgba(27,61,46,.45)]">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="flex min-h-12 items-center rounded-xl px-4 text-sm font-medium text-[#48564e] hover:bg-[#f1f4ef] hover:text-primary">
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/rutas" className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-white hover:bg-[#125740]">
                        Planear una salida
                    </Link>
                </nav>
            </details>
        </div>
    </header>
);

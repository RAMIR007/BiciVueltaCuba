import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                            src="/logo.jpg"
                            alt="BiciVueltaCuba Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl font-bold text-primary">BiciVueltaCuba</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/rutas" className="text-sm font-medium hover:text-primary transition-colors">
                        Rutas
                    </Link>
                    <Link href="/destinos" className="text-sm font-medium hover:text-primary transition-colors">
                        Destinos
                    </Link>
                    <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                        Blog
                    </Link>
                    <Link href="/nosotros" className="text-sm font-medium hover:text-primary transition-colors">
                        Nosotros
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="primary" size="sm" className="hidden md:inline-flex">
                        Planear Viaje
                    </Button>
                    {/* Mobile Menu Button Placeholder */}
                    <button className="md:hidden p-2 text-gray-600">
                        <span className="sr-only">Menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-white text-lg font-bold mb-4">BiciVueltaCuba</h3>
                    <p className="text-sm leading-relaxed">
                        Explorando Cuba sobre dos ruedas. Descubre las mejores rutas, paisajes y experiencias culturales de manera sostenible.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Explorar</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/rutas" className="hover:text-primary transition-colors">Rutas Populares</Link></li>
                        <li><Link href="/destinos" className="hover:text-primary transition-colors">Destinos</Link></li>
                        <li><Link href="/categorias/aventura" className="hover:text-primary transition-colors">Aventura</Link></li>
                        <li><Link href="/categorias/cultural" className="hover:text-primary transition-colors">Cultural</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Comunidad</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/blog" className="hover:text-primary transition-colors">Blog de Viajeros</Link></li>
                        <li><Link href="/eventos" className="hover:text-primary transition-colors">Eventos</Link></li>
                        <li><Link href="/guias" className="hover:text-primary transition-colors">Guías Locales</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Contacto</h4>
                    <ul className="space-y-2 text-sm">
                        <li>info@bicivueltacuba.com</li>
                        <li>+53 5555 5555</li>
                        <li>La Habana, Cuba</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} BiciVueltaCuba. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

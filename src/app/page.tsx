import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { RouteCard } from "@/components/routes/RouteCard";
import { RouteArtwork } from "@/components/routes/RouteArtwork";
import { categories, routes } from "@/lib/data";

const CategoryIcon = ({ slug }: { slug: string }) => {
  const common = {
    "aria-hidden": true as const,
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
  };

  if (slug === "aventura") {
    return <svg {...common}><path d="m3 20 7-14 4 8 3-5 4 11H3Z" /><path d="m8 20 4-8 3 4" /></svg>;
  }
  if (slug === "cultural") {
    return <svg {...common}><path d="M4 20h16M6 20V9h12v11M4 9l8-5 8 5M9 12v2m6-2v2m-6 3v3m6-3v3" /></svg>;
  }
  if (slug === "ecoturismo") {
    return <svg {...common}><path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 8-8 8-16Z" /><path d="M4 21c3-5 6-8 11-11" /></svg>;
  }
  return <svg {...common}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20a6 6 0 0 1 12 0m0-4a5 5 0 0 1 6 4" /></svg>;
};

export default function Home() {
  const featuredRoutes = routes.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="overflow-hidden border-b border-[#e7e8df] bg-[#f2f3eb]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-10 lg:py-24">
            <div className="relative z-10">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">Viaja distinto · Cuba en bicicleta</p>
              <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#202b25] sm:text-5xl lg:text-[4.25rem]">
                Cuba se descubre mejor <span className="text-primary">a tu ritmo.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#59675f] sm:text-lg sm:leading-8">
                Compara recorridos por La Habana, revisa su distancia y dificultad, y elige una salida que se adapte a tu ritmo.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/rutas"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-7 text-sm font-semibold text-white transition-colors hover:bg-[#125740] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Explorar rutas <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/provincias/la-habana"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#ccd6cd] bg-white/70 px-7 text-sm font-semibold text-[#294a3b] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Conocer La Habana
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 border-t border-[#dce2d8] pt-6">
                <div>
                  <p className="text-2xl font-bold text-[#202b25]">{routes.length}</p>
                  <p className="mt-1 text-xs text-[#65736b]">rutas para explorar</p>
                </div>
                <span aria-hidden="true" className="h-10 w-px bg-[#dce2d8]" />
                <div>
                  <p className="text-2xl font-bold text-[#202b25]">{categories.length}</p>
                  <p className="mt-1 text-xs text-[#65736b]">formas de viajar</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#e6c695]/60 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border-[7px] border-white shadow-[0_24px_70px_-35px_rgba(27,61,46,.55)]">
                <RouteArtwork className="aspect-[1.18] w-full sm:aspect-[1.35]" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 rounded-2xl border border-white/30 bg-[#173d30]/80 p-4 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">Tu próxima vuelta</p>
                    <p className="mt-1 text-lg font-semibold">Empieza por La Habana</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg" aria-hidden="true">↗</span>
                </div>
              </div>
              <p className="mt-3 text-right text-xs text-[#65736b]">Ilustración; no es un mapa.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.17em] text-primary">Encuentra tu manera</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#202b25] sm:text-4xl">¿Qué te mueve?</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#65736b]">Desde una vuelta tranquila hasta una salida para poner a prueba tus piernas.</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categorias/${category.slug}`}
                className="group flex min-h-32 items-start gap-4 rounded-2xl border border-[#e7e8df] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#c5d8ca] hover:shadow-[0_12px_30px_-24px_rgba(27,61,46,.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf4ee] text-primary transition-colors group-hover:bg-[#deebe0]">
                  <CategoryIcon slug={category.slug} />
                </span>
                <span>
                  <span className="block font-semibold text-[#202b25]">{category.name}</span>
                  <span className="mt-1 block text-sm leading-5 text-[#65736b]">{category.description}</span>
                </span>
                <span className="ml-auto pt-1 text-[#8b9b8e] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-[#e7e8df] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.17em] text-primary">Hechas para salir</p>
                <h2 className="text-3xl font-bold tracking-tight text-[#202b25] sm:text-4xl">Rutas para empezar</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#65736b]">Ideas para recorrer La Habana y sus alrededores sobre dos ruedas.</p>
              </div>
              <Link href="/rutas" className="hidden shrink-0 items-center gap-2 pb-1 text-sm font-semibold text-primary hover:text-[#125740] sm:inline-flex">
                Todas las rutas <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featuredRoutes.map((route) => <RouteCard key={route.id} route={route} />)}
            </div>
            <Link href="/rutas" className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#ccd6cd] text-sm font-semibold text-[#294a3b] hover:bg-[#f5f7f3] sm:hidden">
              Ver todas las rutas <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

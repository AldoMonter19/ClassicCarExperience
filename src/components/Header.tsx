import { useState } from 'react';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Evento', href: '#evento' },
    { label: 'Vehículos', href: '#vehiculos' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Galería', href: '#galeria' },
    { label: 'FAQ', href: '#faq' },
];

export default function Header(): React.ReactElement {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b-4 border-[var(--color-border)] bg-white">

            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">

                <a
                    href="#inicio"
                    className="text-xl font-black uppercase tracking-tight md:text-2xl"
                >
                    <span>Classic</span>
                    <span className="text-[var(--color-primary-light)]">
                        Cars
                    </span>
                </a>

                <button
                    type="button"
                    aria-label="Abrir menú"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="border-4 border-[var(--color-border)] bg-[var(--color-accent)] px-4 py-2 font-black md:hidden"
                >
                    ☰
                </button>

                <div className="hidden items-center gap-6 md:flex">

                    {navItems.map((item: NavItem) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="font-bold uppercase transition-transform hover:-translate-y-1"
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        href="#registro"
                        className="border-4 border-[var(--color-border)] bg-[var(--color-primary)] px-5 py-3 font-black uppercase text-white shadow-[6px_6px_0_var(--color-border)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    >
                        Registrarme
                    </a>

                </div>

            </nav>

            {menuOpen && (

                <div className="border-t-4 border-[var(--color-border)] bg-white p-4 md:hidden">

                    <div className="flex flex-col gap-3">

                        {navItems.map((item: NavItem) => (

                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="border-4 border-[var(--color-border)] bg-[var(--color-background)] p-3 font-black uppercase"
                            >
                                {item.label}
                            </a>

                        ))}

                        <a
                            href="#registro"
                            onClick={() => setMenuOpen(false)}
                            className="border-4 border-[var(--color-border)] bg-[var(--color-primary)] p-3 text-center font-black uppercase text-white"
                        >
                            Registrarme
                        </a>

                    </div>

                </div>

            )}

        </header>
    );
}
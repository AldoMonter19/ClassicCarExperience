interface HeroProps {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    image: string;
}

export default function Hero({
    badge,
    title,
    highlight,
    description,
    image,
}: HeroProps): React.ReactElement {

    return (
        <section
            id="inicio"
            className="border-b-4 border-[var(--color-border)] bg-[var(--color-background)] px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40"
        >

            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

                <div>

                    <span className="inline-block border-4 border-[var(--color-border)] bg-[var(--color-accent)] px-4 py-2 text-sm font-black uppercase">
                        {badge}
                    </span>

                    <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
                        {title}{' '}
                        <span className="text-[var(--color-primary-light)]">
                            {highlight}
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed md:text-xl">
                        {description}
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                        <a
                            href="#registro"
                            className="border-4 border-[var(--color-border)] bg-[var(--color-primary)] px-6 py-4 text-center font-black uppercase text-white shadow-[7px_7px_0_var(--color-border)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                        >
                            Registrarme
                        </a>

                        <a
                            href="#evento"
                            className="border-4 border-[var(--color-border)] bg-white px-6 py-4 text-center font-black uppercase shadow-[7px_7px_0_var(--color-border)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                        >
                            Conocer más
                        </a>

                    </div>

                </div>

                <div className="border-4 border-[var(--color-border)] bg-white p-3 shadow-[10px_10px_0_var(--color-border)]">

                    <img
                        src={image}
                        alt="Automóvil clásico"
                        className="h-full w-full object-cover"
                    />

                </div>

            </div>

        </section>
    );
}
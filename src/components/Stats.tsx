import {
    useEffect,
    useState,
    type ReactElement,
} from 'react';

interface Stat {
    label: string;
    target: number;
    suffix?: string;
}

interface StatsProps {
    stats: Stat[];
}

export default function Stats({
    stats,
}: StatsProps): ReactElement {

    const [values, setValues] = useState<number[]>(
        stats.map(() => 0)
    );

    useEffect(() => {

        const duration = 1500;
        const start = performance.now();

        const animate = (currentTime: number): void => {

            const progress = Math.min(
                (currentTime - start) / duration,
                1
            );

            const nextValues = stats.map((stat) =>
                Math.floor(stat.target * progress)
            );

            setValues(nextValues);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);

    }, [stats]);

    return (
        <section className="border-y-4 border-[var(--color-border)] bg-[var(--color-surface-dark)] px-4 py-12 text-white">

            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">

                {stats.map((stat, index) => (

                    <article
                        key={stat.label}
                        className="border-4 border-white bg-[var(--color-primary-dark)] p-6 text-center"
                    >

                        <h2 className="text-4xl font-black sm:text-5xl">
                            {values[index]}
                            {stat.suffix ?? ''}
                        </h2>

                        <p className="mt-2 font-bold uppercase tracking-wide">
                            {stat.label}
                        </p>

                    </article>

                ))}

            </div>

        </section>
    );
}
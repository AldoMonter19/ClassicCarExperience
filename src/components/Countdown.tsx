import { useEffect, useState, type ReactElement } from 'react';

interface CountdownValues {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownProps {
    targetDate: string;
}

function calculateCountdown(targetDate: string): CountdownValues {
    const difference = new Date(targetDate).getTime() - Date.now();

    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
            (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
            (difference / 1000) % 60
        ),
    };
}

export default function Countdown({
    targetDate,
}: CountdownProps): ReactElement {

    const [countdown, setCountdown] = useState<CountdownValues>(
        () => calculateCountdown(targetDate)
    );

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCountdown(calculateCountdown(targetDate));
        }, 1000);

        return () => window.clearInterval(interval);
    }, [targetDate]);

    const formatNumber = (value: number): string =>
        value.toString().padStart(2, '0');

    return (
        <section
            id="countdown"
            className="border-y-4 border-[var(--color-border)] bg-[var(--color-primary)] px-4 py-12 text-white sm:px-6 lg:px-8"
        >

            <div className="mx-auto max-w-6xl">

                <div className="mb-8 text-center">

                    <span className="font-bold uppercase tracking-widest">
                        Próximo evento
                    </span>

                    <h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">
                        El evento comienza en
                    </h2>

                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                    <CountdownCard
                        value={formatNumber(countdown.days)}
                        label="Días"
                    />

                    <CountdownCard
                        value={formatNumber(countdown.hours)}
                        label="Horas"
                    />

                    <CountdownCard
                        value={formatNumber(countdown.minutes)}
                        label="Minutos"
                    />

                    <CountdownCard
                        value={formatNumber(countdown.seconds)}
                        label="Segundos"
                    />

                </div>

            </div>

        </section>
    );
}

interface CountdownCardProps {
    value: string;
    label: string;
}

function CountdownCard({
    value,
    label,
}: CountdownCardProps): ReactElement {

    return (
        <div className="border-4 border-white bg-[var(--color-primary-dark)] p-5 text-center shadow-[6px_6px_0_white]">

            <div className="text-4xl font-black sm:text-5xl">
                {value}
            </div>

            <div className="mt-2 font-bold uppercase">
                {label}
            </div>

        </div>
    );
}
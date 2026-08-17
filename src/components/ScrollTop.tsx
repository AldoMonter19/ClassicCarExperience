import {
    useEffect,
    useState,
    type ReactElement,
} from 'react';

export default function ScrollTop(): ReactElement {

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {

        const handleScroll = (): void => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const scrollToTop = (): void => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Volver al inicio"
            className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center border-4 border-[var(--color-border)] bg-[var(--color-accent)] text-2xl font-black text-[var(--color-border)] shadow-[5px_5px_0_var(--color-border)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--color-border)] ${
                visible
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-5 opacity-0'
            }`}
        >
            ↑
        </button>
    );
}
import {
    useState,
    type ReactElement,
} from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
}

export default function FAQ({
    items,
}: FAQProps): ReactElement {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleItem = (index: number): void => {
        setActiveIndex(
            activeIndex === index ? null : index
        );
    };

    return (
        <section
            id="faq"
            className="border-y-4 border-[var(--color-border)] bg-[var(--color-background)] px-4 py-16 sm:px-6 lg:px-8"
        >

            <div className="mx-auto max-w-4xl">

                <div className="mb-10 text-center">

                    <span className="font-bold uppercase tracking-widest text-[var(--color-primary)]">
                        Preguntas frecuentes
                    </span>

                    <h2 className="mt-2 text-3xl font-black uppercase text-[var(--color-text)] sm:text-4xl">
                        ¿Necesitas ayuda?
                    </h2>

                </div>

                <div className="space-y-4">

                    {items.map((item, index) => {

                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={item.question}
                                className="border-4 border-[var(--color-border)] bg-white"
                            >

                                <button
                                    type="button"
                                    onClick={() => toggleItem(index)}
                                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-black uppercase"
                                    aria-expanded={isOpen}
                                >

                                    <span>
                                        {item.question}
                                    </span>

                                    <span
                                        className="text-2xl"
                                        aria-hidden="true"
                                    >
                                        {isOpen ? '−' : '+'}
                                    </span>

                                </button>

                                {isOpen && (

                                    <div className="border-t-4 border-[var(--color-border)] p-5 font-medium text-[var(--color-text-light)]">
                                        {item.answer}
                                    </div>

                                )}

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
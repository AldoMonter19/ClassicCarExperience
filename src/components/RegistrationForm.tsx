import {
    useState,
    type FormEvent,
    type ReactElement,
} from 'react';

interface RegistrationFormProps {
    title?: string;
    description?: string;
}

interface FormData {
    name: string;
    email: string;
}

export default function RegistrationForm({
    title = 'Reserva tu lugar ahora',
    description = 'Regístrate gratuitamente y recibe toda la información del evento.',
}: RegistrationFormProps): ReactElement {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
    });

    const [message, setMessage] = useState<string>('');

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {

        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = (
        event: FormEvent<HTMLFormElement>
    ): void => {

        event.preventDefault();

        setMessage(
            `Gracias ${formData.name}. Tu registro ha sido recibido.`
        );

        setFormData({
            name: '',
            email: '',
        });
    };

    return (
        <section
            id="registro"
            className="border-y-4 border-[var(--color-border)] bg-[var(--color-primary)] px-4 py-16 text-white sm:px-6 lg:px-8"
        >

            <div className="mx-auto max-w-3xl">

                <div className="border-4 border-white bg-[var(--color-primary-dark)] p-6 shadow-[8px_8px_0_white] sm:p-10">

                    <div className="mb-8 text-center">

                        <h2 className="text-3xl font-black uppercase sm:text-4xl">
                            {title}
                        </h2>

                        <p className="mt-4 font-medium">
                            {description}
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <div>

                            <label
                                htmlFor="name"
                                className="mb-2 block font-black uppercase"
                            >
                                Nombre completo
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nombre completo"
                                required
                                className="w-full border-4 border-white bg-white p-4 font-bold text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                            />

                        </div>

                        <div>

                            <label
                                htmlFor="email"
                                className="mb-2 block font-black uppercase"
                            >
                                Correo electrónico
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="correo@ejemplo.com"
                                required
                                className="w-full border-4 border-white bg-white p-4 font-bold text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
                            />

                        </div>

                        <button
                            type="submit"
                            className="w-full border-4 border-white bg-[var(--color-accent)] p-4 font-black uppercase text-[var(--color-border)] shadow-[6px_6px_0_white] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_white]"
                        >
                            Registrarme
                        </button>

                    </form>

                    {message && (
                        <p
                            className="mt-6 border-4 border-white bg-white p-4 text-center font-black text-[var(--color-text)]"
                            role="status"
                        >
                            {message}
                        </p>
                    )}

                </div>

            </div>

        </section>
    );
}
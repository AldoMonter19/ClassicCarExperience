import { useState } from 'react';

interface FormData {
    nombre: string;
    correo: string;
}

interface FormErrors {
    nombre?: string;
    correo?: string;
}

export default function RegistrationForm(): React.ReactElement {

    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        correo: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const [submitted, setSubmitted] =
        useState<boolean>(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {

        const { name, value } = event.target;

        setFormData((previous: FormData) => ({
            ...previous,
            [name]: value,
        }));

    };

    const validate = (): boolean => {

        const newErrors: FormErrors = {};

        if (formData.nombre.trim().length < 5) {
            newErrors.nombre =
                'Ingresa tu nombre completo.';
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
            newErrors.correo =
                'Ingresa un correo válido.';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ): void => {

        event.preventDefault();

        if (!validate()) {
            return;
        }

        setSubmitted(true);

    };

    return (
        <form
            onSubmit={handleSubmit}
            className="border-4 border-[var(--color-border)] bg-white p-6 shadow-[8px_8px_0_var(--color-border)] md:p-8"
        >

            <div className="grid gap-6">

                <div>

                    <label
                        htmlFor="nombre"
                        className="mb-2 block font-black uppercase"
                    >
                        Nombre completo
                    </label>

                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full border-4 border-[var(--color-border)] bg-[var(--color-background)] p-4 font-bold outline-none focus:bg-[var(--color-accent)]"
                    />

                    {errors.nombre && (
                        <p className="mt-2 font-bold text-red-700">
                            {errors.nombre}
                        </p>
                    )}

                </div>

                <div>

                    <label
                        htmlFor="correo"
                        className="mb-2 block font-black uppercase"
                    >
                        Correo electrónico
                    </label>

                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        value={formData.correo}
                        onChange={handleChange}
                        className="w-full border-4 border-[var(--color-border)] bg-[var(--color-background)] p-4 font-bold outline-none focus:bg-[var(--color-accent)]"
                    />

                    {errors.correo && (
                        <p className="mt-2 font-bold text-red-700">
                            {errors.correo}
                        </p>
                    )}

                </div>

                <button
                    type="submit"
                    className="border-4 border-[var(--color-border)] bg-[var(--color-primary)] px-6 py-4 font-black uppercase text-white shadow-[7px_7px_0_var(--color-border)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                    Registrarme
                </button>

                {submitted && (

                    <div className="border-4 border-[var(--color-border)] bg-[var(--color-success)] p-4 font-black text-white">
                        Registro validado correctamente.
                    </div>

                )}

            </div>

        </form>
    );
}
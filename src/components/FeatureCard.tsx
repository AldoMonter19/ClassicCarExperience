interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
}

export default function FeatureCard({
    title,
    description,
    icon,
}: FeatureCardProps): React.ReactElement {

    return (
        <article className="border-4 border-[var(--color-border)] bg-white p-6 shadow-[7px_7px_0_var(--color-border)] transition-transform hover:-translate-y-1">

            <div className="mb-6 text-4xl">
                {icon}
            </div>

            <h3 className="text-xl font-black uppercase">
                {title}
            </h3>

            <p className="mt-3 font-medium text-[var(--color-text-light)]">
                {description}
            </p>

        </article>
    );
}
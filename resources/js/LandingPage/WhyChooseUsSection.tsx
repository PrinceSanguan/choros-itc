import Container from './ui/Container';
import styles from './WhyChooseUsSection.module.css';

export type WhyChooseUsCard = {
    title: string;
    description: string;
    badge?: string;
};

export type WhyChooseUsSectionProps = {
    eyebrow: string;
    title: string;
    titleEmphasis: string;
    subtitle: string;
    cards: WhyChooseUsCard[];
    primaryCtaLabel: string;
    phone: string;
};

export default function WhyChooseUsSection({
    eyebrow,
    title,
    titleEmphasis,
    subtitle,
    cards,
    primaryCtaLabel,
    phone,
}: WhyChooseUsSectionProps) {
    return (
        <section className={styles.section} aria-labelledby="why-choose-title">
            <Container>
                <header className={styles.header}>
                    <span className={styles.eyebrow}>{eyebrow}</span>
                    <h2 className={styles.title} id="why-choose-title">
                        {title} <span className={styles.emphasis}>{titleEmphasis}</span>
                    </h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                </header>

                <div className={styles.grid}>
                    {cards.map((c) => (
                        <article key={c.title} className={styles.card}>
                            {c.badge && <div className={styles.cardBadge}>{c.badge}</div>}
                            <h3 className={styles.cardTitle}>{c.title}</h3>
                            <p className={styles.cardDesc}>{c.description}</p>
                        </article>
                    ))}
                </div>

                <div className={styles.ctaRow}>
                    <a className={styles.ctaPrimary} href="#lead-form">
                        {primaryCtaLabel}
                    </a>
                    <a className={styles.ctaSecondary} href={`tel:${phone}`}>
                        Call: {phone}
                    </a>
                </div>
            </Container>
        </section>
    );
}
